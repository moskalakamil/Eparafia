import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import styled from "styled-components";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

function MyEditor() {
  const [isFocus, setIsFocus] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [convertedContent, setConvertedContent]: any = useState();

  useEffect(() => {
    console.log(convertToHTML(editorState.getCurrentContent()));
    setConvertedContent(convertToHTML(editorState.getCurrentContent()));
  }, [editorState]);

  return (
    <>
      <ContainerStyle index={1}>
        <Editor
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName="wrapper-class"
          editorClassName={`editor-class ${isFocus ? "focus" : ""}`}
          toolbarClassName="toolbar-class"
          toolbar={{
            options: ["inline"],
            inline: {
              options: ["bold", "italic", "underline"],
            },
          }}
        />
      </ContainerStyle>
    </>
  );
}

export default MyEditor;
interface IProps {
  index: number;
}
const ContainerStyle = styled.div<IProps>`
  div.wrapper-class {
    margin-left: 3%;
  }
  div.editor-class {
    position: relative;
    background-color: #f0f0f0;
    border-radius: 10px;
    border: none;
    border-bottom: 1px solid #858585 !important;
    outline: none;
    padding: 15px;
    margin: 10px 0 25px 0;
    width: 100%;
    resize: none;
    &::before {
      content: "${(props) => props.index}.";
      position: absolute;
      left: -20px;
    }
  }
  div.focus {
    background-color: #dadada;
  }
  div.toolbar-class {
    & > div {
      display: flex;
      gap: 10px;
      margin-left: 3%;

      & > div {
        width: 50px;
        height: 50px;
        padding: 5px;
        border-radius: 5px;
        &.rdw-option-active {
          background-color: #dadada;
        }
        & img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`;

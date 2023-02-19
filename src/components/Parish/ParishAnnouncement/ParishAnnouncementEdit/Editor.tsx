// import React, { useState } from "react";
// import styled from "styled-components";
// import { bigText, normalText } from "../../../../style/TextSize";
// import TextDetails from "../../../Global/UI/TextDetails";
// import ParishAnnouncementEditTextIntegrations from "./ParishAnnouncementEditTextIntegrations";
// import { Editor, EditorState, RichUtils } from "draft-js";

// const ParishAnnouncementTextEditor = () => {
//   const [isClicked, setisClicked] = useState(false);
//   const [enteredText, setEnteredText] = useState("");
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());

//   const inlineStyleButtons = [
//     {
//       value: "Bold",
//       style: "BOLD",
//     },

//     {
//       value: "Italic",
//       style: "ITALIC",
//     },

//     {
//       value: "Underline",
//       style: "UNDERLINE",
//     },
//   ];
//   const handleKeyCommand = (command: any, editorState: any) => {
//     const newState = RichUtils.handleKeyCommand(editorState, command);

//     console.log(command, editorState);
//     if (newState) {
//       // onChange(newState);
//       return "handled";
//     }

//     return "not-handled";
//   };
//   return (
//     <ContainerStyle>
//       <TextDetails
//         text={"Uroczystość Świętej Bożej Rodzicielki Maryi"}
//         size={normalText.size}
//         weight={bigText.weight}
//       />
//       <div>
//         <>
//           <ParishAnnouncementEditTextIntegrations />
//           {/* <SpanTextAreaStyle
//           onInput={announcementInputHandler}
//           role="textbox"
//           contentEditable={true}
//         ></SpanTextAreaStyle> */}
//           {inlineStyleButtons.map((button) => (
//             <input
//               type="button"
//               key={button.style}
//               value={button.value}
//               data-style={button.style}
//               // onMouseDown={button.toggleInlineStyle}
//             />
//           ))}
//           <Editor
//             editorState={editorState}
//             handleKeyCommand={handleKeyCommand}
//             onChange={(editorState) => setEditorState(editorState)}
//           />
//         </>
//       </div>
//     </ContainerStyle>
//   );
// };

// export default ParishAnnouncementTextEditor;

// const ContainerStyle = styled.div`
//   & > div > div {
//     display: block;
//     background-color: #f0f0f0;
//     border-radius: 10px;
//     border: none;
//     border-bottom: 1px solid #858585;
//     outline: none;
//     padding: 15px;
//     margin: 10px 0 25px 0;
//     width: 100%;
//     resize: none;
//     &:focus {
//       background-color: #dadada;
//     }
//   }
// `;

// const SpanTextAreaStyle = styled.span`
//   display: block;
//   background-color: #f0f0f0;
//   border-radius: 10px;
//   border: none;
//   border-bottom: 1px solid #858585;
//   outline: none;
//   padding: 15px;
//   margin: 10px 0 25px 0;
//   width: 100%;
//   resize: none;
//   &:focus {
//     background-color: #dadada;
//   }
// `;
import React, { useState, useRef } from "react";

import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  ContentBlock,
  DraftHandleValue,
  convertToRaw,
  RawDraftContentState,
} from "draft-js";
// import "draft-js/dist/Draft.css";

// import BlockStyleControls from "./BlockStyleControls";
import InlineStyleControls from "./InlineStyleControls";
import styled from "styled-components";
import TextDetails from "../../../Global/UI/TextDetails";
import { bigText, normalText } from "../../../../style/TextSize";

interface Props {
  setContent: (state: RawDraftContentState) => void;
}

const ParishAnnouncementTextEditor = ({ setContent }: Props) => {
  const editorRef = useRef(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // const styleMap = {
  //   CODE: {
  //     backgroundColor: "rgba(0, 0, 0, 0.05)",
  //     fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
  //     fontSize: 16,
  //     padding: 2,
  //   },
  // };

  const getBlockStyle = (block: ContentBlock) => {
    switch (block.getType()) {
      case "blockquote":
        return "RichEditor-blockquote";
      default:
        return "";
    }
  };

  const onChange = (state: EditorState) => {
    setEditorState(state);
    setContent(convertToRaw(editorState.getCurrentContent()));
  };

  const mapKeyToEditorCommand = (e: any): string | null => {
    if (e.keyCode === 9) {
      const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
      if (newEditorState !== editorState) {
        onChange(newEditorState);
      }
      return null;
    }
    return getDefaultKeyBinding(e);
  };

  const handleKeyCommand = (
    command: string,
    editorState: EditorState
    // eventTimeStamp: number
  ): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  // const toggleBlockType = (blockType: string) => {
  //   onChange(RichUtils.toggleBlockType(editorState, blockType));
  // };

  const toggleInlineStyle = (inlineStyle: string) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  return (
    <ContainerStyle>
      <TextDetails
        text={"Uroczystość Świętej Bożej Rodzicielki Maryi"}
        size={normalText.size}
        weight={bigText.weight}
      />
      <div>
        <>
          {/* <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      /> */}
          <InlineStyleControls
            editorState={editorState}
            onToggle={toggleInlineStyle}
          />
          <Editor
            ref={editorRef}
            editorState={editorState}
            placeholder="Wpisz "
            // customStyleMap={styleMap}
            blockStyleFn={(block: ContentBlock) => getBlockStyle(block)}
            keyBindingFn={(e) => mapKeyToEditorCommand(e)}
            onChange={onChange}
            spellCheck={true}
            handleKeyCommand={handleKeyCommand}
          />
        </>
      </div>
    </ContainerStyle>
  );
};

export default React.memo(ParishAnnouncementTextEditor);

const ContainerStyle = styled.div`
  & > div > div {
    display: block;
    background-color: #f0f0f0;
    border-radius: 10px;
    border: none;
    border-bottom: 1px solid #858585;
    outline: none;
    padding: 15px;
    margin: 10px 0 25px 0;
    width: 100%;
    resize: none;
    &:focus {
      background-color: #dadada;
    }
  }
`;

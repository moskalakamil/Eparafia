import React, { useState } from "react";
import styled from "styled-components";
import { bigText, normalText } from "../../../../style/TextSize";
import TextDetails from "../../../Global/UI/TextDetails";
import ParishAnnouncementEditTextIntegrations from "./ParishAnnouncementEditTextIntegrations";
import { Editor, EditorState } from "draft-js";

const ParishAnnouncementTextEditor = () => {
  const [isClicked, setisClicked] = useState(false);
  const [enteredText, setEnteredText] = useState("");

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // const announcementInputHandler = (e: any) => {
  //   setEditorState(e.currentTarget.innerHTML);
  // };
  return (
    <ContainerStyle>
      <TextDetails
        text={"Uroczystość Świętej Bożej Rodzicielki Maryi"}
        size={normalText.size}
        weight={bigText.weight}
      />
      <div>
        <ParishAnnouncementEditTextIntegrations />
        {/* <SpanTextAreaStyle
          onInput={announcementInputHandler}
          role="textbox"
          contentEditable={true}
        ></SpanTextAreaStyle> */}
        <Editor
          editorState={editorState}
          onChange={(editorState) => setEditorState(editorState)}
        />
      </div>
    </ContainerStyle>
  );
};

export default ParishAnnouncementTextEditor;
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

const SpanTextAreaStyle = styled.span`
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
`;

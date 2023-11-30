import { Text } from "react-native";
import { MainContainer, NoteContent, NoteTitle } from "./style";
import * as Header from "@components/Header";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";

type NotePageParams = {
  noteTitle: string;
  noteContent: string;
  noteID: string;
};

export default function NotePage() {
  const { noteTitle, noteContent, noteID } = useRoute()
    .params as NotePageParams;

  const [content, setNoteContent] = useState(noteContent);
  const [title, setNoteTitle] = useState(noteTitle);

  return (
    <MainContainer>
      <Header.NoteDetail
        NoteContent={content}
        NoteID={noteID}
        NoteTitle={title}
      />
      <NoteTitle
        defaultValue={noteTitle}
        onChangeText={(value) => setNoteTitle(value)}
      />
      <NoteContent
        defaultValue={noteContent}
        onChangeText={(value) => setNoteContent(value)}
        multiline
        numberOfLines={5}
        style={{ textAlignVertical: "top" }}
        textAlign="left"
      />
    </MainContainer>
  );
}

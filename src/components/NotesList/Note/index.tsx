import { View } from "react-native";
import { Body, Infos, MainContainer, TagIndicator, Time, Title } from "./style";
import { NoteModel } from "src/models/Note.model";

interface NoteProps extends NoteModel {}

export default function Note({ body, title }: NoteProps) {
  return (
    <MainContainer>
      <Infos>
        <Title>{title}</Title>

        <Body>{body}</Body>
      </Infos>
      <TagIndicator />
    </MainContainer>
  );
}

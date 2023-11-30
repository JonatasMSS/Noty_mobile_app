import {
  ImageContainer,
  HeaderTitle,
  MainContainer,
  NoteContainer,
} from "./style";
import ArrowBack from "@assets/arrowBack.png";
import Config from "@assets/Config_icon.png";
import GoBackDialog from "@components/GoBackDialog";

import { useNavigation } from "@react-navigation/native";
import { storeNote } from "@utils/database/database.utils";
import { Pressable } from "react-native";

export function Main() {
  return (
    <MainContainer>
      <HeaderTitle>Noty</HeaderTitle>
    </MainContainer>
  );
}

interface NoteDetailProps {
  NoteTitle: string;
  NoteContent: string;
  NoteID: string;
}

export function NoteDetail(props: NoteDetailProps) {
  const navigator = useNavigation();

  const handleBack = () => {
    GoBackDialog({
      onYes: () => {
        storeNote({
          body: props.NoteContent,
          title: props.NoteTitle,
          ID: props.NoteID,
        }).then(() => {
          navigator.goBack();
        });
      },
      onCancel: () => {
        navigator.goBack();
      },
    });
  };

  return (
    <NoteContainer>
      <Pressable onPress={handleBack}>
        <ImageContainer source={ArrowBack} />
      </Pressable>
    </NoteContainer>
  );
}

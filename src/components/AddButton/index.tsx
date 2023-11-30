import { Text } from "react-native";
import { CircleContainer, IconText } from "./style";
import { useNavigation } from "@react-navigation/native";
import { generateUIID } from "@utils/security/UIID.utils";
export default function AddButton() {
  const navigator = useNavigation();

  const handleNewNote = () => {
    navigator.navigate("note", {
      noteContent: "",
      noteTitle: "",
      noteID: generateUIID(),
    });
  };

  return (
    <CircleContainer onPress={handleNewNote}>
      <IconText>+</IconText>
    </CircleContainer>
  );
}

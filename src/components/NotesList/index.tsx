import { Alert, TouchableOpacity } from "react-native";
import Note from "./Note";
import { MainContainer } from "./style";
import { useEffect, useState } from "react";
import RemoveDialog from "@components/RemoveDialog";
import { useNavigation } from "@react-navigation/native";
import { getNotes, removeNote } from "@utils/database/database.utils";
import { NoteModel } from "src/models/Note.model";

// Utils functions

const RemoveNoteFromData = (
  dataset: NoteModel[],
  id: string | number,
  setData: (value: React.SetStateAction<NoteModel[]>) => void
) => {
  const newData = dataset.filter((note) => note.ID !== id);
  setData(newData);
};

export default function NoteList() {
  const [notesInList, setNotes] = useState<NoteModel[]>([]);
  const navigator = useNavigation();

  useEffect(() => {
    getNotes().then((notes) => {
      setNotes(notes);
    });
  }, [notesInList]);

  // Utils function
  const handleLongPress = async (id: string | number) => {
    RemoveDialog({
      onYes: () => {
        removeNote(id.toString());
        RemoveNoteFromData(notesInList, id, setNotes);
      },
    });
  };

  const handlePress = (note: NoteModel) => {
    navigator.navigate("note", {
      noteTitle: note.title,
      noteContent: note.body,
      noteID: note.ID,
    });
  };

  return (
    <MainContainer>
      {notesInList.map((note, i) => (
        <TouchableOpacity
          key={i}
          onLongPress={() => handleLongPress(note.ID)}
          onPress={() => handlePress(note)}
        >
          <Note ID={note.ID} body={note.body} title={note.title} />
        </TouchableOpacity>
      ))}
    </MainContainer>
  );
}

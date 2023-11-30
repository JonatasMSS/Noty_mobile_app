import AsyncStorage from "@react-native-async-storage/async-storage";
import { generateUIID } from "@utils/security/UIID.utils";
import { NoteModel } from "src/models/Note.model";




export const storeNote = async (noteToStore: NoteModel) => {

    try {

        let notes = await getNotes()
        let tempNote = noteToStore
        const isNoteInStorage = notes.find((n) => n.ID === noteToStore.ID)

        if (isNoteInStorage) {
            const { ID, body, title } = noteToStore;
            notes = notes.filter((note) => note.ID !== ID)
            tempNote = {
                body,
                ID,
                title
            }
        }
        const jsonValue = JSON.stringify([...notes, tempNote])
        await AsyncStorage.setItem('@notes', jsonValue)
        return noteToStore
    } catch (error) {
        throw new Error('Ocorreu um erro de execução!')
    }

}

export const getNotes = async () => {
    const notesJSON = await AsyncStorage.getItem('@notes')
    const convertedNotes: NoteModel[] = JSON.parse(notesJSON ?? "[]")
    return convertedNotes

}

export const updateNote = async (noteIDToUpdate: string, newData: NoteModel) => {
    const notes = await getNotes()
    const selectedIDFromNote = (notes.find((nota) => nota.ID === noteIDToUpdate))?.ID
    const newListNotes = [...notes.filter((note) => note.ID !== selectedIDFromNote), newData]

    await AsyncStorage.setItem('@notes', JSON.stringify(newListNotes))
    return JSON.stringify(newListNotes)
}


export const removeNote = async (noteID: string) => {
    const notes = JSON.stringify((await getNotes()).filter((noteIn) => noteIn.ID !== noteID))

    await AsyncStorage.setItem('@notes', notes)

}
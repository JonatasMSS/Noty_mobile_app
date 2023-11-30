0
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../theme/theme"
export const MainContainer = styled(SafeAreaView)`

    flex:1;
    background-color: #282828;
    gap: 20px;
    
`


export const NoteTitle = styled.TextInput`
    width: 95%;
    ;
    color: white;
    margin: 1px auto;
    border-radius: 10px;
    
    padding: 10px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: 25px;
    border-color: #484746 ;
    background-color:#2F2F2F ;
    
    border: 2px;

`
export const NoteContent = styled(NoteTitle)`
    height:70%;
    display: flex;
    margin: 10px auto;
    font-size: 14px;
`



import { theme } from "../../theme/theme"
import styled from "styled-components/native";

export const MainContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  background-color: #161616;
  justify-content: space-between;
  align-items: center;
`;

export const NoteContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 15px 15px;
  background-color: #161616;
  justify-content: space-between;
  align-items: center;
`;


export const HeaderTitle = styled.Text`
  color: white;
  font-family: ${theme.FONT_FAMILY.SEMIBOLD};
  font-size:18px

`;

export const ImageContainer = styled.Image`
  width: 25px;
  height: 25px;
`;
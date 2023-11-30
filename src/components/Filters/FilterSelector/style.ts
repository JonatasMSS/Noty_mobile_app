import { theme } from "../../../theme/theme"
import styled from "styled-components/native"

export const MainContainer = styled.Pressable<{ $isActive?: boolean; }>`
    padding: 2px 4px;
    margin: 0 4px;
    background-color: ${props => props.$isActive ? "#A21E17" : "transparent"};
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FilterText = styled.Text`
    color: white;
    font-family: ${theme.FONT_FAMILY.SEMIBOLD}; font-size: 12px;

`
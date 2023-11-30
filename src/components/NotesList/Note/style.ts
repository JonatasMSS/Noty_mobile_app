import { theme } from "../../../theme/theme";
import styled from "styled-components/native";

export const MainContainer = styled.View`
    width: 95%;
    display: flex;
    flex-direction: row;
    background-color: #484746;
    padding: 0px 0px 0px 5px;
    margin: 10px 10px;
    border-radius: 5px;
    justify-content: space-between;
    
`
export const Infos = styled.View`
    display: flex;
    gap: 5px;
    flex-direction: column;
    
`
export const Title = styled.Text`
    color: white;
    max-height: 25px;
    overflow:hidden;
    max-width: 250px;

    font-family:${theme.FONT_FAMILY.BOLD};
`
export const Body = styled.Text`
    font-size: 12px;
    color: white;
    max-height: 50px;
    max-width: 350px;
    
    font-family: ${theme.FONT_FAMILY.LIGHT};
`
export const Time = styled.Text`
    color: white;
    font-size: 10px;
    font-family: ${theme.FONT_FAMILY.ITALIC};
`
export const TagIndicator = styled.View<{ $tagColor?: string }>`
    width: 8px;
    border-radius: 0px 5px 5px 0px;
    height: 100%;
    background-color: ${props => props.$tagColor ?? 'red'};
`
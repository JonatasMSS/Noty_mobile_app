import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from '../../theme/theme'

export const MainContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #282828;
  flex-direction: column;
`;


export const Divider = styled.View`

  width: 95%;
  margin: 0 auto;
  height: 1px;
  background-color: whitesmoke;
  border-radius: 50px;

`

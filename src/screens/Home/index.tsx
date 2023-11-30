import Filters from "@components/Filters";
import * as HomeStyles from "./style";

import * as Header from "@components/Header";
import NoteList from "@components/NotesList";
import AddButton from "@components/AddButton";

export default function Home() {
  return (
    <HomeStyles.MainContainer>
      <Header.Main />

      <NoteList />
      <AddButton />
    </HomeStyles.MainContainer>
  );
}

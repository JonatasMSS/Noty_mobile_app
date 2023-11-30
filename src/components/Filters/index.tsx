import { ScrollView, View } from "react-native";
import { MainContainer } from "./style";
import { useState } from "react";
import FilterSelector from "./FilterSelector";

export default function Filters() {
  const [selectedFilter, setFilter] = useState("sem categoria");
  const filters = [
    "Sem categoria",
    "Manolo",
    "Catapimbas",
    "Trabalho",
    "Estudos",
  ];

  const handlePress = (name: string) => {
    setFilter(name.toLowerCase());
  };

  return (
    <MainContainer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filters.map((name, i) => {
          const isSelected =
            name.toLowerCase() === selectedFilter.toLowerCase();

          return (
            <FilterSelector
              key={i}
              onSelect={() => handlePress(name)}
              isSelected={isSelected}
            >
              {name}
            </FilterSelector>
          );
        })}
      </ScrollView>
    </MainContainer>
  );
}

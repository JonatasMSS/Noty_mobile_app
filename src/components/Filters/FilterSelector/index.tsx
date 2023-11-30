import { ReactNode } from "react";
import { MainContainer, FilterText } from "./style";

interface FilterSelectorProp {
  children: ReactNode;
  isSelected?: boolean;
  onSelect?(): void;
}

export default function FilterSelector({
  children,
  isSelected = false,
  onSelect,
}: FilterSelectorProp) {
  return (
    <MainContainer onPress={onSelect} $isActive={isSelected}>
      <FilterText>{children}</FilterText>
    </MainContainer>
  );
}

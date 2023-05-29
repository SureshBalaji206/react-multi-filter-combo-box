import React from "react";
import styled from "@emotion/styled";

interface ComboBoxPropType {
  backgroundColor: string;
}

interface RootContainerPropType {
  backgroundColor: string;
}

const RootContainer = styled.div`
  color: ${(props: RootContainerPropType) =>
    props.backgroundColor ? props.backgroundColor : "turquoise"};
`;

function ComboBox({ backgroundColor }: ComboBoxPropType) {
  return (
    <RootContainer backgroundColor={backgroundColor}>ComboBox</RootContainer>
  );
}

export { ComboBox };

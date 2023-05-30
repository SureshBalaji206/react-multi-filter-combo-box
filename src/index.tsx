import React from 'react';
import styled from '@emotion/styled';
import { ComboBoxPropType, RootContainerPropType } from 'src/types';

const RootContainer = styled.div`
  color: ${(props: RootContainerPropType) =>
    props.backgroundColor ? props.backgroundColor : 'turquoise'};
`;

function ComboBox({ backgroundColor }: ComboBoxPropType) {
  return (
    <RootContainer backgroundColor={backgroundColor}>ComboBox</RootContainer>
  );
}

export { ComboBox };

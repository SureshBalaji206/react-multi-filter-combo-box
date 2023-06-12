import React from 'react';
import { CustomButtonPropsType } from '../../types/utils';
import { ActionButtonContainer, TextButtonContainer } from './index.styled';

export function ActionButton({ clickHandler, text }: CustomButtonPropsType) {
  return (
    <ActionButtonContainer onClick={clickHandler}>{text}</ActionButtonContainer>
  );
}

export function TextButton({ clickHandler, text }: CustomButtonPropsType) {
  return (
    <TextButtonContainer onClick={clickHandler}>{text}</TextButtonContainer>
  );
}

import React from 'react';
import { CustomButtonContainer } from './index.styled';
import { CustomButtonPropsType } from 'src/types/button';

export default function CustomButton({
  clickHandler,
  text,
}: CustomButtonPropsType) {
  return (
    <CustomButtonContainer onClick={clickHandler}>{text}</CustomButtonContainer>
  );
}

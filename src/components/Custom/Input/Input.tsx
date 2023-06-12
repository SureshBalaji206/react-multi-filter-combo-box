import React from 'react';
import styled from '@emotion/styled';
import { CustomInputPropsType } from '../../../types/utils';
import { global_font_style } from '../../ComboBox/index.styled';

const Component: React.FunctionComponent<CustomInputPropsType> = ({
  className,
  changeHandler,
  placeHolder,
  value,
}) => {
  return (
    <input
      className={className}
      type='text'
      onChange={(event) => changeHandler(event.target.value)}
      placeholder={placeHolder}
      value={value}
    />
  );
};

export const CustomInput = styled(Component)`
  border: none;
  color: gray;
  height: 30px;
  font-family: ${global_font_style};
  &:focus {
    border: none;
    outline: none;
  }
`;

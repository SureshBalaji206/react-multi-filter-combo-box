import React from 'react';
import styled from '@emotion/styled';
import { CustomInputPropsType } from 'src/types/utils';

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
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;

  &:focus {
    border: none;
    outline: none;
  }
`;

import styled from '@emotion/styled';
import { ThemeProviderPropsType } from '../../types/utils';

import {
  global_border_style,
  global_container_padding,
  root_container_height,
  root_container_width,
} from '../ComboBox/index.styled';

export const PopoverContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  left: 0;
  position: absolute;
  z-index: 100;
  margin: 0px;
  height: ${root_container_height};
  width: ${root_container_width};
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  padding: ${global_container_padding};
  border-bottom: ${global_border_style};
`;

export const SelectAllContainer = styled.div`
  height: 35px;
  padding: ${global_container_padding};
  display: flex;
  align-items: center;
  border-bottom: ${global_border_style};
  margin-bottom: 10px;
`;

export const ListContainerContainer = styled.div`
  overflow: auto;
  height: calc(100% - 140px);
  padding: ${global_container_padding};
`;

export const ButtonsContainer = styled.div`
  border-top: ${global_border_style};
  margin-top: 10px;
  height: 50px;
  padding: ${global_container_padding};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const RowContainer = styled.div`
  height: 28px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40px;
`;

export const LabelContainer = styled.div`
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - 90px);
  padding: 0px 5px;
`;

export const OnlyLabelContainer = styled.div<ThemeProviderPropsType>`
  cursor: pointer;
  text-align: center;
  width: 50px;
  color: ${({ theme }) =>
    theme.colors.primary ? theme.colors.primary : 'black'};
`;

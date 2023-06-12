import styled from '@emotion/styled';
import { ThemeProviderPropsType } from '../../../types/utils';
import { global_font_style } from '../../ComboBox/index.styled';

export const ActionButtonContainer = styled.button<ThemeProviderPropsType>`
  align-items: center;
  background-color: #ffffff;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  padding: 0px calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
  font-family: ${global_font_style};
  color: ${({ theme }) =>
    theme.colors.primary ? theme.colors.primary : 'black'};
`;

export const TextButtonContainer = styled.button`
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  line-height: 1.25;
  margin: 0;
  padding: 0px calc(1.5rem - 1px);
  text-align: left;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: baseline;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: calc(100% - 40px);
  padding: 0px 5px;
  font-family: ${global_font_style};
`;

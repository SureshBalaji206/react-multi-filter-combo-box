import styled from '@emotion/styled'
import { ThemeProviderPropsType } from '../../types'

export const RootContainer = styled.div<ThemeProviderPropsType>`
  background-color: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.textColor};
  font-family: ${(props) => props.theme.styles.fontStyle};
  width: ${(props) => props.theme.styles.containerWidth};
  font-size: 0.875rem;
  position: relative;
`

export const DisplayContainer = styled.div`
  align-items: center;
  display: flex;
  height: 35px;
  width: 100%;
`

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 40px;
`

export const ShowSelectedItemsContainer = styled.div<ThemeProviderPropsType>`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: ${(props) => props.theme.styles.containerPadding};
  width: calc(100% - 80px);
`
//width: ${(props: ShowSelectedItemsContainerType) => props.hasLeftAdornment ? `calc(100% - 80px)` : `calc(100% - 40px)`};

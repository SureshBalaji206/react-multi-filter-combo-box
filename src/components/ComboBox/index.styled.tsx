import styled from '@emotion/styled'
import { ShowSelectedItemsContainerType } from '../../types/combobox'

export const global_container_padding = '0px 10px'
export const global_border_style = '1px solid lightgray'
export const global_font_style = `system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
Arial, sans-serif`

export const root_container_height = '330px'
export const root_container_width = '240px'

export const RootContainer = styled.div`
  background-color: #ffffff;
  color: black;
  font-size: 0.875rem;
  font-family: ${global_font_style};
  position: relative;
  width: ${root_container_width};
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

export const ShowSelectedItemsContainer = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: ${global_container_padding};
  width: ${(props: ShowSelectedItemsContainerType) =>
    props.hasLeftAdornment ? `calc(100% - 80px)` : `calc(100% - 40px)`};
`

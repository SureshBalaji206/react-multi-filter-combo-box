import styled from '@emotion/styled';
import { ShowSelectedItemsContainerType } from 'src/types/combobox';

export const global_container_padding = '0px 10px';
export const global_border_style = '1px solid lightgray';
export const root_container_height = '330px';
export const root_container_width = '280px';

export const RootContainer = styled.div`
  position: relative;
`;

export const DisplayContainer = styled.div`
  height: 35px;
  width: ${root_container_width};
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40px;
`;

export const ShowSelectedItemsContainer = styled.div`
  height: 100%;
  width: ${(props: ShowSelectedItemsContainerType) =>
    props.hasLeftAdornment ? `calc(100% - 80px)` : `calc(100% - 40px)`};
  margin-top: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

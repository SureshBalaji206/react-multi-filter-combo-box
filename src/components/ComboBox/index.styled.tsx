import styled from '@emotion/styled';
import { ShowSelectedItemsContainerType } from 'src/types/combobox';

export const global_container_padding = '0px 10px';
export const global_border_style = '1px solid lightgray';
export const root_container_height = '330px';
export const root_container_width = '280px';

export const RootContainer = styled.div`
  font-size: 0.875rem;
  position: relative;
`;

export const DisplayContainer = styled.div`
  height: 35px;
  width: ${root_container_width};
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 40px;
`;

export const ShowSelectedItemsContainer = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0px 5px;
  width: ${(props: ShowSelectedItemsContainerType) =>
    props.hasLeftAdornment ? `calc(100% - 80px)` : `calc(100% - 40px)`};
`;

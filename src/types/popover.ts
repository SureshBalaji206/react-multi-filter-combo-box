/* eslint-disable @typescript-eslint/no-explicit-any */
import { comboxBoxDataProviderType, comboxBoxSelectedItemsType } from 'src/types/comboxbox';

export interface popoverType {
  popoverRef: any;
  closePopover: () => void;
  dataProvider: comboxBoxDataProviderType[];
  onComplete: (value: comboxBoxSelectedItemsType[]) => void;
  value: comboxBoxSelectedItemsType[];
}

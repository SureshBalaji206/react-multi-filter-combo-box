import React from 'react';
import Popover from '../Popover';
import { comboBoxType } from '../../types/combobox';

import {
  RootContainer,
  DisplayContainer,
  IconContainer,
  ShowSelectedItemsContainer,
} from './index.styled';

export default function ComboBox({
  dataProvider = [],
  value = [],
  onComplete = () => null,
  leftAdornment = null,
  rightAdornment = null,
}: comboBoxType) {
  const popoverRef = React.useRef(null);
  const [toggle, setToggle] = React.useState<boolean>(false);
  const closePopover = React.useCallback(() => setToggle(false), []);

  //useClickOutside(popoverRef, closePopover);

  const openPopover = () => {
    setToggle(true);
  };

  const renderLeftAdornment = React.useMemo(() => {
    return leftAdornment ? (
      <IconContainer>{leftAdornment}</IconContainer>
    ) : (
      <IconContainer>L</IconContainer>
    );
  }, [leftAdornment]);

  const renderRightAdornment = React.useMemo(() => {
    return rightAdornment ? (
      <IconContainer onClick={openPopover}>{rightAdornment}</IconContainer>
    ) : (
      <IconContainer onClick={openPopover}>R</IconContainer>
    );
  }, [rightAdornment]);

  const renderPopover = React.useMemo(() => {
    if (toggle) {
      return (
        <Popover
          popoverRef={popoverRef}
          closePopover={closePopover}
          dataProvider={dataProvider}
          onComplete={onComplete}
          value={value}
        />
      );
    }

    return <React.Fragment />;
  }, [toggle, popoverRef, closePopover, dataProvider, onComplete, value]);

  const renderSelectedItemsStringAndPlaceholder = React.useMemo(() => {
    if (value.length === 0) {
      return 'Select...';
    }

    return value
      .map((item) => item.label)
      .join(', ')
      .toString();
  }, [value]);

  return (
    <RootContainer>
      <DisplayContainer>
        {renderLeftAdornment}
        <ShowSelectedItemsContainer>
          {renderSelectedItemsStringAndPlaceholder}
        </ShowSelectedItemsContainer>
        {renderRightAdornment}
      </DisplayContainer>
      {renderPopover}
    </RootContainer>
  );
}

import React from 'react';
import Popover from '../Popover';
import useClickOutside from '../../hooks/useClickOutside';
import { comboBoxType } from '../../types/combobox';
import { defaultKeyStrings } from '../../constants';
import { getSelectedItemsPlaceHolder } from '../../helpers';

import {
  RootContainer,
  DisplayContainer,
  IconContainer,
  ShowSelectedItemsContainer,
} from './index.styled';

export default function ComboBox({
  cancelText = defaultKeyStrings.cancel,
  dataProvider = [],
  leftAdornment = null,
  onComplete = () => null,
  placeHolder = defaultKeyStrings.placeHolder,
  rightAdornment = null,
  selectAllText = defaultKeyStrings.selectAll,
  submitText = defaultKeyStrings.okay,
  value = [],
}: comboBoxType) {
  const popoverRef = React.useRef(null);
  const [toggle, setToggle] = React.useState<boolean>(false);
  const closePopover = React.useCallback(() => setToggle(false), []);

  useClickOutside(popoverRef, closePopover);

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

  const renderPlaceHolder = React.useMemo(() => {
    return Boolean(value.length)
      ? getSelectedItemsPlaceHolder(value)
      : placeHolder;
  }, [value]);

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
          cancelText={cancelText}
          dataProvider={dataProvider}
          onComplete={onComplete}
          selectAllText={selectAllText}
          submitText={submitText}
          value={value}
        />
      );
    }

    return <React.Fragment />;
  }, [
    toggle,
    popoverRef,
    closePopover,
    cancelText,
    dataProvider,
    onComplete,
    selectAllText,
    submitText,
    value,
  ]);

  return (
    <RootContainer>
      <DisplayContainer>
        {renderLeftAdornment}
        <ShowSelectedItemsContainer>
          {renderPlaceHolder}
        </ShowSelectedItemsContainer>
        {renderRightAdornment}
      </DisplayContainer>
      {renderPopover}
    </RootContainer>
  );
}

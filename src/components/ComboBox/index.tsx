import React from 'react';
import Popover from '../Popover';
import useClickOutside from '../../hooks/useClickOutside';

import { ThemeProvider } from '@emotion/react';
import { defaultLocale } from '../../constants';
import { comboBoxType } from '../../types/combobox';
import { getSelectedItemsPlaceHolder } from '../../helpers';

import {
  RootContainer,
  DisplayContainer,
  IconContainer,
  ShowSelectedItemsContainer,
} from './index.styled';

export default function ComboBox({
  cancelText = defaultLocale.cancel,
  dataProvider = [],
  leftAdornment = null,
  onComplete = () => null,
  placeHolder = defaultLocale.placeHolder,
  primaryColor = 'unset',
  rightAdornment = null,
  selectAllText = defaultLocale.selectAll,
  submitText = defaultLocale.submit,
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
    ) : null;
  }, [leftAdornment]);

  const renderPlaceHolder = React.useMemo(() => {
    return Boolean(value.length)
      ? getSelectedItemsPlaceHolder(value)
      : placeHolder;
  }, [value, placeHolder]);

  const renderRightAdornment = React.useMemo(() => {
    return rightAdornment ? (
      <IconContainer>{rightAdornment}</IconContainer>
    ) : (
      <IconContainer>R</IconContainer>
    );
  }, [rightAdornment]);

  const renderPopover = React.useMemo(() => {
    if (toggle) {
      return (
        <Popover
          cancelText={cancelText}
          closePopover={closePopover}
          dataProvider={dataProvider}
          onComplete={onComplete}
          popoverRef={popoverRef}
          primaryColor={primaryColor}
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
    cancelText,
    closePopover,
    dataProvider,
    primaryColor,
    onComplete,
    selectAllText,
    submitText,
    value,
  ]);

  const theme = React.useMemo(() => {
    return {
      colors: {
        primary: primaryColor,
      },
    };
  }, [primaryColor]);

  return (
    <ThemeProvider theme={theme}>
      <RootContainer>
        <DisplayContainer onClick={openPopover}>
          {renderLeftAdornment}
          <ShowSelectedItemsContainer hasLeftAdornment={Boolean(leftAdornment)}>
            {renderPlaceHolder}
          </ShowSelectedItemsContainer>
          {renderRightAdornment}
        </DisplayContainer>
        {renderPopover}
      </RootContainer>
    </ThemeProvider>
  );
}

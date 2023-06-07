import React from 'react';
import { ThemeProvider } from '@emotion/react';
import Popover from '../Popover';
import { defaultLocale } from '../../constants';
import { comboBoxType } from '../../types/combobox';
import useClickOutside from '../../hooks/useClickOutside';
import { getSelectedItemsPlaceHolder } from '../../helpers';

import {
  RootContainer,
  DisplayContainer,
  IconContainer,
  ShowSelectedItemsContainer,
} from './index.styled';

export default function ComboBox({
  colors,
  dataProvider = [],
  leftAdornment = null,
  locale,
  onComplete = () => null,
  rightAdornment = null,
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
      : locale && locale.placeHolder
      ? locale.placeHolder
      : defaultLocale.placeHolder;
  }, [value, locale]);

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
          popoverRef={popoverRef}
          closePopover={closePopover}
          colors={colors}
          dataProvider={dataProvider}
          locale={locale ? locale : {}}
          onComplete={onComplete}
          value={value}
        />
      );
    }

    return <React.Fragment />;
  }, [
    toggle,
    popoverRef,
    closePopover,
    colors,
    dataProvider,
    locale,
    onComplete,
    value,
  ]);

  const theme = React.useMemo(() => {
    return {
      colors: {
        primary: colors && colors.primary ? colors.primary : 'unset',
      },
    };
  }, [colors]);

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

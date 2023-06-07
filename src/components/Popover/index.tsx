import React from 'react';
import { ActionButton, TextButton } from '../CustomButton';
import { defaultLocale } from '../../constants';
import { popoverType } from '../../types/popover';
import { comboBoxSelectedItemsType } from '../../types/combobox';

import {
  generateOptions,
  performOnlyChange,
  performSelectAllChange,
  performStateChange,
} from '../../helpers';

import {
  ButtonsContainer,
  CheckboxContainer,
  ListContainerContainer,
  OnlyLabelContainer,
  PopoverContainer,
  RowContainer,
  SearchContainer,
  SelectAllContainer,
} from './index.styled';

const isOnlyRequired = false;

export default function Popover({
  popoverRef,
  closePopover,
  colors,
  dataProvider,
  locale,
  onComplete,
  value,
}: popoverType) {
  const [query] = React.useState<string>('');

  const [generatedOptions, setGeneratedOptions] = React.useState<
    comboBoxSelectedItemsType[]
  >([]);

  const [filteredOptions, setFilteredOptions] = React.useState<
    comboBoxSelectedItemsType[]
  >([]);

  React.useEffect(() => {
    setGeneratedOptions(generateOptions(dataProvider, value));
  }, [dataProvider, value]);

  React.useEffect(() => {
    setFilteredOptions(
      generatedOptions.filter((option) => {
        const labelElement = String(option.label).toLowerCase();
        const queryElement = String(query).toLowerCase();

        return labelElement.includes(queryElement);
      }),
    );
  }, [query, generatedOptions]);

  const isAllSelected = React.useMemo(() => {
    return Boolean(generatedOptions.length)
      ? Boolean(
          generatedOptions.length ===
            generatedOptions.filter((option) => option.isSelected).length,
        )
      : false;
  }, [generatedOptions]);

  const onStateChange = (identifier: string) => {
    setGeneratedOptions(performStateChange(generatedOptions, identifier));
  };

  const onOnlyChange = (identifier: string) => {
    setGeneratedOptions(performOnlyChange(generatedOptions, identifier));
  };

  const selectAllHandler = () => {
    setGeneratedOptions(
      performSelectAllChange(generatedOptions, !isAllSelected),
    );
  };

  const completeHandler = () => {
    onComplete(filteredOptions.filter((item) => item.isSelected));
    closePopover();
  };

  const checkBoxThemeColor = React.useMemo(
    () => (colors && colors.primary ? colors.primary : 'auto'),
    [colors],
  );

  return (
    <PopoverContainer ref={popoverRef}>
      <SearchContainer />
      <SelectAllContainer>
        <CheckboxContainer>
          <input
            type='checkbox'
            style={{ accentColor: checkBoxThemeColor }}
            checked={isAllSelected}
            onChange={selectAllHandler}
          />
        </CheckboxContainer>
        <TextButton
          clickHandler={selectAllHandler}
          text={
            locale && locale.selectAll
              ? locale.selectAll
              : defaultLocale.selectAll
          }
        />
      </SelectAllContainer>
      <ListContainerContainer>
        {filteredOptions.map((dataItem) => {
          return (
            <RowContainer key={dataItem.value}>
              <CheckboxContainer>
                <input
                  type='checkbox'
                  style={{ accentColor: checkBoxThemeColor }}
                  checked={dataItem.isSelected}
                  onChange={() => {
                    onStateChange(dataItem.value);
                  }}
                />
              </CheckboxContainer>
              <TextButton
                clickHandler={() => {
                  onStateChange(dataItem.value);
                }}
                text={dataItem.label}
              />
              {isOnlyRequired && (
                <OnlyLabelContainer
                  onClick={() => {
                    onOnlyChange(dataItem.value);
                  }}
                >
                  {locale && locale.only ? locale.only : defaultLocale.only}
                </OnlyLabelContainer>
              )}
            </RowContainer>
          );
        })}
      </ListContainerContainer>
      <ButtonsContainer>
        <ActionButton
          clickHandler={closePopover}
          text={locale && locale.cancel ? locale.cancel : defaultLocale.cancel}
        />
        <ActionButton
          clickHandler={completeHandler}
          text={locale && locale.submit ? locale.submit : defaultLocale.submit}
        />
      </ButtonsContainer>
    </PopoverContainer>
  );
}

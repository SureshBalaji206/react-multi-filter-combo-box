import React from 'react';
import { popoverType } from '../../types/popover';
import { comboBoxSelectedItemsType } from '../../types/combobox';
import { defaultLocale } from 'src/constants';

import {
  generateOptions,
  performOnlyChange,
  performSelectAllChange,
  performStateChange,
} from '../../helpers';

import {
  ButtonsContainer,
  CheckboxContainer,
  LabelContainer,
  ListContainerContainer,
  OnlyLabelContainer,
  PopoverContainer,
  RowContainer,
  SearchContainer,
  SelectAllContainer,
} from './index.styled';

export default function Popover({
  popoverRef,
  closePopover,
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

  return (
    <PopoverContainer ref={popoverRef}>
      <SearchContainer />
      <SelectAllContainer>
        <CheckboxContainer>
          <input
            type='checkbox'
            checked={isAllSelected}
            onChange={selectAllHandler}
          />
        </CheckboxContainer>
        <LabelContainer>
          {locale && locale.selectAll
            ? locale.selectAll
            : defaultLocale.selectAll}
        </LabelContainer>
      </SelectAllContainer>
      <ListContainerContainer>
        {filteredOptions.map((dataItem) => {
          return (
            <RowContainer key={dataItem.value}>
              <CheckboxContainer>
                <input
                  type='checkbox'
                  checked={dataItem.isSelected}
                  onChange={() => {
                    onStateChange(dataItem.value);
                  }}
                />
              </CheckboxContainer>
              <LabelContainer
                onClick={() => {
                  onStateChange(dataItem.value);
                }}
              >
                {dataItem.label}
              </LabelContainer>
              <OnlyLabelContainer
                onClick={() => {
                  onOnlyChange(dataItem.value);
                }}
              >
                {locale && locale.only ? locale.only : defaultLocale.only}
              </OnlyLabelContainer>
            </RowContainer>
          );
        })}
      </ListContainerContainer>
      <ButtonsContainer>
        <div onClick={closePopover}>
          {locale && locale.cancel ? locale.cancel : defaultLocale.cancel}
        </div>
        <div onClick={completeHandler}>
          {locale && locale.submit ? locale.submit : defaultLocale.submit}
        </div>
      </ButtonsContainer>
    </PopoverContainer>
  );
}

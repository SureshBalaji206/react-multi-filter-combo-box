import React from 'react';
import { popoverType } from 'src/types/popover';
import { comboxBoxSelectedItemsType } from 'src/types/comboxbox';

import {
  generateOptions,
  performOnlyChange,
  performSelectAllChange,
  performStateChange,
} from 'src/helpers';

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
} from 'src/styles/Popover.styled';

export default function Popover({
  popoverRef,
  closePopover,
  dataProvider,
  onComplete,
  value,
}: popoverType) {
  const [query] = React.useState<string>('');
  const [options, setOptions] = React.useState<comboxBoxSelectedItemsType[]>([]);
  const [filteredOptions, setFilteredOptions] = React.useState<comboxBoxSelectedItemsType[]>([]);

  React.useEffect(() => {
    const generatedOptions = generateOptions(dataProvider, value);

    setOptions(generatedOptions);
  }, [dataProvider, value]);

  React.useEffect(() => {
    setFilteredOptions(
      options.filter((option) => {
        const labelElement = String(option.label).toLowerCase();
        const queryElement = String(query).toLowerCase();

        return labelElement.includes(queryElement);
      }),
    );
  }, [query, options]);

  const isAllSelected = React.useMemo(() => {
    if (options.length === 0) return false;

    return Boolean(options.length === options.filter((option) => option.isSelected).length);
  }, [options]);

  const onStateChange = (identifier: string) => {
    const modifedOptions = performStateChange(options, identifier);

    setOptions(modifedOptions);
  };

  const onOnlyChange = (identifier: string) => {
    const modifedOptions = performOnlyChange(options, identifier);

    setOptions(modifedOptions);
  };

  const selectAllHandler = () => {
    const modifedOptions = performSelectAllChange(options, !isAllSelected);

    setOptions(modifedOptions);
  };

  const completeHandler = () => {
    const selectedItems = filteredOptions.filter((item) => item.isSelected);

    onComplete(selectedItems);
    closePopover();
  };

  return (
    <PopoverContainer ref={popoverRef}>
      <SearchContainer />
      <SelectAllContainer>
        <CheckboxContainer>
          <input type='checkbox' checked={isAllSelected} onChange={selectAllHandler} />
        </CheckboxContainer>
        <LabelContainer>Select All</LabelContainer>
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
                Only
              </OnlyLabelContainer>
            </RowContainer>
          );
        })}
      </ListContainerContainer>
      <ButtonsContainer>
        <div onClick={closePopover}>cancel</div>
        <div onClick={completeHandler}>ok</div>
      </ButtonsContainer>
    </PopoverContainer>
  );
}

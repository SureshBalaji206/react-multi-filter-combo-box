import React from 'react'
import { SingleSelectPopoverContainer, RowContainer } from '../index.styled'

export default function SingleSelect({ closePopover, onComplete, options, popoverRef }: any) {
  return (
    <SingleSelectPopoverContainer ref={popoverRef}>
      {options.map((option: any) => {
        return (
          <RowContainer
            style={{ backgroundColor: option.isSelected ? 'lightblue' : 'white' }}
            key={`cbss_opt_${option.value}`}
            onClick={() => {
              const selected = {
                label: option.label,
                value: option.value,
              }

              onComplete([selected])
              closePopover()
            }}
          >
            {option.label}
          </RowContainer>
        )
      })}
    </SingleSelectPopoverContainer>
  )
}

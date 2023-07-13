import React from 'react'
import { PopoverContainer, RowContainer } from '../index.styled'

export default function SingleSelect({ closePopover, onComplete, options, popoverRef }: any) {
  return (
    <PopoverContainer ref={popoverRef}>
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
    </PopoverContainer>
  )
}

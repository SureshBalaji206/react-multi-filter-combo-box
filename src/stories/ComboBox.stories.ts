import { SimpleComboBox } from './SimpleComboBox'

const storyConfig = {
  title: 'Combo Box',
  component: SimpleComboBox,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    primaryColor: { control: 'color' },
    textColor: { control: 'color' },
  },
}

export const Simple = {
  args: {
    backgroundColor: 'white',
    cancelText: 'CANCEL',
    placeHolder: 'Select a sport',
    primaryColor: 'unset',
    selectAllText: 'Select All',
    submitText: 'OK',
    textColor: 'black',
  },
}

export default storyConfig

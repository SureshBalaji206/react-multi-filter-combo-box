import { SimpleComboBox } from './SimpleComboBox';

const storyConfig = {
  title: 'Combo Box',
  component: SimpleComboBox,
  tags: ['autodocs'],
  argTypes: {
    primaryColor: { control: 'color' },
  },
};

export const Simple = {
  args: {
    cancelText: 'CANCEL',
    placeHolder: 'Select a sport',
    primaryColor: '',
    selectAllText: 'Select All',
    submitText: 'OK',
  },
};

export default storyConfig;

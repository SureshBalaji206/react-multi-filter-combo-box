import React from 'react';
import PropTypes from 'prop-types';
import ComboBox from '../components/ComboBox';

const dataProvider = [
  {
    label: 'Cricket',
    value: '1',
  },
  {
    label: 'Athletics',
    value: '2',
  },
  {
    label: 'Hill Climbing',
    value: '3',
  },
  {
    label: 'Swimming',
    value: '4',
  },
  {
    label: 'Ice Hockey',
    value: '5',
  },
  {
    label: 'Squash',
    value: '6',
  },
  {
    label: 'Tennis',
    value: '7',
  },
  {
    label: 'Rugby',
    value: '8',
  },
  {
    isDisabled: true,
    label: 'Baseball',
    value: '9',
  },
  {
    label: 'Badminton',
    value: '10',
  },
  {
    label: 'Volleyball',
    value: '11',
  },
  {
    label: 'Surfing',
    value: '12',
  },
  {
    label: 'Golf',
    value: '13',
  },
  {
    label: 'Basketball',
    value: '14',
  },
  {
    label: 'Football',
    value: '15',
  },
  {
    label: 'Hockey',
    value: '16',
  },
];

export const SimpleComboBox = ({
  cancelText,
  placeHolder,
  primaryColor,
  selectAllText,
  submitText,
}) => {
  const [value, setValue] = React.useState([]);

  return (
    <ComboBox
      cancelText={cancelText}
      dataProvider={dataProvider}
      onComplete={(value) => setValue(value)}
      placeHolder={placeHolder}
      primaryColor={primaryColor}
      selectAllText={selectAllText}
      submitText={submitText}
      value={value}
    />
  );
};

SimpleComboBox.propTypes = {
  cancelText: PropTypes.string,
  placeHolder: PropTypes.string,
  primaryColor: PropTypes.string,
  selectAllText: PropTypes.string,
  submitText: PropTypes.string,
};

SimpleComboBox.defaultProps = {
  cancelText: '',
  placeHolder: '',
  primaryColor: '',
  selectAllText: '',
  submitText: '',
};

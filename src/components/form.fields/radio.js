import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import './radio.field.scss';

const RadioFields = ({ name, radiolist, setPriceEdition }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    setPriceEdition(event.target.value);
  };

  const FormRadio = withStyles({
    root: {
      color: '#CCCCCC',
      '&$checked': {
        color: '#330066',
      },
      padding: '5px',
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);  

  return (
    <FormControl component="fieldset" className="radiofield">
      <RadioGroup name={name} value={value} onChange={handleChange}>
      {
        radiolist.map(({value, label}, key) => 
          <FormControlLabel
            key={key}
            value={value} 
            control={<FormRadio />} 
            label={label} 
          />)
      }
      </RadioGroup>
    </FormControl>
  );
}

RadioFields.propTypes = {
  name: PropTypes.string.isRequired, 
  radiolist: PropTypes.array.isRequired, 
  setPriceEdition: PropTypes.func,
};

export default React.memo(RadioFields);

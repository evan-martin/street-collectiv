import React from "react";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));





const SizeSelector = ()=>{
  const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

  return(
  <FormControl required className={classes.formControl}>
    <InputLabel id="demo-simple-select-required-label">
      Size
    </InputLabel>
    <Select
      labelId="demo-simple-select-required-label"
      id="demo-simple-select-required"
      value={age}
      onChange={handleChange}
      className={classes.selectEmpty}
    >
      <MenuItem value={10}>Small</MenuItem>
      <MenuItem value={20}>Medium</MenuItem>
      <MenuItem value={30}>Large</MenuItem>
    </Select>
    <FormHelperText>Required</FormHelperText>
  </FormControl>
)

}

export default SizeSelector;

import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const Selects = ({ selects, category, handleInputChange, words, price }) => {
  return (
    <div>
      <div className="input_field select_option">
        {price ? (
          <FormControl>
            <Select value={category} onChange={handleInputChange} displayEmpty>
              <MenuItem value="" disabled>
                {words}
              </MenuItem>
              {selects.map((catey, ind) => (
                <MenuItem
                  key={catey}
                  value={catey.replace(`, price ₦${price[ind]}`, '')}
                >
                  {catey}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{words}</FormHelperText>
          </FormControl>
        ) : (
          <FormControl>
            <Select value={category} onChange={handleInputChange} displayEmpty>
              <MenuItem value="" disabled>
                {words}
              </MenuItem>
              {selects.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{words}</FormHelperText>
          </FormControl>
        )}
      </div>
    </div>
  );
};

export default Selects;

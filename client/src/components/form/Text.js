import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const Text = ({
  handleInputChange,
  inputs,
  name,
  label,
  state,
  type,
  id,
  $imgPrev,
  defaulInputs,
  multiline
}) => {
  return (
    <div>
      <div className="textarea_field">
        {type === 'file' ? (
          <React.Fragment>
            <TextField
              accept="image/*"
              multiple
              type="file"
              id="icon-button-photo"
              onChange={handleInputChange}
              label={label}
            />
            <label htmlFor="icon-button-photo">
              <IconButton color="primary" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
            <div className="imgPreview">{$imgPrev}</div>
          </React.Fragment>
        ) : state ? (
          <TextField
            onChange={handleInputChange}
            multiline
            value={inputs}
            name={name}
            label={label}
            margin="normal"
          />
        ) : defaulInputs ? (
          <TextField
            multiline={multiline}
            onChange={handleInputChange}
            defaultValue={defaulInputs}
            label={label}
            InputProps={{
              readOnly: true
            }}
          />
        ) : (
          <TextField
            multiline={multiline}
            onChange={handleInputChange}
            value={inputs}
            name={name}
            label={label}
            margin="normal"
            type={type}
            id={id}
          />
        )}
      </div>
    </div>
  );
};

export default Text;

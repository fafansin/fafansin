import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Sketch } from '@uiw/react-color';

function ColorPickerForm({addColor, colors, maxColors}) {
  const [ hex, setHex ] = useState("magenta");
  const [ color, setColor ] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
      return colors.every(({name}) => name.toLowerCase() !== value.toLowerCase());
    });

    ValidatorForm.addValidationRule('isColorUnique', (value) => {
      return colors.every(({color}) => color !== hex);
    });

  })

  function handleChangeColorName(event){
    setColor(event.target.value)
  }
  function handleColorChange(color){
    setHex(color.hex);
  }

  function onSubmit(event){
    addColor({color:hex, name:color});
  }
  
  return (
    <div className="ColorPickerForm">
      <Sketch color={hex} onChange={handleColorChange}/>
        <ValidatorForm
          // ref="form"
          onSubmit={onSubmit}
          onError={(errors => console.log("DEFAULT", errors))}>
            <TextValidator
              label="Color Name"
              name="color"
              onChange={handleChangeColorName}
              value={color}
              validators={['required', 'isColorNameUnique', 'isColorUnique']}
              errorMessages={['Please input Color Name', 'Color Name Already Exists', 'Color already used']}
            />
            <Button type="submit" 
              variant="contained" 
              color="primary" 
              sx={{backgroundColor:hex}}
              disabled={colors.length >= maxColors}
            >
              {colors.length >= maxColors ? "Palette is Full" : "Add Color"}
            </Button>
        </ValidatorForm>
    </div>
  )
}

export default ColorPickerForm
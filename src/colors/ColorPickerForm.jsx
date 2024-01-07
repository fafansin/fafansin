import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Sketch } from '@uiw/react-color';
import { styled } from '@mui/material/styles';


const Main = styled('div')(() => ({
  width:"100%", 
  display:"flex",
  flexDirection:"column",
  justifyContent:"center", 
  alignItems:"center", 
  padding:"10px",
}))

const ColorForm = styled(ValidatorForm)(() => ({
  width:"100%",
  display:"flex", 
  flexDirection:"column", 
  marginTop:"10px", 
  gap:"10px"
}))

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
    <Main>
      <Sketch color={hex} width="100%" onChange={handleColorChange}/>
        <ColorForm
          // ref="form"
          onSubmit={onSubmit}
          onError={(errors => console.log("DEFAULT", errors))}>
            <TextValidator
              label="Color Name"
              name="color"
              onChange={handleChangeColorName}
              value={color}
              variant="filled"
              style={{width:"100%"}}
              size="small"
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
        </ColorForm>
    </Main>
  )
}

export default ColorPickerForm
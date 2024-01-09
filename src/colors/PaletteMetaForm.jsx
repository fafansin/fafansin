import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

function PaletteMetaForm({palettes, onSave, hideForm}) {
  const [palette, setPalette] = useState('');
  const [stage, setStage] = useState('form')

  //
  
  useEffect(()=> {
    ValidatorForm.addValidationRule('isPaletteUnique', (value) => {
      return palettes.every(({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase());
    });
  })

  function handleChangePaletteName(event) {
    setPalette(event.target.value);
  }
  
  function handleClose() {
    hideForm();
  };

  function nextStage(){
    setStage('emoji');
  }

  function onSelect(data){
    onSave({palette:palette, emoji:data.native});
  }

  return (
    <>
      <Dialog open={stage === 'emoji'}>
        <DialogTitle>Pick an Emoji</DialogTitle>
        <Picker title="Pick an Emoji" data={data} onEmojiSelect={onSelect} theme="light" />
      </Dialog>
      <Dialog open={stage === 'form'} onClose={handleClose}>
        <DialogTitle>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={nextStage}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette. Make sure it's unique
            </DialogContentText>
              <TextValidator 
                label="Palette Name" 
                name="palette" 
                variant="standard"
                fullWidth
                margin='normal'
                onChange={handleChangePaletteName} 
                value={palette}
                validators={['required', 'isPaletteUnique']}
                errorMessages={['Enter Palette Name', 'Palette Name Exists']}
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">Save Palette</Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </>
  )
}

export default PaletteMetaForm
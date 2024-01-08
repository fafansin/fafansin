import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

function PaletteMetaForm({palettes, onSave, hideForm}) {
  const [palette, setPalette] = useState('');

  //
  
  useEffect(()=> {
    ValidatorForm.addValidationRule('isPaletteUnique', (value) => {
      return palettes.every(({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase());
    });
  })

  function handleChangePaletteName(event) {
    setPalette(event.target.value);
  }
  
  function onSubmit(event) {
    onSave(palette);
  }

  function handleClose() {
    hideForm();
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Choose a Palette Name</DialogTitle>
      <ValidatorForm onSubmit={onSubmit}>
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
  )
}

export default PaletteMetaForm
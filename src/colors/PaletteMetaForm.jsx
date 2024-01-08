import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

function PaletteMetaForm({palettes, onSave}) {
  const [open, setOpen] = useState(false);
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
  //

  function handleClickOpen() {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <ValidatorForm onSubmit={onSubmit} style={{display:"flex"}}>
            <TextValidator 
              label="Palette Name" 
              name="palette" 
              variant="standard"
              onChange={handleChangePaletteName} 
              value={palette}
              validators={['required', 'isPaletteUnique']}
              errorMessages={['Enter Palette Name', 'Palette Name Exists']}
            />
          </ValidatorForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">Save Palette</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default PaletteMetaForm
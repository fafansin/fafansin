import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';


// const drawerWidth = 400;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, drawerWidth }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  // display:"flex",
  // justifyContent:"space-between"
}));

function PaletteFormNav({open, onOpen, onSave, palettes, drawerWidth}) {
  const [ palette, setPalette ] = useState('');
  
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

  return (
    <div className="PaletteFormNav">
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default" drawerWidth={drawerWidth} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
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
            <Button type="submit" variant="contained" color="primary">Save Palette</Button>
            <Button component={Link} variant="contained" color="error" to="/palettes">Go Back</Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default PaletteFormNav
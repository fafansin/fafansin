import {useState} from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PaletteMetaForm from './PaletteMetaForm';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, drawerWidth }) => ({
  display: "flex",
  flexDirection:'row',
  alignItems:"center",
  height:"64px",
  gap:"10px",
  justifyContent:"space-between",
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
}));

const NavBtns = styled('div')(() => ({
  padding:"0 10px",
  '& button':{
    margin:"0 10px",
  }
}))

function PaletteFormNav({open, onOpen, onSave, palettes, drawerWidth}) {
  const [formShowing, setFormShowing] = useState(false);
  
  function showForm(){
    setFormShowing(true);
  }

  function hideForm(){
    setFormShowing(false);
  }

  function handleOnSave(data){
    onSave(data);
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
          <Typography variant="h6" noWrap component="div">Create New Palette</Typography>
        </Toolbar>
        <NavBtns>
          <Button component={Link} variant="contained" color="error" to="/palettes">Go Back</Button>
          <Button variant="contained" onClick={showForm}>Save</Button>
        </NavBtns>
      </AppBar>
      {formShowing && (
        <PaletteMetaForm 
          palettes={palettes} 
          hideForm={hideForm} 
          onSave={handleOnSave}/>)}
    </div>
  )
}

export default PaletteFormNav
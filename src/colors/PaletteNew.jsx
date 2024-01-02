import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DraggableColorBox from './DraggableColorBox';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {useNavigate } from 'react-router-dom';
//
import { Sketch } from '@uiw/react-color';
//
import './PaletteNew.scss';

//
const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
//

function PaletteNew() {
  // const [ state, setState ] = useState({paletteName:'', colorName:'', colors:[{color:'green', name:'green'}]})
  const [ open, setOpen ] = useState(true);
  const [ hex, setHex ] = useState("magenta");
  // const [ names, setNames ] = useState({color:'', palatte:''})
  const [ color, setColor ] = useState('');
  const [ palette, setPalette ] = useState('');
  const [ colors, setColors ] = useState([{color:'green', name:'green'}]);
  //
  const navigate = useNavigate();

  
  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
      return colors.every(({name}) => name.toLowerCase() !== value.toLowerCase());
    });

    ValidatorForm.addValidationRule('isColorUnique', (value) => {
      return colors.every(({color}) => color !== hex);
    });

  })
  const handleChangePaletteName = (event) => {
    setPalette(event.target.value);
  }
  const handleChangeColorName = (event) => {
    setColor(event.target.value)
  }
    const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleColorChange = (color) => {
    setHex(color.hex);
  }

  const addNewColor = (event) => {
    setColors([...colors, {color:hex, name:color}]);
    setColor('');
  }

  const savePalette = (event) => {
    console.log("SAVE ME!");
    const newPalette = {
      palette: palette,
      id: palette.toLowerCase().replace(/ /g, "-"),
      colors: colors
    }
    console.log(newPalette);
    // I should be handling the saving here
    navigate('/palettes')
  }

  const remove = (colorName) => {
    setColors(colors.filter((element) => element.name !== colorName))
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={savePalette} style={{display:"flex"}}>
            <TextValidator 
              label="Palette Name" 
              name="palette" 
              onChange={handleChangePaletteName} 
              value={palette}
              validators={['required']}
              errorMessages={['Enter Palette Name']}
            />
            <Button type="submit" variant="contained" color="primary">Save Palette</Button>
          </ValidatorForm>
          
          
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* Start of the let panel drawe */}
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary">Clear Palette</Button>
          <Button variant="contained" color="primary">Random Color</Button>
        </div>
        <Sketch color={hex} onChange={handleColorChange}/>
        <ValidatorForm
          // ref="form"
          onSubmit={addNewColor}
          onError={(errors => console.log("DEFAULT", errors))}>
            <TextValidator
              label="Color Name"
              name="color"
              onChange={handleChangeColorName}
              value={color}
              validators={['required', 'isColorNameUnique', 'isColorUnique']}
              errorMessages={['Please input Color Name', 'Color Name Already Exists', 'Color already used']}
            />
            <Button type="submit" variant="contained" color="primary" sx={{backgroundColor:hex}}>Add Color</Button>
        </ValidatorForm>

      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {colors.map((color) => (<DraggableColorBox key={color.name} {...color} remove={remove}/>))}
      </Main>
    </Box>
  );
}

export default PaletteNew
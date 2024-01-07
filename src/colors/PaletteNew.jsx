import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DraggableColorList from './DraggableColorList';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { arrayMove } from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';
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



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
//

function PaletteNew({maxColors=20}) {
  const [ palettes, setPalettes ] = useOutletContext();
  const [ open, setOpen ] = useState(true);
  const [ hex, setHex ] = useState("magenta");
  const [ color, setColor ] = useState('');
  
  const [ colors, setColors ] = useState(palettes[0].colors);
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

  const savePalette = (palette) => {
    
    const newPalette = {
      paletteName: palette,
      id: palette.toLowerCase().replace(/ /g, "-"),
      emoji: "=)",
      colors: colors
    }
    setPalettes([...palettes, newPalette]);
    // I should be handling the saving here
    navigate('/palettes')
  }

  const remove = (colorName) => {
    setColors(colors.filter((element) => element.name !== colorName))
  }

  const onSortEnd = ({oldIndex, newIndex}) => {
    setColors(arrayMove(colors,oldIndex,newIndex));
  }

  const clearColors = () => {
    setColors([]);
  }

  const addRandomColor = () => {
    const allColors = palettes.map(p => p.colors).flat();
    const randColor = allColors[Math.floor(Math.random() * allColors.length)];
    setColors([...colors, randColor]);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <PaletteFormNav 
        open={open} 
        onOpen={handleDrawerOpen} 
        onSave={savePalette}
        palettes={palettes}
        drawerWidth={400} />
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
        {/* Start of the left panel drawer */}
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button variant="contained" color="secondary" onClick={clearColors}>Clear Palette</Button>
          <Button variant="contained" color="primary" onClick={addRandomColor} disabled={colors.length >= maxColors}>Random Color</Button>
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
            <Button type="submit" 
              variant="contained" 
              color="primary" 
              sx={{backgroundColor:hex}}
              disabled={colors.length >= maxColors}
            >
              {colors.length >= maxColors ? "Palette is Full" : "Add Color"}
            </Button>
        </ValidatorForm>

      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <DraggableColorList 
          axis="xy" 
          onSortEnd={onSortEnd}
          colors={colors} 
          remove={remove}/>
      </Main>
    </Box>
  );
}

export default PaletteNew
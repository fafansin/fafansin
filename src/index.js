// Import CSS
// import 'bootstrap/scss/bootstrap.scss';
import './custom.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/root';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, 
        RouterProvider } from 'react-router-dom';

// Components
import Home from './Home';
import ErrorPage from './error-page';
import Quotes from './quotes/Quotes';
import Markdown from './markdown/Markdown';
import Drum from './drum/Drum';
import Calculator from './calculator/Calculator';
import Clock from './clock/Clock';
import Guess from './guess/Guess';
import Dice from './dice/Dice';
import Boxes from './colorBoxes/Boxes';
import Board from './lightsOut/Board';
import Todo from './todo/Todo';
import Cards from './cards/Cards';
import JokeList from './jokes/JokeList';
import Dogs from './dogs/Dogs';
import Dog from './dogs/Dog';
import Palette from './colors/Palette';
import PaletteList from './colors/PaletteList';
import SingleColorPalette from './colors/SingleColorPalette';
import PaletteNew from './colors/PaletteNew';
import PaletteApp from './colors/PaletteApp';

import seedColors from './colors/seedColors.js';
function getPalettes(){
  return seedColors;
}

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Root />, 
    errorElement: <ErrorPage />,
    children: [
      { path: '', index:true, element: <Home /> },
      { path: 'quotes', element: <Quotes /> },
      { path: 'markdown', element: <Markdown /> },
      { path: 'drum', element: <Drum /> },
      { path: 'calculator', element: <Calculator /> },
      { path: 'clock', element: <Clock /> },
      { path: 'guess', element: <Guess /> },
      { path: 'dice', element: <Dice /> },
      { path: 'boxes', element: <Boxes /> },
      { path: 'lightsout', element: <Board /> },
      { path: 'todo', element: <Todo /> },
      { path: 'cards', element: <Cards /> },
      { path: 'jokes', element: <JokeList /> },
    ],
  },
  {
    path: '/dogs', 
    element: <Dogs />, 
    errorElement: <ErrorPage />,
  },
  {
    path: '/dogs/:dogId', 
    element: <Dog />, 
    errorElement: <ErrorPage />,
  },
  {
    path: '/palettes',
    loader: getPalettes,
    element: <PaletteApp />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', index:true, element: <PaletteList /> },
      { path: '/palettes/:id', element: <Palette /> }, 
      { path: '/palettes/:paletteId/:colorId', element: <SingleColorPalette />}, 
      { path: '/palettes/new',  exact:true, element: <PaletteNew /> },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

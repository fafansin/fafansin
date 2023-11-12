import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './routes/root';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import ErrorPage from './error-page';
import Quotes from './quotes/Quotes';
import Markdown from './markdown/Markdown';
import Drum from './drum/Drum';
import Calculator from './calculator/Calculator';
import Clock from './clock/Clock';

// Routing data
const router = createBrowserRouter([
  { path: '/', element: <Root />, errorElement: <ErrorPage /> },
  { path: 'quotes', element: <Quotes /> },
  { path: 'markdown', element: <Markdown /> },
  { path: 'drum', element: <Drum /> },
  { path: 'calculator', element: <Calculator /> },
  { path: 'clock', element: <Clock /> },

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
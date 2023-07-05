import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './components/Root/Root';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';



const router = createBrowserRouter(createRoutesFromElements( 
  <Route path="/" element={<Root />}>
    <Route index element={<AboutMe />} />
    <Route path='/skills' element={<Skills />} />
    <Route path='/contact-info' element={<Contact />} />
    <Route path='/projects' element={<Projects />} />
  </Route>
  ))
function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;

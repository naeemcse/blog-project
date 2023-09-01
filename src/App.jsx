import React from 'react';
import ByCategory from './Component/Pages/ByCategory';
import HomePage from './Component/Pages/HomePage';
import Details from './Component/Pages/Details';

const App = () => {
  return (
    <>
    <h1>Hi </h1>
    <BrowserRouter>
    <Routers>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/byCategory/:categoryID" element = {<ByCategory/>} />
        <Route path="/byCategory/:details" element = {<Details/>} />
    </Routers>
    </BrowserRouter>
    </>
  );
};

export default App;
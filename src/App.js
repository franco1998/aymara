import withRoot from './withRoot';
// --- Post bootstrap -----
import React from 'react';
import Banner from './Componentes/Banner'
import ProductCategories from './Componentes/ProductCategories'
import Information from './Componentes/Information'
import './App.css'
function Index() {
  return (
    <React.Fragment>
      <Banner/>
      <Information/>
      <ProductCategories />
    </React.Fragment>
  );
}

export default withRoot(Index);

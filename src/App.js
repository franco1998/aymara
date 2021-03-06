import withRoot from './withRoot';
import React from 'react';
import Banner from './Componentes/Banner'
import ProductCategories from './Componentes/ProductCategories'
import Information from './Componentes/Information'


class Index extends React.Component{
  constructor(){
    super()

  }
  llamoCategoria(e){
    alert(e.target.id.toString())
  }
  render(){

    return (
      <React.Fragment>
        <Banner/>
        <Information/>
        <ProductCategories categoria = {this.llamoCategoria.bind(this)}/>
      </React.Fragment>
    );
  }

}

export default withRoot(Index);

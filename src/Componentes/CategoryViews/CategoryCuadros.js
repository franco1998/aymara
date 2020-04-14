import React from 'react'
import LayoutBody from './../LayoutBody'
import Gallery from "react-photo-gallery";
import { photos } from "./../../Photos";
import Main from './Main'
class CategoryCuadros extends React.Component{

    render(){
      return (
        <Main>
          <LayoutBody fullHeight={true}>
            <Gallery photos={photos} direction={"column"} />
          </LayoutBody>
        </Main>  
      );
    }

  }
  export default CategoryCuadros

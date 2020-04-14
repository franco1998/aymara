import React from 'react'
import LayoutBody from './../LayoutBody'
import Gallery from "react-photo-gallery";
import { photos } from "./../../Photos";

class CategoryColgantes extends React.Component{

    render(){
      return (
          <LayoutBody>
            <Gallery photos={photos} direction={"column"} />
          </LayoutBody>
      );
    }

  }
  export default CategoryColgantes

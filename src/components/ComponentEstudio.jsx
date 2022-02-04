import React, { Component } from 'react';
import { StyledH2, Grid2, H4, H3 } from '../style/StyleComponent';



export default class ComponentEstudio extends Component {
  render() {
    return <Grid2>
        <StyledH2>Mis Estudios </StyledH2>
        <H3>FUC - 2016</H3>
        <H4>Ingeniero industrial</H4>
    </Grid2>;
  }
}

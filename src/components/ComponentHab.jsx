import React, { Component } from 'react';
import { Grid5, StyledH2, GridH } from '../style/StyleComponent';


export default class ComponentHab extends Component {
  render() {
    return <Grid5>
        <StyledH2>Habilidades</StyledH2>
        <GridH>
        <div>
            <h3>HTML</h3>
            <input type="range" id="vol" name="vol" min="0" max="50"></input>
        </div>
        <div>
            <h3>CSS</h3>
            <input type="range" id="vol" name="vol" min="0" max="50"></input>
        </div>
        <div>
            <h3>JAvaScript</h3>
            <input type="range" id="vol" name="vol" min="0" max="50"></input>
        </div>
        <div>
            <h3>React JS</h3>
            <input type="range" id="vol" name="vol" min="0" max="50"></input>
        </div>
        </GridH>
    </Grid5>;
  }
}

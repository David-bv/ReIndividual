import React, { Component } from 'react';
import ComponentCert from '../components/ComponentCert';
import ComponentEstudio from '../components/ComponentEstudio';
import ComponentExp from '../components/ComponentExp';
import ComponentG from '../components/ComponentG';
import ComponentHab from '../components/ComponentHab';
import { StyledWrapper } from '../style/StyleComponent';


export default class Container extends Component {
  render() {
    return <StyledWrapper>
        <ComponentG/>
        <ComponentEstudio/>
        <ComponentCert/>
        <ComponentExp/>
        <ComponentHab/>
    </StyledWrapper>;
  }
}

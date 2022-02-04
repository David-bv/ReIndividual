import React, { Component } from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { Facebook, Grid1, Name, SubAside, SubProfe, Tw, Gh, Li, Avatar } from '../style/StyleComponent';


export default class componentG extends Component {
    render() {
        return <Grid1>
            <Avatar src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt="" />
            <Name>Luis David Bolivar Valencia</Name>
            <SubProfe>Ingeniero Industrial</SubProfe>
            <SubAside>Analista de calidad y Dev-web</SubAside>
            <SubAside>Bogotá, Colombia</SubAside>
            <div><Facebook><FaFacebookSquare /></Facebook> <Tw><FaTwitterSquare /></Tw> <Gh><FaGithub /></Gh> <Li><FaLinkedin /></Li></div>
        </Grid1>;
    }
}

import styled from "styled-components";

export const StyledH2 = styled.h2 `
    color:#3CC0DE;
    letter-spacing: 15px
`
export const H3 = styled.h3 `
    color: black;
    font-size: 20px
`
export const H4 = styled.h4 `
    color: grey;
    font-size: 20px
`
export  const Name = styled.h3 `
    color: #8AC3DE;
    font-size: 25px
`

export const SubProfe = styled.h4 `
    color: #B2D6DA;
    font-size: 18px
`

export const SubAside = styled.h5 `
    color: #C2C2C2;
    font-size: 16px
`

export const StyledWrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
`
export const Grid1 = styled.div `
    grid-column: 1;
    grid-row: 1 / 5;
    border: 3px solid orange
    align-self: center;
    justify-self: center;
    text-align: center;
   
`
export const Grid2 = styled.div `
    grid-column: 2/5;
    grid-row: 1;
    border: 3px solid orange;
    padding-left: 50px;
    
`
export const Grid3 = styled.div `
    grid-column: 2/5;
    grid-row: 2;
    border: 3px solid violet;
    padding-left: 50px;
    
`
export const Grid4 = styled.div `
    grid-column: 2/5;
    grid-row: 3;
    border: 3px solid #AFFF33;
    padding-left: 50px;
    
`
export const Grid5 = styled.div `
    grid-column: 2/5;
    grid-row: 4;
    border: 3px solid #C14B3B;
    padding-left: 50px;

`
export const Facebook =  styled.span `
    color: #3b5998;
    font-size: 25px;
    border-radius:50px
`

export const Tw = styled.span `
    color: #00acee ;
    font-size: 25px;
    border-radius:50px
`
export const Gh = styled.span `
    font-size: 25px;
`

export const Li = styled.span `
    font-size: 25px;
`

export const Avatar = styled.img `
    margin-top:50px;
    width:300px;
    heigth: auto
`

export const GridH = styled.div `
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-auto-rows: 100px;
`
   

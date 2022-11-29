import styled from "styled-components";
import React from "react";




//-------------------------------
//Стили дле всех имеющихся блоков
//-------------------------------



const Wrapper = styled.div`
max-width: 1170px;
margin: 0 auto;
position: ${({ relative }) => (relative ? "realative" : null)};
height: ${({ height }) => (height ? height : null)};
`

const WrapperForm = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 30px;
`


const Logo = styled.div`
display: flex;
background-image: url("/bika-shop/src/assets/logo.png");
`

const Flex = styled.div`
display: flex;
width: ${({ width }) => (width ? width : null)};
justify-content: ${({ justify }) => (justify ? justify : "center")};
align-items: ${({ align }) => (align ? align : "center")};
flex-wrap: ${({ wrap = "no-wrap" }) => wrap};
flex-direction: ${({ direction }) => (direction ? direction : "row")};
padding: ${({ padding }) => (padding ? padding : null)};
margin: ${({ margin }) => (margin ? margin : null)};
height: ${({ height }) => (height ? height : null)};
flex: ${({ flex }) => (flex ? flex : null)};
column-gap: ${({ gap }) => (gap ? gap : null)};
row-gap: ${({ gap }) => (gap ? gap : null)};
`

const Title = styled.h2`
font-size: 32px;
font-family: 'Roboto';
font-weight: bold;
text-transform: uppercase;
color: #020106;


padding: ${({ padding }) => (padding ? padding : null)};
margin: ${({ margin }) => (margin ? margin : "0")};
border-left: ${({ withBorder }) => (withBorder ? "3px solid #E6110C" : null)};
padding-left: ${({ withBorder }) => (withBorder ? "15px" : null)};
`

const SubTitle = styled.h3`
font-size: 18px;
font-family: 'Roboto';
font-weight: bold;
text-transform: uppercase;
color: #020106;


padding: ${({ padding }) => (padding ? padding : null)};
margin: ${({ margin }) => (margin ? margin : "0")};

${({ withBorder }) =>
        withBorder
            ? `
        position: realaive;
        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -10px;
            width: 45px;
            height: 3px;
            background: #E6110C;

        }

    `
            : null};

`

const Text = styled.p`
font-family: "Roboto";
font-size: ${({ size }) => (size ? size : "18px")};
font-weight: ${({ weight }) => (weight ? weight : 400)};
color: ${({ color }) => (color ? color : "#282828")};
padding: ${({ padding }) => (padding ? padding : null)};
margin: ${({ margin }) => (margin ? margin : "0")};
`

const Hr = styled.hr`
width: 100%;
margin: 20px 0;
border-color: #b5b5b5;
border-bottom: none;
`
const Button = styled.button`
font-family: "Roboto";
font-style: normal;
font-weight: bold;
font-size: 18px;
text-transform: uppercase;
height: 60px;
border: none;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
width: ${({ width }) => (width ? width : "470px")};
color: ${({ color }) => (color ? color : "#020106")};
background: ${({ backgound }) => (backgound ? backgound : "#E6110C")};
`

const CarouselContainer = styled.div`
background-image: url("/bika-shop/src/containers/product/images/image-2.png");
    width: 400px;
    margin: auto;
    border: 4px solid black;
    overflow: hidden;
    height: 320px;
    position: relative;
`

const CarouselSlide = styled.div`
    display: flex;
    width: 100%;
    height: 320px;
`




export { Wrapper, Flex, Title, SubTitle, Text, Hr, Button, Logo, CarouselContainer, CarouselSlide, WrapperForm }
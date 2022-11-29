import styled from "styled-components";
import LogoBgFooter from "assets/logo.png";
import Twit from "assets/twitter.png";
import FaceBook from "assets/facebook.png";
import Tg from "assets/telegram.png";

export const FooterSC = styled.footer`
    background-color: #020106;
    height: 100px;
    width:100%;
    `;


export const LinkContainer = styled.div`
  
    margin-left: 25px;
    display: flex;
    justify-content: baseline;
    padding: 20px;

`;

export const LogoBg = styled.div`
    height: 40px;
    width: 220px;
    background-image: url(${LogoBgFooter});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Twitter = styled.div`
background-image: url(${Twit});
height: 20px;
width: 23px;
background-repeat: no-repeat;
    background-size: cover;
    margin: 15px;
`;
export const Telegram = styled.div`
background-image: url(${Tg});
height: 20px;
width: 23px;
background-repeat: no-repeat;
    background-size: cover;
     margin: 15px;
`;
export const Facebook = styled.div`
background-image: url(${FaceBook});
height: 20px;
width: 20px;
background-repeat: no-repeat;
    background-size: cover;
     margin: 15px;
`;
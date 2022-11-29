import React from "react";
import { Wrapper, Flex, Logo } from "components/ui";
import { FooterSC, LinkContainer, LogoBg, Twitter, Telegram, Facebook } from "./styled";



function Footer() {
    return (
        <FooterSC>
            <Wrapper height="100%">
                <Flex height="100%" justify="space-between">
                    <LogoBg></LogoBg>
                    <LinkContainer>
                        <Twitter></Twitter>
                        <Telegram></Telegram>
                        <Facebook></Facebook>
                    </LinkContainer>
                </Flex>
            </Wrapper>
        </FooterSC>
    )
}

export default Footer;
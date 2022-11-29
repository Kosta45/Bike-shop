import React, { forwardRef } from "react";
import { Wrapper, Flex, Button, Logo } from "components/ui";
import { HeaderSC, Absolute, HeaderText } from "./styled";
import { LogoSC } from "./styled";
// import { ReactComponent as Logo} from "assets/logo.png";

function Header({ handleProductScroll }) {
    return (
        <HeaderSC>
            <Wrapper relative height="100%">

                <Flex padding="24px 0 0">
                    <LogoSC></LogoSC>
                </Flex>

            <Absolute>
                <HeaderText red weight={700}>НОВИЙ</HeaderText>
                <HeaderText>ідеальний</HeaderText>
                <HeaderText size="71px" weight={900} space="30px">Fuel EX 9.8 GX</HeaderText>
                <Button onClick={handleProductScroll}>Оформити замовлення</Button>
            </Absolute>
                
            </Wrapper>
        </HeaderSC>
    )
}

export default Header;
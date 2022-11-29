import React, { forwardRef } from "react";
import { Wrapper, Title, Text, WrapperForm } from "components/ui";
import Form from "components/Form";


const Order = forwardRef((_, ref) => (
    <section>
        <Wrapper>
            <Title ref={ref}  withBorder margin="70px 0 30px">
                ВСТИГНИ СТАТИ ПЕРШИМ
            </Title>
            <Text>
                Встигни бути в списку перших райдерів, які встигли стати власниками нового FUEL EX 9.8 і відчуй усі емоції, передані майбутньою легендою даунхілла. При цьому перші райдери, які замовили нову модель, отримають додатковий пакет підтримки на обслуговування від Trek.
            </Text>
            <WrapperForm>
                <Form />
             </WrapperForm>
        </Wrapper>
    </section>
));

export default Order

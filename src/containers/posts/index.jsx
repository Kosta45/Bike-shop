import React from "react";
import { Wrapper, Title, Flex } from "components/ui";
import PostCard from "components/PostCard";
import Post1 from "assets/post-1.png";
import Post2 from "assets/post-2.png";
import Post3 from "assets/post-3.png";
import Post4 from "assets/post-4.png";

const postData = [
    {
        id: 1,
        image: Post1,
        title: "Вигнута верхня труба",
        text: "Найменші рами (XS і S) мають верхню трубу, яка опускається вниз у міру наближення до підсідельної труби."
    },
    {
        id: 2,
        image: Post2,
        title: "Активний брейк - шарнір",
        text: "Дозволяє незалежно підлаштовувати реакцію підвіски на прискорення та гальмівне зусилля. Це означає, що ви отримуєте впевненіший контроль, коли це найбільше необхідно."
    },
    {
        id: 3,
        image: Post3,
        title: "РЕ: АКТИВ НАСКРОЗНОГО ВАЛУ",
        text: "Дає вам неперевершене зчеплення та контроль за допомогою амортизатора, який реагує на територію швидше, ніж це можливо."
    },
    {
        id: 4,
        image: Post4,
        title: "Ідеальна конструкція",
        text: "Конструкція рами Trek Straight Shot оптимізує співвідношення жорсткості до ваги для більш чуйної їзди. Ви зможете старанніше працювати і залишатися далі у своєму становищі, коли ситуація стане важчою."
    },
];

function Posts() {
    return (
        <section>
            <Wrapper>
                <Title withBorder margin="70px 0 30px">
                    Функції
                </Title>
                <Flex align="baseline" gap="30px">
                    {postData.map((item) => <PostCard key={item.id} {...item}></PostCard>)}
                </Flex>

            </Wrapper>
        </section>
    )
};

export default Posts;
import React, { forwardRef } from "react";
import { Wrapper, Flex, Title, Text, Hr, Button, CarouselSlide, CarouselContainer } from "components/ui";
import Carousel from "components/Carousel";


import Image2 from "assets2/image-1.jpeg";
import Image3 from "assets2/image-5.jpeg";
import Image4 from "assets2/image-6.jpeg";
import Image5 from "assets2/image-4.jpeg";

//-----------------------------------------
// Блок со слайдером и описанием к продукту.
//-----------------------------------------


const images = [
        Image2,
        Image3,
        Image4,
        Image5
    ];

const Product = forwardRef(({ handleOrderScroll }, ref) => (
    
    <section>
        <Wrapper>
            <Title withBorder margin="70px 0 30px">
                Зустрічайте нового короля вершин
            </Title>
            <Text margin=" 0 0 60px">
                Fuel EX 9.8 підніме вашу поїздку на новий рівень із пакетом запчастин, який забезпечує найвищу продуктивність.
                Також розширили наш розмірний ряд, щоб забезпечити зручність для всіх райдерів. Ви можете вибрати максимальний розмір коліс, який підійде для вашої рами: рам XS доступні колеса 27,5 дюймів, на рами S можна вибрати між 27,5 дюймів або 29 дюймів, а розмірам від M до XL доступні колеса 29 дюймів.
                Fuel EX 9.8 - чудове вкладення для одного велосипеда, який може все.
            </Text>
            <Flex gap="30px" ref={ref}>
                <Flex flex={1}>
                    <Carousel>
                        {images.map((image) => (<img src={image} key={image} alt={image} />))}
                    </Carousel>
                </Flex>
                <Flex width="470px" direction="column" align="flex-start" justify="space-between">
                    <Title withBorder>Fuel EX 9.8</Title>
                    <Flex justify="space-between" width="100%" margin="30px 0 20px">
                        <Text weight={500}>2022</Text>
                        <Text weight={500} color="B5B5B5">Model 33408</Text>
                    </Flex>
                    <Text color="#020106" weight={700} size="26px">$5.499.99 - $5.999.99</Text>
                    <Hr />
                    <Text margin="5px 0">
                        Fuel EX 9.8 поєднує в собі легку карбонову раму з деталями, обраними з урахуванням найкращого співвідношення ціни і якості. Високоякісна підвіска FOX з модернізованими передніми та задніми амортизаторами, карбонові колеса із задньою маточкою Rapid Drive та надгладка широкодіапазонна трансмісія Shimano XT надають цій моделі додаткових переваг, які ви помітите з першого натискання педалі.
                    </Text>
                    <Hr />
                    <Flex width="100%" align="flex-start">
                        <Flex flex={1} justify="flex-start">

                                
                            {/* -------------------НАПОМИНАЛКА!!!------------------
                                НИЖЕ ОСТАВЛЮ ВОЗМОЖНОСТЬ ДОБАВЛЕНИЕ НЕБОЛЬШОГО ФИЛЬТРА, ЕСЛИ ЗАХОЧУ ДОПОЛНИТЬ СВОЙ ПРОЕКТ  */}

                            {/* Добавить возможность фильтрации цвета. (Возможно я захочу это сделать) */}

                            {/* ColorPicker */}
                            
                        </Flex>
                        <Flex flex={1}>
                                
                            {/* Добавить возможность фильтрации размера. (Возможно я захочу это сделать) */}

                            {/* SizePicker */}
                            
                        </Flex>
                    </Flex>

                    {/* Добавить возможность фильтрации количества. (Возможно я захочу это сделать) */}

                    {/* CountPicker */}

                        
                    <Button onClick={handleOrderScroll}>Оформити замовлення</Button>
                </Flex>
            </Flex>
        </Wrapper>
    </section>
));

export default Product;
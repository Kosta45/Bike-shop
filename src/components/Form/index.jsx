import React, { useState, useContext } from "react";
import { Flex, Button, Title, Text } from "components/ui";
import TextField from "components/TextField";
// import Context from "containers/context/context";

import { BorderContainer } from "./styled";

import Checkout from "assets/image-51.png";

const Tabs = ["Оформити замовлення", "Перевірити статус замовлення"];

function Form() {
    
    const [selectedTab, setSelectedTab] = useState(0);



    const [formData, setFormData] = useState({
        name: {
            value: "",
            error: false,
        },
        email: {
            value: "",
            error: false,
        },
        phone: {
            value: "",
            error: false,
        },
        date: {
            value: new Date().toISOString().replace(/T.+/g, ''),
            error: false,
        },
    });


    const [deliveryNumber, setDeliveryNumber] = useState({
        value: "",
        error: false,
    })


    const onChangeFormData = (key) => (e) => {
        setFormData((prev) => ({...prev, [key] : {...prev[key], value: e.target.value}}))
    }
    

    const onChangeDelivery = (e) => {
        setDeliveryNumber((prev) => ({...prev, value: e.target.value}))
    }

    return (
        <BorderContainer>
            <Flex>
                {Tabs.map((tab, index) => (
                    <Flex flex={1} key={tab}>
                        <Button
                            width="100%"
                            color={selectedTab === index ? "#000000" : "#FFF"}
                            background={selectedTab === index ? "#FFF" : "#020106"}
                            onClick={() => setSelectedTab(index)}
                        >
                            {tab}
                        </Button>
                    </Flex>
                ))}
            </Flex>
                {selectedTab === 0 && (
                <Flex padding="60px" direction="column" >
                    <img src={Checkout} alt="" />
                    <Title margin="30px 0 100px">Fuel EX 9.8</Title>
                    <form>
                        <TextField
                            placeholder="ФІО"
                            errorLabel="Будь ласка, введіть ваше ФІО."
                            error={formData["name"].error}
                            value={formData["name"].value}
                            onChange={onChangeFormData("name")}
                        />
                        <TextField
                            placeholder="E-mail"
                            errorLabel="Будь ласка, введіть ваше ФІО."
                            error={formData["name"].error}
                            value={formData["name"].value}
                            onChange={onChangeFormData("email")}
                        />
                        <TextField
                            placeholder="Phone"
                            errorLabel="Будь ласка, введіть ваше ФІО."
                            error={formData["name"].error}
                            value={formData["name"].value}
                            onChange={onChangeFormData("phone")}
                        />
                        <TextField
                            disabled
                            placeholder="Date"
                            errorLabel="Будь ласка, введіть ваше ФІО."
                            error={formData["name"].error}
                            value={formData["name"].value}
                            onChange={onChangeFormData("date")}
                        />
                        <Button type="submit">Оформити замовлення</Button>
                    </form>

                
                </Flex>
                )}  

                {selectedTab === 1 && (
                     <Flex padding="60px" direction="column" >
                    <Title margin="30px 0 100px">Введіть номер замовлення</Title>
                    <form action=""> 
                        <TextField
                            placeholder="Номер замовлення"
                            errorLabel="Будь ласка, введіть код замовлення."
                            error={formData["name"].error}
                            value={formData["name"].value}
                            onChange={onChangeDelivery}
                        />
                        <Button type="submit">Отримати інформацію</Button>
                    </form>
                    </Flex>
                )}
            
        </BorderContainer>
    );
};

export default Form;
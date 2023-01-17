import React from 'react';
import { Button, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Title, Text } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useQuery } from 'react-query';
import axios from 'axios';
import { List } from '../../components/List';

type ParamsPrpos = {
    name: string;
}
export function Universities() {
    // ------------------------------------PARÂMETROS ------------------------------------
    const route = useRoute();
    const { name } = route.params as ParamsPrpos;

    // [UseQuery] - Hook usado para fazer requisições na API 
    const { data } = useQuery(['repositories'], async () => {
        const response = await axios.get(`http://universities.hipolabs.com/search?name=${name}`);
        console.log("Use Query - Universities");
        console.log(response.data);
        return response.data;
    }, {
        staleTime: 1000 * 60, //1 minuto
    });


    // ------------------------------------NAVEGAÇÃO ------------------------------------
    const navigation = useNavigation();

    function goBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior='position' enabled>
                    <Header>
                        <Title>Universidades salvas</Title>
                    </Header>
                    <List list={data} />
                    <Button title="Voltar" onPress={goBack} />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Container>
    );
}
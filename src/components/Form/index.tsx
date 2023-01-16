import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import coverImg from '../../assets/cover.png';

import { List } from '../List';
import { Container, Header } from './styles';
import { ControlledInput } from '../ControlledInput';
import { useForm } from 'react-hook-form';
import { Button, Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback } from 'react-native';

type FormData = {
    search: string;
}

export function Form() {
    //-------------------------------------------HOOKS-------------------------------------------
    // [UseState] - Hook utilizado para armazenar o valor da string de busca para API
    const [searchQuery, setSearchQuery] = useState("brazil");

    // [UseQuery] - Hook usado para fazer requisições na API 
    const { isFetching, data } = useQuery(['repositories', searchQuery], async () => {
        const response = await axios.get(`http://universities.hipolabs.com/search?country=${searchQuery}`);
        console.log("Use Query");
        console.log(response.data);
        return response.data;
    }, {
        staleTime: 1000 * 60, //1 minuto
    });

    // [UseForm] - Hook de formulários hook gerenciamento de formulários no React
    const { control, handleSubmit } = useForm<FormData>();

    //-----------------------------------------FUNÇÕES-----------------------------------------

    // [handleSearch] Função utilizada para receber os dados do formulário pelo Hook useForm e adicioná-los na query de busca
    function handleSearch(formDataResult: FormData) {
        console.log("Use HandleSearch");
        console.log(formDataResult);
        setSearchQuery(formDataResult.search);
    }

    //-------------------------------RENDERIZAÇÃO DO COMPONENTE---------------------------------
    // [TouchableWithoutFeedback] - Utilizada para fechar o teclado ao tocar em qualquer lugar da tela
    // [KeyboardAvoidingView] - Utilizada para o teclado não sobrepor na tela
    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior='position' enabled>
                    <Header source={coverImg}>
                        <ControlledInput
                            name="search"
                            control={control}
                        />
                        <Button
                            title="Pesquisar"
                            onPress={handleSubmit(handleSearch)}
                        />
                    </Header>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
            {isFetching && <Text>Carregando</Text>}
            <List list={data} />
        </Container>
    );
}



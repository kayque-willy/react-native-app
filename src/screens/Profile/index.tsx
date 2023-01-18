import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Title, Text } from './styles';

export function Profile() {
    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior='position' enabled>
                    <Header>
                        <Title>Perfil com foto</Title>
                        <Text>Exemplo de pagina acessada pelo drawer menu</Text>
                    </Header>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Container>
    );
}
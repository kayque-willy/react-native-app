import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Title } from './styles';

export function Profile() {
    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior='position' enabled>
                    <Header>
                        <Title>Perfil com foto</Title>
                    </Header>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Container>
    );
}
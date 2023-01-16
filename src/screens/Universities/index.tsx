import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Text, Title } from './styles';


export function Universities() {
    return (
        <Container>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior='position' enabled>
                    <Header>
                        <Title>Universidades salvas</Title>
                    </Header>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Container>
    );
}
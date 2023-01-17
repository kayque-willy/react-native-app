import React from 'react';
import { Container, Foundation, Image, Title } from './styles';

import unitedImg from '../../assets/united.png';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Card(props: any) {

    // ----------------------- NAVEGAÇÃO -----------------------
    const navigation = useNavigation();

    function save() {
        navigation.navigate("Universities", { name: props.name });
    }

    return (
        <Container
            animation="slideInDown"
            duration={2000}>
            <Image
                source={unitedImg}
                resizeMode="contain"
                animation="pulse"
                delay={100}
                duration={500}
                direction="alternate"
                iterationCount="infinite"
            />
            <Title>{props.name}</Title>
            {props.web_pages?.map((web_page: string) => {
                return (
                    <Foundation>{web_page}</Foundation>
                )
            })}
            <Button
                title="Salvar"
                onPress={save}
            />
        </Container>
    );
}
import React from 'react';
import { Container, Foundation, Image, Title } from './styles';

import unitedImg from '../../assets/united.png';

export function Card(props: any) {
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
        </Container>
    );
}
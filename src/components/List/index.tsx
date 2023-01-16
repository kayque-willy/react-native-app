import React from 'react';
import { ScrollView } from 'react-native';
import { Card } from '../../components/Card';
import { Container } from './styles';

export function List(props: any) {
    return (
        <ScrollView>
            <Container>
                {props.list?.map((result: any) => {
                    return (
                        <Card name={result.name} web_pages={result.web_pages} />
                    )
                })}
            </Container>
        </ScrollView>
    );
}
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled(Animatable.View)`
    align-items: center;
    width: 300px;
    height: 180px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
    margin-bottom: 10px;
    border-radius: 10px;
`;

export const Image = styled(Animatable.Image)`
    margin-top: -30px;
    width:80px;
    height: 80px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    font-size: ${RFPercentage(2.5)}px;
    margin-top: ${RFPercentage(3)}px;
`;

export const Foundation = styled.Text`
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size: 14px;
    margin-top: 16px;
`;
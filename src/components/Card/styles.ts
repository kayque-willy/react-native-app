import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled(Animatable.View)`
    align-items: center;
    width:  ${RFPercentage(52)}px;
    height:  ${RFPercentage(28)}px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
    margin-bottom: ${RFPercentage(6)}px;
    border-radius: 10px;
`;

export const Image = styled(Animatable.Image)`
    margin-top: ${RFPercentage(-5)}px;
    width:${RFPercentage(12)}px;
    height: ${RFPercentage(12)}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    font-size: ${RFPercentage(2.5)}px;
    margin-top: ${RFPercentage(2)}px;
`;

export const Foundation = styled.Text`
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    font-size:  ${RFPercentage(2.2)}px;
    margin-top: ${RFPercentage(2)}px;
    margin-bottom: ${RFPercentage(1.2)}px;
`;
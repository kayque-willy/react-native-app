import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Text = styled.Text`
    align-items: center;
    text-align: center;
`;

export const Header = styled.ImageBackground`
    height:${RFPercentage(20)}px;
    justify-content: flex-end;
    padding: 0px 24px 10px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    font-size: ${RFPercentage(5)}px;
    margin-top: ${RFPercentage(5)}px;
    text-align: center;
`;


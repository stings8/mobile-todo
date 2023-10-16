import { Text, TouchableOpacity } from 'react-native';
import { ms } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  height: ${ms(40)}px;

  border-radius: ${({ theme }) => theme.border.radius.md};
  border-color: ${({ theme }) => theme.border.color.main};
  border-width: ${ms(2)}px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)`
  font-size: ${({ theme }) => theme.font.lg};
  color: ${({ theme }) => theme.color.primary.contrastText};
  font-weight: 600;
`;

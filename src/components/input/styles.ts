import { ms } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${ms(55)}px;
  max-height: ${ms(55)}px;

  border-radius: ${({ theme }) => theme.border.radius.md};
`;

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.color.secundary.contrastText,
}))`
  height: ${ms(45)}px;

  border-radius: ${({ theme }) => theme.border.radius.md};
  padding-left: ${({ theme }) => theme.padding.lg};
  padding-right: ${({ theme }) => theme.padding.lg};
  padding-top: ${({ theme }) => theme.padding.md};
  padding-bottom: ${({ theme }) => theme.padding.md};

  background-color: ${({ theme }) => theme.color.secundary.light};
  color: ${({ theme }) => theme.color.secundary.contrastText};
`;

export const MessageError = styled.Text`
  font-size: ${({ theme }) => theme.font.sm};
  color: ${({ theme }) => theme.color.primary.contrastText};

  padding-left: ${({ theme }) => theme.padding.md};
  padding-top: ${({ theme }) => theme.padding.sm};
  padding-bottom: ${({ theme }) => theme.padding.sm};
`;

import React from 'react';
import { Container, MessageError, TextInput } from './styles';
import { TextInputProps } from 'react-native';

type Props = {
  error?: string;
} & TextInputProps;

const Input = ({ error, ...rest }: Props) => {
  return (
    <Container>
      <TextInput {...rest} />
      {error && <MessageError>{error}</MessageError>}
    </Container>
  );
};

export default Input;

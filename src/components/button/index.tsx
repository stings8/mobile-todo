import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

type Props = {
  children: ReactNode;
} & TouchableOpacityProps;

const Button = ({ children, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Title>{children}</Title>
    </Container>
  );
};

export default Button;

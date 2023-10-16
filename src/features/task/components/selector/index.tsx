import React from 'react';
import { Container, Title } from './styles';
import { Status } from '../../types';
import { TouchableOpacityProps } from 'react-native';

type Props = {
  active: boolean;
  status: Status;
  title: string;
} & TouchableOpacityProps;

const Selector = ({ active, status, title, ...rest }: Props) => {
  return (
    <Container active={active} status={status} {...rest}>
      <Title active={active} status={status}>
        {title}
      </Title>
    </Container>
  );
};

export default Selector;

import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  Decription,
  Status,
  StatusText,
  Title,
  WrapperContent,
} from './styles';
import { Task } from '../../types';

type Props = {
  item: Task;
} & TouchableOpacityProps;

const Item = ({ item, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <>
        <WrapperContent>
          <Title>{item.name}</Title>
          <Decription>{item.description}</Decription>
        </WrapperContent>
        <Status status={item.status}>
          <StatusText>{item.status}</StatusText>
        </Status>
      </>
    </Container>
  );
};

export default Item;

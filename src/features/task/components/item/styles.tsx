import { TouchableOpacity } from 'react-native';
import { ms } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.4,
})`
  height: ${ms(58)}px;

  flex-direction: row;

  border-radius: ${({ theme }) => theme.border.radius.md};
  border-width: ${ms(1)}px;
  border-color: ${({ theme }) => theme.border.color.main};

  align-items: center;
  justify-content: space-between;

  padding-left: ${({ theme }) => theme.padding.lg};
  padding-right: ${({ theme }) => theme.padding.lg};
  padding-top: ${({ theme }) => theme.padding.md};
  padding-bottom: ${({ theme }) => theme.padding.md};
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  color: ${({ theme }) => theme.color.primary.contrastText};
  font-size: ${({ theme }) => theme.font.lg};
`;

export const Decription = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  color: ${({ theme }) => theme.color.primary.contrastText};
  font-size: ${({ theme }) => theme.font.sm};

  margin-top: ${ms(4)}px;
`;

export const WrapperContent = styled.View`
  flex: 1;
`;

type StatusType = {
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELED';
};

const statusColor = {
  PENDING: '#e2c107c1',
  IN_PROGRESS: '#800080',
  COMPLETED: '#90EE90',
  CANCELED: '#FF5733',
};

export const Status = styled.View<StatusType>`
  width: ${ms(90)}px;
  height: ${ms(35)}px;

  border-radius: ${({ theme }) => theme.border.radius.lg};

  background-color: ${({ status }) => statusColor[status]};

  align-items: center;
  justify-content: center;

  margin-left: ${ms(8)}px;
`;

export const StatusText = styled.Text`
  font-size: ${({ theme }) => theme.font.sm};
  font-weight: 500;

  color: ${({ theme }) => theme.color.white};
`;

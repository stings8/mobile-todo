import { FlatList } from 'react-native';
import { ms } from 'react-native-size-matters';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';

export const Container = styled.View`
  padding: ${({ theme }) => theme.padding.lg};
  background-color: ${({ theme }) => theme.color.background};
  flex: 1;
`;

export const Wrapper = styled.View`
  top: 0;
`;

export const BottomModal = styled(Modal).attrs({
  swipeDirection: ['down'],
})`
  justify-content: flex-end;
  margin: 0;
` as unknown as typeof Modal;

export const WrapperHeader = styled.View`
  flex-direction: row;
  flex: 1;

  align-items: center;
  justify-content: center;

  margin-top: ${ms(64)}px;
  margin-bottom: ${ms(32)}px;
`;

export const CreateButton = styled.TouchableOpacity`
  width: ${ms(60)}px;
  height: ${ms(45)}px;

  margin-bottom: ${ms(15)}px;

  border-radius: ${({ theme }) => theme.border.radius.md};
  border-color: ${({ theme }) => theme.border.color.main};
  border-width: ${ms(1)}px;

  justify-content: center;
  align-items: center;

  margin-left: ${ms(8)}px;
`;

export const CreateButtonText = styled.Text`
  font-size: ${({ theme }) => theme.font.md};
  font-weight: 600;
  color: ${({ theme }) => theme.color.primary.contrastText};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font.xl};
  font-weight: 600;
  color: ${({ theme }) => theme.color.primary.contrastText};

  text-align: center;

  margin-bottom: 16px;
`;

export const TextSelector = styled.Text`
  font-size: ${({ theme }) => theme.font.md};
  font-weight: 600;
  color: ${({ theme }) => theme.color.primary.contrastText};

  text-align: left;
`;

export const WrapperSearchInput = styled.View`
  flex: 1;
`;

const ItemSeparator = styled.View`
  height: ${ms(8)}px;
`;

const ItemFooter = styled.View`
  height: ${ms(48)}px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  ItemSeparatorComponent: ItemSeparator,
  ListFooterComponent: ItemFooter,
})`
  background-color: ${({ theme }) => theme.color.background};
` as unknown as typeof FlatList;

export const WrapperContentModal = styled.View`
  padding: ${({ theme }) => theme.padding.xl};

  background-color: ${({ theme }) => theme.color.secundary.main};
`;

export const WrapperInput = styled.View`
  margin-bottom: ${ms(8)}px;
`;

const Separator = styled.View`
  width: ${ms(12)}px;
`;

export const WrapperSelectFilter = styled.View`
  margin-top: ${ms(8)}px;
  margin-bottom: ${ms(8)}px;
`;

export const ListSelector = styled.FlatList.attrs({
  horizontal: true,
  ItemSeparatorComponent: Separator,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignContent: 'center',
    justifyContent: 'space-evenly',
    marginLeft: ms(16),
    paddingRight: ms(24),
  },
})`
  margin-top: ${ms(16)}px;
  margin-bottom: ${ms(16)}px;
` as unknown as typeof FlatList;

export const WrapperButton = styled.View`
  margin-bottom: ${ms(8)}px;
`;

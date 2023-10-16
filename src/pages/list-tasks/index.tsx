import React, { useEffect, useState } from 'react';

import {
  CreateTaskType,
  Status,
  Task,
  UpdateTaskType,
  createTaskSchema,
  updateTaskSchema,
} from '../../features/task/types';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  BottomModal,
  Container,
  CreateButton,
  CreateButtonText,
  List,
  ListSelector,
  TextSelector,
  Title,
  Wrapper,
  WrapperButton,
  WrapperContentModal,
  WrapperHeader,
  WrapperInput,
  WrapperSearchInput,
  WrapperSelectFilter,
} from './styles';
import { Button, Input } from '../../components';
import {
  Item,
  Selector,
  createTaskRequest,
  deleteTaskRequest,
  listTasksRequest,
  updateTaskRequest,
} from '../../features/task';
import { UseToggle } from '../../shared';

const options = [
  {
    value: 'PENDING',
  },
  {
    value: 'IN_PROGRESS',
  },
  {
    value: 'COMPLETED',
  },
  {
    value: 'CANCELED',
  },
];

export function ListTasks() {
  const [data, setData] = useState<Task[]>([]);
  const [filtered, setFiltered] = useState<Task[]>([]);
  const [statusSelected, setStatusSelected] = useState<
    CreateTaskType['status'] | ''
  >('');
  const [searchText, setSearchText] = useState('');

  const [showCreateModal, toggleCreateModal] = UseToggle(false);
  const [showUpdateModal, toggleUpdateModal] = UseToggle(false);

  useEffect(() => {
    handleFetchList();
  }, []);

  async function handleFetchList() {
    const response = await listTasksRequest();
    setData(response || []);
  }

  useEffect(() => {
    const newArray = data.filter(
      item =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) &&
        item.status.includes(statusSelected as Status)
    );
    setFiltered(newArray);
  }, [data, searchText, statusSelected]);

  function handlePressItem(task: UpdateTaskType) {
    update.setValue('name', task.name);
    update.setValue('description', task.description);
    update.setValue('status', task.status);
    update.setValue('id', task.id);

    toggleUpdateModal();
  }

  function handlePressCreate() {
    toggleCreateModal();
  }

  const create = useForm<CreateTaskType>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      name: '',
      description: '',
    },
    mode: 'onBlur',
  });

  const update = useForm<UpdateTaskType>({
    resolver: zodResolver(updateTaskSchema),
    defaultValues: {
      name: '',
      description: '',
    },
    mode: 'onBlur',
  });

  async function handleCreate(formData: CreateTaskType) {
    const response = await createTaskRequest({ task: formData as Task });
    if (response) {
      await handleFetchList();
      toggleCreateModal();
    }
  }

  async function handleUpdate(formData: UpdateTaskType) {
    const response = await updateTaskRequest({
      id: formData.id!,
      task: formData as Task,
    });
    if (response) {
      await handleFetchList();
      toggleUpdateModal();
    }
  }

  async function handleDelete(id: string) {
    const response = await deleteTaskRequest({
      id,
    });
    if (response) {
      await handleFetchList();
      toggleUpdateModal();
    }
  }

  function handleSelectStatus(status: CreateTaskType['status']) {
    if (status === statusSelected) {
      return setStatusSelected('');
    }
    setStatusSelected(status);
  }
  return (
    <Container>
      <Wrapper>
        <Title>Todo List</Title>
        <WrapperHeader>
          <WrapperSearchInput>
            <Input placeholder="Pesquisar task" onChangeText={setSearchText} />
          </WrapperSearchInput>
          <CreateButton onPress={handlePressCreate}>
            <CreateButtonText>Criar</CreateButtonText>
          </CreateButton>
        </WrapperHeader>
        <WrapperSelectFilter>
          <TextSelector>Buscar por status</TextSelector>

          <ListSelector
            data={options}
            renderItem={({ item }) => (
              <Selector
                active={statusSelected === item.value}
                status={item.value as Status}
                title={item.value}
                onPress={() =>
                  handleSelectStatus(item.value as CreateTaskType['status'])
                }
              />
            )}
          />
        </WrapperSelectFilter>
      </Wrapper>
      <List
        data={filtered}
        renderItem={({ item }) => (
          <Item onPress={() => handlePressItem(item)} item={item} />
        )}
      />

      <BottomModal isVisible={showUpdateModal} animationIn="fadeIn">
        <WrapperContentModal>
          <Controller
            control={update.control}
            name="name"
            render={({
              field: { onChange, onBlur, value },
              formState: { errors },
            }) => (
              <WrapperInput>
                <Input
                  placeholder="Digite o nome da tarefa"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.name?.message}
                />
              </WrapperInput>
            )}
          />
          <Controller
            control={update.control}
            name="description"
            render={({
              field: { onChange, onBlur, value },
              formState: { errors },
            }) => (
              <WrapperInput>
                <Input
                  placeholder="Digite uma descrição da tarefa"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.description?.message}
                />
              </WrapperInput>
            )}
          />

          <TextSelector>Alterar status</TextSelector>
          <ListSelector
            data={options}
            renderItem={({ item }) => (
              <Selector
                active={item.value === update.watch('status')}
                status={item.value as Status}
                title={item.value}
                onPress={() => update.setValue('status', item.value as Status)}
              />
            )}
          />

          <WrapperButton>
            <Button onPress={update.handleSubmit(handleUpdate)}>
              Atualizar Task
            </Button>
          </WrapperButton>
          <WrapperButton>
            <Button
              onPress={update.handleSubmit(({ id }) => handleDelete(id!))}>
              Deletar Task
            </Button>
          </WrapperButton>
          <WrapperButton>
            <Button onPress={toggleUpdateModal}>Fechar</Button>
          </WrapperButton>
        </WrapperContentModal>
      </BottomModal>

      <BottomModal isVisible={showCreateModal}>
        <WrapperContentModal>
          <Controller
            control={create.control}
            name="name"
            render={({
              field: { onChange, onBlur },
              formState: { errors },
            }) => (
              <WrapperInput>
                <Input
                  placeholder="Digite o nome da tarefa"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={errors.name?.message}
                />
              </WrapperInput>
            )}
          />
          <Controller
            control={create.control}
            name="description"
            render={({
              field: { onChange, onBlur },
              formState: { errors },
            }) => (
              <WrapperInput>
                <Input
                  placeholder="Digite uma descrição da tarefa"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={errors.description?.message}
                />
              </WrapperInput>
            )}
          />

          <TextSelector>Alterar status</TextSelector>
          <ListSelector
            data={options.slice(0, -1)}
            renderItem={({ item }) => (
              <Selector
                active={item.value === create.watch('status')}
                status={item.value as Status}
                title={item.value}
                onPress={() =>
                  create.setValue(
                    'status',
                    item.value as CreateTaskType['status']
                  )
                }
              />
            )}
          />
          <WrapperButton>
            <Button onPress={create.handleSubmit(handleCreate)}>
              Criar Task
            </Button>
          </WrapperButton>
          <WrapperButton>
            <Button onPress={toggleCreateModal}>Fechar</Button>
          </WrapperButton>
        </WrapperContentModal>
      </BottomModal>
    </Container>
  );
}

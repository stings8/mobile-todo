import api, { isApiError } from '../../../services/api';
import { Task } from '../types';

const createTask = async ({
  task,
}: {
  task: Task;
}): Promise<Task | undefined> => {
  try {
    const { data } = await api.post('task', task);
    return data;
  } catch (error: any) {
    if (isApiError(error)) {
      console.log(error);
    } else {
      console.error(`Unexpected error: ${error.message}`);
    }
  }
};

export default createTask;

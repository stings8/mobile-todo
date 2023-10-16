import api, { isApiError } from '../../../services/api';
import { Task } from '../types';

export const updateTask = async ({
  id,
  task,
}: {
  id: string;
  task: Partial<Task>;
}): Promise<Task | undefined> => {
  try {
    const { data } = await api.patch(`task/${id}`, {
      name: task.name,
      description: task.description,
      status: task.status,
    });
    return data;
  } catch (error: any) {
    if (isApiError(error)) {
      console.log(error);
    } else {
      console.error(`Unexpected error: ${error.message}`);
    }
  }
};

export default updateTask;

import { isApiError } from '../../../services';
import api from '../../../services/api';
import { Task } from '../types';

const getTasks = async (): Promise<Task[] | undefined> => {
  try {
    const { data } = await api.get('task');
    return data;
  } catch (error: any) {
    if (isApiError(error)) {
      console.log(error);
    } else {
      console.error(`Unexpected error: ${error.message}`);
    }
  }
};

export default getTasks;

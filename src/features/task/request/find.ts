import api, { isApiError } from '../../../services/api';
import { Task } from '../types';

const getTaskById = async ({
  id,
}: {
  id: string;
}): Promise<Task | undefined> => {
  try {
    const { data } = await api.get(`task/${id}`);
    return data;
  } catch (error: any) {
    if (isApiError(error)) {
      console.log(error);
    } else {
      console.error(`Unexpected error: ${error.message}`);
    }
  }
};

export default getTaskById;

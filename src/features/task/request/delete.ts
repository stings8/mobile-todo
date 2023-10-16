import api, { isApiError } from '../../../services/api';

const deleteTask = async ({
  id,
}: {
  id: string;
}): Promise<Boolean | undefined> => {
  try {
    await api.delete(`task/${id}`);
    return true;
  } catch (error: any) {
    if (isApiError(error)) {
      console.log(error);
    } else {
      console.error(`Unexpected error: ${error.message}`);
    }
  }
};

export default deleteTask;

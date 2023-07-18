import { useMutation, useQueryClient } from 'react-query';
import {
  COLLECTION_ID_APPLICATIONS,
  DATABASE_ID,
  databases,
} from "../appwriteConfig";

const deleteApplication = async (id:string) => {
    try {
        await databases.deleteDocument(DATABASE_ID, COLLECTION_ID_APPLICATIONS, id);
    }catch(error) {
       throw new Error('Failed to delete item');
    }
}

const useDeleteApplication = () => {
  const queryClient = useQueryClient();

  return useMutation((itemId: string) => deleteApplication(itemId), {
    onSuccess: () => {
      // Invalidate and refetch relevant queries after successful deletion
      queryClient.invalidateQueries('applications');
    },
  });
};

export default useDeleteApplication;
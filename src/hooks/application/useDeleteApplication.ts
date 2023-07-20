import { useMutation, useQueryClient } from 'react-query';
import { useToast } from '@chakra-ui/react';
import {
  COLLECTION_ID_APPLICATIONS,
  DATABASE_ID,
  databases,
} from "../../appwriteConfig";

const deleteApplication = async (id:string) => {
    try {
        await databases.deleteDocument(DATABASE_ID, COLLECTION_ID_APPLICATIONS, id);
    }catch(error) {
       throw new Error('Failed to delete item');
    }
}

const useDeleteApplication = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation((itemId: string) => deleteApplication(itemId), {
    onSuccess: () => {
      // Invalidate and refetch relevant queries after successful deletion
      queryClient.invalidateQueries('applications');
      toast({
            title: "Application deleted.",
            description: "We've successfully deleted the application entry.",
            status: "error",
            position: "bottom-right",
            variant: "left-accent",
            duration: 5000,
            isClosable: true,
          });
    },
  });
};

export default useDeleteApplication;
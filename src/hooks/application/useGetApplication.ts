import { useQuery } from 'react-query';
import {
  COLLECTION_ID_APPLICATIONS,
  DATABASE_ID,
  databases,
} from "../../appwriteConfig";
// Make sure to have 'appwrite' instance from your Appwrite setup available in the context

const useGetApplication = (documentId?: string) => {
    if (!documentId) {
    throw new Error('Document ID is required');
  }

  const fetchApplication = async () => {
    const response = await databases.getDocument(
      DATABASE_ID,
      COLLECTION_ID_APPLICATIONS, documentId
    );
    return response;
  };

  const { data, isLoading, error} = useQuery(
    ['applications',documentId],
    fetchApplication
  );

  // You can add any additional handling logic here

  return { data, isLoading, error };
};

export default useGetApplication;

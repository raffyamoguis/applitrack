import { useQuery } from 'react-query';
import {
  COLLECTION_ID_APPLICATIONS,
  DATABASE_ID,
  databases,
} from "../../appwriteConfig";


const fetchApplications = async (queries?: any) => {
    try {
      // Call the Appwrite API endpoint to fetch projects
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_APPLICATIONS,
        queries,
      );
      return response;
    } catch (error) {
      throw new Error('Failed to fetch applications');
    }
  
};

const useApplications = (queries: any) => {
  return useQuery('applications',() => fetchApplications(queries), { staleTime: 0, });
};

export default useApplications;
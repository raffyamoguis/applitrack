import { useQuery } from 'react-query';
import {
  COLLECTION_ID_APPLICATIONS,
  DATABASE_ID,
  databases,
} from "../../appwriteConfig";

const fetchApplicationByDay = async (queries? : any) => {
    try {
      // Call the Appwrite API endpoint to fetch projects
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_APPLICATIONS,
        queries,
      );
      return  response;
    } catch (error) {
      throw new Error('Failed to fetch applications');
    }
  
};

const useApplicationByDay = (queries: any, key: string) => {
  return useQuery(key, () => fetchApplicationByDay(queries));
};

export default useApplicationByDay;
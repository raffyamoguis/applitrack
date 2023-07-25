import { useQuery } from 'react-query';
import {Query} from "appwrite";
import {
  COLLECTION_ID_APPLICATIONS,
  DATABASE_ID,
  databases,
} from "../../appwriteConfig";


const searchApplications = async (query: string, user_id: string) => {
    try {
      // Call the Appwrite API endpoint to fetch projects
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_APPLICATIONS,
        [
            Query.equal("user_id", user_id),
            Query.search('name', query),
        ]
      );
      return response;
    } catch (error) {
      throw new Error('Failed to fetch applications');
    }
  
};

const useSearchApplication = (query: string, user_id:string) => {
  return useQuery(['applications', query],() => searchApplications(query, user_id));
};

export default useSearchApplication;
import { useQuery } from 'react-query';
import { Query } from "appwrite";
import {
  COLLECTION_ID_APPLICATIONS,
  DATABASE_ID,
  databases,
} from "../../appwriteConfig";

const fetchJobRoles = async (query? : string) => {
    try {
      // Call the Appwrite API endpoint to fetch projects
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_APPLICATIONS,
        [
            Query.search("position_applied", query),
        ]
      );
      return response.documents;
    } catch (error) {
      throw new Error('Failed to fetch applications');
    }
  
};

const useGetJobRoles = (query: any) => {
  return useQuery(['jobRoles', query], () => fetchJobRoles(query));
};

export default useGetJobRoles;
import { useQuery } from 'react-query';
import { Query } from "appwrite";
import {
  COLLECTION_ID_APPLICATIONS,
  DATABASE_ID,
  databases,
} from "../../appwriteConfig";


const fetchApplications = async (id:string) => {
  try {
    // Call the Appwrite API endpoint to fetch projects
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_APPLICATIONS,
      [
        
        Query.orderDesc('$createdAt'),
        Query.equal('user_id', id),
      ]
    );
    return response;
  } catch (error) {
    throw new Error('Failed to fetch projects');
  }
};

const useApplications = (id:string) => {
  return useQuery('applications',() => fetchApplications(id));
};

export default useApplications;
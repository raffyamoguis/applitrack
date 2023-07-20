import { useQuery } from 'react-query';
import {
  COLLECTION_ID_APPLICATIONS,
  DATABASE_ID,
  databases,
} from "../../appwriteConfig";


const fetchApplications = async () => {
  try {
    // Call the Appwrite API endpoint to fetch projects
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_APPLICATIONS
    );
    return response;
  } catch (error) {
    throw new Error('Failed to fetch projects');
  }
};

const useApplications = () => {
  return useQuery('applications', fetchApplications);
};

export default useApplications;
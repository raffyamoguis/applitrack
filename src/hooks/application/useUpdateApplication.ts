import { useMutation } from 'react-query';
import {
  COLLECTION_ID_APPLICATIONS,
  DATABASE_ID,
  databases,
} from "../../appwriteConfig";


interface ApplicationProp {
    documentID: string;
    application: ApplicationType;
}

interface ApplicationType {
    name: string;
    info: string;
    position_applied: string;
    status: string;
}

const updateApplication = async (application: ApplicationProp) => {
  try {
    const { documentID, application: updatedApplication } = application;
    const response = await databases.updateDocument(
      DATABASE_ID,
      COLLECTION_ID_APPLICATIONS,
      documentID,
      updatedApplication
    );
    return response; // Return the response or any relevant data you might need
  } catch (error) {
    throw new Error('Failed to update document');
  }
};

const useUpdateApplication = () => {
  return useMutation((data: ApplicationProp) => updateApplication(data));
};

export default useUpdateApplication;

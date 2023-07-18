import { useMutation } from "react-query";
import {ID} from "appwrite";
import {
  COLLECTION_ID_APPLICATIONS,
  DATABASE_ID,
  databases,
} from "../appwriteConfig";

interface NewItem {
  name: string;
  info?: string;
  position_applied: string;
  status:string;
  user_id?:string;
}

const addApplication = async (newItem: NewItem) => {
  try {
    // Call the Appwrite API endpoint to add the new item
    const response = await databases.createDocument(DATABASE_ID, COLLECTION_ID_APPLICATIONS, ID.unique(), {
      name: newItem.name,
      info: newItem.info,
      position_applied: newItem.position_applied,
      status: newItem.status,
      user_id: newItem.user_id,
    });
    return response.$id;
  } catch (error) {
    throw new Error('Failed to add item');
  }
};

const useAddApplication = () => {
  return useMutation((newItem: NewItem) => addApplication(newItem));
};

export default useAddApplication;

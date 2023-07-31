import { Client, Databases, Account, Storage} from 'appwrite';

export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
export const PROJECT_ENDPOINT = import.meta.env.VITE_PROJECT_ENDPOINT;
export const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
export const COLLECTION_ID_APPLICATIONS = import.meta.env.VITE_COLLECTION_ID_APPLICATIONS;
export const BUCKET_ID = import.meta.env.VITE_BUCKET_ID;
export const COLLECTION_ID_AVATARS = import.meta.env.VITE_COLLECTION_ID_AVATARS;
 
const client = new Client();


client.setEndpoint(import.meta.env.VITE_PROJECT_ENDPOINT).setProject(import.meta.env.VITE_PROJECT_ID);

export const databases = new Databases(client);

export const account = new Account(client);

export const storage = new Storage(client);


export default client;
import { Client, Databases } from 'appwrite';

export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
export const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
export const COLLECTION_ID_APPLICATIONS = import.meta.env.VITE_COLLECTION_ID_APPLICATIONS;
 
const client = new Client();


client.setEndpoint(import.meta.env.VITE_PROJECT_ENDPOINT).setProject(import.meta.env.VITE_PROJECT_ID);

export const databases = new Databases(client);

export default client;
import { useQuery } from "react-query";
import { Query } from "appwrite";
import { databases, DATABASE_ID, COLLECTION_ID_AVATARS } from "../../appwriteConfig";

const fetchAvatarID = async (userid:string) => {
    try {
        const result = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID_AVATARS,
        [Query.equal("user_id", userid)]
      ); return result?.documents[0];
    } catch (error) {
        console.log(error);
    }
}

const useGetAvatarID = (userid: string) => {
    return useQuery('avatarID', () => fetchAvatarID(userid))
}

export default useGetAvatarID;

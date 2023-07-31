import { useQuery } from "react-query";
import { storage, BUCKET_ID } from "../../appwriteConfig";

const fetchAvatar = async ($id: string) => {
    console.log($id, " : 64c7c1b3a854c46f8b7f");
    try {
        const result = await storage.getFilePreview(BUCKET_ID, $id);
        return result;
    }catch(error) {
        console.log(error);
    }
}

const useGetAvatar = ($id: string) => {
    return useQuery('avatar', () => fetchAvatar($id))
}

export default useGetAvatar;
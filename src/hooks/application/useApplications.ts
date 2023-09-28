import { useQuery } from "react-query";
import { Query } from "appwrite";
import {
  COLLECTION_ID_APPLICATIONS,
  DATABASE_ID,
  databases,
} from "../../appwriteConfig";

interface Props {
  userId: string;
  sortType?: string;
  filterType?: string;
  offset?: number;
}

const fetchApplications = async ({
  userId,
  sortType = "Descending",
  filterType,
  offset = 12,
}: Props) => {
  console.log("Userid: ", userId);
  try {
    // Call the Appwrite API endpoint to fetch projects
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID_APPLICATIONS,
      [
        Query.equal("user_id", userId),

        sortType === "Descending"
          ? Query.orderDesc("$createdAt")
          : Query.orderAsc("$createdAt"),
        Query.limit(offset),
        filterType !== "No filter" && Query.equal("status", filterType),
      ]
    );
    return response;
  } catch (error) {
    throw new Error("Failed to fetch applications");
  }
};

const useApplications = ({ userId, sortType, filterType, offset }: Props) => {
  return useQuery(
    ["applications", sortType, filterType, offset],
    () => fetchApplications({ userId, sortType, filterType, offset }),
    {
      staleTime: 0,
    }
  );
};

export default useApplications;

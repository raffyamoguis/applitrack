import React, { useRef, ChangeEvent } from "react";
import { ID } from "appwrite";
import { Box, Avatar, Flex, Icon, useToast } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import {
  databases,
  storage,
  BUCKET_ID,
  COLLECTION_ID_AVATARS,
  DATABASE_ID,
} from "../appwriteConfig";
import useGetAvatarID from "../hooks/profile/useGetAvatarID";

interface UserProfileProps {
  user: {
    $id: string;
    name: string;
  };
}

const ProfileAvatar: React.FC<UserProfileProps> = ({ user }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const toast = useToast();

  const { data: avatarID } = useGetAvatarID(user.$id);

  // Function to handle file upload
  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const newFile = event.target.files?.[0];

    if (newFile && newFile.type.startsWith("image/")) {
      // Do something with the image file, e.g., upload it to the server
      // Replace the following console.log with your actual upload logic

      await storage
        .createFile(BUCKET_ID, ID.unique(), newFile)
        .then(async (result: any) => {
          console.log("Successfully uploaded new avatar.");

          // Delete old avatar
          await storage
            .deleteFile(BUCKET_ID, avatarID.avatar_id)
            .then(() => console.log("Old image successfully deleted."))
            .catch((error: any) => console.log(error));

          // Update avatar collections
          await databases
            .updateDocument(DATABASE_ID, COLLECTION_ID_AVATARS, avatarID.$id, {
              avatar_id: result.$id,
            })
            .then(() => console.log("Successfully updated avatar"))
            .catch((error: any) => console.log(error));
        })
        .catch((error: any) => {
          console.log(error);
        });

      // Show a toast message indicating the successful upload
      //   toast({
      //     title: "Image Uploaded",
      //     description: `You have successfully uploaded ${file.name}`,
      //     status: "success",
      //     duration: 3000,
      //     isClosable: true,
      //   });
    } else {
      // Show a toast message indicating that only images are allowed
      toast({
        title: "Invalid File",
        description: "Please upload only image files.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      position="relative"
      display="inline-block"
      _hover={{ "& > div": { opacity: 1 } }}
    >
      <Avatar size="xl" name={user.name} src="" />

      <Flex
        position="absolute"
        bottom="0"
        left="50%"
        transform="translateX(-50%)"
        bg="gray.100"
        rounded="full"
        boxShadow="md"
        p="1"
        opacity="0"
        transition="opacity 0.2s"
        cursor="pointer"
        onClick={() => inputRef.current?.click()} // Trigger file input click on icon click
      >
        <Icon as={EditIcon} boxSize={4} color="gray.500" />
        <input
          type="file"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
      </Flex>
    </Box>
  );
};

export default ProfileAvatar;

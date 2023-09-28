import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  Input,
  InputRightElement,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { useAuth } from "../../utils/AuthContext";
import { account } from "../../appwriteConfig";

interface ProfileInput {
  name: string;
  email: string;
  oldpassword: string;
  newpassword: string;
}

const OverviewProfile: React.FC = () => {
  const { user } = useAuth();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ProfileInput>();

  const onSubmit = async (data: ProfileInput) => {
    // Check th old password
    await account
      .createEmailSession(user?.email, data.oldpassword)
      .then(async () => {
        // Update everything else
        // Update name
        await account
          .updateName(data.name)
          .then(() => {
            console.log("Updated name success");
          })
          .catch((error: string) => console.log(error));
      })
      .catch((error: any) => {
        toast({
          title: "Old password is incorrect",
          status: "error",
          variant: "left-accent",
          duration: 5000,
          isClosable: true,
        });
        console.log(error);
      });
  };

  const checkOldPassword = async (oldpass: string) => {
    try {
      const result = await account.createEmailSession(user?.email, oldpass);
      console.log(result);

      if (result) {
        console.log("Ok");
      } else {
        console.log("Not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box boxSize={{ base: "xs", sm: "sm", md: "md" }} m="auto" mt="4" p="2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb="4" isInvalid={!!errors.name?.message}>
          <FormLabel fontSize="sm">Name</FormLabel>
          <Input
            type="text"
            defaultValue={user.name}
            focusBorderColor="#2f2f31"
            {...register("name", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl mb="4" isInvalid={!!errors.email?.message}>
          <FormLabel fontSize="sm">Email</FormLabel>
          <Input
            type="text"
            defaultValue={user.email}
            focusBorderColor="#2f2f31"
            {...register("email", {
              required: "This is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl mb="2" isInvalid={!!errors.oldpassword?.message}>
          <FormLabel fontSize="sm">Old password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              focusBorderColor="#2f2f31"
              {...register("oldpassword", {
                required: "Old password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            <Flex alignItems="center">
              <InputRightElement width="4.5rem" h="100%" onClick={handleClick}>
                {show ? (
                  <ViewOffIcon color="gray" />
                ) : (
                  <ViewIcon color="gray" />
                )}
              </InputRightElement>
            </Flex>
          </InputGroup>
          <FormErrorMessage>
            {errors.oldpassword && errors.oldpassword.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl mb="4" isInvalid={!!errors.newpassword?.message}>
          <FormLabel fontSize="sm">New password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              focusBorderColor="#2f2f31"
              {...register("newpassword", {
                required: "New password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
            <Flex alignItems="center">
              <InputRightElement width="4.5rem" h="100%" onClick={handleClick}>
                {show ? (
                  <ViewOffIcon color="gray" />
                ) : (
                  <ViewIcon color="gray" />
                )}
              </InputRightElement>
            </Flex>
          </InputGroup>
          <FormErrorMessage>
            {errors.newpassword && errors.newpassword.message}
          </FormErrorMessage>
        </FormControl>
        <Box textAlign="left" mb="4">
          <Button
            size="sm"
            colorScheme="nigga"
            type="submit"
            isDisabled={!isDirty}
          >
            Update
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default OverviewProfile;

import {
  Avatar,
  Flex,
  Box,
  Text,
  Image,
  Menu,
  MenuButton,
  Portal,
  MenuList,
  MenuItem,
  useToast,
  Divider,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import React, { useState } from "react";
import Actions from "./Actions";

const Comment = ({ comment, createdAt, likes, username, avatar }) => {
  const [liked, setLiked] = useState(false);
  const toast = useToast();
  const copyURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {
      toast({
        description: "Copied to clipboard",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    });
  };

  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src={avatar} size={"sm"} name="Mark Zuckerberg" />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex flex={1} flexDirection={"column"} gap={2}>
            <Flex justifyContent={"space-between"} w={"full"}>
              <Flex w={"full"} alignItems={"center"}>
                <Text fontSize={{ base: "sm", md: "md" }} fontWeight={"bold"}>
                  {username}
                </Text>
                <Image src="/verified.png" w={4} h={4} ml={1} />
              </Flex>
              <Flex gap={4} alignItems={"center"}>
                <Text fontSize={{ base: "sm", md: "md" }} color={"gray.light"}>
                  {createdAt}
                </Text>
                <Box
                  className="dot-container"
                  onClick={(e) => e.preventDefault()}
                >
                  <Menu>
                    <MenuButton>
                      <BsThreeDots />
                    </MenuButton>
                    <Portal>
                      <MenuList bg={"gray.dark"}>
                        <MenuItem bg={"gray.dark"} onClick={copyURL}>
                          Copy link
                        </MenuItem>
                      </MenuList>
                    </Portal>
                  </Menu>
                </Box>
              </Flex>
            </Flex>
            <Text fontSize={{ base: "sm", md: "md" }}>{comment}</Text>
            <Actions liked={liked} setLiked={setLiked} />
            <Text fontSize={{ base: "sm", md: "md" }} color={"gray.light"}>
              {likes + (liked ? 1 : 0)} likes
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default Comment;

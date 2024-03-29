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
  Button,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import { React, useState } from "react";
import Comment from "../components/Comment";

const PostPage = () => {
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
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/zuck-avatar.png" size={"md"} name="Mark Zuckerberg" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              Mark Zuckerberg
            </Text>
            <Image src="/verified.png" alt="verified" w={4} h={4} ml={4} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={{ base: "sm", md: "md" }} color={"gray.light"}>
            5h
          </Text>
          <Box className="dot-container" onClick={(e) => e.preventDefault()}>
            <Menu>
              <MenuButton>
                <BsThreeDots />
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"}>
                  <MenuItem bg={"gray.dark"} onClick={copyURL}>
                    Copy link to Post
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      <Text my={3} fontSize={{ base: "md", md: "lg" }}>
        Let's talk about Threads.
      </Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src={"/post1.png"} w={"full"} />
      </Box>
      {/* Actions */}
      <Flex gap={3} my={1}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>
      {/* Counts */}
      <Flex gap={2} alignItems={"center"}>
        <Text fontSize={"sm"} color={"gray.light"}>
          {500 + (liked ? 1 : 0)} likes
        </Text>
        <Box w={1} h={1} bg={"gray.light"} borderRadius={"full"} />
        <Text fontSize={"sm"} color={"gray.light"}>
          320 replies
        </Text>
      </Flex>
      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋🏻</Text>
          <Text fontSize={"sm"} color={"gray.light"}>
            Get the app to like, reply and post
          </Text>
          <Button>Get</Button>
        </Flex>
      </Flex>

      <Divider my={4} />
      <Comment
        comment={"Looks great!"}
        createdAt={"5h"}
        likes={500}
        username={"zorororonoa"}
        avatar={"https://bit.ly/dan-abramov"}
      />
      <Comment
        comment={"Great work!"}
        createdAt={"5h"}
        likes={135}
        username={"johnsnow"}
        avatar={"https://bit.ly/kent-c-dodds"}
      />
      <Comment
        comment={"Love it"}
        createdAt={"5h"}
        likes={200}
        username={"satorugojo"}
        avatar={"https://bit.ly/code-beast"}
      />
    </>
  );
};

export default PostPage;

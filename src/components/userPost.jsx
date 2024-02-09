import { React, useState } from "react";
import { Link } from "react-router-dom";
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
import Actions from "./Actions";

const userPost = ({ postImg, postTitle, likes, replies }) => {
  const [liked, setLiked] = useState(false);
  const toast = useToast();
  const copyURL = () => {
    const currentURL = window.location.href + "/markzuckerberg/post/1";
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
      <Link to={"/markzuckerberg/post/1"}>
        <Flex gap={3} mb={4} py={5}>
          {/* Left - Avatars and Line */}
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Avatar size={"md"} name="Mark Zuckerberg" src="/zuck-avatar.png" />
            <Box w="1px" h="full" bg="gray.light" my={2} />
            <Box w="full" position={"relative"}>
              <Avatar
                size={"xs"}
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                position={"absolute"}
                top={"0px"}
                left={"15px"}
                padding={"2px"}
              />
              <Avatar
                size={"xs"}
                name="Dan Abrahmov"
                src="https://bit.ly/kent-c-dodds"
                position={"absolute"}
                bottom={"0px"}
                right={"-5px"}
                padding={"2px"}
              />
              <Avatar
                size={"xs"}
                name="Dan Abrahmov"
                src="https://bit.ly/code-beast"
                position={"absolute"}
                bottom={"0px"}
                left={"4px"}
                padding={"2px"}
              />
            </Box>
          </Flex>

          {/* Right - Post and Image and Actions */}
          <Flex flex={1} flexDirection={"column"} gap={2}>
            <Flex justifyContent={"space-between"} w={"full"}>
              <Flex w={"full"} alignItems={"center"}>
                <Text fontSize={{ base: "sm", md: "md" }} fontWeight={"bold"}>
                  markzuckerberg
                </Text>
                <Image src="/verified.png" w={4} h={4} ml={1} />
              </Flex>
              <Flex gap={4} alignItems={"center"}>
                <Text fontSize={{ base: "sm", md: "md" }} color={"gray.light"}>
                  5h
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
                          Copy link to Post
                        </MenuItem>
                      </MenuList>
                    </Portal>
                  </Menu>
                </Box>
              </Flex>
            </Flex>
            <Text fontSize={"sm"}>{postTitle}</Text>
            {postImg && (
              <Box
                borderRadius={6}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"gray.light"}
              >
                <Image src={postImg} w={"full"} />
              </Box>
            )}
            {/* Actions */}
            <Flex gap={3} my={1}>
              <Actions liked={liked} setLiked={setLiked} />
            </Flex>
            {/* Counts */}
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>
                {likes + (liked ? 1 : 0)} likes
              </Text>
              <Box w={1} h={1} bg={"gray.light"} borderRadius={"full"} />
              <Text fontSize={"sm"} color={"gray.light"}>
                {replies} replies
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Link>
      <Divider my={4} />
    </>
  );
};

export default userPost;

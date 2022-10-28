import React from 'react'
import { Box, Button, Heading, HStack, Input, Stack, VStack, Text } from "@chakra-ui/react"
import { AiOutlineSend } from "react-icons/ai"
const Footer = () => {
    return (
        <>
            <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
                <Stack direction={["column", "row"]}>
                    <VStack alignItems={"stretch"} w={"full"} px={"4"}>
                        <Heading size={"md"} textTransform={"uppercase"}>
                            Please Log In to get more updates
                        </Heading>

                        <HStack
                            borderBottom={"2px solid white"}
                            py="2"

                        >

                            <Input placeholder='Please Enter your email here........' focusBorderColor='none' border={"none"} borderRadius={"none"} outline={"none"} />
                            <Button
                                p={"0"}
                                color="telegram.900"
                                variant={"ghost"}
                                borderRadius={"0 20px 20px 0"}
                            >
                                <AiOutlineSend size={"20"} />
                            </Button>
                        </HStack>
                    </VStack>

                    <VStack w={'full'}
                        borderLeft={["none", "1px solid white"]}
                        borderRight={["none", "1px solid white"]}
                    >
                        <Heading textTransform={"uppercase"} textAlign={"center"}>VIDEO HUB</Heading>
                        <Text>All Rights reserved</Text>
                    </VStack>


                    <VStack w={'Full'}>
                        <Heading size={"md"} textTransform={"uppercase"}>
                            Social Media
                        </Heading>
                        <Button variant={"link"} colorScheme={"telegram"}>
                            <a target={"black"} href="https://www.youtube.com">Youtube</a>
                        </Button>
                        <Button variant={"link"} colorScheme={"telegram"}>
                            <a target={"black"} href="https://instagram.com/_rohit_kumar_2_">Instagram</a>
                        </Button>
                        <Button variant={"link"} colorScheme={"telegram"}>
                            <a target={"black"} href="https://github.com/0Rohit2022">Github</a>
                        </Button>

                    </VStack>

                </Stack>
            </Box>
        </>
    )
}

export default Footer
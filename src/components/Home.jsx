import { Box, Container, Heading, Image, Stack , Text} from '@chakra-ui/react'
import React from 'react'
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from "../Assets/1.jpg";
import img2 from "../Assets/2.jpg";
import img3 from "../Assets/3.jpg";
import img4 from "../Assets/4.jpg";
import img5 from "../Assets/5.png";

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50% , -50%)",
    textTransform: "uppercase",
    padding: "4",
}



const Home = () => {
    return (
        <>
            <Box>
                <MyCarousel



                />

                <Container maxW={'container.xl'} minH={'100vh'} p="16">

                    <Heading textTransform={"uppercase"}
                        py="2"
                        w={"fit-content"}
                        borderBottom={"2px solid"}
                        m="auto"
                    >
                        Services
                    </Heading>

                    <Stack
                        h={"full"}
                        p={"4"}
                        alignItems={"center"}
                        direction={["column", "row"]}
                    >

                        <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />
                            <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","15"]} textAlign={"center"}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laudantium dolorem veritatis est debitis! Asperiores ipsam illum soluta nisi odio doloremque aliquid ut ducimus amet voluptatum eveniet, sequi voluptate adipisci voluptatibus modi sint enim vitae maiores reiciendis illo exercitationem eos ipsa! Est quae veritatis odio, reprehenderit ipsam facere debitis necessitatibus omnis pariatur id aspernatur iusto fugit nulla culpa beatae modi ab? Deleniti incidunt nisi voluptas, nulla eaque sapiente non voluptatibus officia modi, quo quos iure dolores culpa rerum quia? Esse sed, maxime ratione ipsum assumenda eligendi quod facere a optio nisi nostrum enim fuga, accusantium provident temporibus totam minima est.
                            </Text>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}


const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
    >
        <Box w="full" h={'100vh'}>
            <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'}   {...headingOptions}>
                Watch The Future
            </Heading>
        </Box>


        <Box w="full" h={'100vh'}>
            <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.900'} color={'black'}   {...headingOptions}>
                Future is Gaming
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'}   {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
            <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'}   {...headingOptions}>
                Night life is cool
            </Heading>
        </Box>


    </Carousel>
);

export default Home
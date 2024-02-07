import '../../styles/styles.css'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

import { labelData, blogData, eventsData, videosData } from './data'

import {
  Container,
  Heading,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
  TabIndicator,
  Box,
  List,
  ListItem,
  Text,
  Flex,
  Link,
} from '@chakra-ui/react'

const FeaturedArticles = () => {
  return (
    <Container
      id="blogs"
      as="section"
      bg="#fbf6f1"
      maxWidth="auto"
      pt="60px"
      pb="120px"
    >
      <Heading
        as="h2"
        textAlign="center"
        fontFamily="PT-serif"
        fontSize="40px"
        fontWeight="700"
        mb="20"
      >
        Featured Articles
      </Heading>
      <Tabs as="div" borderColor="#fbf6f1">
        <TabList fontFamily="Poppins" fontSize="16px" fontWeight="400">
          {labelData.map((label, i) => (
            <Tab key={i}>{label.label}</Tab>
          ))}
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="1px"
          bg="#403e3e"
          borderRadius="1px"
        />
        <TabPanels>
          {/* Blog Tap Panel */}
          <TabPanel
            as="div"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            gap="70px"
          >
            <Flex
              as="div"
              gap="70px"
              wrap="wrap"
              justifyContent="center"
              alignItems="center"
              p="10px"
              id="blogCard"
            >
              {blogData.map((blog, i) => (
                <Box
                  as="div"
                  key={i}
                  h={{ base: '467px', sm: '592px' }}
                  w={{ base: '247px', sm: '427px' }}
                >
                  <List spacing="3">
                    <ListItem as="li">
                      <Image src={blog.articleImg} alt="Article" />
                    </ListItem>
                    <Flex gap="8px">
                      <ListItem as="li" h="25px" w="25px">
                        <Image
                          src={blog.authorAvatar}
                          alt="Author"
                          style={{ borderRadius: '50%' }}
                        />
                      </ListItem>
                      <Text
                        fontFamily="sofian-sans"
                        fontSize="16px"
                        fontWeight="700"
                      >
                        {blog.author}
                      </Text>
                      <Text
                        fontFamily="sofian-sans"
                        fontSize="16px"
                        fontWeight="200"
                      >
                        {blog.datePosted}
                      </Text>
                    </Flex>
                    <ListItem as="li">
                      <Text
                        fontFamily="PT-sherif"
                        fontSize="20px"
                        fontWeight="700"
                      >
                        {blog.headline}
                      </Text>
                    </ListItem>
                    <ListItem as="li">
                      <Text
                        fontFamily="PT-sherif"
                        fontSize="16px"
                        fontWeight="400"
                      >
                        {blog.lead}
                      </Text>
                    </ListItem>
                    <Flex alignItems="center" gap="1">
                      <Box
                        as="button"
                        h="28px"
                        w={{ base: '76px', sm: '87px', md: '121px' }}
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        bg="#1A0329"
                        borderColor="#ccd0d5"
                        _hover={{ bg: '#FFFFFF', color: '#1c1a1a' }}
                        color="#F7F7F7"
                        fontFamily="Poppins"
                        fontSize={{ base: '10px', sm: '12px', md: '16px' }}
                        fontWeight="300"
                        borderRadius="100px"
                      >
                        <Link href="https://celoafricadao.hashnode.dev/writing-for-celo-africa-dao">
                          {blog.button1}
                        </Link>
                        <Link href="https://celoafricadao.hashnode.dev/celo-africa-dao-at-ethsafari-2023-report">
                          {blog.button11}
                        </Link>
                        <Link href="https://celoafricadao.hashnode.dev/decentralized-intelligence-a-web3-ai-summit-report">
                          {blog.button12}
                        </Link>
                      </Box>
                      {/* <Box
                        as="button"
                        h="28px"
                        w={{ base: '76px', sm: '87px', md: '121px' }}
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        bg="#1A0329"
                        borderColor="#ccd0d5"
                        _hover={{ bg: '#FFFFFF', color: '#1c1a1a' }}
                        color="#F7F7F7"
                        fontFamily="Poppins"
                        fontSize={{ base: '10px', sm: '12px', md: '16px' }}
                        fontWeight="300"
                        borderRadius="100px"
                      >
                        {/* <Link href="/">{blog.button2}</Link> */}

                      {/* <Text
                        fontFamily="Poppins"
                        fontSize={{ base: '12px', sm: '14px', md: '16px' }}
                        fontWeight="300"
                      >
                        {blog.timeToRead}
                      </Text> */}
                    </Flex>
                  </List>
                </Box>
              ))}
            </Flex>

            <Box
              as="button"
              h="46px"
              w="168px"
              p="10px"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              bg="transparent"
              borderColor="#ccd0d5"
              _hover={{ bg: '#FFFFFF' }}
              color="#1C1C1C"
              fontFamily="sofia-sans"
              fontSize="24px"
              fontWeight="400"
              borderRadius="60px"
              border="1px solid #676767"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Link href="https://celoafricadao.hashnode.dev/">See More</Link>
            </Box>
          </TabPanel>

          {/* Events Tab Panel */}
          <TabPanel as="div">
            <Flex
              as="div"
              columnGap="70px"
              rowGap="20px"
              wrap="wrap"
              justifyContent="center"
              alignItems="center"
              pl="10px"
            >
              {eventsData.map((event, i) => (
                <List
                  as="ul"
                  key={i}
                  border="1px solid black"
                  overflow="hidden"
                  h="auto"
                  w="427px"
                  borderRadius="30px"
                  bgColor={event.bgColor}
                >
                  <ListItem as="li">
                    <Image src={event.eventImg} alt="event" />
                  </ListItem>
                  <ListItem as="li">
                    <Text
                      color="#F7F7F7"
                      fontFamily="PT-serif"
                      fontWeight="700"
                      fontSize={{ base: '16px', sm: '20px' }}
                      pos="relative"
                      top={{ base: '-32', sm: '-40' }}
                      mx="20px"
                    >
                      {event.description}
                    </Text>
                  </ListItem>
                  <ListItem as="li" bgColor={event.bgColor}>
                    <Text position="relative" top={{ base: '-95', sm: '-121' }}>
                      <Image src={event.eventBg} alt="event background" />
                    </Text>
                    <Text
                      color="black"
                      fontFamily="PT-serif"
                      fontWeight="700"
                      fontSize={{ base: '16px', sm: '20px' }}
                      m="20px"
                    >
                      {event.headline}
                    </Text>
                    <Text
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mt={2}
                      m="20px"
                      pb="40px"
                      href="/"
                    >
                      <Link
                        href={event.readmoreLink}
                        fontFamily="sans-serif"
                        fontWeight="700"
                        fontSize={{ base: '16px', sm: '20px' }}
                      >
                        View Photos
                      </Link>
                      <Link href={'/'}>
                        <FaArrowRight />
                      </Link>
                    </Text>
                  </ListItem>
                </List>
              ))}
            </Flex>
          </TabPanel>

          {/* Video Tap Panel */}

          <TabPanel
            as="div"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            gap="103px"
          >
            <Flex
              as="div"
              padding="34px"
              wrap="wrap"
              columnGap="70px"
              rowGap="40px"
              justifyContent="center"
              alignItems="center"
            >
              {videosData.map((video, index) => (
                <List
                  as="ul"
                  h="auto"
                  w={{ base: '212px', sm: '283px', md: '514px' }}
                  key={index}
                >
                  <ListItem
                    as="li"
                    borderRadius="45px"
                    overflow="hidden"
                    w="100%"
                    h={{ base: '249px', md: '399px' }}
                    mb="25px"
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.videoLink}
                      title="Celo Spark: Tokenized Carbon Credits with Toucan"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullscreen
                    ></iframe>
                  </ListItem>
                  <ListItem as="li">
                    <Flex as="ul" listStyleType="none" columnGap="7px">
                      <ListItem h="63px" w="63px">
                        <Image
                          src={video.authorAvatar}
                          alt="video author"
                          style={{ borderRadius: '50%' }}
                        />
                      </ListItem>
                      <ListItem>
                        <Flex
                          columnGap="10px"
                          fontFamily="sofian-sans"
                          fontSize={{ base: '12', sm: '16px' }}
                          fontWeight="300"
                        >
                          <Text color="#1E1E1E">{video.authorName}</Text>
                          <Text color="#161616">Feb, 16th 2023</Text>
                        </Flex>
                        <Text
                          fontFamily="PT-Serif"
                          fontSize={{ base: '14px', sm: '18px' }}
                          fontWeight="700"
                        >
                          {video.title}
                        </Text>
                        <Flex
                          columnGap="10px"
                          fontFamily="sofian-sans"
                          fontSize={{ base: '12', sm: '16px' }}
                          fontWeight="300"
                        >
                          <Text color="#1E1E1E">{video.views}</Text>
                          <Text color="#161616">{video.daysAgo}</Text>
                        </Flex>
                      </ListItem>
                    </Flex>
                  </ListItem>
                </List>
              ))}
            </Flex>

            {/* See More Button */}
            <Box
              as="button"
              h="46px"
              w="168px"
              p="10px"
              transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
              bg="transparent"
              _hover={{ bg: '#FFFFFF' }}
              color="#1C1C1C"
              fontFamily="sofia-sans"
              fontSize="24px"
              fontWeight="400"
              borderRadius="60px"
              border="1px solid #676767"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Link href="/">See More</Link>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}

export default FeaturedArticles

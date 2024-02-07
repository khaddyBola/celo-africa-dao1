import {
  Heading,
  Box,
  Text,
  Link,
  Container,
  Flex,
  Card,
  Button,
} from '@chakra-ui/react'
import Image from 'next/image'
import Linkedin from '../../img/linkedin.svg'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { useState } from 'react'
import '../../styles/styles.css'

const teamMember = [
  {
    id: 1,
    img: require('../../img/khadijat.webp'),
    name: 'Khadijah Amusat',
    role: 'Local Developer Relations',
    linkedinLink: 'https://www.linkedin.com/in/KhadijahAmusat/',
  },
  {
    id: 2,
    img: require('../../img/chuta.webp'),
    name: 'Chimezie Chuta',
    role: 'Local Event Lead',
    linkedinLink: 'https://www.linkedin.com/in/ChimezieChuta/',
  },
  {
    id: 3,
    img: require('../../img/Aliu.webp'),
    name: 'Aliu Musa',
    role: 'Local Business Development',
    linkedinLink: 'https://www.linkedin.com/in/aliumusa/',
  },
  {
    id: 4,
    img: require('../../img/Noah.webp'),
    name: 'Noah Baalessanvu',
    role: 'Local Marketing and SociaL',
    linkedinLink: 'https://www.linkedin.com/in/baalessanvu/',
  },
]

const Team = () => {
  const [index, setIndex] = useState(0)
  const { id, img, name, role, linkedinLink } = teamMember[index]

  const prevTestimonialHandler = () => {
    setIndex((prev) => prev - 1)

    if (index <= 0) {
      return setIndex(teamMember.length - 1)
    }
  }

  const nextTestimonialHandler = () => {
    setIndex((prev) => prev + 1)

    if (index >= teamMember.length - 1) {
      return setIndex(0)
    }
  }

  return (
    <Container
      id="team-section"
      as="footer"
      maxW="auto"
      bg="#1A0329"
      pt={{ base: '62px', lg: '72px' }}
      pb="139px"
      color="#F7F7F7"
    >
      <Box textAlign="center" fontFamily="PT Serif">
        <Heading
          as="h2"
          fontSize={{ base: '22px', md: '40px' }}
          fontWeight="700"
        >
          Meet Our Team
        </Heading>
      </Box>

      <Flex
        display={{ base: 'none', md: 'flex' }}
        mx="35px"
        gap="61px"
        mt="129px"
        columnGap={{ sm: '42px' }}
        wrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {teamMember.map((member) => (
          <Box
            as="div"
            key={member.id}
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            fontWeight="400"
          >
            <Box as="div">
              <Image
                src={member.img}
                alt="Team member"
                style={{ borderRadius: '50%', height: '200px', width: '200px' }}
              />
            </Box>

            <Heading mt="13px" fontFamily="PT serif" fontSize="28px">
              {member.name}
            </Heading>
            <Text
              mt="10px"
              fontFamily="Sofia Sana"
              fontSize="18px"
              fontWeight="400"
            >
              {member.role}
            </Text>
            <Link
              mt="10px"
              display="inline"
              href={member.linkedinLink}
              isExternal
            >
              <Image src={Linkedin} alt="LinkedinIn logo" />
            </Link>
          </Box>
        ))}
      </Flex>

      {/* For Phones */}
      <Flex
        display={{ base: 'flex', md: 'none' }}
        flexDir="column"
        mt="90px"
        columnGap={{ sm: '172px' }}
        wrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        <Card
          as="div"
          bgColor="#1A0329"
          color="#F7F7F7"
          w="239px"
          key={id}
          direction="column"
          justifyContent="center"
          alignItems="center"
          fontWeight="400"
          maxW="auto"
        >
          <Box
            w={{ base: '200px', sm: '239px' }}
            h={{ base: '200px', sm: '239px' }}
          >
            <Image
              src={img}
              alt="Team member"
              style={{ borderRadius: '50%' }}
            />
          </Box>

          <Heading mt="13px" fontFamily="PT serif" fontSize="28px">
            {name}
          </Heading>
          <Text
            mt="10px"
            fontFamily="Sofia Sana"
            fontSize="18px"
            fontWeight="400"
          >
            {role}
          </Text>
          <Link mt="10px" display="inline" href={linkedinLink} isExternal>
            <Image src={Linkedin} alt="LinkedinIn logo" />
          </Link>
        </Card>
        <Box mt="47px" display="flex" gap="65px">
          <Button
            colorScheme="transparent"
            fontSize="34px"
            onClick={prevTestimonialHandler}
          >
            <MdOutlineArrowBackIos />
          </Button>
          <Button
            colorScheme="transparent"
            fontSize="34px"
            onClick={nextTestimonialHandler}
          >
            <MdOutlineArrowForwardIos />
          </Button>
        </Box>
      </Flex>
    </Container>
  )
}

export default Team

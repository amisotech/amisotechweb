import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import TextLoop from "react-text-loop";
import { Link } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import emailjs from "emailjs-com";

import Home from "../../img/Home.png"
import getaquote from "../../img/getaquote.jpg"
import { FiPhone } from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi"
const conctInfo = {
  phone: "+91 (124) 689 2930",
  email: " info[at]amisotech.com",
};

const sliderContent = {
  name: "AmisoTech Software",
  designation: "Full-stack Developer",
  description: `We design and develop services for customers of all sizes,
  specializing in creating stylish, modern websites, web
  services and online stores.`,
  btnText: " Quick Contact",
};

const Slider = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [submitText,setSubmitText] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.from_name.trim()) {
      isValid = false;
      newErrors.from_name = "Full Name is required";
    }

    if (!formData.phone.trim()) {
      isValid = false;
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      isValid = false;
      newErrors.phone = "Invalid phone number (should be 10 digits)";
    }

    if (!formData.email.trim()) {
      isValid = false;
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      isValid = false;
      newErrors.email = "Invalid email address";
    }

    if (!formData.company.trim()) {
      isValid = false;
      newErrors.company = "Company is required";
    }

    if (!formData.service.trim()) {
      isValid = false;
      newErrors.service = "Service is required";
    }

    if (!formData.message.trim()) {
      isValid = false;
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hello");
    if (validateForm()) {
      setSubmitText(true)
      emailjs
        .send(
          "service_3zxxr8w",
          "template_oss268m",
          formData,
          "MUf09X2xxyXkvZhIn"
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            // Clear the form after submission
            setFormData({
              from_name: "",
              phone: "",
              email: "",
              company: "",
              service: "",
              message: "",
            });
            setSubmitText(false)
            // Close the modal
            onClose();
             // Show the thank you message
          setShowThankYou(true);
          // Close the modal after 5 seconds
          setTimeout(() => {
            onClose();
            // Hide the thank you message after 5 seconds
            setShowThankYou(false);
          }, 5000);

            
          },
          (error) => {
            console.error("Error sending email:", error.text);
          }
        );
    }
  };

  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <div>
            <FiPhone style={{color:"#ff3838"}}/>
            <a href="tel:+911246892930" style={{marginLeft:"5px",marginRight:"15px"}}>{conctInfo.phone}</a>
            </div>
            <div>
            <HiOutlineMail style={{color:"#ff3838"}}/>
            <a href="mailto:info@amisotech.com" style={{marginLeft:"5px",marginRight:"15px"}}>
              {conctInfo.email}
            </a>
            </div>
          </div>
          <div className="hb-lang">
            <ul className="nav">
              <li className="active" bg={'#ff3838'} borderRadius={"20px"}>
                {/* <a href="#">Get a Quote</a> */}
                <Link to={"/getaquote"}>
                <Button  bg={'#ff3838'} style={{border:"none"}}>Get a Quote</Button>
                </Link>
              </li>
              {/* <li>
                <a href="#">FR</a>
              </li> */}
            </ul>
          </div>
        </div>
        {/* End hp-top-fixed */}

          {/* Model Form Start */}
        <Modal isOpen={isOpen} onClose={onClose} borderRadius={"20px"}>
          <ModalOverlay />
          <ModalContent>
            <Flex
              minH={"100vh"}
              align={"center"}
              justify={"center"}
              bg={useColorModeValue("gray.50", "gray.800")}
              cursor={"auto"}
              borderRadius={"80px"}
            >
              <ModalCloseButton />
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                  <img src={getaquote} alt="" />
                </Stack>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow={"lg"}
                  p={8}
                >
                  <Stack spacing={4}>
                    <FormControl id="from_name" isRequired>
                      <FormLabel>Full Name</FormLabel>
                      <Input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleInputChange}
                        borderColor={errors.from_name ? "red.500" : "gray.200"}
                      />
                    </FormControl>
                    {errors.from_name && (
                      <Text color="red.500" fontSize="sm">
                        {errors.from_name}
                      </Text>
                    )}

                    <FormControl id="phone" isRequired>
                      <FormLabel>Phone</FormLabel>
                      <Input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        borderColor={errors.phone ? "red.500" : "gray.200"}
                      />
                    </FormControl>
                    {errors.phone && (
                      <Text color="red.500" fontSize="sm">
                        {errors.phone}
                      </Text>
                    )}

                    {/* <Box>
                        <FormControl id="lastName">
                          <FormLabel>Last Name</FormLabel>
                          <Input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            borderColor={errors.lastName ? "red.500" : "gray.200"}
                          />
                        </FormControl>
                        {errors.lastName && (
                  <Text color="red.500" fontSize="sm">
                    {errors.lastName}
                  </Text>
                )}
                      </Box> */}

                    <FormControl id="email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        borderColor={errors.email ? "red.500" : "gray.200"}
                      />
                    </FormControl>
                    {errors.email && (
                      <Text color="red.500" fontSize="sm">
                        {errors.email}
                      </Text>
                    )}

                    <FormControl id="company">
                      <FormLabel>Company</FormLabel>
                      <InputGroup>
                        <Input
                          type={"text"}
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          // borderColor={errors.company ? "red.500" : "gray.200"}
                        />
                      </InputGroup>
                    </FormControl>
                    {/* {errors.company && (
                  <Text color="red.500" fontSize="sm">
                    {errors.company}
                  </Text>
                )} */}

                    <FormControl id="service" isRequired>
                      <FormLabel>Service</FormLabel>
                      <Select
                        placeholder="Select option"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        borderColor={errors.service ? "red.500" : "gray.200"}
                      >
                        <option value="Website Designing">
                          Website Designing
                        </option>
                        <option value="Custom Web Development">
                          Custom Web Development
                        </option>
                        <option value="Complete E-Commerce Solution">
                          Complete E-Commerce Solution
                        </option>
                        <option value="Mobile App Development">
                          Mobile App Development
                        </option>
                        <option value="Digital Marketing">
                          Digital Marketing
                        </option>
                      </Select>
                    </FormControl>
                    {errors.service && (
                      <Text color="red.500" fontSize="sm">
                        {errors.service}
                      </Text>
                    )}

                    <FormControl id="message" isRequired>
                      <FormLabel>Message</FormLabel>
                      <InputGroup>
                        <Textarea
                          type={"text"}
                          name="message"
                          height={"125px"}
                          value={formData.message}
                          onChange={handleInputChange}
                          borderColor={errors.message ? "red.500" : "gray.200"}
                        />
                      </InputGroup>
                    </FormControl>
                    {errors.message && (
                      <Text color="red.500" fontSize="sm">
                        {errors.message}
                      </Text>
                    )}

                    <Stack spacing={10} pt={2}>
                      <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={"blue.400"}
                        color={"white"}
                        _hover={{
                          bg: "blue.500",
                        }}
                        onClick={handleSubmit}
                      >
                        {submitText?"Please Wait..." : "Submit"}
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </ModalContent>
        </Modal>
        {/* Model Form End */}

        {showThankYou && (
        <Box
          bg="green.500"
          color="white"
          p={4}
          borderRadius="md"
          position="fixed"
          top="10%"
          left="50%"
          zIndex={"200"}
          transform="translate(-50%, -50%)"
        >
          Thank you for your submission!
        </Box>
      )}
        

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Welcome to our Digital Agency
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead"> Website Designing</p>
                    <p className="loop-text lead"> Custom Web Development</p>
                    <p className="loop-text lead">
                      {" "}
                      Complete E-Commerce Solution
                    </p>
                    <p className="loop-text lead"> Mobile App Development</p>
                    <p className="loop-text lead"> Digital Marketing</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="#contactus"
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              // process.env.PUBLIC_URL + "img/slider/home-banner.png"
              process.env.PUBLIC_URL + Home
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;

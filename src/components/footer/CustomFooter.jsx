import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./CustomFooter.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMap,
  FaPhoneAlt,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
import TextLoop from "react-text-loop";

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
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import emailjs from "emailjs-com";

import Home from "../../img/Home.png"
import getaquote from "../../img/getaquote.jpg"
import { Link } from "react-router-dom";



function CustomFooter() {

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
    <div style={{backgroundColor:"#000" , color:"#fff"}}>

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


      <div className="customFooter-about">
        <div className="first-contain">
        <>
            <li><a href="https://twitter.com/amisotech" target="_blank" rel="noreferrer"><FaTwitter/></a></li>
            <li><a href="https://www.facebook.com/amisotech" target="_blank" rel="noreferrer"><FaFacebook/></a></li>
            <li><a href="https://www.linkedin.com/company/amisotech/" target="_blank" rel="noreferrer"><FaLinkedin/></a></li>
            <li><a href="https://www.instagram.com/amisotech/" target="_blank" rel="noreferrer"><FaInstagram/></a></li>
        </>
        </div>
        <div className="second-contain">
          <MdEmail />
          <div>
            <span>
              <a href="mailto:info@amisotech.com" style={{textTransform:"lowercase"}}>info[at]amisotech.com</a>
            </span>
            <span>Email address</span>
          </div>
        </div>
        <div className="third-contain">
          <FaPhoneAlt />
          <div>
            <span>
              <a href="tel:+911246892930">+91 (124) 689 2930</a>
            </span>
            <span>Phone line</span>
          </div>
        </div>
        <div className="forth-contain">
          <FaMap />
          <div>
            <span>791/5, Udyog Vihar, Sector 19, Gurugram</span>
            <span>Visit us</span>
          </div>
        </div>
      </div>

      {/* <div className="customFooter-mid">
        <div className="first-mid">
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quae quidem sequi officia recusandae, non sit molestias alias consequatur quasi similique id porro blanditiis!</p>
            <button onClick={onOpen}>Get a Quote</button>
        </div>
        <div className="second-mid">
            <h3>Latest News</h3>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="third-mid">
            <h3>Links</h3>
            <div>
                <a href="">About</a>
                <a href="">company</a>
                <a href="">News & Media</a>
                <a href="">Meet the Team</a>
                <a href="">Our Project</a>
                <a href="">Contact</a>
            </div>
        </div>
        <div className="fourth-mid">
            <h3>Gallery</h3>
        </div>
      </div> */}

      <div className="copyright">
        <div>
          <Link to={"/privacypolicy"}>Privacy Policy</Link> | <Link to={"/termscondition"}>Terms Condition</Link> | <Link to={"refundpolicy"}>Refund Policy</Link>
        </div>
        <div>
        <p>&#169; Copyright 2023 by <span>AmisoTech Software Pvt. Ltd.</span></p>
        </div>
      </div>
    </div>
  );
}

export default CustomFooter;

import React, { useEffect } from "react";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
      <ChakraProvider>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="255, 56, 56"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.4}
      />
      <ScrollToTop />
      <AllRoutes />
      </ChakraProvider>
  );
};

export default App;

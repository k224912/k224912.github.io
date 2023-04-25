import React from "react";
import Login from "./Login.js"
import Signup from "./Signup.js";
import {Tab,
        TabList,
        TabPanel,
        TabPanels,Tabs,
} from "@chakra-ui/react";

export default function Tabss() {
    return(
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Tab  width ="50%">Login</Tab>
            <Tab  width ="50%" >Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
             <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
    )
}
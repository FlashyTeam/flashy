const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Homepage from "./screens/Homepage";
import NewCard2 from "./screens/NewCard2";
import Create from "./screens/Create";
import NewCourse from "./screens/NewCourse";
import NewCard from "./screens/NewCard";
import NewCard1 from "./screens/NewCard1";
import Settings from "./screens/Settings";
import SyncNotesAppOnboarding from "./screens/SyncNotesAppOnboarding";
import Onboarding from "./screens/Onboarding";
import Onboarding1 from "./screens/Onboarding1";
import Onboarding2 from "./screens/Onboarding2";
import Container from "./screens/Container";
import Upload from "./screens/Upload";
import Library from "./screens/Library";
import Notification1 from "./screens/Notification1";
import HelpDesk from "./screens/HelpDesk";
import SharePop from "./components/SharePop";
import NewCard3 from "./screens/NewCard3";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewCard2"
              component={NewCard2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Create"
              component={Create}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewCourse"
              component={NewCourse}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewCard"
              component={NewCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewCard1"
              component={NewCard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SyncNotesAppOnboarding"
              component={SyncNotesAppOnboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Container"
              component={Container}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Upload"
              component={Upload}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Library"
              component={Library}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification1"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HelpDesk"
              component={HelpDesk}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewCard3"
              component={NewCard3}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

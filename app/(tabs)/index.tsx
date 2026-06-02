import "@/global.css";
import { Text, View } from "react-native";

import { Link } from "expo-router";

import { styled } from "nativewind";
import { SafeAreaView as RnsafeaREAvIEW } from "react-native-safe-area-context";

const SafeAreaView = styled(RnsafeaREAvIEW);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">

      <Text className="text-7xl font-sans-bold text-primary ">Home</Text>

      <Link
        href="/onboarding"
        className="text-lg  text-accent font-sans-bold bg-primary px-4 py-2 rounded-md mt-4"
      >
        Get Started
      </Link>

      <Link
        href="/(auth)/sign-in"
        className="text-lg font-sans-bold text-accent  bg-primary px-4 py-2 rounded-md mt-4"
      >
        Sign In
      </Link>

      <Link
        href="/(auth)/sign-up"
        className="text-lg font-sans-bold text-accent bg-primary px-4 py-2 rounded-md mt-4"
      >
        Sign Up
      </Link>

    </SafeAreaView>
  );
}

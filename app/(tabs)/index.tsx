import "@/global.css";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>

      <Link
        href="/onboarding"
        className="text-lg font-sans-semibold text-accent bg-primary px-4 py-2 rounded-md mt-4"
      >
        Get Started
      </Link>

      <Link
        href="/(auth)/sign-in"
        className="text-lg font-sans-semibold text-accent bg-primary px-4 py-2 rounded-md mt-4"
      >
        Sign In
      </Link>

      <Link
        href="/(auth)/sign-up"
        className="text-lg font-sans-semibold text-accent bg-primary px-4 py-2 rounded-md mt-4"
      >
        Sign Up
      </Link>

      <Link href="/subscriptions/spotify">Spotify subscription</Link>

      <Link href={
        {
          pathname:"/subscriptions/[id]",
          params:{id:"claude"}
        }
      }>
        Claude subscription
      </Link>

    </View>
  );
}

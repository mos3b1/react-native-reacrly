import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Onboarding() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
        <Link href="/" className="text-lg font-sans-semibold text-accent">
        Get Started      </Link>
    </View>
  );
}
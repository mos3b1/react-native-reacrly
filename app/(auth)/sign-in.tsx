import { View, Text } from 'react-native'

import { Link } from 'expo-router';

const SignIn = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href="/(auth)/sign-up">Don't have an account? Sign up</Link>
      <Link href="/(tabs)">Go to home</Link>
    </View>
  )
}

export default SignIn;
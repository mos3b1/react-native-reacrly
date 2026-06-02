import { View, Text } from 'react-native'
import React from 'react'
import  {styled} from "nativewind";
import {SafeAreaView as RnsafeaREAvIEW} from "react-native-safe-area-context";


const SafeAreaView = styled(RnsafeaREAvIEW);

const insights = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-xl font-bold text-success">
        Insights
      </Text>
    </SafeAreaView>
  )
}

export default insights
import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { tabs } from "@/constans/data";
import clsx from "clsx";
import { Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {colors,components} from "@/constans/theme";

const tabBar=components.tabBar;

const TapLayout = () => {
  const insets = useSafeAreaInsets();

  const TabIcons = ({ focused, icon }: TabIconProps) => {
    return (
      <View className="tabs-icons">
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image source={icon} resizeMode="contain" className="tabs-glyph" />
        </View>
      </View>
    );
  };


  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, tabBar.horizontalInset) ,
          height: tabBar.height,
          marginHorizontal: tabBar.horizontalInset,
          borderRadius: tabBar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },

        tabBarItemStyle: {
          paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
        },
        
        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: "center",
        },

      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcons focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TapLayout;

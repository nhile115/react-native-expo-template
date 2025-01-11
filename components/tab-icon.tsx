import { clsx } from "clsx";
import React, { FC } from "react";
import { Image, Text, View } from "react-native";

interface ITabIconProps {
  icon: any;
  color: any;
  name: any;
  focused?: boolean;
}

const TabIcon: FC<ITabIconProps> = ({ icon, color, name, focused = false }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={clsx(
          focused ? "font-psemibold" : "font-pregular",
          "text-xs"
        )}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

TabIcon.displayName = "TabIcon";

export default TabIcon;

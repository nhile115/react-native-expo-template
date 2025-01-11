import { Label, Input } from "@/shadcn-ui/ui";
import React, { FC } from "react";
import { TextInputProps, View } from "react-native";

import { cn } from "@/lib/utils";

interface IInputLabelProps extends TextInputProps {
  title?: string;
}

const InputLabel: FC<IInputLabelProps> = ({ className, title, ...props }) => {
  return (
    <View className={cn(className, "flex flex-col gap-y-3")}>
      <Label nativeID="title" className="text-muted-foreground">
        {title}
      </Label>
      <Input {...props} />
    </View>
  );
};

Input.displayName = "InputLabel";

export default InputLabel;

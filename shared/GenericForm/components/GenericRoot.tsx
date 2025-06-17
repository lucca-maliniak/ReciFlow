import { ReactNode } from "react";
import { View } from "react-native";

interface IGenericRoot {
  styles: any;
  children: ReactNode;
}

export default function GenericRoot({ styles, children }: IGenericRoot) {
  return (
    <View style={styles}>
      {children}
    </View>
  )
}
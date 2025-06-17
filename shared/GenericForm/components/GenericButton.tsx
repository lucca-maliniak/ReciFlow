import { ReactNode } from "react";
import { Button, Text } from "react-native-paper";

export interface IGenericButton {
  styles: any;
  handle?: () => void;
  icon: string;
  textColor: string;
  mode: "text" | "outlined" | "contained" | "elevated" | "contained-tonal" | undefined;
  children: ReactNode;
}

export default function GenericButton({ styles, handle, icon, textColor, mode, children }: IGenericButton) {
  return (
    <Button icon={icon} mode={mode} textColor={textColor} style={styles} onPress={handle}>
      {children}
    </Button>
  );
}
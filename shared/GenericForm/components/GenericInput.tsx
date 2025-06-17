import { TextInput } from "react-native-paper";

interface StyleGenericInput {
  height: number;
  width: number;
  backgroundColor: string;
}

export interface IGenericInput {
  value: string;
  setValue: (value: React.SetStateAction<string>) => void;
  style: StyleGenericInput;
  textPlaceholder: string;
  label: string;
  password?: boolean;
}

export default function GenericInput({ value, setValue, style, textPlaceholder, label, password }: IGenericInput) {
  return (
    <TextInput
      mode='outlined'
      label={label}
      placeholder={textPlaceholder}
      onChangeText={(value: string) => setValue(value)}
      value={value}
      style={style}
      outlineColor="green"
      textColor="#298867"
      activeOutlineColor="green"
      placeholderTextColor={"grey"}
      secureTextEntry={password}
    />
  );
}
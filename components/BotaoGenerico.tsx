import { Text } from 'react-native'
import { Button } from "react-native-paper";
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';

interface IGenericButton {
    textButton: string;
    onPress: () => void;
    textColor?: string;
    textButtonStyle?: {};
    buttonStyle?: {}
    iconButton?: IconSource;
}

export const GenericButton = ({ textButton, buttonStyle, textColor, textButtonStyle, iconButton, onPress }: IGenericButton) => {
    return (
        <Button style={buttonStyle} textColor={textColor} icon={iconButton} onPress={onPress}>
            <Text style={textButtonStyle}>{textButton}</Text>
        </Button>
    );
}
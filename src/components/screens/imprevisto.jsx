import {
    StyleSheet, View, Text
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function Imprevisto({ navigation }) {
    return (<>
        <View>
            <Text>
                Imprevisto
            </Text>
        </View>
    </>)
}
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Universities } from "../screens/Universities";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator>
            <Screen
                name='Home'
                options={
                    {
                        headerShown: false,
                    }
                }
                component={Home} />
            <Screen
                name='Universities'
                options={{
                    title: 'Universidades Salvas',
                    headerStyle: {
                        backgroundColor: 'navy'
                    }
                }}
                component={Universities} />
        </Navigator>
    )
}
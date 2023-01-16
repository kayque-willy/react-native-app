import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Universities } from "../screens/Universities";
import { MaterialIcons } from '@expo/vector-icons';
import THEME from "../theme";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabRoutes() {
    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
                tabBarHideOnKeyboard: true,
                tabBarActiveBackgroundColor: THEME.COLORS.BACKGROUND,
                tabBarInactiveBackgroundColor: THEME.COLORS.BACKGROUND,
            }
            }
        >
            <Screen
                name='Home'
                component={Home}

                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Screen
                name='Universities'
                component={Universities}
                options={{
                    tabBarLabel: 'Universidades',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="school"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Navigator>
    )
}
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Profile } from "../screens/Profile";
import { TabRoutes } from "./tabs.routes";
import { MaterialIcons } from '@expo/vector-icons';

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
    return (
        <Navigator>
            <Screen
                name="React App - Universidades"
                component={TabRoutes}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
            <Screen
                name="Perfil"
                component={Profile}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="access-alarm"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
        </Navigator>
    )
}
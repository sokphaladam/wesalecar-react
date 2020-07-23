import React from "react";
import { Switch, Route } from "react-router-dom";
import { LoginScreen } from "../screens/LoginScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import ShopScreen from "../screens/Shop/ShopScreen";
import { ShopDetailScreen } from "../screens/Shop/ShopDetailScreen";

const routes = [
  {
    component: ShopScreen,
    path: "/",
    exact: true,
  },
  {
    component: ShopDetailScreen,
    path: "/shop/:id",
    exact: true,
  },
  {
    component: LoginScreen,
    path: "/login",
    exact: true,
  },
  {
    component: RegisterScreen,
    path: "/register",
    exact: true,
  },
];

export function RouteIndex() {
  return (
    <Switch>
      {routes.map((x) => (
        <Route {...x} key={x.path} />
      ))}
    </Switch>
  );
}

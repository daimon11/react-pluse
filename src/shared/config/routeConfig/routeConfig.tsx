import { AboutPage } from "pages/About"
import { MainPage } from "pages/Main"
import { RouteProps } from "react-router-dom"

export enum AppRouters {
  MAIN = 'main',
  ABOUT = 'about',
  // ERROR = 'error',
}

export const RoutePath: Record<AppRouters, string> = {
  [AppRouters.MAIN]: '/',
  [AppRouters.ABOUT]: '/about',
}

export const routeConfig: Record<AppRouters, RouteProps> = {
  [AppRouters.MAIN]: {
    path: RoutePath.main,
    element: <MainPage/>,
  },
  [AppRouters.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage/>,
  },
}
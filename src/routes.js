import { lazy } from "react";

import Test from "./Test"

const Main = lazy(() => import('./app/main'));
// const Login = lazy(() => import('./app/pages/login/Login'));
const Page404 = lazy(() => import('./app/pages/page404/Page404'));
// const Register = lazy(() => import('./app/pages/registration/Registration'));

const routes = [
    { path: '/',  component: Main },
    { path: '/test' , component: Test },
    { path: '*' , component: Page404 },
]

export default routes;
import { lazy } from "react";

const Main = lazy(() => import('./app/main'));
const Page404 = lazy(() => import('./app/pages/page404/Page404'));
const VideoPlayer = lazy(()=> import('./app/pages/media/VideoPlayer'))


const routes = [
    // { path: '/',  component: Main },
    { path: '/',  component: VideoPlayer },
    { path: '*' , component: Page404 },
]
export default routes;
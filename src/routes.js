import { lazy } from "react";
import CustomGoogleMaps from "./app/pages/googleMap/CustomGoogleMaps";

const Main = lazy(() => import('./app/main'));
const Page404 = lazy(() => import('./app/pages/page404/Page404'));
const VideoPlayer = lazy(() => import('./app/pages/media/VideoPlayer'));
const CustomBtn = lazy(() => import('./app/pages/button/ButtonProps'));
const Taskbtn = lazy(() => import('./app/pages/taskbtn/TastButton'));
const DatePickers = lazy(() => import("./app/pages/datePicker/Picker"));
const CustomLoader = lazy(() => import("./app/pages/defaultprops/LoaderProps"))
const CustomGoogleMap = lazy(() => import("./app/pages/googleMap/CustomGoogleMaps"))
const CustomMap = lazy(() => import("./app/pages/googleMap/PlaceComponent"))
const ImageUpload = lazy(() => import("./app/pages/imageUpload/ImageUpload"))


const routes = [
    // { path: '/',  component: Main },  
    { path: '/', component: Taskbtn },
    { path: '/loader', component: CustomLoader },
    { path: '/video', component: VideoPlayer },
    { path: '/picker', component: DatePickers },
    { path: '/btn', component: CustomBtn },
    { path: '/map', component: CustomGoogleMap },
    { path: '/place', component: CustomMap },
    { path: '/upload', component: ImageUpload },
    { path: '*', component: Page404 },
]
export default routes;
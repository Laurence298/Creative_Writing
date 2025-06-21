import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    
    
    index("routes/home.tsx"),


    route("reading/:chapterId","./routes/reading_route.tsx"),




] satisfies RouteConfig;

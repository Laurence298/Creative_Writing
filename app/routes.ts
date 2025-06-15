import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    
    
    index("routes/home.tsx"),


    route("reading/:id","./routes/reading_route.tsx"),




] satisfies RouteConfig;

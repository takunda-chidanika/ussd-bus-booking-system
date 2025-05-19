import { config } from "dotenv";

config({path:`.env.${process.env.NODE_ENV || "development"}.local`});

export const  {PORT, APPLICATION_API_VERSION} = process.env;
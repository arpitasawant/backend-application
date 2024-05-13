declare global {
    namespace Express {
        export interface Request {
            data?: any,
        }
    }
    namespace NodeJS {
        export interface ProcessEnv {
            PORT: string,
            JWT_SECRET: string,
            REFRESH_TOKEN: string
        }
    }
}


export default {}
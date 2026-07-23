interface AppConfig {
    appName: string;
    version: string; 
    debug: boolean;
    port: number;
    database:{
        host: string;
        port: number;
        username: string;
        password: string;
    };
    features: {
        registration: boolean;
        darkMode: boolean;
    }
}

type dbType = { //we can also writting here interface instead of type key word 
    host: string;
    port: number;
    username: string;
    password: string;
}

//we can also do this same thing in different way 
interface AppConfig2 {
    appName: string;
    version: string; 
    debug: boolean;
    port: number;
    database: dbType;
    features: {
        registration: boolean;
        darkMode: boolean;
    }
}
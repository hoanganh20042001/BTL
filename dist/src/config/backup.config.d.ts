export declare const getBackupConfig: () => {
    backup: {
        type: string;
        host: string;
        port: number;
        database: string;
        username: string;
        password: string;
        cache: boolean;
        keepConnectionAlive: boolean;
        logging: boolean;
        synchronize: boolean;
        ssl: any;
    };
};

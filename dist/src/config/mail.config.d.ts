declare const _default: () => {
    mail: {
        transport: {
            host: string;
            secure: boolean;
            auth: {
                user: string;
                pass: string;
            };
        };
        defaults: {
            from: string;
        };
    };
};
export default _default;

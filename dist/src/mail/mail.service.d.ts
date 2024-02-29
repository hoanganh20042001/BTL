import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendNewUser(obj: {
        emailTo: any;
        subject: any;
        name: any;
        code: any;
    }, lang?: string): Promise<void>;
    sendNewPassword(obj: {
        emailTo: any;
        subject: any;
        name: any;
        code: any;
        cccd: any;
    }, lang?: string): Promise<void>;
    paymentSuccessful(obj: {
        emailTo: any;
        subject: any;
        products: any[];
        value: any;
        name: any;
        cost: any;
        bankName: any;
    }, lang?: string): Promise<void>;
    sendAccountVerification(obj: {
        emailTo: any;
        subject: any;
    }, lang?: string): Promise<void>;
}

import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) { }
    async sendNewUser(obj: { emailTo, subject, name, code,cccd }, lang = 'en') {
        console.log(obj.name);
        await this.mailerService.sendMail({
            to: obj.emailTo,
            // from: '"WOSS"', // override default from
            subject: obj.subject,
            template: `./new-user.${lang}.hbs`, // `.hbs` extension is appended automatically
            context: { // filling curly brackets with content
                name: obj.name,
                code: obj.code,
                cccd:obj.cccd,
            },
        });
    }
    
    async sendNewPassword(obj: { emailTo, subject, name, code,cccd }, lang = 'en') {
        console.log(obj.name);
        await this.mailerService.sendMail({
            to: obj.emailTo,
            // from: '"WOSS"', // override default from
            subject: obj.subject,
            template: `./forgot-pasword.${lang}.hbs`, // `.hbs` extension is appended automatically
            context: { // filling curly brackets with content
                name: obj.name,
                code: obj.code,
                cccd:obj.cccd,
            },
        });
    }

    async paymentSuccessful(obj: { emailTo, subject, name,cost,bankName }, lang = 'en') {
      console.log(obj.emailTo);
      await this.mailerService.sendMail({
          to: obj.emailTo,
          // from: '"WOSS"', // override default from
          subject: obj.subject,
          template: `./payment-successful.${lang}.hbs`, // `.hbs` extension is appended automatically
          context: { // filling curly brackets with content
              name: obj.name,
            //   products: obj.products,
            //   value:obj.value,
              cost:obj.cost,
              bankName:obj.bankName,
          },
      });
  }
}

import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { exec } from 'child_process';
import * as fs from 'fs';
import moment from 'moment';
import * as path from 'path';
import * as util from 'util';

const execAsync = util.promisify(exec);

@Injectable()
export class BackupService {
  private backupDir: string;

  constructor() {
    this.backupDir = path.join(__dirname, '..', '..', '..', 'src', 'databasesBackup');
    fs.mkdirSync(this.backupDir, { recursive: true });
  }

  @Cron('0 0 * * *', { timeZone: 'Asia/Ho_Chi_Minh' })
  async createBackup() {
    try {
      const today = moment().format('YYYY-MM-DD');
      const backupFilePath = path.join(this.backupDir, today + '.sql');

      const databaseName = process.env.DB_NAME || 'mydb';
      const dbUser = process.env.DB_USER || 'root';
      const dbPassword = process.env.DB_PASS || '1';
      const dbHost = process.env.DB_HOST || 'localhost';
      const dbPort = process.env.DB_PORT || '4406';
      const  dbContainer=process.env.DB_CONTAINER || 'mysql_master';
      //đối với mysql trên máy
      //const command = `mysqldump -u ${dbUser} -p${dbPassword} -h ${dbHost} -P ${dbPort} ${databaseName} > ${backupFilePath}`;

      // đối với mysql trên docker cần tên container
      const command = `docker exec ${dbContainer} mysqldump -u ${dbUser} -p${dbPassword} -h ${dbHost} -P ${dbPort} ${databaseName} > ${backupFilePath}`;
      await execAsync(command);

      console.log(`Backup successfully created at ${backupFilePath}`);
    } catch (error) {
      console.error('Error occurred during backup:', error);
    }
  }
}

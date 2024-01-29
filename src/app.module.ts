/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionController } from './controllers/connection.controller';
import { IssueController } from './controllers/issue.controller';
import { VerifyController } from './controllers/verify.controller';
import { IssueService } from './providers/issue.service';
import { ConnectionService } from './providers/connection.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ConnectionController,
    IssueController,
    VerifyController,
  ],
  providers: [AppService, IssueService, ConnectionService],
})
export class AppModule { }

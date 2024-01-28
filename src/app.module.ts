/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionController } from './connection/connection.controller';
import { IssueController } from './issue/issue.controller';
import { VerifyController } from './verify/verify.controller';
import { IssueService } from './issue/issue.service';
import { ConnectionService } from './connection/connection.service';

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

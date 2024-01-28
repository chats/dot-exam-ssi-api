/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConnectionResult } from 'src/dto/connection-result-dto';
import { InvitationResult } from 'src/dto/invitation-result-dto';
import { ConnectionService } from './connection.service';

@ApiTags('Connection')
@Controller('connection')
export class ConnectionController {
    @Get()
    @ApiResponse({ status: 200, type: ConnectionResult })
    getConnection(): string {
        return 'Hello World!';
    }

    @Post('invite')
    @ApiResponse({ status: 200, type: InvitationResult })
    //    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async createInvitation(): Promise<InvitationResult> {
        const connectionService = new ConnectionService();
        return connectionService.createInvitation();
    }
}

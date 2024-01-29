/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConnectionResult } from 'src/dto/connection-result-dto';
import { InvitationResult } from 'src/dto/invitation-result-dto';
import { ConnectionService } from '../providers/connection.service';

@ApiTags('Connection')
@Controller('connection')
export class ConnectionController {
    @Get(':connection_id')
    @ApiOperation({ summary: 'Get connection details by id.' })
    @ApiResponse({ status: 200, type: ConnectionResult })
    async getConnection(@Param('connection_id') id: string): Promise<ConnectionResult> {
        const connectionService = new ConnectionService();
        return connectionService.getConnection(id);
    }

    @Post('invite/:citizen_id')
    @ApiOperation({ summary: 'Create connection invitation document to generate QR-Code.' })
    @ApiResponse({ status: 200, type: InvitationResult })
    //    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async createInvitation(@Param('citizen_id') cid: string): Promise<InvitationResult> {
        console.log(cid)
        const connectionService = new ConnectionService();
        return connectionService.createInvitation();
    }
}

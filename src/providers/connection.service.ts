/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConnectionResult } from 'src/dto/connection-result-dto';
import { InvitationResult } from 'src/dto/invitation-result-dto';

@Injectable()
export class ConnectionService {
    getConnection(id: string): ConnectionResult {
        const local_id = '3fa85f64-5717-4562-b3fc-2c963f66afa6'
        //console.log(id)
        if (id != local_id) throw new NotFoundException("Connection not found");
        return {
            connection_id: local_id,
            state: 'active',
            created_at: '2023-12-31T23:59:59Z',
        }
    }

    createInvitation(): InvitationResult {
        return {
            invitation_url: 'http://210.246.185.62:8034?c_i=eyJAdHlwZSI6ICJodHRwczovL2RpZGNvbW0ub3JnL2Nvbm5lY3Rpb25zLzEuMC9pbnZpdGF0aW9uIiwgIkBpZCI6ICI0OWMyOWQwMy1jNGU4LTRjMzItYTBlZi01ZTFlZjY2ZDQyNTciLCAibGFiZWwiOiAiVG91cmlzdCBHdWlkZSIsICJyZWNpcGllbnRLZXlzIjogWyI3V1VWZWVLR2pwa1RxblJNb2hEUDNrVThZZW45ODRoSHFhSmVXMTZDZjlFNyJdLCAic2VydmljZUVuZHBvaW50IjogImh0dHA6Ly8yMTAuMjQ2LjE4NS42Mjo4MDM0IiwgImltYWdlVXJsIjogImh0dHA6Ly8yMTAuMjQ2LjE4NS42Mjo4MDgwL2ltYWdlcy9kb3QtZ3VpZGUucG5nIn0=',
            connection_id: 'be436b77-2193-40b5-8c11-6376491a4d78',
        };
    }
}

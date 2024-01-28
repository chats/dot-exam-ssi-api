/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";

export class InvitationResult {
    @ApiProperty({ example: "3fa85f64-5717-4562-b3fc-2c963f66afa6" })
    connection_id: string;

    @ApiProperty({ example: "http://192.168.56.101:8020/invite?c_i=eyJAdHlwZSI6Li4ufQ==" })
    invitation_url: string;
}

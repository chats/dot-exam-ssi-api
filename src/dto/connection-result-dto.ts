/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";

export class ConnectionResult {
    @ApiProperty({ example: "3fa85f64-5717-4562-b3fc-2c963f66afa6" })
    connection_id: string;

    @ApiProperty({ example: "active" })
    state: string;

    @ApiProperty({ example: "2023-12-31T23:59:59Z" })
    created_at: string;
}

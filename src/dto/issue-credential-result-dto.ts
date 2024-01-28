/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";

export class IssueCredentialResult {
    @ApiProperty()
    connection_id: string;

    @ApiProperty()
    invitation_url: string;
}

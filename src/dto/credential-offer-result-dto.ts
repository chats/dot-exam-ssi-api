/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { Attribute } from "./attribute-dto";

export class CredentialOfferResult {
    @ApiProperty({ example: "3fa85f64-5717-4562-b3fc-2c963f66afa6" })
    connection_id: string;

    @ApiProperty({ example: "WgWxqztrNooG92RXvxSTWv:3:CL:20:tag" })
    cred_def_id: string;

    @ApiProperty()
    attributes: Attribute[]

    @ApiProperty({ example: "2023-12-31T23:59:59Z" })
    created_at: string;
}
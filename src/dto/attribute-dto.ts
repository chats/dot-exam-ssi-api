/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";

export class Attribute {
    @ApiProperty({ example: "name" })
    name: string;

    @ApiProperty({ example: "Alex" })
    value: string;
}
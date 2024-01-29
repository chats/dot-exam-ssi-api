/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";

export class ProofRequestResult {
    @ApiProperty({ example: "3fa85f64-5717-4562-b3fc-2c963f66afa6" })
    connection_id: string;

    @ApiProperty({ example: "WgWxqztrNooG92RXvxSTWv:3:CL:20:tag" })
    cred_def_id: string;

    @ApiProperty({ example: { "name": "proof_req_1", "version": "0.1", "requested_attributes": { "attr1_referent": { "name": "name" } }, "requested_predicates": { "predicate1_referent": { "name": "age", "p_type": ">=", "p_value": 18 } } } })
    presentation: any

    @ApiProperty({ example: { "requested_predicates": { "predicate1_referent": { "name": "age", "p_type": ">=", "p_value": 18 } }, "requested_attributes": { "attr1_referent": { "name": "name" } }, "name": "proof_req_1", "version": "0.1" } })
    proof: any

    @ApiProperty({ example: "2023-12-31T23:59:59Z" })
    created_at: string;
}
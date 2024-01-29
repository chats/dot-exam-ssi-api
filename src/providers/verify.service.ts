/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProofRequestResult } from 'src/dto/proof-request-result.dto';

@Injectable()
export class VerifyService {
    sendRequest(): ProofRequestResult {
        return {
            connection_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            cred_def_id: "WgWxqztrNooG92RXvxSTWv:3:CL:20:tag",
            presentation: {
                "requested_predicates": {
                    "predicate1_referent": {
                        "name": "age",
                        "p_type": ">=",
                        "p_value": 18
                    }
                },
                "requested_attributes": {
                    "attr1_referent": {
                        "name": "name"
                    }
                },
                "name": "proof_req_1",
                "version": "0.1"
            },
            proof: {},
            created_at: "2023-12-31T23:59:59Z"
        };
    }
}
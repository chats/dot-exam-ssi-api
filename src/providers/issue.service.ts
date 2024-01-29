/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CredentialOfferResult } from 'src/dto/credential-offer-result-dto';

@Injectable()
export class IssueService {
    sendOffer(): CredentialOfferResult {
        return {
            connection_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            cred_def_id: "WgWxqztrNooG92RXvxSTWv:3:CL:20:tag",
            attributes: [
                {
                    name: "name",
                    value: "Alex"
                },
                {
                    name: "age",
                    value: "25"
                }
            ],
            created_at: "2023-12-31T23:59:59Z"
        };
    }
}

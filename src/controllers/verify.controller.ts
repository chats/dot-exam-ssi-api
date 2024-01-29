/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProofRequestBody } from 'src/dto/proof-request-body.dto';
import { ProofRequestResult } from 'src/dto/proof-request-result.dto';
import { VerifyService } from 'src/providers/verify.service';

@ApiTags('Verify')
@Controller('verify')
export class VerifyController {
    @Post('send-request')
    @ApiOperation({ summary: 'Send proof request to credential holder.' })
    @ApiResponse({ status: 200, type: ProofRequestResult })
    @ApiBody({ type: ProofRequestBody })
    async sendRequest(): Promise<ProofRequestResult> {
        const verifyService = new VerifyService();
        return verifyService.sendRequest();
    }
}

/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CredentialOfferResult } from 'src/dto/credential-offer-result-dto';
import { IssueService } from 'src/providers/issue.service';

@ApiTags('Issue')
@Controller('issue')
export class IssueController {
    @Post('send-offer')
    @ApiOperation({ summary: 'Offer verifiable credential to holder.' })
    @ApiResponse({ status: 200, type: CredentialOfferResult })
    //    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async sendOffer(): Promise<CredentialOfferResult> {
        const issueService = new IssueService();
        return issueService.sendOffer();
    }
}

/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Issue')
@Controller('issue')
export class IssueController { }

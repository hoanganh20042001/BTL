import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ExampleService } from './example.service';

@ApiTags('example')
@Controller('example')
export class ExampleController {
  constructor(
    private readonly exampleService: ExampleService
  ) { }

}

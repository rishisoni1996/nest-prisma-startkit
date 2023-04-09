import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Health Check')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("health-check")
  @ApiOperation({ description: 'Health check route' })
  healthCheck(): void {
    return this.appService.healthCheck();
  }
}

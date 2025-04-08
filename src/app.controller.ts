import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DashBoardDto } from './dashboard.dto';

@Controller("dashboard")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<DashBoardDto> {
    return this.appService.getDashboardData();
  }
}

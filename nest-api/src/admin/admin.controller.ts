import { Controller, Get , Request} from '@nestjs/common';

@Controller('admin')
export class AdminController {
  @Get('search-workouts')
  searchUserWorkouts(@Request() req: Request) {

  }
}

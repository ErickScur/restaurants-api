import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CheckIsOpened } from 'src/domain/use-cases/working-schedules';
import { HttpNotFoundError } from 'src/presentation/swagger';
import {
  CheckIsOpenedResponseVM,
  CheckIsOpenedVM,
} from 'src/presentation/view-models/working-schedules/check-is-opened-vm';

@ApiTags('Working Schedules')
@Controller('restaurants')
export class CheckRestaurantIsOpened {
  constructor(private readonly checkIsOpened: CheckIsOpened) {}

  @ApiOperation({
    summary: 'Check if a restaurant is open on the provided date',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: CheckIsOpenedResponseVM,
    isArray: true,
  })
  @ApiResponse(HttpNotFoundError)
  @HttpCode(200)
  @Post(':restaurantId/is-open')
  async handle(
    @Param('restaurantId') restaurantId: string,
    @Body() checkVM: CheckIsOpenedVM,
  ) {
    return {
      isOpened: await this.checkIsOpened.check(restaurantId, checkVM.date),
    };
  }
}

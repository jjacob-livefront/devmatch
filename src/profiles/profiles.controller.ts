import { Controller, Get, Query, Param, Post } from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {
  @Get()
  findAll(@Query('location') location: number) {
    return [{ location }];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
}

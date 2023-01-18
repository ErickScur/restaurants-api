import { Injectable } from '@nestjs/common';
import { CreateRestaurantRepository } from 'src/data/protocols/db/restaurants/db-create-restaurant';
import { Restaurant } from 'src/domain/models/restaurant';
import { CreateRestaurantModel } from 'src/domain/use-cases/restaurants/create-restaurant';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class RestaurantsPrismaRepository implements CreateRestaurantRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(restaurant: CreateRestaurantModel): Promise<Restaurant> {
    try {
      return await this.prisma.restaurant.create({
        data: restaurant,
        include: {
          workingSchedule: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

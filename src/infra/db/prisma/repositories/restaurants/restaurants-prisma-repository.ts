import { Injectable } from '@nestjs/common';
import { Restaurant } from 'src/domain/models/restaurant';
import { CreateRestaurantModel } from 'src/domain/use-cases/restaurants/create-restaurant';
import { PrismaService } from '../../config/prisma.service';
import {
  CreateRestaurantRepository,
  DeleteRestaurantRepository,
  GetAllRestaurantsRepository,
  GetRestaurantByIdRepository,
  UpdateRestaurantRepository,
} from 'src/data/protocols/db/restaurants';
import { UpdateRestaurantModel } from 'src/domain/use-cases/restaurants';

@Injectable()
export class RestaurantsPrismaRepository
  implements
    CreateRestaurantRepository,
    GetAllRestaurantsRepository,
    GetRestaurantByIdRepository,
    DeleteRestaurantRepository,
    UpdateRestaurantRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async getById(id: string): Promise<Restaurant> {
    try {
      return await this.prisma.restaurant.findUnique({
        where: { id },
        include: {
          workingSchedule: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<Restaurant[]> {
    try {
      return await this.prisma.restaurant.findMany({
        include: {
          workingSchedule: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }

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

  async delete(id: string): Promise<void> {
    try {
      await this.prisma.restaurant.delete({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: string,
    restaurant: UpdateRestaurantModel,
  ): Promise<Restaurant> {
    try {
      return await this.prisma.restaurant.update({
        where: { id },
        data: {
          ...restaurant,
        },
        include: {
          workingSchedule: true,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

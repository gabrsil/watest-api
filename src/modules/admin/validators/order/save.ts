import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { IOrder } from 'modules/database/interfaces/order';

export class SaveValidator implements Omit<IOrder, 'id'> {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(150)
  @ApiProperty({ required: true, type: 'string', minLength: 3, maxLength: 150 })
  public description: string;

  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  @ApiProperty({ required: true, type: 'integer' })
  public quantity: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty({ required: true, type: 'integer' })
  public total: number;
}
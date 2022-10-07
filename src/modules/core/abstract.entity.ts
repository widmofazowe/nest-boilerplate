import { Field } from '@nestjs/graphql';
import { CreateDateColumn, EntitySchema, PrimaryGeneratedColumn } from 'typeorm';

export abstract class AbstractEntity extends EntitySchema {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @CreateDateColumn()
  createdDate: Date;
}

import { CreateDateColumn, EntitySchema, PrimaryGeneratedColumn } from 'typeorm';

export abstract class AbstractEntity extends EntitySchema {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdDate: Date;
}

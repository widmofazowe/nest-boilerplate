import { Exclude } from 'class-transformer';
import { TrackFieldHistory } from 'nest-typeorm-history';
import { Entity, Column, Index } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity()
export class User extends AbstractEntity {
  @TrackFieldHistory()
  @Column()
  name: string;

  @TrackFieldHistory()
  @Index({ unique: true })
  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;
}

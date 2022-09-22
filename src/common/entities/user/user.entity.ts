import { Exclude } from 'class-transformer';
import { TrackFieldHistory } from 'nest-typeorm-history';
import { AbstractEntity } from 'src/modules/core';
import { Entity, Column, Index } from 'typeorm';

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

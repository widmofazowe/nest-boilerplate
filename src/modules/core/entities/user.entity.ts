import { Exclude } from 'class-transformer';
import { TrackFieldHistory } from 'nest-typeorm-history';
import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

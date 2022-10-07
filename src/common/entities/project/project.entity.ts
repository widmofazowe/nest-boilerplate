import { Field } from '@nestjs/graphql';
import { TrackFieldHistory } from 'nest-typeorm-history';
import { AbstractEntity } from 'src/modules/core';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Project extends AbstractEntity {
  @TrackFieldHistory()
  @Column()
  @Field()
  name: string;

  @ManyToOne(() => User, user => user.projects)
  user: User;
}

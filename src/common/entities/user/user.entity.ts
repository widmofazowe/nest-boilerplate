import { Exclude } from 'class-transformer';
import { Field, Int, ObjectType } from '@nestjs/graphql';

import { TrackFieldHistory } from 'nest-typeorm-history';
import { AbstractEntity } from 'src/modules/core';
import { Entity, Column, Index, ManyToOne, OneToMany } from 'typeorm';
import { Project } from '../project/project.entity';

@ObjectType()
@Entity()
export class User extends AbstractEntity {
  @TrackFieldHistory()
  @Column()
  @Field()
  name: string;

  @TrackFieldHistory()
  @Index({ unique: true })
  @Column()
  @Field()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Field(() => [Project])
  @OneToMany(() => Project, project => project.user)
  projects: Project[];
}

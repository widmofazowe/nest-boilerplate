import { HistoryEntity, HistoryFor } from 'nest-typeorm-history';
import { Entity } from 'typeorm';
import { User } from './user.entity';

@Entity()
@HistoryFor(User)
export class UserHistory extends HistoryEntity {}

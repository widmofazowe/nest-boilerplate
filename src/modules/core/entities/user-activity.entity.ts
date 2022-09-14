import { Activity } from 'nest-typeorm-object-activites';
import { Entity, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserActivity extends Activity {
  @ManyToOne(() => User)
  sourceObject: User;
}

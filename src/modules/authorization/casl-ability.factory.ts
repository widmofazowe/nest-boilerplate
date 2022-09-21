import { Injectable } from '@nestjs/common';
import { InferSubjects, PureAbility, AbilityBuilder, AbilityClass, ExtractSubjectType } from '@casl/ability';
import { User } from '../core';
import { Action } from '../auth/action.enum';

type Subjects = InferSubjects<typeof User> | 'all';

export type AppAbility = PureAbility<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    const { can, cannot, build } = new AbilityBuilder<PureAbility<[Action, Subjects]>>(
      PureAbility as AbilityClass<AppAbility>,
    );

    if (user.email === 'widomski.pawel@gmail.com') {
      can(Action.Manage, 'all'); // read-write access to everything
    } else {
      can(Action.Read, 'all'); // read-only access to everything
    }

    can(Action.Update, User, { id: user.id });
    // cannot(Action.Delete, Article, { isPublished: true });

    /**
     * @Policy((ability: AppAbility) => ability.can(Action.Update, User))
     */

    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: item => item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}

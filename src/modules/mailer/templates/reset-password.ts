import config from 'src/config';

export default {
  subject: 'Reset Password',
  content: {
    blocks: [
      { component: 'contentBlock', content: 'Hello {{user.name}}' },
      {
        component: 'contentBlock',
        content: "You've requested to reset your password. If it's not you please ignore this email",
      },
      {
        component: 'button',
        text: 'Reset Password',
        url: `${config.frontendAppUrl}/new-password/{{user.id}}/{{resetPasswordToken}}`,
      },
    ],
  },
};

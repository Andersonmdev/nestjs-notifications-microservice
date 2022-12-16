import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a new notification', () => {
    expect(
      new Notification({
        recipientId: '123',
        content: new Content('Some content'),
        category: 'info',
      }),
    ).toBeTruthy();
  });
});

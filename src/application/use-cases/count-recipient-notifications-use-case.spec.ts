import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotificationsUseCase } from './count-recipient-notifications-use-case';

describe('Count recipient notifications use case', () => {
  it('should be able to cancel a notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const countRecipientNotificationsUseCase = new CountRecipientNotificationsUseCase(notificationRepository);

    await notificationRepository.create(makeNotification({ recipientId: 'recipient-id' }));

    const count = await countRecipientNotificationsUseCase.execute({
      recipientId: 'recipient-id',
    });

    expect(count.count).toBe(1);
  });
});

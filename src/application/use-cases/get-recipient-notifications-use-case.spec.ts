import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { GetRecipientNotificationsUseCase } from './get-recipient-notifications-use-case';

describe('Get recipient notifications use case', () => {
  it('should be able to get ', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const getRecipientNotificationsUseCase = new GetRecipientNotificationsUseCase(notificationRepository);

    await notificationRepository.create(makeNotification({ recipientId: 'recipient-id' }));

    const { notifications } = await getRecipientNotificationsUseCase.execute({
      recipientId: 'recipient-id',
    });

    expect(notifications.length).toBe(1);
    expect(notifications).toEqual(expect.arrayContaining([expect.objectContaining({ recipientId: 'recipient-id' })]));
  });
});

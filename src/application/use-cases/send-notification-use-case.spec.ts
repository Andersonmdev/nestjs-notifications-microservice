import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotificationUseCase } from './send-notification-use-case';

describe('Send notification use case', () => {
  it('should be able to send a notification', () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const sendNotificationUseCase = new SendNotificationUseCase(notificationRepository);

    sendNotificationUseCase.execute({
      recipientId: '123',
      content: 'Some content',
      category: 'info',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
  });
});

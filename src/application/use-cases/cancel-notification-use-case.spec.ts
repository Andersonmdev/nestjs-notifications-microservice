import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CancelNotificationUseCase } from './cancel-notification-use-case';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel notification use case', () => {
  it('should be able to cancel a notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const cancelNotificationUseCase = new CancelNotificationUseCase(notificationRepository);

    const notification = new Notification({
      recipientId: '123',
      content: new Content('Tests are awesome!'),
      category: 'test',
    });

    await notificationRepository.create(notification);

    await cancelNotificationUseCase.execute({
      notificationId: notification.id,
    });

    expect(notificationRepository.notifications[0].canceledAt).toEqual(expect.any(Date));
  });

  it('should not be able to cancel a notification that does not exist', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const cancelNotificationUseCase = new CancelNotificationUseCase(notificationRepository);

    await expect(
      cancelNotificationUseCase.execute({
        notificationId: '123',
      }),
    ).rejects.toThrowError(new NotificationNotFound('123'));
  });
});

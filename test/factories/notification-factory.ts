import { Content } from '@application/entities/content';
import { Notification, NotificationProps } from '@application/entities/notification';

export function makeNotification(override: Partial<NotificationProps> = {}) {
  return new Notification({
    recipientId: 'recipient-id',
    content: new Content('tests'),
    category: 'test',
    ...override,
  });
}

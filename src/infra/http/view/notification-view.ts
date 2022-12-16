import { Notification } from '@application/entities/notification';

export class NotificationView {
  static toView(notification: Notification) {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      content: notification.content.value,
      category: notification.category,
    };
  }
}

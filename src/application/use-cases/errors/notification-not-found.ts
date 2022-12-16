export class NotificationNotFound extends Error {
  constructor(notificationId: string) {
    super(`Notification ${notificationId} not found`);
  }
}

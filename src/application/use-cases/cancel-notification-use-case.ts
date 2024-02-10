import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface CancelNotificationRequest {
  notificationId: string;
}

@Injectable()
export class CancelNotificationUseCase {
  constructor(private readonly notificationRepository: NotificationsRepository) { }

  async execute(request: CancelNotificationRequest): Promise<void> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound(notificationId);
    }

    notification.cancel();

    await this.notificationRepository.save(notification);
  }
}

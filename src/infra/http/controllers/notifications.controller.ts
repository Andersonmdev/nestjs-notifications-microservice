import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SendNotificationUseCase } from '@application/use-cases/send-notification-use-case';
import { CancelNotificationUseCase } from '@application/use-cases/cancel-notification-use-case';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationView } from '../view/notification-view';
import { CountRecipientNotificationsUseCase } from '@application/use-cases/count-recipient-notifications-use-case';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly sendNotificationUseCase: SendNotificationUseCase,
    private readonly cancelNotificationUseCase: CancelNotificationUseCase,
    private readonly countRecipientNotificationsUseCase: CountRecipientNotificationsUseCase,
  ) {}

  @Patch(':id/cancel')
  async cancelNotification(@Param('id') id: string) {
    await this.cancelNotificationUseCase.execute({ notificationId: id });
  }

  @Get('count/from/:recipientId')
  async countRecipientNotifications(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientNotificationsUseCase.execute({
      recipientId,
    });

    return { count };
  }

  @Post()
  async createNotification(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotificationUseCase.execute({
      recipientId,
      content,
      category,
    });

    return { notification: NotificationView.toView(notification) };
  }
}

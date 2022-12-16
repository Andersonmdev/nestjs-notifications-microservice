import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotificationUseCase } from '../../application/use-cases/send-notification-use-case';
import { DatabaseModule } from '../database/database.module';
import { CancelNotificationUseCase } from '@application/use-cases/cancel-notification-use-case';
import { CountRecipientNotificationsUseCase } from '@application/use-cases/count-recipient-notifications-use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotificationUseCase, CancelNotificationUseCase, CountRecipientNotificationsUseCase],
})
export class HttpModule {}

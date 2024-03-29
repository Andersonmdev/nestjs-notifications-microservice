import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
  constructor() {
    // KAFKA cluster configuration
    super({});
  }

  async onModuleDestroy() {
    await this.close();
  }
}

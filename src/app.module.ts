import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JogosModule } from './jogos/jogos.module';

@Module({
  imports: [JogosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

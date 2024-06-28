import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from 'db.config';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			useFactory: () => ({
				...dataSourceOptions,
			}),
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

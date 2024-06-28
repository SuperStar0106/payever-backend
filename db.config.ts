import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const dataSourceOptions: DataSourceOptions = {
	type: 'mongodb',
	url: process.env.DATABASE_URL,
	entities: ['dist/**/*.entity{.ts,.js}'],
	migrations: ['dist/migrations/*.js'],
	namingStrategy: new SnakeNamingStrategy(),
};

export default new DataSource({
	...dataSourceOptions,
});

import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1113',
      database: 'task-management',
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSources: DataSource) {}
}

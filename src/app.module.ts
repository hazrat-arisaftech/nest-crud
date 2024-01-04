import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TodoController } from "./todo/todo.controller";
import { TodoService } from "./todo/todo.service";
import { MongooseModule } from "@nestjs/mongoose";
import { TodoModule } from "./todo/todo.module";
@Module({
  imports: [
    MongooseModule.forRoot(
      // `${process.env.MONGODB_URI}`,
      process.env.MONGODB_URI
    ),
    TodoModule,
  ],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}

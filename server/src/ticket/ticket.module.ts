import { Module } from "@nestjs/common";
import { TicketModuleBase } from "./base/ticket.module.base";
import { TicketService } from "./ticket.service";
import { TicketController } from "./ticket.controller";
import { TicketResolver } from "./ticket.resolver";

@Module({
  imports: [TicketModuleBase],
  controllers: [TicketController],
  providers: [TicketService, TicketResolver],
  exports: [TicketService],
})
export class TicketModule {}

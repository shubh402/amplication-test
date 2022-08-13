import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TicketService } from "./ticket.service";
import { TicketControllerBase } from "./base/ticket.controller.base";

@swagger.ApiTags("tickets")
@common.Controller("tickets")
export class TicketController extends TicketControllerBase {
  constructor(
    protected readonly service: TicketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

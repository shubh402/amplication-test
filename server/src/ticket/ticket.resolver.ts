import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TicketResolverBase } from "./base/ticket.resolver.base";
import { Ticket } from "./base/Ticket";
import { TicketService } from "./ticket.service";

@graphql.Resolver(() => Ticket)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TicketResolver extends TicketResolverBase {
  constructor(
    protected readonly service: TicketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

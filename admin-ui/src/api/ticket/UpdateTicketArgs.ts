import { TicketWhereUniqueInput } from "./TicketWhereUniqueInput";
import { TicketUpdateInput } from "./TicketUpdateInput";

export type UpdateTicketArgs = {
  where: TicketWhereUniqueInput;
  data: TicketUpdateInput;
};

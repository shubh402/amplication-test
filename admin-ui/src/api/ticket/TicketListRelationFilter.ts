import { TicketWhereInput } from "./TicketWhereInput";

export type TicketListRelationFilter = {
  every?: TicketWhereInput;
  some?: TicketWhereInput;
  none?: TicketWhereInput;
};

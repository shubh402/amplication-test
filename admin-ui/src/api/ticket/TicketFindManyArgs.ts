import { TicketWhereInput } from "./TicketWhereInput";
import { TicketOrderByInput } from "./TicketOrderByInput";

export type TicketFindManyArgs = {
  where?: TicketWhereInput;
  orderBy?: Array<TicketOrderByInput>;
  skip?: number;
  take?: number;
};

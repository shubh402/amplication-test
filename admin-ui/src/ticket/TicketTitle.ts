import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "id";

export const TicketTitle = (record: TTicket): string => {
  return record.id || record.id;
};

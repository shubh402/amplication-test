import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TicketWhereInput = {
  id?: StringFilter;
  TIM?: DateTimeNullableFilter;
};

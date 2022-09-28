import { Bearer } from "./Bearer";
import { Event } from "./Event";
export interface Ticket{
    id:number | null,
    bearer:Bearer | null,
    event:Event | null
}
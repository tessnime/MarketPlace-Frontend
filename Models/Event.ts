import {User} from "./User";
import {KeyWords} from "./KeyWords";

export class Event{
  id!: number;
  title!: string;
  bandLing!: string;
  lastDate!: Date;
  startDate!: Date;
  user!:User;
  listkeyWords:KeyWords[]=[];
}

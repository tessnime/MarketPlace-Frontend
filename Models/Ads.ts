import { BudgetType } from "./Enum/BudgetType";
import { GenderType } from "./Enum/GenderType";
import { ObjectiveType } from "./Enum/ObjectiveType";

export class Ads{
  id!:number;
  gender!:GenderType;
  audiencesAgeMin!:number;
  audiencesAgeMax!:number;
  adsPoints!:number;
  dateCreation!:Date;
  enabled!:Boolean;
  budgetType!:BudgetType;
  startDate!:Date;
  expiredDate!:Date;
  reach!:number;
  objectiveType!:ObjectiveType;
}

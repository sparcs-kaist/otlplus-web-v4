import { days } from "./days";
import { department } from "./department";
import { general } from "./general";
import { level } from "./level";
import { professors } from "./professors";
import { review } from "./review";
import { search } from "./search";
import { semesters } from "./semesters";
import { term } from "./term";
import { type } from "./type";

export const common = {
    ...general,
    type,
    department,
    level,
    term,
    professors,
    review,
    search,
    semesters,
    days,
};

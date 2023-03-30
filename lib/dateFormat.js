import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

export const dateFormat = (date) =>
    format(parseISO(date), "d MMMM, yyyy", {
        locale: es,
    });
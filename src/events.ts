import {BusEvent} from './event_bus';

type Recipe = {
    name: string,
    ingredients: string[],
    result: string
};

export const beginCrafting = 'beginCrafting' as BusEvent<Recipe[]>;

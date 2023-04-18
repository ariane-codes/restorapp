import { writable } from "svelte/store";

export interface IFiltersStore {
    checkedCategories: string [];
    checkedTags: string [];
    checkedPrice: number[];
    checkedRating: number[];
}

export const filtersStore = writable<IFiltersStore>({
    checkedCategories: [],
    checkedTags: [],
    checkedPrice: [],
    checkedRating: [],
});

export const categoriesStore = writable<string[]>([]);

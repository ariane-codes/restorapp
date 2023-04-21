import { writable } from "svelte/store";

export interface IFiltersStore {
    checkedCategories: string [];
    checkedTags: string [];
    checkedPrice: number[];
    checkedRating: number[];
    mounted: boolean;
}

export const filtersStore = writable<IFiltersStore>({
    checkedCategories: [],
    checkedTags: [],
    checkedPrice: [],
    checkedRating: [],
    mounted: false
});

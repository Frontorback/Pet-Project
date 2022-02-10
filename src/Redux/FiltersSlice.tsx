import { createSlice } from "@reduxjs/toolkit";

export interface IFilter {
    categories?:string,
    brand?: string,
    rating?: number,
    minPrice?: number,
    maxPrice?: number,
    

}
interface IFilterSlice {
    filterr: IFilter[],
    allFilters:string[],
    search: string,
    
}

const FilterKit = createSlice({
    name: 'filterd',
    initialState:{
        filterr:[],
        allFilters: [],
        search: ""
        
    },

    reducers:{
        addCategoriesFilters(state: IFilterSlice, action: any){
            state.filterr.push({
                categories: action.payload.categoriesFilter
            })
        },
        addBrandsFilters(state: IFilterSlice, action: any){
            state.filterr.push({
                brand: action.payload.brandsFilter
            })
        },
        addRatingFilters(state: IFilterSlice, action: any){
            state.filterr.push({
                rating: action.payload.ratingFilter
            })
        },
        addMinPriceFilters(state: IFilterSlice, action: any){
            state.filterr.push({
                minPrice: action.payload
            })
        },
        addMaxPriceFilters(state: IFilterSlice, action: any){
            state.filterr.push({
                maxPrice: action.payload
            })
        },
        clearFilters(state: IFilterSlice){
            state.filterr.splice(0,100)
            
        },
        selectAllFilters(state: IFilterSlice, action){
            state.allFilters = action.payload.selectedFilters
        },
        removeFilter(state: IFilterSlice, action){
            state.allFilters.splice(state.allFilters.indexOf(action.payload.key), 1)
        },
        searchFilter(state: IFilterSlice, action){
            state.search = action.payload
        },
    }
})

export const { addCategoriesFilters, addBrandsFilters, addRatingFilters, clearFilters, selectAllFilters, removeFilter, searchFilter, addMinPriceFilters, addMaxPriceFilters } = FilterKit.actions

export default FilterKit.reducer
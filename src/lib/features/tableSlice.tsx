import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Header from '../modelisations/Header';

interface InitialState {
    loading: boolean;
    initialBody: any[],
    body: any[];
    header: Header[];
    pageNumber: number;
    itemNumber: number;
    displayItem: any[];
    error: string | null;
}

const initialState: InitialState = {
    loading: false,
    initialBody: [],
    body: [],
    header: [],
    pageNumber: 1,
    itemNumber: 10,
    displayItem: [],
    error: null,
};

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        removeBodyTable(state) {
            state.body = [];
        },
        setBodyTable(state, action) {
            state.body = action.payload;
        },
        setInitialBodyTable(state, action) {
            state.initialBody = action.payload;
        },
        setHeaderTable(state, action: PayloadAction<Header[]>) {
            state.header = action.payload;
        },
        setPageNumber(state, action: PayloadAction<number>) {
            state.pageNumber = action.payload;
        },
        setItemNumber(state, action: PayloadAction<number>) {
            state.itemNumber = action.payload;
        },
        setDisplayItem(state, action: PayloadAction<any[]>) {
            state.displayItem = action.payload;
        },
        nextPage(state) {
            state.pageNumber += 1;
        },
        prevPage(state) {
            if (state.pageNumber > 1) {
                state.pageNumber -= 1;
            }
        },
        goToPage(state, action: PayloadAction<number>) {
            state.pageNumber = action.payload;
        },
        resetPagination(state) {
            state.pageNumber = 1;
        }
    },
});


export const {
    removeBodyTable,
    setBodyTable,
    setInitialBodyTable,
    setHeaderTable,
    setPageNumber,
    setItemNumber,
    setDisplayItem,
    nextPage,
    prevPage,
    goToPage,
    resetPagination
} = tableSlice.actions;
export default tableSlice.reducer;
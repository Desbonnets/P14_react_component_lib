import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import Header from '../modelisations/Header';
import { fetchGetData } from "../api/fetch";

interface InitialState {
    loading: boolean;
    apiData: string | null;
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
    apiData: null,
    initialBody: [],
    body: [],
    header: [],
    pageNumber: 1,
    itemNumber: 10,
    displayItem: [],
    error: null,
};

/**
 * Récupère les données
 * @type {AsyncThunk<Object, void, AsyncThunkConfig>}
 */
export const getData = createAsyncThunk(
    'table/getData',
    async (apiData: string | null) => {
        if (apiData !== null) {
            try {
                const result = await fetchGetData(apiData);
                return result;
            } catch (error) {
                // Gérer l'erreur ici si nécessaire
                throw new Error('Une erreur s\'est produite lors de la récupération des données');
            }
        } else {
            return [];
        }
    },
);

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
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state) => {
                state.loading = true;
                state.initialBody = [];
                state.body = [];
                state.error = null;
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.loading = false;
                state.initialBody = action.payload;
                state.body = action.payload;
                state.error = null;
            })
            .addCase(getData.rejected, (state, action) => {
                state.loading = false;
                state.initialBody = [];
                state.body = [];
                state.error = action.error.message === undefined ? null : action.error.message;
            })
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
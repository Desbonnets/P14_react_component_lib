import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    loading: boolean;
    initialBody: any[],
    body: any[];
    header: Array<{ id: string; label: string; type: string }>;
    error: string | null;
}

const initialState: InitialState = {
    loading: false,
    initialBody: [],
    body: [],
    header: [],
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
        setHeaderTable(state, action: PayloadAction<Array<{ id: string; label: string; type: string }>>) {
            state.header = action.payload
        }
    },
});

export const { removeBodyTable, setBodyTable, setInitialBodyTable, setHeaderTable } = tableSlice.actions
export default tableSlice.reducer;
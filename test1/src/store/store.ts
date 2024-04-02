import { ThunkAction, configureStore } from "@reduxjs/toolkit"
import { Action, combineReducers } from "redux"
import {currencyReducer } from "./getCurrencies/reducer"
import { currencyDataReducer } from "./saveData/reducer"
import { ratesReducer } from "./getRates/reducer"

const rootReducer = combineReducers({
    cur: currencyReducer,
    cur_data: currencyDataReducer,
    rates: ratesReducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>

export {
    store as appStore
}

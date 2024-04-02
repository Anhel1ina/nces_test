import { CurrencyDataAction, CurrencyDataState } from "./types";

export const CurrencyDataInit: CurrencyDataState = {
    currency: ''
}

export const currencyDataReducer = (state = CurrencyDataInit, action: CurrencyDataAction): CurrencyDataState => {
    switch (action.type) {
        case 'SAVE_CURRENCY_TYPE':
            return {
                ...state,
                currency: action.currency!,
                errors: ''
            }
        case 'SAVE_START':
            return {
                ...state,
                cur_start_date: action.cur_start_date
            }
        case 'SAVE_END':
            return {
                ...state,
                cur_end_date: action.cur_end_date
            }
        case 'SAVE_CURRENCY_INFO':
            return {
                ...state,
                cur_id: action.cur_id!,
                cur_start_date: action.cur_start_date!,
                cur_end_date: action.cur_end_date
            }
        case 'SAVE_ERRORS':
            return {
                ...state,
                errors: action.errors!
            }
        case 'SAVE_DATE_ERRORS':
            return {
                ...state,
                errors_date: action.errors_date!
            }
        default: return state
    }
}
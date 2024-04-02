import { AppThunk } from "../store";
import { CurrencyDataAction } from "./types";


export const SaveCurrencyType = (currency: string): CurrencyDataAction => ({
    type: 'SAVE_CURRENCY_TYPE',
    currency: currency
})

export const SaveStartDate = (start: string): CurrencyDataAction => ({
    type: 'SAVE_START',
    cur_start_date: start
})

export const SaveEndDate = (end: string): CurrencyDataAction => ({
    type: 'SAVE_END',
    cur_end_date: end
})

export const SaveErrors = (text: string): CurrencyDataAction => ({
    type: 'SAVE_ERRORS',
    errors: text
})

export const SaveDateErrors = (text: string): CurrencyDataAction => ({
    type: 'SAVE_DATE_ERRORS',
    errors_date: text
})

export const SaveCurrencyInfo = (cur_id: number, cur_start_date: string, cur_end_date: string): CurrencyDataAction => ({
    type: 'SAVE_CURRENCY_INFO',
    cur_id: cur_id,
    cur_start_date: cur_start_date,
    cur_end_date: cur_end_date
})
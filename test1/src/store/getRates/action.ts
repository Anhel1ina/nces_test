import { AppThunk } from "../store";
import { Rates, RatesAction } from "./types";


export const SaveRates = (rates: Rates[]): RatesAction => ({
    type: 'SAVE_RATES',
    rates: rates
})

export const NoRatesError = (): RatesAction => ({
    type: 'NO_INFO'
})

export const Reset = (): RatesAction => ({
    type: 'RESET'
})

export const LoadRatesInfo = (id: number, start: string, end: string): AppThunk => {
    const url = `https://api.nbrb.by/exrates/rates/dynamics/${id}?startdate=${start}&enddate=${end}`
    return (dispatch) => {
        fetch(url)
        .then(res => res.json())
        .then(res => {
            if(!res.length){
                dispatch(NoRatesError())
                return
            }
            dispatch(SaveRates(res))
        })
    }
}
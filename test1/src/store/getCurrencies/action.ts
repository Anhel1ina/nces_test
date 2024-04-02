import { AppThunk } from "../store";
import { Currency } from "./types";


export const SetCurrencies = (currencies: Currency[]) => ({
    type: 'SET_CURRENCIES',
    currencies: currencies
})

export const LoadCurrenciesInfo = (): AppThunk => {
    const url = 'https://api.nbrb.by/exrates/currencies'
    return (dispatch) => {
        fetch(url)
        .then(res => res.json())
        .then((res: Currency[]) => {
            const uniqueCurrencies = removeDuplicates(res.reverse(), 'Cur_Name')
            const sortedCurrencies = uniqueCurrencies.sort((a, b) => a.Cur_Code.localeCompare(b.Cur_Code))
            dispatch(SetCurrencies(sortedCurrencies))
        })
        .catch(error => {
            console.error('Error loading currencies:', error)
        })
    }
}

const removeDuplicates = (arr: any[], prop: string) => {
    return arr.filter((obj, index, self) =>
        index === self.findIndex((el) => el[prop] === obj[prop])
    )
}


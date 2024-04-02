import { RatesAction, RatesState } from "./types";

export const RatesInit: RatesState = {
    rates: [],
    isRatesAdded: false,
    errors: ''
}

export const ratesReducer = (state = RatesInit, action: RatesAction): RatesState => {
    switch (action.type){
        case 'SAVE_RATES':
            return {
                ...state,
                rates: action.rates,
                errors: '',
                isRatesAdded: true
            }
        case 'NO_INFO':
            return {
                ...state,
                rates: [],
                isRatesAdded: false,
                errors: `Данные по валюте отсутствуют. Попробуйте другую валюту или проверьте правильность заполнения полей.`
            }
        case 'RESET':
            return {
                ...state,
                rates: [],
                isRatesAdded: false,
                errors: ''
            }
        default: return state
    }
}
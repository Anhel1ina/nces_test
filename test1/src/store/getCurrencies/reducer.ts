import { CurrencyAction, CurrencyState,  } from "./types";

export const CurrencyInit: CurrencyState = {
    currencies: []
}

export const currencyReducer = (state = CurrencyInit, action: CurrencyAction): CurrencyState => {
    switch (action.type){
        case 'SET_CURRENCIES':
            return {
                ...state,
                currencies: action.currencies!
            }
        default: return state
    }
}
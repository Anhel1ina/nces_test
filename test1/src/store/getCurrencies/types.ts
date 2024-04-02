export type Currency = {
    Cur_ID: number
    Cur_Name: string
    Cur_DateStart: Date
    Cur_DateEnd: Date
    Cur_Code: string
}

export type CurrencyState = {
    currencies: Currency[]
}

export type CurrencyAction = {
    type: string
    currencies: Currency[]
}
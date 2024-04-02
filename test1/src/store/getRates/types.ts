export type Rates = {
    Cur_ID: number,
    Date: Date,
    Cur_OfficialRate: number
}

export type RatesState = {
    rates?: Rates[]
    isRatesAdded?: boolean
    errors?: string
}

export type RatesAction = {
    type: string
    rates?: Rates[]
}
export type CurrencyDataState = {
    currency?: string
    cur_id?: number
    cur_start_date?: string
    cur_end_date?: string

    errors?: string
    errors_date?: string 
}

export type CurrencyDataAction = {
    type: string
    currency?: string
    cur_id?: number
    cur_start_date?: string
    cur_end_date?: string

    errors?: string
    errors_date?: string 
}
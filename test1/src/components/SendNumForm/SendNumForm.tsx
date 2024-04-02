import { FormEvent, useEffect, useState } from 'react'
import { Input } from '../Input/Input'
import styles from './send_form.module.scss'
import { AppDispatch } from '../../store/store'
import { useDispatch } from 'react-redux'
import { useCurrencyState } from '../../store/getCurrencies/selector'
import { Dropdown } from '../Dropdown/Dropdown'
import { Button } from '../Button/Button'
import { useCurrencyDataState } from '../../store/saveData/selector'
import { Currency } from '../../store/getCurrencies/types'
import { formatDate } from '../../helpers/functions'
import { LoadRatesInfo, NoRatesError, Reset } from '../../store/getRates/action'
import { useRatesState } from '../../store/getRates/selector'
import { SaveDateErrors, SaveEndDate, SaveErrors, SaveStartDate } from '../../store/saveData/action'

export const SendNumForm = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [cur, setCur] = useState<Currency>()
    const {currencies} = useCurrencyState()
    const {rates} = useRatesState()
    const s_cur = useCurrencyDataState()

    const loadData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(SaveErrors(''))
        dispatch(SaveDateErrors(''))
        dispatch(Reset())
        if(!s_cur.currency){
            dispatch(SaveErrors('Поле не должно быть пустым'))
            return
        }
        if(s_cur.cur_start_date! > s_cur.cur_end_date! ||
            s_cur.cur_end_date! < s_cur.cur_start_date!){
                dispatch(SaveDateErrors('Неверное заполнение полей даты! "Дата от" не должно превышать "Дата до" и наоборот'))
                return
            }

        dispatch(LoadRatesInfo(+s_cur.cur_id!, s_cur.cur_start_date!.toString().split("T")[0], s_cur.cur_end_date!.toString().split("T")[0]))
    }

    useEffect(() => {
    }, [])

    useEffect(() => {
        setCur(currencies.find(currency => currency.Cur_Name === s_cur.currency))
        if(!rates){
            dispatch(NoRatesError())
        }
    }, [s_cur, rates])

    return (
        <form className={styles.send_form} onSubmit={loadData}>
            <Dropdown/>
            <Input 
                value={s_cur.cur_start_date?.toString()|| ''}
                onChange={(text: string) => { 
                    dispatch(SaveStartDate(text.toString())) 
                }}
                min={true}
                cur_date={cur?.Cur_DateStart ? formatDate(cur.Cur_DateStart.toString()) : ''}
                label='Дата от' 
                placeholder='Введите дату от' 
                type='date'
            />
            <Input 
                min={false}
                cur_date={(new Date()).toLocaleDateString().toString()}
                value={s_cur.cur_end_date?.toString() || ''}
                onChange={(text: string) => { 
                    dispatch(SaveEndDate(text.toString())) 
                }}
                label='Дата до' 
                placeholder='Введите дату до' 
                type='date'
            />
            <Button name='Выполнить'/>
        </form>
    )
}

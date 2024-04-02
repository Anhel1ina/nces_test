import { useEffect, useState } from 'react'
import styles from './dropdown.module.scss'
import { LoadCurrenciesInfo } from '../../store/getCurrencies/action'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { useCurrencyState } from '../../store/getCurrencies/selector'
import { useCurrencyDataState } from '../../store/saveData/selector'
import { SaveCurrencyInfo, SaveCurrencyType } from '../../store/saveData/action'


export const Dropdown = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [open, setOpen] = useState<boolean>(false)
    const s_cur = useCurrencyDataState()
    const { currencies } = useCurrencyState()
    const openList = () => setOpen(true)
    const closeList = () => setOpen(false)

    const setDates = (cur: string) => {
        if(cur && currencies.find(currency => currency.Cur_Name === cur)){
            const f_cur = currencies.find(currency => currency.Cur_Name === cur)
            dispatch(SaveCurrencyInfo(f_cur?.Cur_ID!, f_cur?.Cur_DateStart!.toString()!, f_cur?.Cur_DateEnd!.toString()!))
        }
    }

    const chooseCurrency = (value: string) => {
        dispatch(SaveCurrencyType(value))
        setDates(value)
        closeList()
    }

    const getText = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch(SaveCurrencyType(e.currentTarget.value))
        setDates(e.currentTarget.value)
        openList()
    }

    useEffect(() => {
        dispatch(LoadCurrenciesInfo())
    }, [dispatch])

    return (
        <div className={styles.currency_dropdown}>
            <div>
                <div className={styles.currency_button}>
                    <input onChange={getText} type='text' value={s_cur.currency || ''} />
                    <div onClick={open ? closeList : openList} className={`${open ? styles.rotate_arrow : null} `}>
                        &lt;
                    </div>
                </div>
                {
                    s_cur.errors ? 
                    <div className={styles.errors}>{s_cur.errors}</div> : null
                }
            </div>
            {
                open ? (
                    <ul className={styles.currency__list}>
                        {

                            currencies!
                                .filter(currency => currency.Cur_Name.toLowerCase().includes(s_cur.currency?.toLowerCase()!))
                                .map((currency, index) => (
                                    <li onClick={() => chooseCurrency(currency.Cur_Name)} key={currency.Cur_ID}>{currency.Cur_Name}</li>
                                ))
                        }
                    </ul>
                ) : null
            }
        </div>
    )
}

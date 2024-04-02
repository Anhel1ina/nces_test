import { useState } from "react"
import styles from './input.module.scss'

type Props = {
    label: string
    placeholder?: string
    type: string

    index?: number
    reference?: React.RefObject<HTMLInputElement>

    value?: string
    errorType?: string
    min?: boolean
    cur_date: string
    onChange?: (text: string) => void
}

export const Input = (props: Props) => {
    const { label = 'Title', placeholder = '', type, index,
    reference, value, onChange, min, cur_date
    } = props

    const [text, setText] = useState(value)
    const getText = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value)
        onChange && onChange(e.currentTarget.value)
    }
    
    return (
        <>
            <div className={styles.box}>
                <p>{label}</p>
                <input 
                onChange={getText} 
                ref={index === 0 ? reference : null} 
                value={text} placeholder={placeholder}
                className={`${styles.input}`} 
                type={type}
                />
                <span className={styles.box_date}>{min ? `Минимальная дата для данной валюты: ${cur_date}` : `Максимальная дата для данной валюты ${cur_date}`}</span>
            </div>
        </>
    )
}

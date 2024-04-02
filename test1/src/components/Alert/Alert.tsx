import React, { useEffect, useState } from 'react'
import styles from './alert.module.scss'
import { useRatesState } from '../../store/getRates/selector'

type Props = {
    close: () => void
    errors: string
}

export const Alert = ({close, errors}: Props) => {
    return (
        <div className={styles.alert_back}>
            <div className={styles.alert_back__message}>
                <div className={styles.alert_back__message_content}>
                    <div onClick={close}>&#215;</div>
                    <p>{errors}</p>
                </div>
            </div>
        </div>
    )
}

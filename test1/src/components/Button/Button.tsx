import styles from './button.module.scss'

type Props = {
    name: string
}

export const Button = ({name}: Props) => {
    return (
        <button type='submit' className={styles.send_button}>
            {name}
        </button>
    )
}

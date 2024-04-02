import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useCurrencyState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.cur
    )
    return selector
}
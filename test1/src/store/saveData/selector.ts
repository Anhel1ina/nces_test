import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useCurrencyDataState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.cur_data
    )
    return selector
}
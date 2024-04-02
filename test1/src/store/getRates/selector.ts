import { useSelector } from "react-redux"
import { AppState } from "../store"

export const useRatesState = () => {
    const selector = useSelector(
        (globalState: AppState) => globalState.rates
    )
    return selector
}
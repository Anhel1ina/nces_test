import { useRatesState } from '../../store/getRates/selector'
import {Chart as ChartJS} from 'chart.js/auto';
import { Line } from 'react-chartjs-2'
import { CategoryScale, LinearScale } from 'chart.js/auto';
import styles from './chart.module.scss'
import { formatDate } from '../../helpers/functions';

ChartJS.register(
    CategoryScale,
    LinearScale
)

export const ChartRates = () => {
    const { rates } = useRatesState()
    return (
        <div className={styles.chart}>
            <Line
                key="revenue-chart"
                data={{
                    labels: rates!.map((data) => formatDate(data.Date.toString())),
                    datasets: [
                        {
                            label: "Курс валют",
                            data: rates!.map((data) => data.Cur_OfficialRate),
                            backgroundColor: "#064FF0",
                            borderColor: "#064FF0",
                        }
                    ],
                }}
                options={{
                    elements: {
                        line: {
                            tension: 0.5,
                        },
                    },
                    plugins: {
                        title: {
                            text: "Monthly Revenue & Cost",
                        },
                    },
                }}
            />
        </div>
    )
}

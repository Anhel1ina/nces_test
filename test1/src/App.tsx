import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { SendNumForm } from './components/SendNumForm/SendNumForm';
import { ChartRates } from './components/Chart/Chart';
import { Alert } from './components/Alert/Alert';
import { useRatesState } from './store/getRates/selector';
import { useDispatch } from 'react-redux';
import { Reset } from './store/getRates/action';
import { useCurrencyDataState } from './store/saveData/selector';


function App() {
  const rateState = useRatesState()
  const dispatch = useDispatch()
  const [open, setOpen] = useState<boolean>(false)
  const [errors, setErrors] = useState<string>('')
  const {errors_date} = useCurrencyDataState()

  const close = () => {
    setOpen(false)
    dispatch(Reset())
  }

  useEffect(() => {
    if (!rateState.isRatesAdded && rateState.errors) {
      setOpen(true)
      setErrors(rateState.errors)
    }
  }, [rateState])

  useEffect(() => {
    if (errors_date) {
      setOpen(true)
      setErrors(errors_date)
    }
  }, [errors_date])

  return (
    <div className="App">
      <SendNumForm />
      <ChartRates />
      {
        open ?
          <Alert errors={errors} close={close} /> : null
      }
    </div>
  );
}

export default App;

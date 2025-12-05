import { useState } from 'react'
import './App.css'
import ClassDemo from './components/ClassDemo'
import EffectModule from './components/EffectModal'
import FormModule from './components/FormModal'
import JSXmodules from './components/JSXmodel'
import ListModule from './components/ListModule'
import PropsState from './components/propState'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClassDemo/>
      <EffectModule/>
      <FormModule/>
      <JSXmodules/>
      <ListModule/>
      <PropsState/>
    </>
  )
}

export default App

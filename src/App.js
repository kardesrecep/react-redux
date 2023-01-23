import React from 'react'
import { Provider } from 'react-redux'
import DarkModeSwitcher from './components/dark-mode/dark-mode-switcher'
import LangSwitcher from './components/lang-switcher/lang-switcher'
import store from './store'


const App = () => {
  return (
    <Provider store={store}> 
    <div>
      <DarkModeSwitcher/>
      <LangSwitcher/>


    </div>
    </Provider>
  )
}

export default App
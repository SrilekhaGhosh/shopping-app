import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './App/store.js'
import Home from './component/Home.jsx'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './App/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>

    
  </ Provider>





  
)

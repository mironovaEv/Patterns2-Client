import { Suspense } from 'react'
import { Spinner } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/mainPage/main'

import AccountsListContainer from '../pages/accounts'
import './index.css'
import NavBar from '../navbar'
import AccountDetailsContainer from '../pages/accounts/accountDetails'

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<MainPage />} />

        <Route path='/accounts'>
          <Route index element={<AccountsListContainer />} />
          <Route path=':number' element={<AccountDetailsContainer />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App

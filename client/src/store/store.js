import { configureStore } from '@reduxjs/toolkit'

import accountsListReducer from '../reducers/accountsReducer'
import accountDetailsReducer from '../reducers/accountDetailsReducer'

export default configureStore({
  reducer: {
    accounts: accountsListReducer,
    accountDetails: accountDetailsReducer,
  },
})

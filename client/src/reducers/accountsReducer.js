import { AccountsApi } from '../api/accountsApi'

const LOAD_ACCOUNTS_LIST = 'LOAD_ACCOUNTS_LIST'
const GET_CURRENCY = 'GET_CURRENCY'

const initialState = {
  accounts: [],
  currency: [],
}
const accountsListReducer = (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case LOAD_ACCOUNTS_LIST:
      newState.accounts = action.accounts

      return newState
    case GET_CURRENCY:
      newState.currency = action.currency

      return newState
    default:
      return newState
  }
}

export function LoadAccountsActionCreator(accounts) {
  return { type: LOAD_ACCOUNTS_LIST, accounts }
}
export function GetCurrencyActionCreator(currency) {
  return { type: GET_CURRENCY, currency }
}

export function LoadAccountsThunkCreator() {
  return dispatch => {
    AccountsApi.GetAccountsList().then(response => {
      console.log(response)
      if (response) {
        dispatch(LoadAccountsActionCreator(response))
      }
    })
  }
}

export function GetCurrencyThunkCreator() {
  return dispatch => {
    AccountsApi.GetCurrency().then(response => {
      console.log(response)
      if (response) {
        dispatch(LoadAccountsActionCreator(response))
      }
    })
  }
}

export function CreateAccountThunkCreator(data) {
  return dispatch => {
    AccountsApi.CreateAccount(data).then(response => {
      console.log(response)
      if (response) {
        dispatch(LoadAccountsActionCreator(response))
      }
    })
  }
}

export default accountsListReducer

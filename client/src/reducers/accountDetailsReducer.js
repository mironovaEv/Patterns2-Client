import { AccountsApi } from '../api/accountsApi'

const LOAD_ACCOUNT_DETAILS = 'LOAD_ACCOUNT_DETAILS'

const initialState = {
  details: {},
}

const accountDetailsReducer = (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case LOAD_ACCOUNT_DETAILS:
      newState.details = action.details

      return newState

    default:
      return newState
  }
}

export function LoadAccountDetailsActionCreator(details) {
  return { type: LOAD_ACCOUNT_DETAILS, details }
}

export function LoadAccountDetailsThunkCreator(number) {
  console.log('5555555555')
  return dispatch => {
    AccountsApi.GetAccountDetails(number).then(response => {
      if (response) {
        dispatch(LoadAccountDetailsActionCreator(response))
      }
    })
  }
}

export function DepositThunkCreator(number, amount) {
  return dispatch => {
    AccountsApi.Deposit(number, amount).then(response => {
      if (response) {
        dispatch(LoadAccountDetailsThunkCreator(number))
      }
    })
  }
}

export function WithdrawThunkCreator(number, amount) {
  return dispatch => {
    AccountsApi.Withdraw(number, amount).then(response => {
      if (response) {
        dispatch(LoadAccountDetailsThunkCreator(number))
      }
    })
  }
}
export default accountDetailsReducer

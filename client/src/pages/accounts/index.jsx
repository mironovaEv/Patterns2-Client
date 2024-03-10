import { useEffect } from 'react'
import { connect } from 'react-redux'

import { LoadAccountsThunkCreator } from '../../reducers/accountsReducer'

import Accounts from './accounts'

function MiddleAccountsComponent(props) {
  useEffect(() => {
    props.LoadAccountsThunkCreator()
  }, [])
  return <Accounts {...props} />
}

function MapStateToProps(state) {
  return { accounts: state.accounts.accounts }
}
const AccountsListContainer = connect(MapStateToProps, {
  LoadAccountsThunkCreator,
})(MiddleAccountsComponent)

export default AccountsListContainer

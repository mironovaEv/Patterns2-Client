import { useEffect } from 'react'
import { connect } from 'react-redux'

import { LoadAccountDetailsThunkCreator } from '../../../reducers/accountDetailsReducer'
import AccountDetails from './accountDetails'
import { useParams } from 'react-router-dom'

function MiddleAccountDetailsComponent(props) {
  const number = useParams()

  useEffect(() => {
    props.LoadAccountDetailsThunkCreator(number.number)
  }, [])
  return <AccountDetails {...props} />
}

function MapStateToProps(state) {
  return { details: state.accountDetails.details }
}
const AccountDetailsContainer = connect(MapStateToProps, {
  LoadAccountDetailsThunkCreator,
})(MiddleAccountDetailsComponent)

export default AccountDetailsContainer

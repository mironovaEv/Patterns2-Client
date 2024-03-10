import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://194.87.80.63:5023/api/v1',
})

function GetAccountsList() {
  return instance
    .get(`/accounts`)
    .then(response => {
      if (response.status === 200) {
        console.log(response)
        return response.data
      }

      return null
    })
    .catch(() => {
      return null
    })
}

function GetAccountDetails(number) {
  console.log('444444444')
  return instance
    .get(`/accounts/${number}`)
    .then(response => {
      if (response.status === 200) {
        console.log(response.data)
        return response.data
      }
      return null
    })
    .catch(() => {
      return null
    })
}

function Deposit(number, amount) {
  return instance.post(`/transactions/${number}/deposit`, amount).then(response => {
    if (response.status === 200) {
      console.log(response)
    }
  })
}

function Withdraw(number, amount) {
  return instance.post(`/transactions/${number}/withdraw`, amount).then(response => {
    if (response.status === 200) {
      console.log(response)
    }
  })
}

function GetCurrency() {
  return instance
    .get(`/currency`)
    .then(response => {
      if (response.status === 200) {
        console.log(response)
        return response.data
      }
      return null
    })
    .catch(() => {
      return null
    })
}

function CreateAccount(data) {
  return instance.post(`/accounts/open`, data).then(response => {
    if (response.status === 200) {
      console.log(response)
    }
  })
}

export const AccountsApi = {
  GetAccountsList,
  GetAccountDetails,
  Deposit,
  Withdraw,
  GetCurrency,
  CreateAccount,
}

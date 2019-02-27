import React from 'react'
import { Provider } from 'react-redux'
import { New, Provider as CroodsProvider } from 'croods'
import Grid from '@material-ui/core/Grid'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import 'react-credit-cards/es/styles-compiled.css'

import { PaymentForm } from 'seasoned-credit-card-form-web'

import store from './store/store'

const theme = createMuiTheme({})

export default props => {
  return (
    <Provider store={store}>
      <CroodsProvider baseUrl={'https://reqres.in/'}>
        <MuiThemeProvider theme={theme}>
          <New
            name="payment"
            render={({ create, creating, error }) => {
              return (
                <Grid container justify="center">
                  <PaymentForm
                    onSubmit={create}
                    submitting={creating}
                    error={error}
                    acceptedCards={['visa', 'amex']}
                  />
                </Grid>
              )
            }}
          />
        </MuiThemeProvider>
      </CroodsProvider>
    </Provider>
  )
}

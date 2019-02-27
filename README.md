# seasoned-credit-card-form-web

> A formik credit card form to speed up the development

[![NPM](https://img.shields.io/npm/v/seasoned-credit-card-form-web.svg)](https://www.npmjs.com/package/seasoned-credit-card-form-web) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save seasoned-credit-card-form-web
```

## Usage

```jsx
import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { PaymentForm } from 'seasoned-credit-card-form-web'
import 'react-credit-cards/es/styles-compiled.css'

const theme = createMuiTheme({})

const Example = props => {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <PaymentForm
          onSubmit={(values) => doSomething(values)}
          submitting={false}
          error={serverError}
          acceptedCards={['visa', 'amex', 'elo', 'mastercard', 'diners', 'hipercard']}
        />
      </MuiThemeProvider>
    )
  }
}
```

## License

MIT © [giovanisleite](https://github.com/giovanisleite)

import React, { Fragment } from 'react'

import Field from './Field'
import { labels, numberMask } from './fieldsHelper'

export default ({ language, values, ...props }) => {
  return (
    <Fragment>
      <Field
        {...props}
        key={'name'}
        value={values.name}
        label={labels[language].name}
        name={'name'}
        fullWidth
        autoFocus
      />
      <Field
        {...props}
        key={'number'}
        value={values.number}
        label={labels[language].number}
        name={'number'}
        mask={numberMask(values.number)}
        fullWidth
      />
      <Field
        {...props}
        key={'expiry'}
        value={values.expiry}
        label={labels[language].expiry}
        name={'expiry'}
        mask={'99/99'}
        placeholder={'MM/AA'}
      />
      <Field
        {...props}
        key={'cvc'}
        value={values.cvc}
        label={labels[language].cvc}
        name={'cvc'}
        mask={'9999'}
        maskChar={''}
        placeholder={'123'}
      />
    </Fragment>
  )
}

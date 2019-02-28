import React, { Fragment } from 'react'
import filter from 'lodash/filter'

import Field from './Field'
import fields from './fields'

export default props => {
  const commonProperties = ({
    touched,
    errors,
    handleChange,
    handleBlur,
    setFieldValue,
    onFocus,
  }) => ({
    touched,
    errors,
    handleChange,
    handleBlur,
    setFieldValue,
    onFocus,
  })
  return (
    <Fragment>
      {filter(fields(props)).map(element => {
        return (
          <Field
            key={element.name}
            type={element.type || 'text'}
            value={props.values[element.name]}
            {...element}
            {...commonProperties({
              ...props,
            })}
          />
        )
      })}
    </Fragment>
  )
}

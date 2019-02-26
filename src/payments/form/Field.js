import React, { Fragment } from 'react'
import { Field } from 'formik'
import InputMask from 'react-input-mask'
import Media from 'react-media'

import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from '@material-ui/core'

import onChange from './onChange'

export default props => {
  const { errors, touched, name, mask, maskChar, placeholder } = props
  const error = touched && touched[name] && errors && errors[name]

  return (
    <FormControl
      component="fieldset"
      id={name + '-fieldset'}
      disabled={props.disabled}
      error={!!error}
      fullWidth={props.fullWidth}
    >
      <Media query="(max-width: 425px)">
        <Fragment>
          <Field
            type={props.type}
            name={name}
            onChange={onChange(props)}
            onBlur={props.handleBlur}
            onFocus={props.onFocus}
            disabled={props.disabled}
            id={name}
            value={props.value}
            component={Input}
            inputComponent={mask ? InputMask : undefined}
            inputProps={mask ? { mask, maskChar } : {}}
            placeholder={
              props.placeholder
                ? `${props.label} ${props.placeholder}`
                : props.label
            }
            error={!!error}
            autoFocus={props.autoFocus}
          />
          {error && <FormHelperText>{error || placeholder}</FormHelperText>}
        </Fragment>
      </Media>
      <Media query="(min-width: 426px)">
        <Fragment>
          <InputLabel htmlFor={name}>{props.label}</InputLabel>
          <Field
            type={props.type}
            name={name}
            onChange={onChange(props)}
            onBlur={props.handleBlur}
            onFocus={props.onFocus}
            id={name}
            value={props.value}
            component={Input}
            inputComponent={mask ? InputMask : undefined}
            inputProps={mask ? { mask, maskChar } : {}}
            placeholder={props.placeholder}
            error={!!error}
            autoFocus={props.autoFocus}
          />
          <FormHelperText>{error || placeholder}</FormHelperText>
        </Fragment>
      </Media>
    </FormControl>
  )
}

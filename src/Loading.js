import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

export default ({ style, ...props }) => (
  <div style={{ textAlign: 'center', ...style }}>
    <CircularProgress {...props} />
  </div>
)

import React from 'react'
import Typography from '@material-ui/core/Typography'

export default ({ style, children, ...props }) =>
  children ? (
    <div style={{ ...style, padding: 20, textAlign: 'center' }}>
      <Typography color="error" variant="h5" {...props}>
        {children}
      </Typography>
    </div>
  ) : null

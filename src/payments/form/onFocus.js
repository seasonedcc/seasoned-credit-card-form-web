function onFocus({ target }) {
  this.setState({
    focused: target.id,
  })
}

export default onFocus

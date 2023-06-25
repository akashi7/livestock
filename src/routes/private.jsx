const Private = (Wrapped) => {
  return (props) => {
    const localToken = localStorage.getItem('token')

    if (!localToken) {
      window.location.href = '/'
      return null
    }

    return <Wrapped {...props} />
  }
}

export default Private

import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error(error)
    console.log(info)
  }

  render() {
    const { errorPage: ErrorPage } = this.props
    if (this.state.hasError) return (<ErrorPage />)

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  errorPage: PropTypes.func.isRequired
}

export default ErrorBoundary


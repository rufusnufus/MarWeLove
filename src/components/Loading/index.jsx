import React from 'react'

import './index.css'

function Loading({ children, loading }) {
  if (loading) {
    return <img className="loading" src="/images/loading.gif" alt="loading" />
  }
  return <>{children}</>
}

export default Loading

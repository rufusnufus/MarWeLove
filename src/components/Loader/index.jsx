import React, { useRef, useEffect } from 'react'
import useOnScreen from '../../hooks/useOnScreen'

function Loader({ onChange }) {
  const ref = useRef()
  const isVisible = useOnScreen(ref)

  useEffect(() => {
    if (isVisible) {
      onChange()
    }
  }, [isVisible])

  return <img ref={ref} className="loading" src="/images/loading.gif" alt="loading" />
}

export default Loader

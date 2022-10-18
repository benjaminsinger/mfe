// CONTAINER COMPONENT APP
// INITS AUTH SUB APP WITHIN CONTAINER
import { mount } from 'dashboard/DashboardApp'
import React, { useRef, useEffect } from 'react'

export default ({ onSignIn }) => {
  const ref = useRef(null)

  // useEffect runs any time component is updated
  // or changed in any way
  useEffect(() => {
    mount(ref.current)
  }, [])

  return <div ref={ref} />
}

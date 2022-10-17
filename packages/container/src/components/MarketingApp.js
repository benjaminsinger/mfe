// CONTAINER COMPONENT APP
// INITS MARKETING SUB APP WITHIN CONTAINER
import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default () => {
  const ref = useRef(null)
  const history = useHistory() // browser history NOT memory history

  // useEffect runs any time component is updated
  // or changed in any way
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      // 1. onNavigate gets pathname you are attempting to visit
      // if not same as current page will push new path to history
      onNavigate({ pathname: nextPathname }) {
        // get current pathname of page you're on
        const { pathname } = history.location

        console.log('Container noticed navigation within MarketingApp')
        // if current path/page (pathname) is not the
        // same as next path/page (nextPathname) - push new pathname to history object
        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      },
    }) // onNavigate

    // 2. sub app - listen for when parent (i.e. container) navigates
    // whenever navigation occurs -- history.listen will fire a callback
    history.listen(onParentNavigate)
  }, []) // [] ensure useEffect only runs when first rendered to the screen

  return <div ref={ref} />
}

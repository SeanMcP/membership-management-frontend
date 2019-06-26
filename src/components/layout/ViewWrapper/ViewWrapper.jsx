import React from 'react'
import APP from 'constants/app'

const ViewWrapper = ({ children, title }) => {
  React.useEffect(() => {
    document.title = `${title} - ${APP.TITLE}`
  }, [title])
  return (
    <main id="main" role="main">
      {children}
    </main>
  )
}

export default ViewWrapper

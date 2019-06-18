import React from 'react'

const ViewWrapper = ({ children, title }) => {
    React.useEffect(() => {
        document.title = `${title} - ${document.title}`
    }, [title])
    return <>{children}</>
}

export default ViewWrapper

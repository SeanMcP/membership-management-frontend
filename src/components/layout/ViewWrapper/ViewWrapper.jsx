import React from 'react'
import { useAppContext } from 'context/app/AppContext'

const ViewWrapper = ({ children, title }) => {
    const { name } = useAppContext()
    React.useEffect(() => {
        document.title = `${title} - ${name}`
    }, [name, title])
    return <>{children}</>
}

export default ViewWrapper

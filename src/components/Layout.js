import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-11/12 md:w-10/12 xl:w-9/12 mx-auto'>{children}</div>
  )
}

export default Layout
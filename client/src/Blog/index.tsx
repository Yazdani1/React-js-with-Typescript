import React from 'react'
import { Blogdata } from './types'

const Blog:React.FC<Blogdata> = ({title,des,date,category,location}) => {
  return (
    <React.Fragment>
      <div className='bloglist'>

      </div>
    </React.Fragment>
  )
}

export default Blog
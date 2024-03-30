
'use client'

import React from 'react'
import {usePathname,useSearchParams} from 'next/navigation'

function BlogItem() {
    const pathName = usePathname()
    const searchParams = useSearchParams()
    console.log(pathName)
    console.log(searchParams)
  return (
    <div>BlogItem
    </div>
  )
}

export default BlogItem


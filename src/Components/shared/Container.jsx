import React from 'react'

export default function Container({ children }) {
  return (
    <div className="grid grid-cols-12 gap-6 max-w-[1280px] mx-auto">
      {children}
    </div>
  )
}

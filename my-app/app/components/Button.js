"use client";
import React from 'react'

export default function Button() {
  return (
      <div>
            <button onClick={()=>console.log("I clicked here")}>
                Click Here
            </button>
        </div>

  )
}

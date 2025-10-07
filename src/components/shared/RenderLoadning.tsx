import React from 'react'
import Loading from './Loading'

const RenderLoadning = (isLoading:boolean) => {
    if (!isLoading) return null
  if(isLoading){
    return <Loading/>
  }
}

export default RenderLoadning
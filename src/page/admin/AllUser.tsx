import { RenderError } from '@/components/shared/RenderError'
import RenderLoadning from '@/components/shared/RenderLoadning'
import { useAllUserQuery } from '@/redux/features/user/user.api'
import React from 'react'

const AllUser = () => {

  const {data,isLoading,isError} = useAllUserQuery()
  
  RenderLoadning(isLoading)
  RenderError(isError)
  console.log(data);
  
  return (
    <div>AllUser</div>
  )
}

export default AllUser
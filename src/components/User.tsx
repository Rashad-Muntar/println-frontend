import { useGetUsersQuery } from '../../generated/graphql'
import { Text } from 'react-native'

import React from 'react'


function User() {
    const {data, loading, error} = useGetUsersQuery()
    console.log(data)
  return (
    <Text>Usersjdfhjsdkhjsjghsjkhj</Text>
  )
}



export default User

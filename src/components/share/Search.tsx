import React from 'react'
import { View, Text } from 'react-native'
import Input from './Input'
interface Props {
    onChangeText?: () => void

}
const Search = ({onChangeText}: Props) => {
  return (
    <View>
        <Input onChangeText={onChangeText} placeholder='Search for service' />
    </View>
  )
}

export default Search
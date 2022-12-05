import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Chat } from '@/Containers'

const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Chat}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator

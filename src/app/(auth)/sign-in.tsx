import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const SignIn = () => {
  return (
    <View>
      <Text>sign-in</Text>
      <Link href={'/(auth)/sign-up'}>Create account</Link>
      <Link href={'/'}>Go back</Link>
    </View>
  )
}

export default SignIn
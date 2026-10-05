import { Text, View } from "react-native";
import "../../../global.css";
import { Link } from "expo-router";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href={'/onboarding'} className="mt-4 bg-primary py-1 px-2 text-white font-bold">Go to Onboarding</Link>
      <Link href={'/(auth)/sign-in'} className="mt-4 bg-primary py-1 px-2 text-white font-bold">Go to SignIn</Link>
      <Link href={'/(auth)/sign-up'} className="mt-4 bg-primary py-1 px-2 text-white font-bold">Go to SignUp</Link>

      <Link href={'/subscriptions/spotify'} className="mt-4 bg-primary py-1 px-2 text-white font-bold">Spotify Subscription</Link>
      <Link href={{
        pathname: "/subscriptions/[id]",
        params: {id: "claude"}
      }} className="mt-4 bg-primary py-1 px-2 text-white font-bold">Claude Max Subscription</Link>
    </View>
  );
}
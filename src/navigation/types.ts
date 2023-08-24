import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Details: { userId: string };
};

export type RootScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

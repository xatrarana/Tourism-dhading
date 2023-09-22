import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import SignInContainer from "../../container/Auth/SignInContainer";
import { ClerkProvider, SignedIn } from "@clerk/clerk-expo";

const SignInScreen = () => {
  return <SignInContainer />;
};

export default SignInScreen;

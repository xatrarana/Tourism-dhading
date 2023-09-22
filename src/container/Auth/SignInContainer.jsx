import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Modal,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/common/Button";
import Logo from "../../components/Logo";
import { useRouter } from "expo-router";
import CircleWrapper from "../../components/CircleWrapper";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { Entypo } from "@expo/vector-icons";
import { cn } from "../../lib/utils";
import { loginSchema } from "../../schemas";
import { useFormik } from "formik";
import axios from "axios";
import { StatusBar } from "expo-status-bar";

const SignInContainer = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = React.useState(null);

  const onSubmit = () => {
    setIsLoading(true);
    axios
      .post("https://testmunc.vercel.app/v1/auth/login", formik.values)
      .then(async (response) => {
        setResponse(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.message);
        setIsLoading(false);
      });
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <View className="bg-[#EDF4F3] h-full">
      <View className="z-10  h-36">
        <CircleWrapper />
      </View>
      <View className="w-full h-fit gap-y-2  flex items-center justify-center">
        <View className="flex flex-col items-center justify-center">
          <View className="flex items-center gap-y-6 mb-12">
            <Text className="text-xl font-bold">Welcome Back!</Text>
            <Text className="text-center px-8">Lets travel together</Text>
          </View>
          <Logo source="signin" size={180} />
        </View>
        <View className="gap-y-6 ">
          <View
            className={cn(
              "bg-white w-80 flex flex-row items-center rounded-xl justify-evenly ",
              `${formik.errors.email ? "border-[1px] border-red-500 " : "  "}`
            )}
          >
            <Entypo name="mail" size={20} color="black" />
            <TextInput
              className=" w-60 py-3 rounded-xl"
              placeholder="Email"
              onChangeText={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              value={formik.values.email}
            />
          </View>
          {/* {formik.touched.email && formik.errors.email ? (
            <Text>{formik.errors.email}</Text>
          ) : null} */}
          <View
            className={cn(
              "bg-white w-80 flex flex-row items-center rounded-xl justify-evenly ",
              `${
                formik.errors.password ? "border-[1px] border-red-500 " : "  "
              }`
            )}
          >
            <Entypo name="lock" size={20} color="black" />
            <TextInput
              className=" w-60 py-3 rounded-xl "
              placeholder="Password"
              onChangeText={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              value={formik.values.password}
              secureTextEntry
            />
          </View>
          {error ? <Text className="text-red-500 pl-4">{error}</Text> : null}
        </View>

        <View className="w-full h-fit gap-y-4 flex items-center justify-center">
          <View className="bg-[#3A7567] w-80 flex flex-row items-center rounded-xl justify-evenly">
            <Button isLoading={isLoading} handleSubmit={formik.handleSubmit}>
              Login
            </Button>
          </View>
          <View className="flex flex-row">
            <Text>Don't have an Account ?</Text>
            <Pressable onPress={() => router.push("/signup")}>
              <Text className="font-semibold text-green-700">sign up</Text>
            </Pressable>
          </View>
          <KeyboardSpacer topSpacing={100} />
        </View>
      </View>
      <Modal visible={isLoading} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <StatusBar backgroundColor={"rgba(0, 0, 0, 0.4)"} />
          <View className="flex flex-row gap-x-6 px-14 py-5 bg-stone-300 items-center  justify-center rounded-md">
            {response ? (
              <Text className="text-xl">{response.message}</Text>
            ) : (
              <>
                <Text className="text-xl">Signing in</Text>
                <ActivityIndicator size="small" color="#0000ff" />
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SignInContainer;
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
});

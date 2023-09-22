import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Modal,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Circle from "../../components/common/Circle";
import Button from "../../components/common/Button";
import Logo from "../../components/Logo";
import { useRouter } from "expo-router";
import CircleWrapper from "../../components/CircleWrapper";
import KeyboardSpacer from "react-native-keyboard-spacer";
import { cn } from "../../lib/utils";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { loginSchema, registerSchema } from "../../schemas";
import { useFormik } from "formik";
import axios from "axios";
import { StatusBar } from "expo-status-bar";

const SignUpContainer = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [response, setResponse] = React.useState(null);
  const onSubmit = () => {
    setIsLoading(true);
    axios
      .post("https://testmunc.vercel.app/v1/auth/signup", formik.values)
      .then(async (response) => {
        setResponse(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch((error) => {
        setError(error.response.data.message);
        setIsLoading(false);
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <View className="bg-[#EDF4F3] h-full">
      <View className="  z-10 h-36">
        <CircleWrapper />
      </View>
      <View className="w-full h-fit  pb-16 gap-y-2  flex items-center justify-center">
        <View className="flex items-center gap-y-4 ">
          <Text className="text-2xl font-bold">Welcome Onboard</Text>
          <Text className="text-center px-8">Lets travel together</Text>
        </View>
        <View className="gap-y-5 ">
          <View
            className={cn(
              "bg-white w-80 flex flex-row items-center rounded-xl justify-evenly ",
              `${formik.errors.name ? "border-[1px] border-red-500 " : "  "}`
            )}
          >
            <AntDesign name="user" size={20} color="black" />
            <TextInput
              className=" w-60 py-3 rounded-xl"
              placeholder="Name"
              onChangeText={formik.handleChange("name")}
              onBlur={formik.handleBlur("name")}
              value={formik.values.name}
            />
          </View>
          <View
            className={cn(
              "bg-white w-80 flex flex-row items-center rounded-xl justify-evenly ",
              `${formik.errors.email ? "border-[1px] border-red-500 " : "  "}`
            )}
          >
            <AntDesign name="mail" size={20} color="black" />
            <TextInput
              className=" w-60 py-3 rounded-xl"
              placeholder="Email"
              onChangeText={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              value={formik.values.email}
            />
          </View>
          <View
            className={cn(
              "bg-white w-80 flex flex-row items-center rounded-xl justify-evenly ",
              `${
                formik.errors.password ? "border-[1px] border-red-500 " : "  "
              }`
            )}
          >
            <AntDesign name="lock" size={20} color="black" />
            <TextInput
              className=" w-60 py-3 rounded-xl"
              placeholder="Password"
              onChangeText={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              value={formik.values.password}
            />
          </View>
          <View
            className={cn(
              "bg-white w-80 flex flex-row items-center rounded-xl justify-evenly ",
              `${
                formik.errors.confirmPassword
                  ? "border-[1px] border-red-500 "
                  : "  "
              }`
            )}
          >
            <AntDesign name="lock" size={20} color="black" />
            <TextInput
              className=" w-60 py-3 rounded-xl"
              placeholder="Confrim password"
              onChangeText={formik.handleChange("confirmPassword")}
              onBlur={formik.handleBlur("confirmPassword")}
              value={formik.values.confirmPassword}
            />
          </View>
        </View>
        <KeyboardSpacer topSpacing={60} />
      </View>
      <View className="w-full h-fit  gap-y-4 flex items-center justify-center">
        <Button isLoading={isLoading} handleSubmit={formik.handleSubmit}>
          Register
        </Button>
        <View className="flex flex-row">
          <Text>Already have an Account ?</Text>
          <Pressable onPress={() => router.push("/signin")}>
            <Text className="font-semibold pl-2 text-green-700">sign in</Text>
          </Pressable>
        </View>
      </View>
      <Modal visible={isLoading} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <StatusBar backgroundColor={"rgba(0, 0, 0, 0.4)"} />

          <View className="flex flex-row gap-x-6 px-14 py-8 bg-stone-300 items-center  justify-center rounded-md">
            {response ? (
              <Text>{response.message}</Text>
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

export default SignUpContainer;
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
});

import { Text, View } from "react-native";

import { style } from "../Home/Style";
import { StatusBar } from "expo-status-bar";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { InputText } from "../../components/TextInput/InputText";
import { PassButton } from "../../components/PassButton/PassButton";

export default function Home() {
  return (
    <View style={style.container}>
      <View>
        <BatLogo />
      </View>
      <View style={style.buttonsContainer}>
        <PassButton />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

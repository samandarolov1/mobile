import {
  Text,
  View,
  Button,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import Toast from "react-native-toast-message";

export default function ThirdP() {
  return (
    <ImageBackground
      source={require("@/assets/images/favicon.png")}
      style={styles.bacImg}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.textSetting}>
          assalomu alaykum Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Illo quo consequatur ducimus, non id quia! Quas praesentium vel
          in veritatis non voluptatibus reiciendis, expedita magnam quia impedit
          dicta consectetur ea deleniti pariatur earum, optio velit corporis
          officiis! Quis, aliquam. Optio, velit corrupti? Nobis a dolore tenetur
          quia? Quaerat dolorem modi nostrum, fuga quisquam ad, unde nisi quidem
          voluptatem qui eligendi necessitatibus sint non quas officiis
          reprehenderit. Tempora quidem nisi modi facilis dicta corrupti nulla
          eius quis. Ratione ex nemo in assumenda ipsum earum sit iste ullam nam
          sint distinctio voluptatum impedit, sequi praesentium qui repellendus
          labore. Vitae repellat cum cupiditate placeat saepe distinctio
          reiciendis veniam veritatis! Commodi voluptas velit illo quos
          obcaecati maxime quam fugiat, odio non possimus facere! Sint,
          incidunt? Veritatis saepe cumque modi consequuntur est possimus animi,
          maiores quidem necessitatibus, impedit quam ad, ipsa distinctio?
          <Button
            title="press"
            onPress={() =>
              Alert.alert(
                "assalomu alaykum qadrligim",
                "bu bola sizni qattiq sevishini aytdi va haqiqatda sizni qattiq sevadi. shuning uchun bu platformani siz uchun yasadi. endi menga aytingchi, siz ham uni sevasizmi?",
                [
                  {
                    text: "Yo'q, Sevmayman",
                    onPress: () =>
                      Toast.show({
                        type: "info",
                        text1: "Baxtli bo'ling!!!",
                        text2: "Sevganiz to'yiz kuni tashlab ketsin",
                        position: "top", // 'top' or 'bottom'
                        visibilityTime: 5000, // Disappear after 5 seconds
                        autoHide: true, // Automatically hide after visibilityTime
                        topOffset: 30, // Offset for the position
                      }),
                      style: "destructive" 
                  },
                  {
                    text: "Ha, Albatta",
                    onPress: () =>
                      Toast.show({
                        type: "info",
                        text1: "men aniq bilardim!!!",
                        text2: "sevishingizni ayting. nimani o'ylayapsiz, bo'ling tez. iye",
                        position: "top", // 'top' or 'bottom'
                        visibilityTime: 5000, // Disappear after 5 seconds
                        autoHide: true, // Automatically hide after visibilityTime
                        topOffset: 30, // Offset for the position
                      }),
                      style: "destructive" 
                  }
                ]
              )
            }
          />
        </Text>
        <Toast />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bacImg: {
    height: "100%",
    width: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 20,
    paddingLeft: 9,
    paddingRight: 9,
  },
  textSetting: {
    textAlign: "justify",
  },
});

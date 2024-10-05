import { StyleSheet, Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";
import { CarouselData } from "../data/CarouselData";

const Carousel = () => {
  return (
    <View style={styles.carouselContainer}>
      <Swiper
        showsPagination={false}
        showsButtons={false}
        autoplay={true}
        style={styles.wrapper}
      >
        {CarouselData.map((item, index) => {
          return (
            <View key={index}>
              <Image style={styles.imageStayle} source={item.image} />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    position: "relative",
  },
  wrapper: {
    height: 300,
  },
  imageStayle: {
    width: "100%",
    height: 250,
  },
});

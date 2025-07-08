import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Pressable,
  Animated,
  Image,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.85;
const CARD_HEIGHT = CARD_WIDTH * 1.6;

// --- 데이터 구조 변경 ---
const eventsData = {
  "국제 안전 보건 전시회": [
    {
      id: "1",
      desc: "최지한\n서울 킨텍스\n2025.07.08",
      backText: "삼성 부스에 대한 상세 설명입니다.",
      logo: require("../assets/samsung.jpeg"),
    },
    {
      id: "2",
      desc: "김민준\n부산 벡스코\n2025.07.09",
      backText: "LG 부스에 대한 상세 설명입니다.",
      logo: require("../assets/samsung.jpeg"), // 임시로 삼성 로고 사용
    },
  ],
  "AI 엑스포 코리아": [
    {
      id: "3",
      desc: "박도윤\n서울 코엑스\n2025.08.01",
      backText: "Google AI 부스에 대한 상세 설명입니다.",
      logo: require("../assets/samsung.jpeg"), // 임시로 삼성 로고 사용
    },
    {
      id: "4",
      desc: "윤채원\n서울 코엑스\n2025.08.02",
      backText: "Naver AI 부스에 대한 상세 설명입니다.",
      logo: require("../assets/samsung.jpeg"), // 임시로 삼성 로고 사용
    },
  ],
};

const NftScreen = () => {
  const [selectedEvent, setSelectedEvent] = useState(Object.keys(eventsData)[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const animatedValues = useRef(
    Object.keys(eventsData).reduce((acc, eventName) => {
      eventsData[eventName].forEach((_, index) => {
        acc[`${eventName}-${index}`] = new Animated.Value(0);
      });
      return acc;
    }, {})
  ).current;

  const onScroll = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    if (slide !== activeSlide) {
      setActiveSlide(slide);
    }
  };

  const renderCard = ({ item, index }) => {
    const key = `${selectedEvent}-${index}`;
    if (!animatedValues.current[key]) {
      animatedValues.current[key] = new Animated.Value(0);
    }
    const rotateY = animatedValues.current[key].interpolate({
      inputRange: [0, 180],
      outputRange: ["0deg", "180deg"],
    });

    return (
      <Pressable onPress={() => handleFlip(selectedEvent, index)} style={{ width: width, alignItems: 'center', justifyContent: 'center' }}>
        <Animated.View style={[styles.cardContainerInner, { transform: [{ rotateY }] }]}>
          {/* 앞면 */}
          <View style={[styles.cardFace]}>
            <Image
              source={item.ticketBg}
              style={styles.bgImg}
              resizeMode="contain"
            />
            <View style={styles.textOverlay}>
              <Image
                source={item.logo}
                style={styles.logoImg}
                resizeMode="contain"
              />
              <Text style={styles.desc}>{item.desc}</Text>
            </View>
          </View>

          {/* 뒷면 */}
          <View style={[styles.cardFace, { transform: [{ rotateY: "180deg" }] }]}>
            <Image
              source={item.ticketBg}
              style={styles.bgImg}
              resizeMode="contain"
            />
            <View style={styles.textOverlay}>
              <Text style={styles.backText}>{item.backText}</Text>
            </View>
          </View>
        </Animated.View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      {/* --- 행사 선택 드롭다운 --- */}
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            {Object.keys(eventsData).map((event) => (
              <TouchableOpacity
                key={event}
                style={styles.modalItem}
                onPress={() => {
                  setSelectedEvent(event);
                  setModalVisible(false);
                  setActiveSlide(0); // 이벤트 변경 시 첫 페이지로
                }}
              >
                <Text style={styles.modalItemText}>{event}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      {/* --- 헤더 --- */}
      <TouchableOpacity style={styles.header} onPress={() => setModalVisible(true)}>
        <Text style={styles.headerText}>{selectedEvent}</Text>
        <Text style={styles.dropdownIcon}>▽</Text>
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <FlatList
          data={eventsData[selectedEvent]}
          renderItem={renderCard}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
        />
        {/* --- 페이지네이션 --- */}
        <View style={styles.paginationContainer}>
          {eventsData[selectedEvent].map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                activeSlide === index && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff", // 배경색 흰색으로 변경
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerText: {
    fontSize: 14,
    color: '#333',
  },
  dropdownIcon: {
    fontSize: 12,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 18,
    backgroundColor: "transparent",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },

  cardContent: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
  },
  cardBack: {
     // transform: [{ rotateY: "180deg" }], // 이 부분은 Animated.View의 transform으로 대체
  },
  bgImg: {
    width: CARD_WIDTH * 0.92,
    height: CARD_HEIGHT * 0.92,
    position: "absolute",
    top: 40,
    left: 50,
  },
  textOverlay: {
    flex: 1,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
  logoImg: {
    top: -20,
    left: 37,
    width: CARD_WIDTH * 1.3, // 로고 크기 조절 (원하는 만큼!)
    height: 130,
    marginBottom: 18,
  },
  desc: {
    top: 150,
    left: 90,
    fontSize: 18,
    color: "#222",
    textAlign: "right",
    lineHeight: 26,
  },
  backText: {
    fontSize: 24,
    color: "#222",
    fontWeight: "600",
    textAlign: "center",
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d8d8d8',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#333',
  },
  hidden: {
    //position: 'absolute',
    //opacity: 0,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modalContent: {
    marginTop: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '90%',
    elevation: 10,
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalItemText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default NftScreen;

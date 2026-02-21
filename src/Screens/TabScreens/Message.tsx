/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  Image,
  PanResponder,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { typography } from '../../theme/typography';
import { Images } from '../../../assets';
import { getCardShadow } from '../../theme/shadows';
import Layout from '../../layouts/Layout';
import { AuthInput } from '../../Components/buttons/Input';

type MessageItem = {
  id: string;
  name: string;
  message: string;
  time: string;
  avatar: any;
  dotColor: string;
};

type RowProps = {
  item: MessageItem;
  onDelete: (id: string) => void;
};

const SWIPE_WIDTH = 74;

const SwipeableRow: React.FC<RowProps> = ({ item, onDelete }) => {
  const colors: any = useTheme().colors;
  const translateX = useRef(new Animated.Value(0)).current;
  const [isOpen, setIsOpen] = useState(false);

  const animateTo = useCallback(
    (toValue: number, opened: boolean) => {
      Animated.spring(translateX, {
        toValue,
        useNativeDriver: true,
        friction: 8,
        tension: 60,
      }).start(() => setIsOpen(opened));
    },
    [translateX],
  );

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (_, gestureState) =>
          Math.abs(gestureState.dx) > 8 && Math.abs(gestureState.dy) < 10,
        onPanResponderMove: (_, gestureState) => {
          const next = Math.max(-SWIPE_WIDTH, Math.min(0, gestureState.dx));
          translateX.setValue(next);
        },
        onPanResponderRelease: (_, gestureState) => {
          if (gestureState.dx < -38) {
            animateTo(-SWIPE_WIDTH, true);
            return;
          }
          animateTo(0, false);
        },
        onPanResponderTerminate: () => animateTo(0, false),
      }),
    [animateTo, translateX],
  );

  return (
    <View style={styles.rowContainer}>
      <View style={[styles.hiddenRight, { borderColor: colors.Border_color }]}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => onDelete(item.id)}
        >
          <Text style={[styles.deleteIcon, typography.Regular14]}>Delete</Text>
        </TouchableOpacity>
      </View>

      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.rowCard,
          {
            borderColor: colors.Border_color,
            backgroundColor: colors.White_color,
            transform: [{ translateX }],
          },
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.rowTouch}
          onPress={() => {
            if (isOpen) {
              animateTo(0, false);
            }
          }}
        >
          <View style={styles.leftSection}>
            <View style={styles.avatarWrap}>
              <Image source={item.avatar} style={styles.avatar} />
              <View style={[styles.dot, { backgroundColor: item.dotColor }]} />
            </View>

            <View style={styles.textWrap}>
              <Text
                style={[typography.SemiBold24, styles.nameText]}
                numberOfLines={1}
              >
                {item.name}
              </Text>
              <Text
                style={[typography.Regular18, styles.previewText]}
                numberOfLines={1}
              >
                {item.message}
              </Text>
            </View>
          </View>

          <Text style={[typography.Regular14, styles.timeText]}>
            {item.time}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const Message = () => {
  const colors: any = useTheme().colors;
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<MessageItem[]>([
    {
      id: '1',
      name: 'Watson D.',
      message: 'Please, tell me your budget',
      time: 'Just Now',
      avatar: Images.storyImage2,
      dotColor: '#FF4A4A',
    },
    {
      id: '2',
      name: 'Ethan Alexander',
      message: 'Thanks for your compliment...',
      time: '01:55',
      avatar: Images.storyImage,
      dotColor: '#1FC173',
    },
    {
      id: '3',
      name: 'Ethan Watson',
      message: 'hi! are you there brother',
      time: '12:35 pm',
      avatar: Images.storyImage3,
      dotColor: '#FF4A4A',
    },
    {
      id: '4',
      name: 'Matthew ethan',
      message: "Did you do that. It's urgent.",
      time: '11:20 am',
      avatar: Images.storyImage2,
      dotColor: '#FF4A4A',
    },
    {
      id: '5',
      name: 'Jhon Adam.',
      message: 'How are you?',
      time: '10:31 am',
      avatar: Images.storyImage3,
      dotColor: '#FF4A4A',
    },
    {
      id: '6',
      name: 'Ethan bosman',
      message: 'Can you do the work now?',
      time: 'Yesterday, 11:14 pm',
      avatar: Images.storyImage,
      dotColor: '#FF4A4A',
    },
    {
      id: '7',
      name: 'Adien Matthew',
      message: 'hi! are you there brother',
      time: 'Yesterday, 10:00 am',
      avatar: Images.storyImage2,
      dotColor: '#FF4A4A',
    },
    {
      id: '8',
      name: 'Alexander bosman',
      message: 'hi! are you there brother',
      time: 'Friday, 10:00 am',
      avatar: Images.storyImage3,
      dotColor: '#FF4A4A',
    },
  ]);

  const filteredMessages = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return messages;
    }

    return messages.filter(
      item =>
        item.name.toLowerCase().includes(term) ||
        item.message.toLowerCase().includes(term),
    );
  }, [messages, query]);

  const deleteMessage = (id: string) => {
    setMessages(prev => prev.filter(item => item.id !== id));
  };

  return (
    <Layout>
      <View style={styles.screen}>
        <View>
          <Text
            style={[
              typography.SemiBold20,
              {
                textAlign: 'left',
                color: colors.Secondary_text_color,
                paddingVertical: 10,
              },
            ]}
          >
            @dave_brown
          </Text>
        </View>
        <View>
          {/* <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search..."
            placeholderTextColor="#5F8FEE"
            style={styles.searchInput}
          /> */}

          <AuthInput placeholder="Search here..." />
        </View>

        <View style={{ paddingVertical: 10 }}>
          <Text style={{ ...typography.Regular16, color: colors.Black_color }}>
            All Messages
          </Text>
        </View>

        <FlatList
          data={filteredMessages}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <SwipeableRow item={item} onDelete={deleteMessage} />
          )}
        />
      </View>
    </Layout>
  );
};

export default Message;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listContent: {
    paddingBottom: 110,
  },
  rowContainer: {
    height: 78,
    marginBottom: 10,
    borderRadius: 12,
  },
  hiddenRight: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: SWIPE_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteIcon: {
    color: 'red',
  },
  rowCard: {
    borderWidth: 1,
    borderRadius: 12,
    ...getCardShadow('#D8CDD2'),
  },
  rowTouch: {
    minHeight: 78,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarWrap: {
    width: 48,
    height: 48,
    marginRight: 10,
    position: 'relative',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  dot: {
    position: 'absolute',
    width: 11,
    height: 11,
    borderRadius: 11 / 2,
    right: 0,
    bottom: 2,
    borderWidth: 1.3,
    borderColor: '#F6F1F3',
  },
  textWrap: {
    flex: 1,
    paddingRight: 8,
  },
  nameText: {
    color: '#1F1F1F',
    fontSize: 31 / 2,
  },
  previewText: {
    color: '#7B747A',
    marginTop: 2,
    fontSize: 31 / 2,
  },
  timeText: {
    color: '#8E858C',
    marginLeft: 10,
    fontSize: 24 / 2,
  },
});

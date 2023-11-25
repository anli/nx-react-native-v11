import React, { useState } from 'react';
import { Pressable, StatusBar, View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icons from 'react-native-heroicons/solid';
import LinearGradient from 'react-native-linear-gradient';
import FrequencyManager from 'react-native-frequency';
import { Slider, Text } from '@nx-react-native/shared-ui';
import { styled } from 'nativewind';

const PlayIcon = styled(Icons.PlayIcon);
const defaultFrequency = 440;
const defaultPlayTimeInSeconds = 3;
type Mode = 'READY' | 'PLAYING';
const minFrequency = 10;
const maxFrequency = 20000;
const primaryColor = '#1d4ed8';
const primaryAccentColor = '#3b82f6';

export const ToneGeneratorPage = () => {
  const [frequency, setFrequency] = useState<number>(defaultFrequency);
  const [mode, setMode] = useState<Mode>('READY');

  const handlePlay = async () => {
    try {
      setMode('PLAYING');
      await FrequencyManager.playFrequency(frequency, defaultPlayTimeInSeconds);
    } finally {
      setMode('READY');
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor={primaryAccentColor}
        barStyle="light-content"
      />
      <LinearGradient
        className="absolute h-full w-full"
        colors={[primaryAccentColor, primaryColor]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      />
      <SafeAreaView className="flex-1">
        <View className="py-5 px-5">
          <Text className="text-white" type="headline-large">
            Tone Generator
          </Text>
        </View>

        <View className="flex-1 justify-center items-center">
          <Text className="text-white" type="display-medium">
            {frequency.toLocaleString()} Hz
          </Text>
        </View>

        <View className="m-6">
          <Slider.Exponential
            minimumValue={minFrequency}
            maximumValue={maxFrequency}
            value={frequency}
            onValueChange={setFrequency}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor={primaryAccentColor}
            thumbTintColor="#FFFFFF"
            className="w-full my-2"
          />

          <Pressable
            className="active:opacity-50 h-14 w-14 bg-white rounded-full self-center items-center justify-center"
            onPress={handlePlay}
            disabled={mode === 'PLAYING'}
          >
            {mode === 'PLAYING' && <ActivityIndicator className="blue-700" />}
            {mode === 'READY' && (
              <PlayIcon size={24} className="text-blue-700" />
            )}
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

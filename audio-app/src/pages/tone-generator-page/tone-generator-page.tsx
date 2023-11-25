import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FrequencyManager from 'react-native-frequency';
import { Background, Slider, Text, Button } from '@nx-react-native/shared-ui';

const defaultFrequency = 440;
const defaultPlayTimeInSeconds = 3;
const minFrequency = 10;
const maxFrequency = 20000;
const primaryColor = '#1d4ed8';
const primaryAccentColor = '#3b82f6';

export const ToneGeneratorPage = () => {
  const [frequency, setFrequency] = useState<number>(defaultFrequency);

  const handlePlay = async () => {
    await FrequencyManager.playFrequency(frequency, defaultPlayTimeInSeconds);
  };

  return (
    <>
      <Background
        startColor={primaryAccentColor}
        endColor={primaryColor}
        barStyle="light-content"
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

          <Button.Play
            onPress={handlePlay}
            iconStyle="text-blue-700"
            className="bg-white"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

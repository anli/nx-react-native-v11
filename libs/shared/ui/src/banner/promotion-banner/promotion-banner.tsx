import { Text, TextProps } from '../../text';
import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { PressableProps } from 'react-native';
import { Pressable } from '../../pressable';
import { ChevronRightIcon as NativeChevronRightIcon } from 'react-native-heroicons/solid';
import { styled } from 'nativewind';
import { View } from '../../view';

const ChevronRightIcon = styled(NativeChevronRightIcon, {
  classProps: ['fill', 'stroke'],
});

type PromotionBannerProps = PressableProps &
  Pick<TextProps, 'children'> & {
    small?: boolean;
    imagePath?: string;
    title: string;
    badge?: string;
    description?: string;
    RightComponent?: JSX.Element;
    renderHeader?: (props: { small: boolean }) => JSX.Element;
  };

const PromotionBannerComponent: FC<PromotionBannerProps> = ({
  small = false,
  imagePath,
  title,
  badge,
  description,
  RightComponent,
  renderHeader,
  ...rest
}) => {
  return (
    <Pressable
      className={clsx(
        'flex-row rounded-lg active:opacity-50 justify-between items-center',
        'bg-green-500 py-3 px-3'
      )}
      {...rest}
    >
      <View
        className={clsx(
          small ? 'flex-row flex-1 items-center gap-2' : 'flex-1 gap-1'
        )}
      >
        {renderHeader && <View>{renderHeader?.({ small })}</View>}
        <Text
          type="heading3"
          className={clsx('text-white', small ? 'flex-1' : '')}
        >
          {title}
        </Text>
        {!!description && (
          <Text type="body4" className={clsx('text-white')}>
            {description}
          </Text>
        )}
      </View>
      {small && <ChevronRightIcon fill="fill-white" size={16} />}
      {!!RightComponent && (
        <View className="p-2 m-1 bg-green-300 rounded-lg items-center justify-center">
          {RightComponent}
        </View>
      )}
    </Pressable>
  );
};

const Badge: FC<PropsWithChildren<Pick<PromotionBannerProps, 'small'>>> = ({
  small = false,
  children,
}) => {
  return (
    <View
      className={clsx(
        'bg-white py-0.5 px-1 rounded-sm',
        small ? '' : 'self-start'
      )}
    >
      <Text type="heading4" className="text-green-500">
        {children}
      </Text>
    </View>
  );
};

const Caption: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Text type="heading4" className="text-green-200">
      {children}
    </Text>
  );
};

export const PromotionBanner = Object.assign(PromotionBannerComponent, {
  Badge,
  Caption,
});

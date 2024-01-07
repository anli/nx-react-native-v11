import { FC, useState } from 'react';
import {
  TabView,
  TabBar,
  TabBarProps,
  TabViewProps,
  TabBarIndicator,
} from 'react-native-tab-view';
import { useWindowDimensions } from 'react-native';
import { Text } from '../text';
import clsx from 'clsx';

const tabMargin = 32;
const tabsPadding = 2;

type Route = {
  key: string;
  title: string;
};

type TabsProps = Omit<
  TabViewProps<Route>,
  'navigationState' | 'onIndexChange'
> & {
  routes: Route[];
  fixed?: boolean;
};

export const Tabs: FC<TabsProps> = ({
  routes,
  renderScene,
  fixed = false,
  ...rest
}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props: TabBarProps<Route>) => {
        return (
          <TabBar
            {...props}
            pressColor="white"
            renderIndicator={(props) => {
              const width =
                props.getTabWidth(props.navigationState.index) - tabMargin;
              return <TabBarIndicator {...props} width={width} />;
            }}
            indicatorStyle={{ backgroundColor: 'black' }}
            style={{ backgroundColor: 'white', paddingHorizontal: tabsPadding }}
            tabStyle={{ ...(fixed ? undefined : { width: 'auto' }) }}
            indicatorContainerStyle={{
              left: tabMargin / 2 + tabsPadding,
            }}
            contentContainerStyle={{ justifyContent: 'center' }}
            scrollEnabled={!fixed}
            renderLabel={({ route, focused }) => (
              <Text
                type="heading2"
                className={clsx(
                  'm-1',
                  focused ? 'text-black' : 'text-gray-400'
                )}
              >
                {route.title}
              </Text>
            )}
          />
        );
      }}
      renderScene={renderScene}
      {...rest}
    />
  );
};

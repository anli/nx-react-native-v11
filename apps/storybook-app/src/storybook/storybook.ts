import { configure, getStorybookUI } from '@storybook/react-native';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { loadStories } from '../../../../.storybook/story-loader';

import "@storybook/addon-ondevice-controls/register";

configure(() => loadStories(), module);

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;

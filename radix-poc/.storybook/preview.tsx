// import { Theme } from "@radix-ui/themes";
import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // decorators: [
  //   (Story) => (
  //     <Theme>
  //       <Story />
  //     </Theme>
  //   ),
  // ],
};

export default preview;

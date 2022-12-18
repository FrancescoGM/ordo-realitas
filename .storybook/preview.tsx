import React from "react";
import { globalCSS } from "../src/styles/globalCSS";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered'
};

export const decorators = [
  (Story) => {
    globalCSS();

    return (
      <div>
        <Story />
      </div>
    );
  },
];

import { useCallback } from "react";

export function useCenterPops({
  width = 600,
  height = 600,
  features = {},
} = {}) {
  return useCallback(
    (url, windowName = "_blank") => {
      const screenLeft = window.screenLeft ?? window.screenX;
      const screenTop = window.screenTop ?? window.screenY;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const left = screenLeft + (screenWidth - width) / 2;
      const top = screenTop + (screenHeight - height) / 2;

      const defaultFeatures = {
        width,
        height,
        left: Math.round(left),
        top: Math.round(top),
        menubar: "no",
        toolbar: "no",
        location: "no",
        status: "no",
        ...features,
      };
      const featureStr = Object.entries(defaultFeatures)
        .map(([key, val]) => `${key}=${val}`)
        .join(",");

      window.open(url, windowName, featureStr);
    },
    [width, height, features]
  );
}

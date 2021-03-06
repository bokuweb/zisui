import { API, StoryKind } from "@storybook/addons";
import { ScreenShotOptions } from "../client/types";
import { Logger } from "./logger";
import { Story } from "../util";

export type ExposedWindow = typeof window & {
  __STORYBOOK_CLIENT_API__: API;
  zisuiManaged?: boolean;
  stories?: StoryKind[],
  emitCatpture(opt: ScreenShotOptions): void,
  waitFor?: () => Promise<any>,
  requestIdleCallback(cb: Function, opt?: { timeout: number }): void,
  getCurrentStory: (url: string) => Promise<Story | undefined>,
  optionStore?: { [kind: string]: { [story: string]: (Partial<ScreenShotOptions>)[] } },
};

export interface MainOptions {
  showBrowser: boolean;
  storybookUrl: string;
  serverCmd: string;
  serverTimeout: number;
  captureTimeout: number;
  captureMaxRetryCount: number;
  viewportDelay: number;
  reloadAfterChangeViewport: boolean;
  outDir: string;
  disableCssAnimation: boolean;
  parallel: number;
  metricsWatchRetryCount: number;
  logger: Logger;
}

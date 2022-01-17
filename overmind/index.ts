import { IConfig, IContext } from "overmind";
import { createActionsHook, createStateHook } from "overmind-react";
import { state } from "./state";
import * as actions from "./actions";

export const config = { state, actions };

export type Context = IContext<typeof config>;

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}

export const useOvermindState = createStateHook<typeof config>();
export const useOvermindActions = createActionsHook<typeof config>();

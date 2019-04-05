import { NativeModulesProxy } from '@unimodules/core';

const { AppjsTimber } = NativeModulesProxy;

export { default as AppjsTimberView } from './AppjsTimberView';

export async function someGreatMethodAsync(options: any) {
  return await AppjsTimber.someGreatMethodAsync(options);
}

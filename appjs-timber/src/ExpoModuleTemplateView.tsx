import * as React from 'react';

import { requireNativeViewManager } from '@unimodules/core';

export default class AppjsTimberView extends React.Component {
  static NativeView = requireNativeViewManager('AppjsTimberView');

  render() {
    return (
      <AppjsTimberView.NativeView />
    );
  }
}

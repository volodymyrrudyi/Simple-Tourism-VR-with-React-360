import React from 'react';
import {AppRegistry, View, NativeModules} from 'react-360';

import {wrap} from './components/Wrapper/Wrapper.component';
import TooltipComponent from './components/Tooltip/Tooltip.component';
import WayComponent from './components/Way/Way.component';

export default class MainComponent extends React.Component {
  render() {
    NativeModules.InfoTooltipModule.setTooltips(this.props.name);
    NativeModules.WayTooltipModule.setTooltips(this.props.name);
    return <View />;
  }
}

AppRegistry.registerComponent('WayComponent', () => wrap(WayComponent));
AppRegistry.registerComponent('MainComponent', () => wrap(MainComponent));
AppRegistry.registerComponent('TooltipComponent', () => wrap(TooltipComponent));

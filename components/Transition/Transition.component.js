import React from 'react';
import {
  asset,
  Image,
  View,
  StyleSheet,
  VrButton,
  NativeModules,
} from 'react-360';

import {changeLocation} from '../../components/Wrapper/Wrapper.component';

const tooltipModule = NativeModules.TooltipModule;
const transitionModule = NativeModules.TransitionModule;

export default class TransitionComponent extends React.Component {
  state = {
    source: this.props.source,
    width: this.props.width ? this.props.width : 100,
    height: this.props.height ? this.props.height : 100,
  };

  changeLocation (location) {
    tooltipModule.setTooltips (this.props.name);
    transitionModule.setTooltips (this.props.name);
    changeLocation (location);
  }

  render () {
    const styleSheet = StyleSheet.create ({
      viewPanel: {
        width: this.state.width,
        height: this.state.height,
      },
    });

    return (
      <View style={styleSheet.viewPanel}>
        <VrButton onClick={() => this.changeLocation (this.props.goesTo)}>
          <Image
            source={asset (`${this.state.source}`)}
            style={styleSheet.viewPanel}
          />
        </VrButton>
      </View>
    );
  }
}

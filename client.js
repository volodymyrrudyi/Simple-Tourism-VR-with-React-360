import {ReactInstance} from 'react-360-web';

import {InfoTooltipModule} from './modules/InfoTolltip.module';
import {WayTooltipModule} from './modules/WayTooltip.module';

export let r360;

function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    nativeModules: [new InfoTooltipModule(), new WayTooltipModule()],
    ...options,
  });

  r360.renderToSurface(r360.createRoot('MainComponent'), r360.getDefaultSurface());
  r360.compositor.setBackground(r360.getAssetURL('./img/360/city_center.jpg'));
}

window.React360 = {init};

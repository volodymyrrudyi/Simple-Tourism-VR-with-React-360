import {Surface, Module} from 'react-360-web';

import * as LocationService from '../services/location.service';
import {r360} from '../client';

export class TooltipModule extends Module {
  constructor () {
    super ('TooltipModule');
  }

  roots = [];
  surfaces = [];

  setTooltips (location) {
    this.detachAll ();

    const tooltips = LocationService.getListTooltips (location);

    tooltips.map ((item, index) => {
      this.surfaces.push (
        new Surface (item.width, item.height, Surface.SurfaceShape.Flat)
      );
      this.surfaces[index].setAngle (item.yaw, item.pitch);
      this.roots.push (
        r360.renderToSurface (
          r360.createRoot ('TooltipComponent', {
            width: item.width,
            height: item.height,
            iconImg: 'icons/question.png',
            index: index,
            text: item.text,
            infoImg: item.img,
          }),
          this.surfaces[index]
        )
      );
    });
  }

  resizeTooltip (index, width, height) {
    this.surfaces[index].resize (width, height);
  }

  detachAll () {
    for (let i = 0; i < this.roots.length; i++) {
      r360.detachRoot (this.roots[i]);
    }
  }
}

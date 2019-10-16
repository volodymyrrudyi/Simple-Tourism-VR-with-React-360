import locations from '../consts/locations';

export function getListInfoTooltips(location) {
  if (
    locations[`${location}`] &&
    locations[`${location}`].infoTooltips &&
    locations[`${location}`].infoTooltips.length &&
    locations[`${location}`].infoTooltips.length > 0
  ) {
    return locations[`${location}`].infoTooltips;
  }
  return [];
}

export function getListWayTooltips(location) {
  if (
    locations[`${location}`] &&
    locations[`${location}`].wayTooltips &&
    locations[`${location}`].wayTooltips.length &&
    locations[`${location}`].wayTooltips.length > 0
  ) {
    return locations[`${location}`].wayTooltips;
  }
  return [];
}

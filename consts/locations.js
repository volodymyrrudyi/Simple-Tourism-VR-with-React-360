export default (locations = {
  CityCenter: {
    name: 'CityCenter',
    img: 'city_center.jpg',
    tooltips: [
      {
        width: 50,
        height: 50,
        yaw: 10.3,
        pitch: 0.1,
        text: 'Chernihiv Regional Youth Center',
        img: 'youth_center.jpg',
      },
      {
        width: 50,
        height: 50,
        yaw: 6.7,
        pitch: 0.16,
        text: 'Chernihiv Regional Academic Ukrainian Drama Theater named after Taras Shevchenko',
        img: 'shevchenko_theatre.jpg',
      },
      {
        width: 50,
        height: 50,
        yaw: 8.65,
        pitch: 0.16,
        text: 'Chernihiv Regional State Administration',
        img: 'state_administration.jpg',
      },
    ],
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 3.4,
        pitch: 0.09,
        goesTo: 'PopudrenkoPark',
      },
      {
        width: 50,
        height: 50,
        yaw: 6.44,
        pitch: 0.09,
        goesTo: 'KhmelnytskyPark',
      },
      {
        width: 50,
        height: 50,
        yaw: 7.96,
        pitch: 0.11,
        goesTo: 'FoodAvenue',
      },
    ],
  },
  KhmelnytskyPark: {
    name: 'KhmelnytskyPark',
    img: 'khmeln_park.jpg',
    tooltips: [
      {
        width: 35,
        height: 35,
        yaw: 9.7,
        pitch: 0.1,
        text: 'Zynoviy Bohdan Khmelnytsky monument',
        img: 'khmeln_monument.jpg',
      },
      {
        width: 50,
        height: 50,
        yaw: 7.35,
        pitch: 0.16,
        text: 'Pyatnytska Church',
        img: 'pyatnyckaya_church.jpg',
      },
    ],
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 19.2,
        pitch: 0.09,
        goesTo: 'CityCenter',
      },
    ],
  },
  PopudrenkoPark: {
    name: 'PopudrenkoPark',
    img: 'popudrenko_park.jpg',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 11.2,
        pitch: 0,
        goesTo: 'CityCenter',
      },
    ],
    tooltips: [
      {
        width: 35,
        height: 35,
        yaw: 14.32,
        pitch: 0.1,
        text: 'Chernihiv National Bank',
        img: 'national_bank.jpg',
      },
    ],
  },
  FoodAvenue: {
    name: 'PopudrenkoPark',
    img: 'food_avenue.jpg',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 9.5,
        pitch: 0.03,
        goesTo: 'CityCenter',
      },
      {
        width: 50,
        height: 50,
        yaw: 18.9,
        pitch: 0.02,
        goesTo: 'CatherineChurch',
      },
    ],
  },
  CatherineChurch: {
    name: 'CatherineChurch',
    img: 'kat_church.jpg',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 9.5,
        pitch: 0.01,
        goesTo: 'FoodAvenue',
      },
      {
        width: 50,
        height: 50,
        yaw: 17.36,
        pitch: 0,
        goesTo: 'Val',
      },
    ],
    tooltips: [
      {
        width: 50,
        height: 50,
        yaw: 18.93,
        pitch: 0.04,
        text: `Catherine's Church`,
        img: 'catherine_church.jpg',
      },
    ],
  },
  Val: {
    name: 'Val',
    img: 'val.jpg',
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 10.1,
        pitch: 0.02,
        goesTo: 'CatherineChurch',
      },
    ],
    tooltips: [
      {
        width: 50,
        height: 50,
        yaw: 5.47,
        pitch: 0,
        text: `Boris and Glib Cathedral`,
        img: 'boris_glib_cathedral.jpg',
      },
      {
        width: 50,
        height: 50,
        yaw: 7.17,
        pitch: -0.02,
        text: `Transfiguration Cathedral`,
        img: 'transfiguration_cathedral.jpg',
      },
    ],
  },
});

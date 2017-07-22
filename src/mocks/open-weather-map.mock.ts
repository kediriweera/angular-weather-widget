import {
  OpenWeatherMapCurrentWeatherResponse,
  OpenWeatherMapForecastResponse
} from '../services/api/open-weather-map/open-weather-map.api.service';

const OPEN_WEATHER_MAP_RESPONSE_MOCK: OpenWeatherMapCurrentWeatherResponse = {
  coord: { lon: 14.62, lat: 53.43 },
  weather: [
    { id: 803, main: 'Clouds', description: 'broken clouds', icon: '04d' }
  ],
  base: 'stations',
  main: {
    temp: 285.15,
    pressure: 1021,
    humidity: 93,
    temp_min: 285.15,
    temp_max: 285.15
  },
  visibility: 10000,
  wind: { speed: 0.5, deg: 90 },
  clouds: { all: 75 },
  dt: 1500350400,
  sys: {
    type: 1,
    id: 5369,
    message: 0.0023,
    country: 'PL',
    sunrise: 1500346578,
    sunset: 1500405503
  },
  id: 7530840,
  name: 'Szczecin',
  cod: 200
};

//noinspection TsLint
const OPEN_WEATHER_MAP_FORECAST: OpenWeatherMapForecastResponse = {
  cod: '200',
  message: 0.0077,
  cnt: 36,
  list: [
    {
      dt: 1500465600,
      main: {
        temp: 18.74,
        temp_min: 17.23,
        temp_max: 18.74,
        pressure: 962.13,
        sea_level: 1027.82,
        grnd_level: 962.13,
        humidity: 85,
        temp_kf: 1.51
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.88, deg: 85.0006 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-19 12:00:00'
    },
    {
      dt: 1500476400,
      main: {
        temp: 21.97,
        temp_min: 20.85,
        temp_max: 21.97,
        pressure: 963.3,
        sea_level: 1029.04,
        grnd_level: 963.3,
        humidity: 69,
        temp_kf: 1.13
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.16, deg: 98.5003 },
      sys: { pod: 'd' },
      dt_txt: '2017-07-19 15:00:00'
    },
    {
      dt: 1500487200,
      main: {
        temp: 27.49,
        temp_min: 26.73,
        temp_max: 27.49,
        pressure: 963.7,
        sea_level: 1029.11,
        grnd_level: 963.7,
        humidity: 57,
        temp_kf: 0.75
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.22, deg: 189.001 },
      sys: { pod: 'd' },
      dt_txt: '2017-07-19 18:00:00'
    },
    {
      dt: 1500498000,
      main: {
        temp: 29.69,
        temp_min: 29.32,
        temp_max: 29.69,
        pressure: 963.14,
        sea_level: 1028.12,
        grnd_level: 963.14,
        humidity: 50,
        temp_kf: 0.38
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.26, deg: 204.001 },
      sys: { pod: 'd' },
      dt_txt: '2017-07-19 21:00:00'
    },
    {
      dt: 1500508800,
      main: {
        temp: 29.16,
        temp_min: 29.16,
        temp_max: 29.16,
        pressure: 961.5,
        sea_level: 1026.45,
        grnd_level: 961.5,
        humidity: 45,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.3, deg: 213.503 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-20 00:00:00'
    },
    {
      dt: 1500519600,
      main: {
        temp: 25.02,
        temp_min: 25.02,
        temp_max: 25.02,
        pressure: 961.7,
        sea_level: 1026.75,
        grnd_level: 961.7,
        humidity: 51,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.17, deg: 207.5 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-20 03:00:00'
    },
    {
      dt: 1500530400,
      main: {
        temp: 20.08,
        temp_min: 20.08,
        temp_max: 20.08,
        pressure: 962.59,
        sea_level: 1028.08,
        grnd_level: 962.59,
        humidity: 69,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.86, deg: 186.001 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-20 06:00:00'
    },
    {
      dt: 1500541200,
      main: {
        temp: 17.8,
        temp_min: 17.8,
        temp_max: 17.8,
        pressure: 962.15,
        sea_level: 1027.76,
        grnd_level: 962.15,
        humidity: 79,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.91, deg: 62.5009 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-20 09:00:00'
    },
    {
      dt: 1500552000,
      main: {
        temp: 16.61,
        temp_min: 16.61,
        temp_max: 16.61,
        pressure: 961.9,
        sea_level: 1027.61,
        grnd_level: 961.9,
        humidity: 83,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.86, deg: 70.5005 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-20 12:00:00'
    },
    {
      dt: 1500562800,
      main: {
        temp: 21.11,
        temp_min: 21.11,
        temp_max: 21.11,
        pressure: 962.59,
        sea_level: 1028.28,
        grnd_level: 962.59,
        humidity: 65,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.21, deg: 67.5016 },
      sys: { pod: 'd' },
      dt_txt: '2017-07-20 15:00:00'
    },
    {
      dt: 1500573600,
      main: {
        temp: 27.31,
        temp_min: 27.31,
        temp_max: 27.31,
        pressure: 962.84,
        sea_level: 1028.05,
        grnd_level: 962.84,
        humidity: 53,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.26, deg: 196.502 },
      sys: { pod: 'd' },
      dt_txt: '2017-07-20 18:00:00'
    },
    {
      dt: 1500584400,
      main: {
        temp: 29.52,
        temp_min: 29.52,
        temp_max: 29.52,
        pressure: 961.98,
        sea_level: 1026.92,
        grnd_level: 961.98,
        humidity: 46,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.21, deg: 196 },
      sys: { pod: 'd' },
      dt_txt: '2017-07-20 21:00:00'
    },
    {
      dt: 1500595200,
      main: {
        temp: 29.36,
        temp_min: 29.36,
        temp_max: 29.36,
        pressure: 960.33,
        sea_level: 1025.13,
        grnd_level: 960.33,
        humidity: 40,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.23, deg: 209.502 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-21 00:00:00'
    },
    {
      dt: 1500606000,
      main: {
        temp: 24.96,
        temp_min: 24.96,
        temp_max: 24.96,
        pressure: 960.13,
        sea_level: 1025.13,
        grnd_level: 960.13,
        humidity: 45,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.96, deg: 206.007 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-21 03:00:00'
    },
    {
      dt: 1500616800,
      main: {
        temp: 18.99,
        temp_min: 18.99,
        temp_max: 18.99,
        pressure: 960.72,
        sea_level: 1026.15,
        grnd_level: 960.72,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.71, deg: 313.501 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-21 06:00:00'
    },
    {
      dt: 1500627600,
      main: {
        temp: 16.77,
        temp_min: 16.77,
        temp_max: 16.77,
        pressure: 960.12,
        sea_level: 1025.65,
        grnd_level: 960.12,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.72, deg: 47.003 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-21 09:00:00'
    },
    {
      dt: 1500638400,
      main: {
        temp: 15.55,
        temp_min: 15.55,
        temp_max: 15.55,
        pressure: 959.57,
        sea_level: 1025.09,
        grnd_level: 959.57,
        humidity: 78,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.72, deg: 48.0005 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-21 12:00:00'
    },
    {
      dt: 1500649200,
      main: {
        temp: 21.36,
        temp_min: 21.36,
        temp_max: 21.36,
        pressure: 960.35,
        sea_level: 1025.78,
        grnd_level: 960.35,
        humidity: 59,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.92, deg: 77.0024 },
      sys: { pod: 'd' },
      dt_txt: '2017-07-21 15:00:00'
    },
    {
      dt: 1500660000,
      main: {
        temp: 28.25,
        temp_min: 28.25,
        temp_max: 28.25,
        pressure: 960.87,
        sea_level: 1025.84,
        grnd_level: 960.87,
        humidity: 45,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.26, deg: 205.002 },
      sys: { pod: 'd' },
      dt_txt: '2017-07-21 18:00:00'
    },
    {
      dt: 1500670800,
      main: {
        temp: 31,
        temp_min: 31,
        temp_max: 31,
        pressure: 960.27,
        sea_level: 1024.9,
        grnd_level: 960.27,
        humidity: 39,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.31, deg: 215.502 },
      sys: { pod: 'd' },
      dt_txt: '2017-07-21 21:00:00'
    },
    {
      dt: 1500681600,
      main: {
        temp: 30.82,
        temp_min: 30.82,
        temp_max: 30.82,
        pressure: 958.79,
        sea_level: 1023.28,
        grnd_level: 958.79,
        humidity: 38,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.31, deg: 222.002 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-22 00:00:00'
    },
    {
      dt: 1500692400,
      main: {
        temp: 26.31,
        temp_min: 26.31,
        temp_max: 26.31,
        pressure: 958.46,
        sea_level: 1023.22,
        grnd_level: 958.46,
        humidity: 44,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.11, deg: 213.5 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-22 03:00:00'
    },
    {
      dt: 1500703200,
      main: {
        temp: 20.62,
        temp_min: 20.62,
        temp_max: 20.62,
        pressure: 959.26,
        sea_level: 1024.33,
        grnd_level: 959.26,
        humidity: 62,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.71, deg: 158.503 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-22 06:00:00'
    },
    {
      dt: 1500714000,
      main: {
        temp: 18.73,
        temp_min: 18.73,
        temp_max: 18.73,
        pressure: 958.21,
        sea_level: 1023.48,
        grnd_level: 958.21,
        humidity: 70,
        temp_kf: 0
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ],
      clouds: { all: 36 },
      wind: { speed: 0.91, deg: 76.0024 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-22 09:00:00'
    },
    {
      dt: 1500724800,
      main: {
        temp: 17.54,
        temp_min: 17.54,
        temp_max: 17.54,
        pressure: 957.63,
        sea_level: 1023.04,
        grnd_level: 957.63,
        humidity: 74,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.77, deg: 60.5006 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-22 12:00:00'
    },
    {
      dt: 1500735600,
      main: {
        temp: 22.07,
        temp_min: 22.07,
        temp_max: 22.07,
        pressure: 958.72,
        sea_level: 1023.95,
        grnd_level: 958.72,
        humidity: 57,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.21, deg: 113.001 },
      sys: { pod: 'd' },
      dt_txt: '2017-07-22 15:00:00'
    },
    {
      dt: 1500746400,
      main: {
        temp: 27.94,
        temp_min: 27.94,
        temp_max: 27.94,
        pressure: 959.16,
        sea_level: 1024.03,
        grnd_level: 959.16,
        humidity: 49,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.21, deg: 199.508 },
      sys: { pod: 'd' },
      dt_txt: '2017-07-22 18:00:00'
    },
    {
      dt: 1500757200,
      main: {
        temp: 30.91,
        temp_min: 30.91,
        temp_max: 30.91,
        pressure: 958.53,
        sea_level: 1023.05,
        grnd_level: 958.53,
        humidity: 43,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '02d' }
      ],
      clouds: { all: 8 },
      wind: { speed: 1.26, deg: 216.008 },
      sys: { pod: 'd' },
      dt_txt: '2017-07-22 21:00:00'
    },
    {
      dt: 1500768000,
      main: {
        temp: 30.89,
        temp_min: 30.89,
        temp_max: 30.89,
        pressure: 957.26,
        sea_level: 1021.73,
        grnd_level: 957.26,
        humidity: 41,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.36, deg: 224.501 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-23 00:00:00'
    },
    {
      dt: 1500778800,
      main: {
        temp: 26.43,
        temp_min: 26.43,
        temp_max: 26.43,
        pressure: 957.08,
        sea_level: 1021.93,
        grnd_level: 957.08,
        humidity: 47,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.16, deg: 212.005 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-23 03:00:00'
    },
    {
      dt: 1500789600,
      main: {
        temp: 21.28,
        temp_min: 21.28,
        temp_max: 21.28,
        pressure: 958.35,
        sea_level: 1023.51,
        grnd_level: 958.35,
        humidity: 62,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.92, deg: 199.002 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-23 06:00:00'
    },
    {
      dt: 1500800400,
      main: {
        temp: 18.88,
        temp_min: 18.88,
        temp_max: 18.88,
        pressure: 957.79,
        sea_level: 1023.1,
        grnd_level: 957.79,
        humidity: 72,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.76, deg: 51.5034 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-23 09:00:00'
    },
    {
      dt: 1500811200,
      main: {
        temp: 17.61,
        temp_min: 17.61,
        temp_max: 17.61,
        pressure: 957.16,
        sea_level: 1022.57,
        grnd_level: 957.16,
        humidity: 77,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }
      ],
      clouds: { all: 0 },
      wind: { speed: 0.72, deg: 73.5004 },
      sys: { pod: 'n' },
      dt_txt: '2017-07-23 12:00:00'
    },
    {
      dt: 1500822000,
      main: {
        temp: 21.5,
        temp_min: 21.5,
        temp_max: 21.5,
        pressure: 958.04,
        sea_level: 1023.4,
        grnd_level: 958.04,
        humidity: 62,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.16, deg: 91.5 },
      sys: { pod: 'd' },
      dt_txt: '2017-07-23 15:00:00'
    },
    {
      dt: 1500832800,
      main: {
        temp: 27.96,
        temp_min: 27.96,
        temp_max: 27.96,
        pressure: 958.3,
        sea_level: 1023.22,
        grnd_level: 958.3,
        humidity: 51,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.22, deg: 206.005 },
      sys: { pod: 'd' },
      dt_txt: '2017-07-23 18:00:00'
    },
    {
      dt: 1500843600,
      main: {
        temp: 30.68,
        temp_min: 30.68,
        temp_max: 30.68,
        pressure: 957.83,
        sea_level: 1022.41,
        grnd_level: 957.83,
        humidity: 46,
        temp_kf: 0
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }
      ],
      clouds: { all: 0 },
      wind: { speed: 1.2, deg: 215.004 },
      sys: { pod: 'd' },
      dt_txt: '2017-07-23 21:00:00'
    }
  ],
  city: {
    id: 5368361,
    name: 'Los Angeles',
    coord: { lat: 34.0522, lon: -118.2437 },
    country: 'US'
  }
};
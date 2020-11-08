export const voltage = 5

export const loads = {
  'low': 0,
  'med': 0.5,
  'high': 1
}

export const pi_models = {
  '0': {
    'name': 'Raspberry Pi Zero',
    'power_con_min': 0.5,
    'power_con_max': 0.7
  },
  '0w': {
    'name': 'Raspberry Pi Zero W',
    'power_con_min': 0.5,
    'power_con_max': 0.7
  },
  '1a': {
    'name': 'Raspberry Pi 1 A',
    'power_con_min': 2.5,
    'power_con_max': 2.5
  },
  '1a+': {
    'name': 'Raspberry Pi 1 A+',
    'power_con_min': 0.4,
    'power_con_max': 1.2
  },
  '1b': {
    'name': 'Raspberry Pi 1 B',
    'power_con_min': 3.5,
    'power_con_max': 3.5
  },
  '1b+': {
    'name': 'Raspberry Pi 1 B+',
    'power_con_min': 0.9,
    'power_con_max': 3.0
  },
  '2b': {
    'name': 'Raspberry Pi 2 B',
    'power_con_min': 1.1,
    'power_con_max': 2.3
  },
  '3b': {
    'name': 'Raspberry Pi 3 B',
    'power_con_min': 1.4,
    'power_con_max': 3.7
  },
  '3b+': {
    'name': 'Raspberry Pi 3 B+',
    'power_con_min': 1.9,
    'power_con_max': 5.1
  },
  '4b': {
    'name': 'Raspberry Pi 4 B',
    'power_con_min': 3.4,
    'power_con_max': 7.6
  },
  '400': {
    'name': 'Raspberry Pi 400',
    'power_con_min': 3.4,
    'power_con_max': 7.6
  }
}
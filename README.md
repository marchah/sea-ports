# cbp-ports
CBP JSON Data Ports

## Installation

Install via [npm](https://www.npmjs.com/):

```
$ npm install cbp-ports
```

## Documentation

### Data

#### `JSON`

Return a JSON object with all the port with the unloc as key
```javascript
{
  "AEAJM": {
    "name": "Ajman",
    "city": "Ajman",
    "country": "United Arab Emirates",
    "alias": [],
    "regions": [],
    "coordinates": [
      55.5136433,
      25.4052165
    ],
    "province": "Ajman",
    "timezone": "Asia/Dubai",
    "unlocs": [
      "AEAJM"
    ],
    "code" : "52000"
  },
  "AEAUH": {
    "name": "Abu Dhabi",
    "coordinates": [
      54.37,
      24.47
    ],
    "city": "Abu Dhabi",
    "province": "Abu Z¸aby [Abu Dhabi]",
    "country": "United Arab Emirates",
    "alias": [],
    "regions": [],
    "timezone": "Asia/Dubai",
    "unlocs": [
      "AEAUH"
    ],
    "code": "52001"
  },
  "AEDXB": {
    "name": "Dubai",
    "coordinates": [
      55.27,
      25.25
    ],
    "city": "Dubai",
    "province": "Dubayy [Dubai]",
    "country": "United Arab Emirates",
    "alias": [],
    "regions": [],
    "timezone": "Asia/Dubai",
    "unlocs": [
      "AEDXB"
    ],
    "code": "52005"
  },
  ...
}
```

## Methods

### getByUnloc(unloc)

Return the matched port, else undefined (alias: `getByUNLOC`, `findByUnloc`, `findByUNLOC`)

## Examples

````javascript
var ports = require('cbp-ports');

console.log(ports.JSON);
/*
{
  "AEAJM": {
    "name": "Ajman",
    "city": "Ajman",
    "country": "United Arab Emirates",
    "alias": [],
    "regions": [],
    "coordinates": [
      55.5136433,
      25.4052165
    ],
    "province": "Ajman",
    "timezone": "Asia/Dubai",
    "unlocs": [
      "AEAJM"
    ],
    "code" : "52000"
  },
  ...
}
*/
````

## Contributing

This project is a work in progress and subject to API changes.
A lot of port's codes are missing (338/1624).
Some data may be wrong, feel free to correct them.
Also I plan on adding couple functions to search ports.

Please feel free to contribute

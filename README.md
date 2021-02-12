# search-multiple-select

> searchable multiple select react component

[![NPM](https://img.shields.io/npm/v/search-multiple-select.svg)](https://www.npmjs.com/package/search-multiple-select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save search-multiple-select
```
## Desktop Demo:
![Demo](https://s2.gifyu.com/images/select.png)

## Usage

```jsx
import React, { Component } from 'react'

import MultipleSelect from 'search-multiple-select'
import 'search-multiple-select/dist/index.css'

class Example extends Component {
// the callback. Use a better name
   const getOptionsData = (data) => { 
    console.log(data); // print option data - to test
  };

  render() {
    return <MultipleSelect options={['']} getOptionsData={getOptionsData}/>
  }
}
```

## Props

| Property       | Type     | Default    | Description                       |
| :-------       | :-----   | :--------  | :---------------------------      |
| `options`      | Array    | ['']       | Array of string - Options to show |
|`getOptionsData`| Function | () => {}   | return option data                |


## License

MIT © [Nazeh-Taha](https://github.com/Nazeh-Taha)

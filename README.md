# erela.js-filter

A easy to use filter plugin for erela.js

## Requirements
nodejs v14+

# Usage
```js
const { Manager } = require("erela.js");
const filterPlugin = require("erela.js-filter")
const manager = new Manager({
    plugins: [new filterPlugin()]
})
```


# Example
```js
player.setNightcore() /* To enable filter */
player.setNightcore(false) /* To disable filter */
player.clearFilters(true) /* To clear applied filter(s) */
```

<p align="center">
  <a href="" rel="noopener">
 <img src="https://source.unsplash.com/random/250×250/?fruit" alt="Project logo"></a>
</p>
<h3 align="center">Pixabay Image Component</h3>

<div align="center">   

[![Hackathon](https://img.shields.io/badge/hackathon-JSU-orange.svg)](http://javascriptsu.wordpress.com)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>


<p align="center">  
<b> A component made for fun, generating random images from Pixabay.com using API, with react-query which help to use cached data. It can render child elements, so that it can be used to create quick hero.
</p>

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 How to use <a name = "how-to"></a>](#-how-to-use-)
  - [Props](#props)
  - [Example](#example)
- [🎉 Acknowledgments <a name = "acknowledgments"></a>](#-acknowledgments-)

## 🧐 How to use <a name = "how-to"></a>

Install the dependecies by running

```bash
npm install
```

### Props
All pixabay API options are included in `PixabayRImage` and doc will show all of them.

* query : for searching for specific topic, eg:`query:'yellow+flower'`
* type: image type, eg `{type:vector}`

### Example

```javascript
 <PixabayRImage query="fruits"/>
 <PixabayRImage query="computer" lang="ch"  />
```




## 🎉 Acknowledgments <a name = "acknowledgments"></a>

 Feel free to follow my blog on [Javascript](http:\\javascriptsu.wordpress.com) and fork the repo.

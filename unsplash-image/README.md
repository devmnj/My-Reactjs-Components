<p align="center">
  <a href="" rel="noopener">
 <img src="https://source.unsplash.com/random/400×250/?fruit" alt="Project logo"></a>
</p>
<h3 align="center">Unsplash Image Component</h3>

<div align="center">   

[![Hackathon](https://img.shields.io/badge/hackathon-JSU-orange.svg)](http://javascriptsu.wordpress.com)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>


<p align="center">  
<b> A component made for fun, generating random images from Unsplash.com, with zero dependency. It can render child elements, so that it can be used to create quick heros.
</p>

## 📝 Table of Contents

- [📝 Table of Contents](#-table-of-contents)
- [🧐 How to use <a name = "how-to"></a>](#-how-to-use-)
  - [Props](#props)
  - [Example](#example)
- [🎉 Acknowledgments <a name = "acknowledgments"></a>](#-acknowledgments-)

## 🧐 How to use <a name = "how-to"></a>

To use the component copy all of the component files to **component** directory.

### Props
The `UnsplashImage` component accepts following props

* `size` : {w:250,h:250}
* `filter` : some filter to search images , eg: `city`
* `user`: get images from unsplash user
* `caption`: alt tag for image

### Example

```javascript
 <UnsplashImage filter='audi' size={{w:1900,h:500}}>
      <h11>Audi celebrating .... </h11>
  </UnsplashImage>
```




## 🎉 Acknowledgments <a name = "acknowledgments"></a>

 Feel free to follow my blog on [Javascript](http:\\javascriptsu.wordpress.com) and fork the repo.

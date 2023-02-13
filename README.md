## Notice

This is a fork of the official repository [rollup-plugin-minify-html-literals](https://github.com/asyncLiz/rollup-plugin-minify-html-literals) because the Rollup dependency version remains at v2, so this repository serves as a temporary fix.

Once the official repository is upgraded to v3, this repository will be archived.

## Install

```console
npm i rollup-plugin-minify-html-literals-v3 -D
```

## Usage

**rollup.config.js**

```js
import minifyLiterals from 'rollup-plugin-minify-html-literals-v3';

export default {
  ...
  plugins: [minifyLiterals()],
};
```

## Configuration

```js
minifyLiterals({
  // minimatch of files to minify
  include: [],
  // minimatch of files not to minify
  exclude: [],
  // set to `true` to abort bundling on a minification error
  failOnError: false,
  // minify-html-literals options
  // https://www.npmjs.com/package/minify-html-literals#options
  options: null,
  // Advanced Options
  // Override minify-html-literals function
  minifyHTMLLiterals: null,
  // Override rollup-pluginutils filter from include/exclude
  filter: null
});
```

### options

| Property                    | Type                                                                                         | Default                   | Description                                                                                                                                                               |
| --------------------------- | -------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fileName`                  | string                                                                                       |                           | _Required._ The name of the file, used for syntax parsing and source maps.                                                                                                |
| `minifyOptions?`            | [html-minifier options](https://www.npmjs.com/package/html-minifier#options-quick-reference) | `defaultMinifyOptions`    | Defaults to production-ready minification.                                                                                                                                |
| `minifyOptions?.minifyCSS?` | [clean-css options](https://www.npmjs.com/package/clean-css#constructor-options)             | `defaultMinifyCSSOptions` | Uses clean-css defaults.                                                                                                                                                  |
| `shouldMinify?`             | function                                                                                     | `defaultShouldMinify`     | A function that determines whether or not an HTML template should be minified. Defaults to minify all tagged templates whose tag name contains "html" (case insensitive). |
| `shouldMinifyCSS?`          | function                                                                                     | `defaultShouldMinifyCSS`  | A function that determines whether or not a CSS template should be minified. Defaults to minify all tagged templates whose tag name contains "css" (case insensitive).    |

### Advanced Options

For more detailed configuration, go to [`minify-html-literals`](https://github.com/asyncLiz/minify-html-literals).

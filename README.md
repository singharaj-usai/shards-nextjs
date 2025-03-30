# Bootstrap 5 Shards React for Next.js

A modern Bootstrap 5 and Next.js 15 compatible version of Shards React. This is a fork of [DesignRevision/shards-react](https://github.com/DesignRevision/shards-react) updated to work with Bootstrap 5 and Next.js App Router.

## Features

- Full compatibility with Bootstrap 5
- Support for Next.js 15 App Router with `use client` directives
- Updated component designs and APIs
- Modern React 18 support

## Installation

```bash
npm install shards-nextjs bootstrap
# or
yarn add shards-nextjs bootstrap
```

## Usage with Next.js App Router

```jsx
// app/components/MyComponent.js
'use client';

import { Container, Button } from 'shards-nextjs/next-compat/use-client';

export default function MyComponent() {
  return (
    <Container>
      <Button theme="primary">Click Me</Button>
    </Container>
  );
}
```

Import Bootstrap CSS in your layout file:

```jsx
// app/layout.js
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

## License

MIT © [Your Name]

<p align="center">
<img src="logo.jpg" width="230" />
</p>

<p align="center">
Shards React is a free, beautiful and modern React UI kit <br /> based on <a href="https://github.com/designrevision/shards-ui">Shards</a>.
</p>

<br />

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg" />
  </a>
  <a href="https://twitter.com/designrevision">
    <img src="https://img.shields.io/twitter/follow/DesignRevision.svg?style=social&label=Follow" />
  </a>
</p>

<br />

<p align="center">
  <a href="https://designrevision.com/docs/shards-react/"><strong>Documentation & Demo</strong></a> •
  <a href="https://designrevision.com/downloads/shards-react/"><strong>Official Page</strong></a>
</p>


### Getting Started

Getting started with Shards React is fairly simple. You can download Shards React via the official website, here on GitHub as a release package or by using a package manager such as Yarn or NPM.

* [Official Website](https://designrevision.com/downloads/shards-react)
* [Release Package](https://github.com/DesignRevision/shards-react/releases)

<br />

### Quick Start

You can install Shards React via Yarn or NPM.

```bash
# Yarn
yarn add shards-react

# NPM
npm i shards-react
```

<br />

### Module Bundlers

If you are using a module bundler such as [Webpack](https://webpack.js.org/) or [Rollup](https://rollupjs.org/), you can import components as follows:

```javascript
import { Alert } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

// ...
```

<br />

### Built Using

* [Shards UI Kit](https://designrevision.com/downloads/shards/)
* [React Datepicker](https://reactdatepicker.com/)
* [React Popper](https://github.com/FezVrasta/react-popper)
* [noUiSlider by Léon Gersen (WTFPL License)](https://refreshless.com/nouislider/download/)

<br />

### Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

<br />

### Roadmap

[View the roadmap.](http://designrevision.com/docs/shards-react/roadmap)

<br />

### Changelog

[View notable changes.](CHANGELOG.md)

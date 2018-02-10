# `<Portal>`

Renders its children in React portal using [`ReactDOM.createPortal()`](https://reactjs.org/docs/portals.html).
If target element is not provided, creates a new `<div>` element and appends it to `document.body`.


## Usage

```jsx
import {Portal} from 'libreact/lib/Portal';

<Portal>
  This is rendered in document.body
</Portal>
```


## Props

  - `el` - DOM element, optional, where to render children.
  - `onElement` - callback, optional, called with automatically created DOM element if `el` not provided.

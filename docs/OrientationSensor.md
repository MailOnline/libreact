# `<OrientationSensor>`

Tracs screen orientation using [`orientationchange` event](https://developer.mozilla.org/en-US/docs/Web/Events/orientationchange).

## Usage

```jsx
import {OrientationSensor} from 'libreact/lib/OrientationSensor';

<OrientationSensor>(state) =>
  <pre>{JSON.stringify(state, null, 4)}</pre>
</OrientationSensor>
```

## Props

None.

## State

Has signature

```ts
interface IOrientationSensorState {
  angle: number;
  type: string;
}
```

, where

  - `angle` - screen rotation angle in degrees.
  - `type` - is one of `portrait-primary`, `portrait-secondary`, `landscape-primary`, or `landscape-secondary`.
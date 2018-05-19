/** @jest-environment node */
import {createElement as h} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {WindowWidthSensor} from '..';

describe('<WindowWidthSensor> SSR', () => {
  it('renders on server side', () => {
    const html = renderToStaticMarkup(
      <WindowWidthSensor>{() =>
          <div>foobar</div>
      }</WindowWidthSensor>
    );

    expect(html).toBe('<div>foobar</div>');
  });
});

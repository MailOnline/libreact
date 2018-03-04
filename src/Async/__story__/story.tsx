import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {Async} from '..';
import ShowDocs from '../../../.storybook/ShowDocs'

async function * coroutine1() {
  yield <p>Loding...</p>;

  await new Promise(resolve => setTimeout(resolve, 1000));

  yield <div>LOADED</div>;
}

storiesOf('Util/Async', module)
  // .add('Documentation', () => h(ShowDocs, {md: require('../../../docs/en/Async.md')}))
  .add('Basic example', () => <Async iterator={coroutine1()} />)

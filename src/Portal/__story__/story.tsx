import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {Portal} from '..';
import ShowDocs from '../../../.storybook/ShowDocs'

storiesOf('Other/Portal', module)
  .add('Documentation', () => h(ShowDocs, {md: require('../../../docs/en/Portal.md')}))
  .add('Default props', () =>
    <div>
      <div>
        Not portal.
      </div>
      <Portal>
          This is portal.
      </Portal>
    </div>
  )

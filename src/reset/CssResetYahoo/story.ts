import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import CssResetYahoo from '.';

storiesOf('CSS resets', module)
  .add('CssResetYahoo', () =>
    h(CssResetYahoo)
  );
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, Icon, Text } from '../dist/donna-ui';
// import '../dist/promo-ui.css';

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('with icon', () => (
    <Button onClick={action('clicked')}>
      <Icon/>
      <Text>Hello</Text>
    </Button>
  ))
  .add('with icon white', () => (
    <Button type='white' onClick={action('clicked')}>
      <Icon/>
      <Text>Hello</Text>
    </Button>
  ));


import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { Header } from '../src/app/components/Header';
import Home from '../src/app/containers/Home';
import { OptionsSelect } from '../src/app/components/Commons';

storiesOf('Button', module)
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add('with text', () => <Button>Hello Button</Button>)
  .add('with emoji', () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('Header', () => <Header />)
  .add('Home', () => <Home />)
  .add('OptionsSelect', () => <OptionsSelect />);

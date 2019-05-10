import * as React from 'react';
import { OptionsSelect } from '../Commons';

const options = [
  {
    text: 'Single Item',
  },
  {
    text: 'Bulk assessment',
  }
];

export default () => <OptionsSelect title="What type of assessment is required?" options={options} />;

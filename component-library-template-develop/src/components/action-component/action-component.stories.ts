import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'action-component',
  parameters: {
    docs: { description: { component: readme } },
    jest: [
      'action-component.spec.tsx',
      'action-component.e2e.ts',
    ],
  },
  decorators: [jsxDecorator],
};

export const empty = (): string => `
  <action-component></action-component>
`;

import { newSpecPage } from '@stencil/core/testing';
import { ActionComponent } from '../action-component';

describe('action-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ActionComponent],
      html: '<action-component></action-component>',
    });
    expect(page.root).toEqualHtml(`
      <action-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </action-component>
    `);
  });
});

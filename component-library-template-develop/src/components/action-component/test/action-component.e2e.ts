import { newE2EPage } from '@stencil/core/testing';

describe('action-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<action-component></action-component>');

    const element = await page.find('action-component');
    expect(element).toHaveClass('hydrated');
  });
});

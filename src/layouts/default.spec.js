import { shallowMount, createLocalVue } from '@vue/test-utils';
import DefaultLayout from './default.vue';

describe('Default Layout', () => {
  const localVue = createLocalVue();

  const input = {
    localVue,
    mocks: {},
    stubs: {
      Nuxt: true,
    },
  };

  it('renders the layout', () => {
    const wrapper = shallowMount(DefaultLayout, input);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

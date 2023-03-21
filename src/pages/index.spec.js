import { shallowMount, createLocalVue } from '@vue/test-utils';
import IndexPage from './index.vue';

describe('Index Page', () => {
  const localVue = createLocalVue();

  const input = {
    localVue,
    stubs: {
      Tutorial: true,
    },
  };

  it('test snapshot', () => {
    const wrapper = shallowMount(IndexPage, input);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

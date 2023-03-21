import { shallowMount } from '@vue/test-utils';
import Tutorial from './Tutorial.vue';

describe('Tutorial', () => {
  it('should render the component', () => {
    const wrapper = shallowMount(Tutorial, {});
    expect(wrapper.html()).toMatchSnapshot();
  });
});

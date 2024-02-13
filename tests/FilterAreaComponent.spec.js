import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FilterAreaComponent from '../src/components/FilterAreaComponent.vue';

describe('FilterComponent', () => {
    it('renders correctly and has two checkboxes', () => {
        const wrapper = mount(FilterAreaComponent);
        const checkboxes = wrapper.findAll('input[type="checkbox"]');
        expect(checkboxes.length).toBe(2);
    });

    it('emits "filter-change" event with correct payload when input changes', async () => {
        const wrapper = mount(FilterAreaComponent);
        await wrapper.find('input#news').setValue(false);
        await wrapper.find('input#essays').setValue(false);
        expect(wrapper.emitted()['filter-change']).toBeTruthy();
        expect(wrapper.emitted()['filter-change'][0]).toEqual([{ news: false, essays: false }]);
    });
});

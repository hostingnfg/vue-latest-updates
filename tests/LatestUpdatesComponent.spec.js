import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import LatestUpdatesComponent from '../src/components/LatestUpdatesComponent.vue';
import FilterAreaComponent from '../src/components/FilterAreaComponent.vue';
import LinkAreaComponent from '../src/components/LinkAreaComponent.vue';

const mockArticles = [
    { title: 'Article 1', publishDate: new Date().toISOString(), category: 'news', url: '#'},
    { title: 'Article 2', publishDate: new Date().toISOString(), category: 'essay', url: '#'}
];

global.window.LATEST_ARTICLES = mockArticles;

describe('LatestUpdatesComponent', () => {
    it('renders correctly and displays filtered articles', () => {
        const wrapper = mount(LatestUpdatesComponent);
        expect(wrapper.findComponent(FilterAreaComponent).exists()).toBe(true);
        expect(wrapper.findComponent(LinkAreaComponent).exists()).toBe(true);
        expect(wrapper.findAll('.article-link').length).toBe(mockArticles.length);
    });

    it('updates filtered articles on filter change', async () => {
        const wrapper = mount(LatestUpdatesComponent);
        await wrapper.findComponent(FilterAreaComponent).vm.$emit('filter-change', { news: true, essays: false });
        const filteredArticles = wrapper.vm.filteredArticles;
        expect(filteredArticles.every(article => article.category === 'news')).toBe(true);
    });
});

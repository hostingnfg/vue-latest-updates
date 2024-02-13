import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import LinkAreaComponent from '../src/components/LinkAreaComponent.vue';

describe('LinkAreaComponent', () => {
    it('renders articles correctly', () => {
        const filteredArticles = [
            { title: 'Test Article 1', publishDate: '2021-01-01', url: '/test-article-1' },
            { title: 'Test Article 2', publishDate: '2021-02-01', url: '/test-article-2' }
        ];
        const wrapper = mount(LinkAreaComponent, {
            props: { filteredArticles }
        });
        const links = wrapper.findAll('.article-link a');
        expect(links.length).toBe(filteredArticles.length);
        expect(links[0].text()).toContain('Test Article 1');
        expect(links[1].text()).toContain('Test Article 2');
        expect(links[0].text()).toContain('January 1');
        expect(links[1].text()).toContain('February 1');
    });
});

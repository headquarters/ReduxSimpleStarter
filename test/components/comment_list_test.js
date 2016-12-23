import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList' , () => {
    let component;
    const props = {
        comments: ['Comment 1', 'Comment 2']
    };

    beforeEach(() => {
        component = renderComponent(CommentList, null, props);
    });

    it('shows a list item for each comment', () => {
        expect(component.find('li').length).to.equal(props.comments.length);
    });

    it('shows each comment that is provided', () => {
        expect(component.find('li:first-child').text()).to.equal(props.comments[0]);
        expect(component.find('li:last-child').text()).to.equal(props.comments[1]);
    });
});
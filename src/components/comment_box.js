import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox' , () => {
  it('has a textarea', () => {
    let component = renderComponent(CommentBox);
  });

  it('has a button', () => {
    let component = renderComponent(CommentBox);
  });
});

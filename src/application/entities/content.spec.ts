import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a new content', () => {
    expect(new Content('Some content')).toBeTruthy();
  });

  it('should not be able to create a new content with invalid length', () => {
    expect(() => new Content('')).toThrowError('Content length is invalid');
    expect(() => new Content('abcd')).toThrowError('Content length is invalid');
    expect(() => new Content('a'.repeat(241))).toThrowError(
      'Content length is invalid',
    );
  });
});

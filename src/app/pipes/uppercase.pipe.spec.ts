import { UppercasePipe } from './uppercase.pipe';

describe('UppercasePipe', () => {
  let pipe: UppercasePipe;

  beforeEach(() => {
    pipe = new UppercasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform "hello world" to "HELLO WORLD"', () => {
    expect(pipe.transform('hello world')).toBe('HELLO WORLD');
  });

  it('should return an empty string if input is empty', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should handle single character strings', () => {
    expect(pipe.transform('a')).toBe('A');
  });
});

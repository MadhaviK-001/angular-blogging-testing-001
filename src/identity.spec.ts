import { identity } from './identity';

describe('identity', () => {
  it('returns the same value', () => {
    // Arrange
    const x: string = 'Hello Jasmine!';

    // Act
   const y: string = identity(x);
    //nst y: String ='ijk';

    // Assert
    expect(y).toBe('Hello Jasmine!');
  });
  it('returns the different value', () => {
    // Arrange
    const x: string = 'Hello Jasmine!';

    // Act
   /// const y: string = identity(x);
    const y: String ='ijk';

    // Assert
    expect(y).not.toBe('Hello Jasmine!');
  });
});

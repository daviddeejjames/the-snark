import Hunter from '../Hunter';

describe('Hunter', () => {
  it('creates a Hunter class with initialized values', () => {
    const hunter = new Hunter();
    expect(hunter.name).toEqual('Hunter');
    expect(hunter.x).toEqual(0);
    expect(hunter.y).toEqual(0);
    expect(hunter.shotsTaken).toEqual(0);
  });
});

import Snark from '../Snark';

describe('Snark', () => {
  it('creates a Snark class with initialized values', () => {
    const snark = new Snark();
    expect(snark.name).toEqual('Snark');
    expect(snark.x).toEqual(0);
    expect(snark.y).toEqual(0);
  });
});

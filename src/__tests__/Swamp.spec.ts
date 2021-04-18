import Swamp from '../Swamp';

describe('Swamp', () => {
  // Mock randomness 🙊
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;

  describe('constructor', () => {
    it('creates a Swamp class with initialized values', () => {
      const swamp = new Swamp(5);
      expect(swamp.size).toEqual(5);
      expect(swamp.rocks).toEqual([]);
      expect(swamp.snark.name).toEqual('Snark');
      expect(swamp.hunter.name).toEqual('Hunter');
    });
  });

  describe('placeSnark', () => {
    it('places the snark "randomly" within the grid', () => {
      const swamp = new Swamp(10);
      swamp.placeSnark();
      const snark = swamp.snark;

      // Values in this test will always be half of the size
      expect(snark.x).toEqual(5);
      expect(snark.y).toEqual(5);
    });
  });
});

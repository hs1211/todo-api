
test('directory', () => {
  const route = require('../../../app/utils/routesLoader');
  const path=route('./');
  console.log(path);
  expect(route('./')).toBe({});
});

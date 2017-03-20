const mockery = require('mockery');

describe('filesystem test suite', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: true
    });
  });

  afterEach(() => {
    mockery.disable();
  });

  it('reads the package.json', () => {


    const fsMock = jasmine.createSpyObj('fs', ['readFileSync']);
    fsMock.readFileSync.and.returnValue('Klaus');
    mockery.registerMock('fs', fsMock);

    mockery.registerAllowable('../node/filesystem');
    const filesystem = require('../node/filesystem');

    const result = filesystem();

    expect(result).toEqual('Klaus');
  });
});
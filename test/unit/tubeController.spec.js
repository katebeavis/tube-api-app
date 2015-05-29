describe('tubeController', function() {
  beforeEach(module('tube'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('tubeController');
    ctrl.bakerloo = { friendly_name: "Bakerloo",
                      status: "Good Service"
                    }
  }));

  it('initialises with a list of tube lines', function() {
    expect(ctrl.lines).toBeDefined();
  });
});
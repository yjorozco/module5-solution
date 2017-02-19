describe('itemtest', function () {

  var commonservice;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      commonservice = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiBasePath = $injector.get('ApiBasePath');
    });
  });

  it('should return a item', function() {
    var item={
      name:"chitos",
      short_name:"ships",
      description:'bla, bla',
    };
    $httpBackend.whenGET(ApiBasePath + '/menu_items.json').respond(item);
    commonservice.getMenuItem(item).then(function(response) {
      expect(response.data).toEqual(item);
    });
    $httpBackend.flush();
  });

});

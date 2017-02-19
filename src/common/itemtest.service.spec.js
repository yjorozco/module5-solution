describe('itemtest', function () {

  var commonservice;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    angular.mock.module('common');

    inject(function ($injector) {
      commonservice = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiBasePath = $injector.get('ApiPath');
    });
  });

  it('should return a item', function() {
    $httpBackend.whenGET(ApiBasePath + '/menu_items.json').respond({valor: 'userX'});
    commonservice.getMenuItem("A1").then(function(response) {
      expect(response.data).toEqual({valor: 'userX'});
    });
    $httpBackend.flush();
  });

});

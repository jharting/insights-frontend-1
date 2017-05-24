'use strict';

var componentsModule = require('../../');

/**
 * @ngInject
 */
function incidentsTriStateCtrl($location, $rootScope, $scope) {
    $scope.filterIncidents = function () {
        $location.search().filterIncidents = $scope.showIncidents;
        $rootScope.$broadcast('topicFilters:filterIncidents');
    };
}

function incidentsTriState() {
    return {
        templateUrl:
            'js/components/filterComponents/incidentsTriState/incidentsTriState.html',
        restrict: 'E',
        controller: incidentsTriStateCtrl
    };
}

componentsModule.directive('incidentsTriState', incidentsTriState);

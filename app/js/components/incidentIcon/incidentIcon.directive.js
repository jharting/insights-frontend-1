/*global require*/
'use strict';

var componentsModule = require('../');

/**
 * @ngInject
 */
function incidentIconCtrl($scope, gettextCatalog, IncidentsService) {
    $scope.tooltip = gettextCatalog.getString('This is an incident.');

    $scope.isIncident = function (rule) {
        return IncidentsService.isIncident(rule);
    };
}

function incidentIcon() {
    return {
        templateUrl: 'js/components/incidentIcon/incidentIcon.html',
        restrict: 'E',
        replace: true,
        controller: incidentIconCtrl,
        scope: {
            rule: '='
        }
    };
}

componentsModule.directive('incidentIcon', incidentIcon);

'use strict';

var componentsModule = require('../../');

/**
 * @ngInject
 */
function topicRuleFiltersCtrl($scope, FilterService, Events, Group) {

    $scope.resetFilters = function () {
        FilterService.clearAll();
        Group.setCurrent({});
        $scope.$emit('group:change', {});
        $scope.$broadcast(Events.filters.reset);
    };
}

function topicRuleFilters() {
    return {
        templateUrl: 'js/components/topics/topicRuleFilters/topicRuleFilters.html',
        restrict: 'E',
        replace: true,
        controller: topicRuleFiltersCtrl
    };
}

componentsModule.directive('topicRuleFilters', topicRuleFilters);

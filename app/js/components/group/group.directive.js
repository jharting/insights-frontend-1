'use strict';

var componentsModule = require('../');

/**
 * @ngInject
 */
function groupCtrl($scope, swangular, Group, gettextCatalog) {
    $scope.isCollapsed = false;

    $scope.deleteGroup = function (group) {
        var message = gettextCatalog.getString(
            'You will not be able to recover <code>{{name}}</code>', {
                name: group.display_name
            });
        swangular.swal({
            title: 'Are you sure?',
            type: 'warning',
            html: message,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes',
            showCancelButton: true
        }).then(function () {
            Group.deleteGroup(group);
        }).catch(swal.noop);
    };
}

function group() {
    return {
        templateUrl: 'js/components/group/views/group.html',
        restrict: 'E',
        controller: groupCtrl
    };
}

componentsModule.directive('group', group);

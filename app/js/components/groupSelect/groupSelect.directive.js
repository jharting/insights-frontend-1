'use strict';

var componentsModule = require('../');
var isEmpty = require('lodash/isEmpty');
const some = require('lodash/some');

/**
 * @ngInject
 */
function groupSelectCtrl($scope, $rootScope, gettextCatalog, Group, Events, SweetAlert) {
    Group.init();
    $scope.groups = Group.groups;
    $scope.group = Group.current();

    $scope.triggerChange = function (group) {
        $scope.group = group;
        Group.setCurrent(group);
        $rootScope.$broadcast('group:change', group);
    };

    $scope.$on('account:change', function () {
        $scope.triggerChange(null);
    });

    $scope.isGroupSelected = function () {
        return !isEmpty($scope.group);
    };

    $scope.$on(Events.filters.reset, function () {
        $scope.group = Group.current();
    });

    $scope.createGroup = function () {
        SweetAlert.swal({
            title: gettextCatalog.getString('Create group'),
            type: 'input',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: gettextCatalog.getString('Create'),
            closeOnConfirm: false
        }, function (name) {
            if (!name || typeof name !== 'string' || !name.length) {
                SweetAlert.unwrap().showInputError(
                    gettextCatalog.getString('Please specify a group name'));
                return false;
            }

            if (some(Group.groups, function (group) {
                return group.display_name === name
            })) {
                SweetAlert.unwrap().showInputError(
                    gettextCatalog.getString('Name already used'));
                return false;
            }

            return Group.createGroup({
                display_name: name
            }).then(SweetAlert.unwrap().close);

        });
    }
}

function groupSelect() {
    return {
        templateUrl: 'js/components/groupSelect/groupSelect.html',
        restrict: 'E',
        replace: true,
        controller: groupSelectCtrl,
        scope: {
            round: '=',
            disabled: '<'
        }
    };
}

componentsModule.directive('groupSelect', groupSelect);

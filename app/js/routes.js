'use strict';

/**
 * @ngInject
 */
function Routes($stateProvider) {

    /*
     * This is the very first state into which the app gets when loaded.
     * It's not a real state (has no view).
     * Its controller decides whether to load the Actions or the System view
     * and changes the state accordingly. See INSIGHTS-1005 for details.
     */
    $stateProvider
        .state('app.initial', {
            template: '',
            controller: 'InitialCtrl'
        })
        .state('evaluation', {
            url:'/evaluation',
            templateUrl: 'js/states/evaluation/evaluation.html',
            controller: 'EvaluationCtrl',
            title: 'evaluation',
            params: {
                originalPath: null
            }
        });

    // Shared Routes
    // Actions routes
    $stateProvider
        .state('app.actions', {
            url: '/actions',
            templateUrl: 'js/states/actions/actions.html',
            controller: 'ActionsCtrl',
            params: {
                category: {
                    value: null,
                    squash: true
                }
            },
            title: 'Actions',
            actions: true
        })

        .state('app.actions-rule', {
            url: '/actions/:category/:rule',
            templateUrl: 'js/components/actions/actionsRule/actionsRule.html',
            controller: 'ActionsRuleCtrl',
            actions: true,
            title: 'Actions',
            triggerComplete: true
        })

        .state('app.topic', {
            url: '/actions/:id?product',
            templateUrl: 'js/states/topics/views/topic-list.html',
            controller: 'TopicRuleListCtrl',
            title: 'Actions',
            actions: true
        });

    $stateProvider
        .state('app.overview', {
            url: '/overview/',
            templateUrl: 'js/states/overview/overview.html',
            controller: 'OverviewCtrl',
            title: 'Overview'
        });

    $stateProvider
        .state('app.components', {
            url: '/hidden/components/',
            templateUrl: 'js/states/hidden/components/components.html',
            controller: 'ComponentsCtrl',
            title: 'Components'
        });

    // Digest routes
    $stateProvider
        .state('app.digests', {
            url: '/reports/executive/',
            templateUrl: 'js/states/digests/digests.html',
            controller: 'DigestsCtrl',
            title: 'Executive Reports'
        });

    // System routes
    $stateProvider
        .state('app.inventory', {
            url: '/inventory?product&roles&osp_deployment' +
                '&docker_host&search_term&sort_field&sort_dir&offline&online&machine',
            templateUrl: 'js/states/inventory/inventory.html',
            controller: 'InventoryCtrl',
            title: 'Inventory',
            reloadOnSearch: false
        });

    // Rule routes
    $stateProvider
        .state('app.rules', {
            url: '/rules?product&roles&osp_deployment&docker_host&category',
            templateUrl: 'js/states/rules/list-rules.html',
            controller: 'ListRuleCtrl',
            title: 'Rules',
            hideGroup: true
        });

    // Planner routes
    $stateProvider
        .state('app.maintenance', {
            // the parameter is optional and allows the maintenance view to be bookmarked
            // with "quick-edit" of a specific plan open
            url: '/planner/{maintenance_id}',
            templateUrl: 'js/states/maintenance/maintenance.html',
            controller: 'MaintenanceCtrl',
            title: 'Planner',
            params: {
                newPlan: false
            }
        });

    // Common announcements routes
    $stateProvider
        .state('app.announcements', {
            url: '/announcements/',
            templateUrl: 'js/states/announcements/announcements.html',
            controller: 'ListAnnouncementCtrl',
            params: {
                announcementId: null
            }
        })

        .state('app.view-announcement', {
            url: '/announcements/:slug/',
            templateUrl: 'js/states/announcements/view-announcement.html',
            controller: 'ViewAnnouncementCtrl'
        });
}

module.exports = Routes;

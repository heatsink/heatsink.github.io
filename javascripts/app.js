(function (angular) {
  'use strict';

  angular
    .module('myApp', [ 'ngAnimate', 'vAccordion', 'ngTouch', 'ngSanitize', 'vTabs'])

    .controller('MainController', function ($scope) {

      $scope.panesA = [
        {
          id: 'pane-1a',
          header: 'UNIX Development',
          content: 'wget seanwallace.info/vimrc && wget seanwallace.info/bashrc && wget seanwallace.info/testbench',
        },
        {
          id: 'pane-2a',
          header: 'OSX Development',
          content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.'
        },
      ];

      $scope.panesB = [
        {
          id: 'pane-1b',
          header: 'The Autonomous Golf Cart',
          content: 'Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.',
          isExpanded: false,
          subpanes: [
            {
              id: 'subpane-1b',
              header: 'More Content',
              content: 'Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.'
            }
          ]

        },
        {
          id: 'pane-2b',
          header: 'The Nucleo Bot',
          content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.',
          subpanes: [
            {
              id: 'subpane-1b',
              header: 'More Content',
              content: 'Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.'
            }
          ]
        },
        {
          id: 'pane-3b',
          header: 'The Chess AI v2.0',
          content: 'Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.',

          subpanes: [
            {
              id: 'subpane-1b',
              header: 'More Content',
              content: 'Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.'
            }
          ]
        },
        {
           id: 'pane-4b',
           header: 'The Ninja Fighter RPG',
           content: 'NINJAS',
           subpanes: [
             {
               id: 'subpane-1b',
               header: 'More Content',
               content: 'Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non.'
             }
           ]

        }
      ];

      $scope.panesC = [
        {
          id: 'pane-1c',
          header: 'The RAT MCU',
          content: 'Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.',
          isExpanded: false
        },
        {
          id: 'pane-2c',
          header: 'Power Supply',
          content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.'
        },
      ];


      $scope.expandCallback = function (index, id) {
        console.log('expand:', index, id);
      };

      $scope.collapseCallback = function (index, id) {
        console.log('collapse:', index, id);
      };

      $scope.$on('accordionA:onReady', function () {
        console.log('accordionA is ready!');
      });

      $scope.simpleTabs = {
        active: 0
      };

      $scope.simplePages = {
        active: 0
      };

      $scope.verticalTabs = {
        active: 0
      };

      $scope.horizontalTabs = {
        active: 0
      };

      $scope.pages = [
        {
          id: 1,
          title: 'About',
          content: '<h4>About</h4><p>Welcome! Here you will find my project portfolio during my time at university.</p><h4>Resources</h4><p>If you\'re a peer and want my terminal resources, here they are!</p>'
        },
        {
          id: 2,
          title: 'Projects',
          content: '',
        },
      ];


      // function to evaluate if it is page one
      $scope.isPageOne = function(value) {
         if (value == 0) {
            return true;
         }
         else {
            return false;
         }
      };
    });

})(angular);

System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CourseService;
    return {
        setters:[],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                }
                CourseService.prototype.getCourses = function () {
                    return ['Angular', 'React', 'Meteor'];
                };
                return CourseService;
            }());
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=courses.service.js.map
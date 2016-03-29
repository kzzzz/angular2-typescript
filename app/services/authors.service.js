System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthorsService;
    return {
        setters:[],
        execute: function() {
            AuthorsService = (function () {
                function AuthorsService() {
                }
                AuthorsService.prototype.getAuthors = function () {
                    return [
                        { name: 'Annemie Heymans', isFavorite: true },
                        { name: 'Remco Campert', isFavorite: false },
                        { name: 'Antoon Coolen', isFavorite: false },
                        { name: 'Arnon Grunberg', isFavorite: true }
                    ];
                };
                return AuthorsService;
            }());
            exports_1("AuthorsService", AuthorsService);
        }
    }
});
//# sourceMappingURL=authors.service.js.map
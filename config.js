"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//habilitación o deshabilitación de modulos de la API
exports.modules = {
    auth: {
        active: true,
        path: './modules/auth/routes',
        route: '/modules/auth'
    },
    personas: {
        active: true,
        path: "./modules/personas/routes",
        route: "/modules/personas"
        // middleware: null
    },
    cursos: {
        active: true,
        path: "./modules/cursos/routes",
        route: "/modules/cursos",
    }
};
//# sourceMappingURL=config.js.map
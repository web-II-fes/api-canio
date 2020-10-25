//habilitación o deshabilitación de modulos de la API
export const modules = {
    auth: {
        active: true,
        path: './modules/auth/routes',
        route: '/modules/auth'
    },
    personas: {
        active: true,
        path: "./modules/personas/routes",
        route:"/modules/personas"
        // middleware: null
    },
    cursos: {
        active: true,
        path: "./modules/cursos/routes",
        route: "/modules/cursos",

        // middleware: null
    }
};

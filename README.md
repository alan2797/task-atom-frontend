# ATOM CHALLENGE TECHNICAL - ANGULAR 17

Este proyecto es una aplicación escalable desarrollada con Angular 17.3.0, diseñada para el desafío técnico de Atom. Implementa un sistema de gestión de tareas moderno y seguro, con autenticación robusta de usuarios y una interfaz responsiva, optimizada para una experiencia de usuario fluida y eficiente.

## Deciciones De Desarrollo

- Como primer paso siempre me encargo de desarrollar loc componentes que voy a necesitar en la aplicacion como:
  text-field (este componente se encarga de renderizar el tipo de componente de mi formulario) y asi con otros componentes
- Como segundo paso voy viendo el renderizado de mis formularios en base a un archivo de configuracions como el siguiente:

```
export const createTaskSchema: TextFieldSchema = [
  {
    label: 'Tipo/Categoria',
    name: 'tipo',
    fieldType: TextFieldType.Dropdown,
    options: [
      { label: 'Practico', value: 'Practico' },
      { label: 'Trabajo', value: 'Trabajo' },
      { label: 'Proyecto', value: 'Proyecto' },
      { label: 'Informe', value: 'Informe' },
      { label: 'Laboratorio', value: 'Laboratorio' },
    ],
    validators: [
      {
        message: 'Es requerido',
        name: 'required',
        validatorFn: Validators.required,
      },
    ],
    df: '20%',
    xs: '100%',
    sm: '50%',
  },
  {
    label: 'Titulo',
    name: 'titulo',
    validators: [
      {
        message: 'Es requerido',
        name: 'required',
        validatorFn: Validators.required,
      },
    ],
    df: '20%',
    xs: '100%',
    sm: '50%',
  },
  {
    label: 'Descripcion',
    name: 'descripcion',
    fieldType: TextFieldType.Textarea,
    validators: [
      {
        message: 'Es requerido',
        name: 'required',
        validatorFn: Validators.required,
      },
    ],
    df: '20%',
    xs: '100%',
    sm: '50%',
  },
];
```

- esos son algunas consideracion para tener la base del proyecto, antes de iniciar con las funcionalidades, en el codigo ya se podra apreciar a mas detalle.

## Estructura del Proyecto

```
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── guards/         # Guardias de rutas para autenticación
│   │   │   ├── interceptors/   # Interceptores HTTP para tokens de auth
│   │   │   └── services/       # Servicios core (user, task, token)
│   │   │   └── models/         # Modelos (user, task)
│   │   ├── features/
│   │   │   ├── auth/           # Componentes de la funcionalidad de autenticación
│   │   │   │   ├ login/        # Componentes de login, registro
│   │   │   │   └ auth.route.ts # maneja las rutas de auth
│   │   │   └── tasks/          # Funcionalidad de gestión de tareas
│   │   │       ├─ task-list    # index o lista de tasks
│   │   │       ├─ task-create  # componente para crear mas tareas
│   │   │       ├─ task-edit    # componente para editar la tarea
│   │   │       └ task.route.ts # maneja las rutas de task
│   │   ├── shared/
│   │   │   └── componentes/    # componentes reutilzables como data-table, input-text etc
│   │   │   └── constants/      # constantes de toda la aplicacion
│   │   │   └── directives/     # directivas que se compartes en toda la aplicacion
│   │   │   └── validators/     # validaciones centralizadas para toda la aplicacion
│   │   ├── app.component.ts    # Componente raíz
│   │   ├── app.config.ts       # Configuración de la app
│   │   └── app.routes.ts       # Enrutamiento de la app
│   ├── assets/                 # Activos estáticos (imágenes, iconos)
│   ├── environments/           # Archivos de configuración de entorno
│   ├── styles.scss             # Estilos globales
│   └── index.html              # Archivo HTML principal
├── dist/                       # Salida de compilación
├── angular.json                # Configuración del workspace de Angular
├── package.json                # Dependencias y scripts
└── tsconfig.json               # Configuración de TypeScript
```

## Características principales

- **Arquitectura limpia**  
  Garantiza un código escalable y mantenible.

- **Componentes reutilizables**  
  Optimizan la consistencia y reducen la duplicación.

- **Carga dinámica de formularios**  
  Basada en archivos JSON de configuración.

- **Validaciones centralizadas**  
  Para un control uniforme en toda la aplicación.

- **Interceptors centralizados**  
  Manejo de errores, autenticación y respuestas genéricas.

- **Guards para protección de rutas**  
  Control de acceso según el estado de autenticación del usuario.

- **Directivas personalizadas**  
  Para validación de formularios y manejo responsivo.

- **Respuestas genéricas**  
  Estandarizan la comunicación y el control desde Angular.

- **Lazy loading**  
  Optimiza el rendimiento cargando módulos bajo demanda.

- **Skeleton screens**  
  Mejoran la experiencia del usuario mientras se cargan los datos.

- **Spinners de carga**  
  Indican estados de espera de manera clara e intuitiva.

## Características Especificas

### Autenticación y Seguridad

- **Autenticación con correo electrónico**  
  Registro e inicio de sesión mediante credenciales basadas en correo electrónico.

- **Autenticación con JWT**  
  Implementación de tokens JWT para garantizar sesiones seguras y confiables.

- **Protección de rutas con Guards**  
  Restricción de acceso a secciones internas solo para usuarios autenticados.

- **Interceptores de seguridad**  
  Inclusión automática del token JWT en todas las solicitudes HTTP hacia las API protegidas.

- **Uso de CORS**  
  Configurado para permitir solicitudes únicamente desde esta aplicación, garantizando seguridad en el acceso a la API.

### Integración con Firebase

- **Cloud Firestore**  
  Base de datos en tiempo real utilizada para almacenar la información de los usuarios y sus tareas correspondientes.

### Características de UI/UX

- **Angular Material**  
  Uso de componentes modernos basados en Material Design para una interfaz consistente y atractiva.

- **Diseño responsive**  
  Interfaz completamente adaptable a cualquier tamaño de pantalla, implementada con una directiva personalizada.

- **Temas personalizados**  
  Paleta de colores y estilos inspirados en la plataforma atomchat.io.

- **Notificaciones tipo Toast**  
  Mensajes amigables utilizando SnackBar para informar al usuario de forma no intrusiva.

- **Skeleton screens**  
  Mejora la experiencia del usuario mostrando pantallas de carga mientras se obtienen los datos.

- **Spinners de carga**  
  Indicadores visuales que muestran el estado de procesos en ejecución.

### Arquitectura y Organización

El proyecto está estructurado siguiendo los principios de **arquitectura limpia**, lo que facilita la escalabilidad, mantenibilidad y separación clara de responsabilidades. A continuación, se describen las carpetas principales y su función:

- **`core`**  
  Contiene los servicios centrales y singleton de la aplicación, como la autenticación, manejo de tokens, y servicios que se usan a nivel global. También incluye configuraciones y utilidades esenciales.

- **`shared`**  
  Alberga componentes, directivas, pipes, constantes y modelos reutilizables que pueden ser usados a lo largo de toda la aplicación para evitar duplicación y mantener consistencia.

- **`features`**  
  Organiza la aplicación por módulos funcionales o características específicas, como la gestión de tareas (`tasks`), autenticación (`auth`), entre otros

- **`environments`**  
  Archivos de configuración para diferentes entornos (desarrollo, producción), que permiten adaptar la aplicación según el contexto de despliegue.

### Funcionalidades de Auth y Tasks

- **Operaciones CRUD completas**  
  Funcionalidad para crear, leer, actualizar y eliminar tareas de forma eficiente.

- **Filtrado avanzado**  
  Posibilidad de filtrar tareas por cualquier campo disponible, facilitando la búsqueda y organización.

- **Categorías y estados**  
  Las tareas están organizadas en categorías y cuentan con estados claros como pendiente y completado.

- **Login**  
  El usuario puede loguearse con su correo electronico y gestionar sus propias tareas

## Variables Globales y Configuración

La aplicación utiliza archivos de entorno para la configuración:

```typescript
export const environment = {
  production: false,
  apiUrl: "http://localhost:3000",
};
```

## Entorno de Desarrollo

### Servidor de desarrollo

Ejecuta `ng serve` para un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias cualquiera de los archivos fuente.

### Generación de código

Ejecuta `ng generate component nombre-componente` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Compilación

Ejecuta `ng build` para compilar el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.

### Ejecución de tests unitarios

Ejecuta `ng test` para ejecutar los tests unitarios vía [Karma](https://karma-runner.github.io).

## Despliegue

La aplicación está configurada para un fácil despliegue en Firebase:

1. Compilar la versión de producción: `ng build`
2. Desplegar en Firebase: `firebase deploy`

## Decisiones Técnicas

### Arquitectura

El proyecto sigue una arquitectura modular con clara separación de responsabilidades:

- **Módulo Core**: Contiene servicios, interceptores y guards que se cargan una sola vez
- **Módulo shared**: Contiene componentes, directivas y pipes reutilizables
- **Módulos de features**: Módulos de gestión de tareas y autenticación con sus propios componentes

### Integración con API

La aplicación se comunica con una API RESTful para operaciones de gestión de tareas y usuarios.

# AtomPruebaTecnica

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

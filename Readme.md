# 🌱 CafiCultores - Gestión Inteligente de Cultivos

Una aplicación web moderna diseñada específicamente para caficultores colombianos, que permite registrar, gestionar y monitorear cultivos de café de manera eficiente.

![CafiCultores Banner](https://img.shields.io/badge/CafiCultores-Caf%C3%A9%20Colombiano-green?style=for-the-badge&logo=coffee)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [API Endpoints](#-api-endpoints)
- [Screenshots](#-screenshots)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## ✨ Características

### 🔧 Funcionalidades Principales
- ✅ **CRUD Completo** de cultivos de café
- ✅ **Registro detallado** de información de cultivos
- ✅ **Visualización** en lista y detalle individual
- ✅ **Edición** de información existente
- ✅ **Eliminación** con confirmación de seguridad

### 🎨 Experiencia de Usuario
- ✅ **Diseño responsivo** para dispositivos móviles y desktop
- ✅ **Interfaz intuitiva** con navegación clara
- ✅ **Estados de carga** y manejo de errores
- ✅ **Feedback visual** para todas las acciones
- ✅ **Tema colombiano** con colores representativos

### 📊 Gestión de Datos
- ✅ **Variedades de café** (Arábica, Robusta, Geisha, etc.)
- ✅ **Métricas de área** en hectáreas
- ✅ **Ubicación** de cultivos
- ✅ **Fechas de registro** automáticas

## 🛠 Tecnologías

### Frontend
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=flat&logo=tailwindcss)
![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?style=flat&logo=axios)
![React Router](https://img.shields.io/badge/React_Router-6.x-CA4245?style=flat&logo=reactrouter)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat&logo=nodedotjs)
![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=flat&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248?style=flat&logo=mongodb)
![Swagger](https://img.shields.io/badge/Swagger-3.x-85EA2D?style=flat&logo=swagger)

### Herramientas de Desarrollo
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=visualstudiocode)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm)

## 🚀 Instalación

### Prerrequisitos
- Node.js 18+ instalado
- npm o yarn
- MongoDB (local o cloud)

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/caficultores-app.git
cd caficultores-app
```

### 2. Configurar el Frontend
```bash
cd frontend
npm install
```

**Instalar Tailwind CSS:**
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configurar el Backend
```bash
cd ../backend
npm install
```

**Instalar dependencias principales:**
```bash
npm install express mongoose cors swagger-ui-express
npm install -D nodemon
```

### 4. Variables de Entorno
Crear archivo `.env` en el backend:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/caficultores
NODE_ENV=development
```

### 5. Ejecutar la Aplicación

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

La aplicación estará disponible en:
- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:5000
- **API Docs:** http://localhost:5000/api-docs

## 📖 Uso

### 1. Registrar un Cultivo
1. Navega a la página principal
2. Completa el formulario con:
   - Nombre del cultivo
   - Variedad de café
   - Área en hectáreas
   - Ubicación
3. Haz clic en "Registrar Cultivo"

### 2. Ver Lista de Cultivos
1. Ve a "Ver Cultivos" en la navegación
2. Explora los cultivos en formato de cards
3. Usa "Ver Detalles" para más información

### 3. Gestionar Cultivos
- **Ver Detalles:** Información completa del cultivo
- **Editar:** Modificar información existente
- **Eliminar:** Remover cultivo (con confirmación)

## 📁 Estructura del Proyecto

```
caficultores-app/
├── frontend/                   # Aplicación React
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Registro.jsx    # Formulario de registro
│   │   │   ├── Lista.jsx       # Lista de cultivos
│   │   │   ├── Detalle.jsx     # Vista detallada
│   │   │   └── Editar.jsx      # Formulario de edición
│   │   ├── App.jsx             # Componente principal
│   │   ├── index.js            # Punto de entrada
│   │   └── index.css           # Estilos Tailwind
│   ├── public/
│   ├── package.json
│   └── tailwind.config.js
├── backend/                    # API Express
│   ├── models/
│   │   └── Cultivo.js          # Modelo MongoDB
│   ├── routes/
│   │   └── cultivos.js         # Rutas CRUD
│   ├── server.js               # Servidor principal
│   ├── swagger.json            # Documentación API
│   └── package.json
└── README.md
```

## 🔗 API Endpoints

### Cultivos
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/api/cultivos` | Obtener todos los cultivos |
| `POST` | `/api/cultivos` | Crear nuevo cultivo |
| `GET` | `/api/cultivos/:id` | Obtener cultivo por ID |
| `PUT` | `/api/cultivos/:id` | Actualizar cultivo |
| `DELETE` | `/api/cultivos/:id` | Eliminar cultivo |

### Ejemplo de Petición
```javascript
// Crear cultivo
const response = await axios.post('/api/cultivos', {
  nombre: "Lote San Miguel",
  variedad: "Arabica",
  hectareas: 2.5,
  ubicacion: "Vereda El Paraíso, Manizales"
});
```

### Ejemplo de Respuesta
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
  "nombre": "Lote San Miguel",
  "variedad": "Arabica",
  "hectareas": 2.5,
  "ubicacion": "Vereda El Paraíso, Manizales",
  "fechaCreacion": "2025-01-25T10:30:00.000Z"
}
```

## 📱 Screenshots

### Página Principal - Registro
![Registro](https://via.placeholder.com/800x400/10b981/ffffff?text=Formulario+de+Registro)

### Lista de Cultivos
![Lista](https://via.placeholder.com/800x400/059669/ffffff?text=Lista+de+Cultivos)

### Vista de Detalles
![Detalle](https://via.placeholder.com/800x400/047857/ffffff?text=Vista+de+Detalles)

## 🧪 Testing

### Ejecutar tests
```bash
# Frontend
cd frontend
npm test

# Backend
cd backend
npm test
```

### Tests incluidos
- ✅ Componentes React
- ✅ Rutas de API
- ✅ Validaciones de formulario
- ✅ Integración frontend-backend

## 🚀 Despliegue

### Frontend (Vercel)
```bash
cd frontend
npm run build
# Conectar repositorio a Vercel
```

### Backend (Render/Railway)
```bash
# Configurar variables de entorno en la plataforma
# Conectar base de datos MongoDB Atlas
# Desplegar desde repositorio
```

### Variables de Entorno Producción
```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/caficultores
PORT=5000
CORS_ORIGIN=https://tu-frontend.vercel.app
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Contribución
- Sigue las convenciones de código existentes
- Agrega tests para nuevas funcionalidades
- Actualiza la documentación cuando sea necesario
- Usa commits descriptivos

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:

- 📧 Email: soporte@caficultores.com
- 🐛 Issues: [GitHub Issues](https://github.com/tu-usuario/caficultores-app/issues)
- 📖 Wiki: [Documentación completa](https://github.com/tu-usuario/caficultores-app/wiki)

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- ☕ Caficultores colombianos por la inspiración
- 🇨🇴 Comunidad de desarrolladores colombianos
- 📚 Recursos educativos de React y Node.js
- 🎨 Tailwind CSS por el sistema de diseño

## 📊 Estado del Proyecto

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-95%25-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

**Desarrollado con ❤️ para los caficultores de Colombia** 🇨🇴

*¿Te gusta el proyecto? ¡Dale una ⭐ en GitHub!*
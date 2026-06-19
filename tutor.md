# TUTOR.md — UpTask | Curso MERN con TypeScript
> Pegá este archivo al inicio de cada sesión para que el tutor se ponga al día.

---

## 📌 Instrucciones de uso

1. **Al iniciar sesión** → pegá este archivo completo en el chat
2. **Al terminar sesión** → pedile al tutor que actualice el archivo y reemplazá el contenido
3. **Cuando tenés una duda** → pegá el código + describí el error o la pregunta
4. **Cuando terminás un video** → avisá el número y el tutor te hace la pregunta de cierre

---

## 🎯 Curso
- **Nombre:** React y TypeScript - La Guía Completa Creando +10 Proyectos
- **Autor:** Juan Pablo De la Torre Valdez (Udemy)
- **Stack:** MERN (MongoDB, Express, React, Node.js) + TypeScript
- **Duración total:** 58 horas

---

## 📚 Método de estudio acordado
1. Ver video completo **sin tocar el teclado**
2. Cerrar el video y **reproducir de memoria** en VSCode
3. **Escribir notas/comentarios** en el código mientras codificás
4. **Consultarme dudas** para cerrar conceptos
5. **Pregunta de cierre** al terminar cada video para verificar comprensión

---

## 📍 Progreso actual
- **Sección activa:** 28 — UpTask: Tareas - Modelos, rutas y controllers
- **Último video completado:** 463 — Creando el Endpoint para eliminar un proyecto
- **Próximo video:** 464 (primer video sección 28)
- **Sección 27:** ✅ COMPLETA

---

## 🗺️ Mapa del curso (secciones relevantes)

| Sección | Tema | Estado | Alineación tutor |
|---------|------|--------|-----------------|
| 26 | UpTask - Primeros pasos backend | ✅ Completa | ✅ Total |
| 27 | Proyectos - Modelos, rutas y controllers | ✅ Completa | ✅ Total |
| 28 | Tareas - Modelos, rutas y controllers | 🔄 Siguiente | ✅ Total — mismo patrón que sección 27 |
| 29 | Frontend - Primeros pasos | ⏳ Pendiente | ✅ Total — React + Vite + TypeScript |
| 30 | Frontend - Creando Proyectos | ⏳ Pendiente | ✅ Total — React Query, formularios |
| 31+ | Autenticación, Tareas frontend, etc. | ⏳ Pendiente | ⚠️ Actualizar cuando lleguemos |

> **Nota:** Actualizar alineación del tutor a partir de sección 31 cuando se acerque.

---

## ✅ Conceptos consolidados

### Backend / Node.js
- Flujo completo: `index.ts → server.ts → connectDB → rutas → controller`
- `export default` vs `named export` y cómo importar cada uno
- `dotenv` — debe ir primero antes de cualquier `process.env`
- `exit(0)` = proceso terminó ok | `exit(1)` = proceso terminó con error

### Express
- Express como abstracción sobre Node.js puro
- `app.use()` para montar routers con prefijo de URL
- Router de Express — corta el prefijo y maneja el resto
- Separación de responsabilidades: index / server / routes / controllers
- `req` = leer lo que llega | `res` = escribir lo que devolvés
- `req.body`, `req.params`, `req.query`
- `res.json()` vs `res.send()`
- Status codes: 200 (ok), 201 (creado), 400 (datos inválidos), 404 (no encontrado), 500 (error servidor)

### Mongoose / MongoDB
- MongoDB = NoSQL, documentos JSON (vs PostgreSQL = SQL, tablas)
- Mongoose = ODM (Object Document Mapper)
- Schema = define la estructura | Modelo = conecta schema con la colección
- `required: true` (NO `require: true`) — typo silencioso a evitar
- `Project.find({})` — trae todos los documentos
- `Project.findById(id)` — trae uno por ID, devuelve `null` si no existe
- `project.save()` — guarda un documento nuevo o actualizado
- `Project.findByIdAndUpdate(id, data)` — encuentra y actualiza en un paso
- `project.deleteOne()` — elimina el documento encontrado
- Mongoose ignora campos no definidos en el Schema — primera línea de defensa contra Mass Assignment
- Patrón de dos pasos para delete: `findById()` → verificaciones → `deleteOne()`

### TypeScript
- `_req` cuando el parámetro existe pero no se usa (convención)
- `import type` para importar solo tipos sin código en runtime

### Express Validator
- `body()` — valida campos del body (POST/PUT)
- `param()` — valida parámetros de la URL (GET/PUT/DELETE /:id)
- `param("id").isMongoId()` — valida formato válido de MongoDB
- `validationResult(req)` — lee los errores anotados
- `handlerInputErrors` — middleware guardián que corta si hay errores
- Orden en router: `body()/param()` → `handlerInputErrors` → `controller`
- Sin `handlerInputErrors` la validación no vale de nada

### Arquitectura MVC — Patrón del proyecto
- Un Router por recurso (projects, users, tasks)
- Un Controller por recurso con métodos estáticos
- Un modelo por recurso
- Métodos estáticos = no necesitás instanciar la clase para usarlos
- Flujo de un endpoint: Recibir (req) → Procesar (DB) → Devolver (res)
- Router → rutea | Controller → ejecuta lógica

### CRUD completo de Proyectos (Sección 27)
```
GET    /api/projects      → getAllProjects   → Project.find({})
GET    /api/projects/:id  → getProjectById  → Project.findById(id)
POST   /api/projects      → createProject   → new Project(req.body) + save()
PUT    /api/projects/:id  → updateProject   → Project.findByIdAndUpdate(id, data)
DELETE /api/projects/:id  → deleteProject   → findById() + verificaciones + deleteOne()
```

---

## 🔒 Seguridad Web — Conceptos aprendidos

### Mass Assignment Vulnerability
- Pasar `req.body` directo a `findByIdAndUpdate` permite inyectar campos extra
- Solución: extraer solo los campos necesarios
```typescript
const { projectName, clientName, description } = req.body;
await Project.findByIdAndUpdate(id, { projectName, clientName, description });
```
- Mongoose filtra campos no definidos en el Schema — pero no es suficiente cuando el Schema crece

### CORS
- Bloquea peticiones desde navegadores de dominios no autorizados
- NO protege contra curl, Postman o scripts — esos ignoran CORS
- La seguridad siempre va en el backend, nunca en el frontend

### Autorización
- No basta con que el ID exista para eliminar/modificar un recurso
- Patrón: findById() → ¿tenés permiso? → operación
- `findByIdAndDelete()` saltea verificaciones — peligroso en API pública

### Regla de oro
> La seguridad siempre va en el backend. El frontend es comodidad para el usuario, nunca una barrera de seguridad.

---

## 🎯 Path de Hacking Ético — Para explorar después del curso

```
Semana 1  →  WebGoat (OWASP)
             docker run -d -p 8080:8080 webgoat/goat-and-wolf
             http://localhost:8080/WebGoat

Semana 2  →  OWASP Top 10
             https://owasp.org/www-project-top-ten

Mes 2     →  TryHackMe.com — plataforma gamificada para principiantes
```

> Solo atacás entornos diseñados para ello o con permiso explícito. Sin permiso es delito.

---

## ⚠️ Errores comunes a recordar
- `.env` debe estar en la raíz del proyecto (mismo nivel que `package.json`)
- `required: true` no `require: true` en Schema de Mongoose
- `dotenv.config()` siempre antes de cualquier `process.env`
- `export default` → importar sin llaves | `export const` → importar con llaves
- El `return` en `res.status(404).json()` es obligatorio — sin él Express sigue ejecutando
- Nombres de métodos deben describir lo que hacen: `getProjectById` no `createProjectById`
- No pasar `req.body` directo a `findByIdAndUpdate` → extraer solo los campos necesarios
- Dos `res.send()` en el mismo handler rompe la app silenciosamente
- Bug de Postman: cambios sin guardar en una request pueden hacer que envíe el verbo equivocado
- Cuando el código parece correcto, el problema puede estar en la herramienta (Postman, nodemon, etc.)

---

## 📝 Notas del tutor
- Sección 28 replica el patrón de sección 27 para Tareas — va a fluir mucho más rápido
- Víctor ya internalizó el patrón CRUD completo — puede anticipar el código antes de verlo
- Sección 29 es territorio nuevo (React) — bajar el ritmo y consolidar bien
- Víctor responde bien a preguntas de cierre — seguir con ese formato
- El método de notas en código es pedagógicamente sólido — mantenerlo
- Víctor probó la vulnerabilidad Mass Assignment por su cuenta — buen nivel de curiosidad técnica

---
*Última actualización: Sesión del 18/06/2026 — Sección 27 completa. Videos 460-463 completados. CRUD de Proyectos terminado.*

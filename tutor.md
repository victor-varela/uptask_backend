# TUTOR.md — UpTask | Curso MERN con TypeScript
> Pegá este archivo al inicio de cada sesión para que el tutor se ponga al día.

---

## 📌 Instrucciones de uso

1. **Al iniciar sesión** → pegá este archivo + respondé la pregunta de retención de 24h
2. **Al terminar sesión** → pedile al tutor que actualice el archivo y reemplazá el contenido
3. **Cuando tenés una duda** → intentá resolverla 5 min solo antes de preguntar
4. **Cuando terminás un video** → avisá el número y el tutor te hace la pregunta de cierre
5. **TODO** → para dudas que no bloquean el avance, seguís sin detenerte

---

## 🎯 Curso
- **Nombre:** React y TypeScript - La Guía Completa Creando +10 Proyectos
- **Autor:** Juan Pablo De la Torre Valdez (Udemy)
- **Stack:** MERN (MongoDB, Express, React, Node.js) + TypeScript
- **Duración total:** 58 horas

---

## 📚 Método de estudio acordado

### Ritual de cada sesión

**INICIO (5 min)**
- Pegás el TUTOR.md
- Respondés la pregunta de retención del video anterior (sin ver el código)
- Arrancás el video nuevo

**DURANTE el video**
1. Ver video completo **sin tocar el teclado**
2. Cerrar el video y **reproducir de memoria** en VSCode
3. **Pseudocódigo primero** — comentarios con los pasos antes del código
4. **Escribir notas/comentarios** en el código mientras codificás
5. **TODO** para dudas que no bloquean el avance
6. Consultar al tutor solo si bloqueaste más de 5 min

**CIERRE (5 min)**
- Pregunta de cierre del video
- Completar el tracking de sesión
- Pedir actualización del TUTOR.md

---

## 📊 Sistema de medición — 5 parámetros

### Lo que medimos
```
1. Retención      → ¿podés reproducir el código sin ver el video?
2. Comprensión    → ¿podés explicar el por qué, no solo el cómo?
3. Transferencia  → ¿podés aplicar el concepto en un contexto nuevo?
4. Velocidad      → ¿cuánto tardás por video con el tiempo?
5. Autonomía      → ¿cada vez necesitás menos ayuda para resolver errores?
```

### Lo que debés hacer vos para cada parámetro

**RETENCIÓN** — No repasar antes de la pregunta de 24h. El esfuerzo de recordar ES el aprendizaje.

**COMPRENSIÓN** — Siempre preguntarte "¿por qué?" antes de "¿cómo?". Si no podés explicarlo simple, no lo entendiste todavía.

**TRANSFERENCIA** — Cuando aprendés algo nuevo, conectarlo con algo anterior. Preguntarte "¿dónde más aplica esto?"

**VELOCIDAD** — No quedarte más de 10 minutos trabado. TODO y seguís.

**AUTONOMÍA** — Intentar resolver el error solo 5 minutos antes de preguntar. Anotar cuando resolvés algo solo.

### Cuándo medir retención
```
Inmediata  → pregunta de cierre al terminar el video
24-48h     → pregunta al inicio de la sesión siguiente
7 días     → pregunta sorpresa de concepto de esa semana
30 días    → al terminar sección, reproducir patrón completo de memoria
```

### Tracking de sesión
```
## 📊 Última sesión
- Fecha:
- Videos completados:
- Pregunta retención 24h: ✅/❌/parcial
- Preguntas cierre bien respondidas: /
- Dudas bloqueantes:
- TODOs agregados:
- Retención (1-5):
- Comprensión (1-5):
- Autonomía (1-5):
```

### Tendencia actual
```
Velocidad      → subiendo ✅ (2 → 4 → 9 videos por sesión)
Autonomía      → subiendo ✅ (resuelve antes de preguntar)
Comprensión    → alta ✅ (pregunta el por qué, no solo el cómo)
Transferencia  → sólida ✅ (conectó Covey con pseudocódigo, fail-safe con router.param)
Retención      → 3/5 mejorando con sistema de 24h ✅
```

---

## 📍 Progreso actual
- **Sección activa:** 28 — UpTask: Tareas - Modelos, rutas y controllers
- **Último video completado:** 478 — Actualizar tarea (updateTask) + validación project/task
- **Próximo video:** 479
- **Pregunta de retención para próxima sesión:** ¿Por qué comparar `task.project !== req.project._id` sin `.toString()` es un riesgo, aunque a veces "funcione"? ¿Qué es la comparación por referencia vs por valor?
- **Sección 27:** ✅ COMPLETA
- **Sección 28:** 🔄 En curso

---

## 🗺️ Mapa del curso (secciones relevantes)

| Sección | Tema | Estado | Alineación tutor |
|---------|------|--------|-----------------|
| 26 | UpTask - Primeros pasos backend | ✅ Completa | ✅ Total |
| 27 | Proyectos - Modelos, rutas y controllers | ✅ Completa | ✅ Total |
| 28 | Tareas - Modelos, rutas y controllers | 🔄 En curso | ✅ Total |
| 29 | Frontend - Primeros pasos | ⏳ Pendiente | ✅ Total — React + Vite + TypeScript |
| 30 | Frontend - Creando Proyectos | ⏳ Pendiente | ✅ Total — React Query, formularios |
| 31+ | Autenticación, Tareas frontend, etc. | ⏳ Pendiente | ⚠️ Actualizar cuando lleguemos |

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
- Status codes: 200, 201, 400, 404, 500
- Nested routes: `/api/projects/:projectId/tasks`
- `router.param("projectId", validateProject)` → ejecuta middleware automáticamente cuando el param aparece en la URL — seguridad por defecto (*fail-safe defaults*)

### Mongoose / MongoDB
- MongoDB = NoSQL, documentos JSON
- Mongoose = ODM (Object Document Mapper)
- Schema = define la estructura | Modelo = conecta schema con la colección
- `required: true` (NO `require: true`)
- `Project.find({})` — los objetos JS son las queries en Mongoose
- `Project.findById(id)`
- `project.save()`, `project.deleteOne()`
- `Project.findByIdAndUpdate(id, data)`
- Normalización: guardar IDs en lugar de objetos completos
- `project.tasks.push(task._id)` → relación bidireccional
- `PopulatedDoc<ITask & Document>[]`
- `.populate("campo")` → equivalente al JOIN de SQL, trae el documento completo usando el `ref` del Schema. Recibe el nombre del CAMPO, no del modelo
- Integridad referencial: MongoDB no la garantiza automáticamente — el código debe mantenerla
- ObjectId vs String: comparar siempre con `.toString()` o `.equals()`
- OJO: borrar y recrear data de prueba en Postman cuando se cambia el Schema

### TypeScript
- `type` → tipos simples, uniones, tipos inferidos
- `interface` → objetos que extienden clases, estructuras que pueden crecer
- `as const` → propiedades readonly
- Truco values de objeto: `type T = (typeof obj)[keyof typeof obj]`
- `declare global { namespace Express { interface Request { project: IProject } } }` → extiende Request sin perder propiedades

### Express Validator
- `body()`, `param()`, `param("id").isMongoId()`
- `handlerInputErrors` — corta si hay errores
- Orden: `router.param()` → validaciones → `handlerInputErrors` → controller
- Verificar primero lo más bloqueante

### Middleware custom
- `validateProject` — verifica que el proyecto existe y lo agrega al `req`
- `router.param("projectId", validateProject)` — evita repetición, seguridad por defecto

### Promises
- `Promise.all` → dependen entre sí → falla una → catch automático
- `Promise.allSettled` → independientes → falla una → NO catch
  ```typescript
  const results = await Promise.allSettled([op1(), op2()]);
  const hasFailed = results.some(r => r.status === 'rejected');
  if (hasFailed) return res.status(500).json({ error: "Error" });
  res.send("Ok");
  ```

### CRUD completo de Proyectos (Sección 27)
```
GET    /api/projects      → getAllProjects
GET    /api/projects/:id  → getProjectById + populate("tasks")
POST   /api/projects      → createProject
PUT    /api/projects/:id  → updateProject
DELETE /api/projects/:id  → deleteProject
```

### CRUD Tareas (Sección 28 — en curso)
```
POST /api/projects/:projectId/tasks          → createTask
GET  /api/projects/:projectId/tasks          → getProjectTasks + populate("project")
GET  /api/projects/:projectId/tasks/:taskId  → getTaskById + validación project/task
```

---

## 🔒 Seguridad Web

- Mass Assignment: extraer solo los campos necesarios del body
- CORS: protege navegadores, NO protege curl/Postman/scripts
- Autorización: findById() → verificar permisos → operación
- Fail-safe defaults: `router.param()` ejecuta validación automáticamente — imposible olvidarse
- Integridad referencial: borrar via API siempre, no directo en Compass

---

## 🎯 Path de Hacking Ético — Para después del curso
```
Semana 1  →  WebGoat: docker run -d -p 8080:8080 webgoat/goat-and-wolf
Semana 2  →  OWASP Top 10: https://owasp.org/www-project-top-ten
Mes 2     →  TryHackMe.com
```

---

## ⚠️ Errores comunes a recordar
- `.env` al mismo nivel que `package.json`
- `required: true` no `require: true` en Schema
- `dotenv.config()` siempre antes de `process.env`
- `export default` → sin llaves | `export const` → con llaves
- El `return` en `res.status(404)` es obligatorio
- No pasar `req.body` directo a `findByIdAndUpdate`
- Dos `res.send()` en el mismo handler rompe la app
- Bug de Postman: guardar requests antes de cambiar de pestaña
- `Promise.allSettled` no va al catch si falla
- ObjectId vs String: usar `.toString()` para comparar
- Borrar y recrear data de prueba cuando cambia el Schema

---

## 📊 Historial de sesiones

### Sesión 29/06/2026
- Videos: 473
- Retención 24h: no aplicó (primer uso del sistema)
- Cierre: 2/2 ✅
- Retención: 3/5 | Comprensión: 5/5 | Autonomía: 5/5 ⭐
- Nota: resolvió confusión getTasks solo

### Sesión 01/07/2026
- Videos: 474, 475, 476, 477
- Retención 24h: ✅ Promise.all vs allSettled respondido correctamente
- Cierre: 4/4 ✅
- Nota: captó fail-safe defaults con router.param | detectó inconsistencia ObjectId/String en Compass solo

### Sesión 02/07/2026
- Videos: 478
- Retención 24h: ✅ router.param() — bien, faltó matiz "imposible olvidarse"
- Cierre: 1/1 ✅
- Retención: 5/5 | Comprensión: 5/5 | Autonomía: 5/5 ⭐⭐⭐
- Nota: probó empíricamente si faltaba .toString() en updateTask — investigó con test real en Postman en vez de asumir

---

## 📝 Notas del tutor
- Víctor detecta inconsistencias en la DB por su cuenta — muy buen ojo
- Conecta conceptos de seguridad con patrones de código naturalmente
- Sección 29 es territorio nuevo (React) — bajar el ritmo
- Pseudocódigo incorporado como hábito — mantenerlo

---
*Última actualización: Sesión del 01/07/2026 — Videos 473-477 completados. CRUD de Tareas casi completo.*
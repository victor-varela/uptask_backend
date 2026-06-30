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

**RETENCIÓN**
- No repasar el código antes de la pregunta de 24h
- Si no recordás algo, lo marcás — no lo buscás de inmediato
- El esfuerzo de recordar ES el aprendizaje

**COMPRENSIÓN**
- Siempre preguntarte "¿por qué?" antes de "¿cómo?"
- Antes de escribir código, decir en voz alta qué va a hacer
- Si no podés explicarlo simple, no lo entendiste todavía

**TRANSFERENCIA**
- Cuando aprendés algo nuevo, conectarlo con algo anterior
- Preguntarte "¿dónde más aplica esto?"

**VELOCIDAD**
- No quedarte más de 10 minutos trabado en algo → TODO y seguís
- El objetivo no es terminar rápido sino no quedarse paralizado

**AUTONOMÍA**
- Antes de preguntarme, intentar resolver el error solo 5 minutos
- Leer el mensaje de error completo antes de buscar ayuda
- Cuando resolvés algo solo, anotarlo — eso es evidencia de autonomía

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
Autonomía      → subiendo ✅ (cada vez resolvés más antes de preguntar)
Comprensión    → alta ✅ (preguntás el por qué, no solo el cómo)
Transferencia  → apareciendo ✅ (conectaste Covey con pseudocódigo solo)
Retención      → señal positiva ✅ (tras 2 meses recordaste el flujo completo)
```

---

## 📍 Progreso actual
- **Sección activa:** 28 — UpTask: Tareas - Modelos, rutas y controllers
- **Último video completado:** 472
- **Próximo video:** 473
- **Pregunta de retención para próxima sesión:** ¿Qué diferencia hay entre `Promise.all` y `Promise.allSettled` y cuándo usarías cada uno?
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
- Status codes: 200 (ok), 201 (creado), 400 (datos inválidos), 404 (no encontrado), 500 (error servidor)
- Nested routes: `/api/projects/:projectId/tasks` para expresar relaciones entre recursos

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
- Mongoose ignora campos no definidos en el Schema — primera línea de defensa
- Patrón de dos pasos para delete: `findById()` → verificaciones → `deleteOne()`
- Normalización: guardar IDs en lugar de objetos completos evita inconsistencias
- `project.tasks.push(task._id)` → relación bidireccional
- `PopulatedDoc<ITask & Document>[]` → type para arrays que pueden ser IDs u objetos completos

### TypeScript
- `_req` cuando el parámetro existe pero no se usa (convención)
- `import type` para importar solo tipos sin código en runtime
- `type` → tipos simples, uniones, tipos inferidos
- `interface` → objetos que extienden clases, estructuras que pueden crecer sin perder propiedades
- `as const` → hace las propiedades readonly
- Truco para obtener values de un objeto:
  ```typescript
  type TaskStatus = (typeof taskStatus)[keyof typeof taskStatus]
  ```
- `declare global { namespace Express { interface Request { project: IProject } } }`
  → extiende Request de Express sin perder sus propiedades originales
  → usa interface porque permite SUMAR propiedades sin borrar las existentes

### Express Validator
- `body()` — valida campos del body
- `param()` — valida parámetros de la URL
- `param("id").isMongoId()` — valida formato MongoDB
- `handlerInputErrors` — middleware guardián que corta si hay errores
- Orden: `validateProject` → `body()/param()` → `handlerInputErrors` → `controller`
- Verificar primero lo más bloqueante — si el proyecto no existe, nada más importa

### Middleware custom
- `validateProject` — verifica que el proyecto existe y lo agrega al `req`
- Patrón: buscar en DB → validar → asignar a `req` → `next()`
- Permite compartir datos entre middlewares via `req` sin repetir código

### Promises
- `Promise.all` → operaciones que dependen entre sí → falla una → catch automático
- `Promise.allSettled` → operaciones independientes → falla una → NO catch, revisás manualmente
  ```typescript
  const results = await Promise.allSettled([op1(), op2()]);
  const hasFailed = results.some(r => r.status === 'rejected');
  if (hasFailed) return res.status(500).json({ error: "Error al guardar" });
  res.send("Ok");
  ```

### CRUD completo de Proyectos (Sección 27)
```
GET    /api/projects      → getAllProjects   → Project.find({})
GET    /api/projects/:id  → getProjectById  → Project.findById(id)
POST   /api/projects      → createProject   → new Project(req.body) + save()
PUT    /api/projects/:id  → updateProject   → Project.findByIdAndUpdate(id, data)
DELETE /api/projects/:id  → deleteProject   → findById() + verificaciones + deleteOne()
```

### CRUD Tareas (Sección 28 — en curso)
```
POST /api/projects/:projectId/tasks → createTask → validateProject + new Task + save()
```

---

## 🔒 Seguridad Web

- Mass Assignment: no pasar `req.body` directo → extraer solo los campos necesarios
- CORS: protege navegadores, NO protege curl/Postman/scripts
- Autorización: findById() → verificar permisos → operación
- Regla de oro: la seguridad siempre en el backend

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
- Orden en router de tareas: `validateProject` ANTES de `body()`

---

## 📝 Notas del tutor
- Víctor captó Promise.all vs allSettled desde la transcripción del profe — buena autonomía
- El debate type/interface quedó cerrado con el caso real de `declare global`
- Método de pseudocódigo incorporado — aplicarlo en cada función nueva
- Covey Hábito 2 conectado con pseudocódigo — pensamiento de alto nivel
- Sección 29 es territorio nuevo (React) — bajar el ritmo y consolidar bien

---
*Última actualización: Sesión del 29/06/2026 — Videos 464-472 completados. Sistema de medición incorporado.*

---

## 📊 Historial de sesiones

### Sesión 29/06/2026
- Videos completados: 1 (473)
- Pregunta retención 24h: no aplicó — primer uso del sistema
- Preguntas cierre bien respondidas: 2/2
- Dudas bloqueantes: 0
- TODOs agregados: 0
- Retención: 3/5 (confusión en el modelo)
- Comprensión: 5/5
- Autonomía: 5/5 ⭐ — resolvió confusión getTasks solo
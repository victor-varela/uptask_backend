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
- **Sección activa:** 27 — UpTask: Proyectos - Modelos, rutas y controllers
- **Último video completado:** 459 — Agregando validación en el servidor
- **Próximo video:** 460 — Creando el Endpoint de obtener todos los proyectos
- **Videos restantes sección 27:** 460, 461, 462, 463

---

## 🗺️ Mapa del curso (secciones relevantes)

| Sección | Tema | Estado | Alineación tutor |
|---------|------|--------|-----------------|
| 26 | UpTask - Primeros pasos backend | ✅ Completa | ✅ Total |
| 27 | Proyectos - Modelos, rutas y controllers | 🔄 En curso | ✅ Total |
| 28 | Tareas - Modelos, rutas y controllers | ⏳ Pendiente | ✅ Total — mismo patrón que sección 27 |
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

### Mongoose / MongoDB
- MongoDB = NoSQL, documentos JSON (vs PostgreSQL = SQL, tablas)
- Mongoose = ODM (Object Document Mapper)
- Schema = define la estructura | Modelo = conecta schema con la colección
- `required: true` (NO `require: true`) — typo silencioso a evitar
- `Project.find()` — trae todos los documentos
- `Project.findById(id)` — trae uno por ID
- `project.save()` — guarda un documento nuevo

### TypeScript
- `_req` cuando el parámetro existe pero no se usa (convención)
- `import type` para importar solo tipos sin código en runtime

### Express Validator
- `body()` — anota errores en `req` pero no detiene el flujo
- `validationResult(req)` — lee esos errores
- `handlerInputErrors` — middleware guardián que corta si hay errores
- Orden en router: `body()` → `handlerInputErrors` → `controller`

---

## ⚠️ Errores comunes a recordar
- `.env` debe estar en la raíz del proyecto (mismo nivel que `package.json`)
- `required: true` no `require: true` en Schema de Mongoose
- `dotenv.config()` siempre antes de cualquier `process.env`
- `export default` → importar sin llaves | `export const` → importar con llaves
- No pasar req.body directo a findByIdAndUpdate 
  → extraer solo los campos necesarios para evitar inyección de campos maliciosos 
  const { projectName, clientName, description } = req.body;
await Project.findByIdAndUpdate(id, { projectName, clientName, description });

---

## 🔄 Preguntas abiertas
- *(vacío por ahora)*

---

## 📝 Notas del tutor
- Sección 27 videos 460-463 son CRUD restante — patrón repetitivo, buenos para acelerar
- Sección 28 replica todo el patrón de sección 27 pero para Tareas — va a fluir más rápido
- Sección 29 es territorio nuevo (React) — bajar el ritmo y consolidar bien
- El método de notas en código es pedagógicamente sólido — mantenerlo

---
*Última actualización: Sesión del 12/06/2026 — Video 459 completado*

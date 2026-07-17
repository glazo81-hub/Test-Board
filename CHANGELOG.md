# Changelog

Todos los cambios relevantes del proyecto deben registrarse aquí.

## 2026-07-17 — Restauración aislada de sensores LM6000 y alineación LMS100

- Se restauraron `AE-6304D` y `AE-6304E` en LM6000 Allestec y LM6000 EQP a partir de respaldos históricos locales.
- Se reintegraron esos sensores a la lógica de gas de turbina, topology y validación de arquitectura.
- Se corrigió el mapa Allestec de salidas analógicas AO1-AO8 para cubrir A/B/C/D/E, generador y sensores IR.
- Se alinearon los botones `ACK`, `SILENCE`, `RESET` de LMS100 PA con el display del timer sin cambiar lógica ni eventos.
- Se ejecutaron validaciones estáticas de JavaScript y arquitectura; no se ejecutaron pruebas con navegador ni hardware.

## 2026-07-16 — Baseline estable con Git

- Se creó y verificó una copia externa completa antes de modificar los metadatos Git.
- La carpeta `.git` vacía original se conservó en cuarentena dentro del respaldo.
- Se inicializó Git de forma segura en la rama `main`, sin configurar repositorios remotos.
- Se creó un `.gitignore` conservador para excluir archivos temporales, material de trabajo, metadatos locales y el ZIP generado.
- Se creó el baseline estable `4b6221b59623836d6c292d31e14af8bf74874dbc` con el mensaje `Baseline estable antes de nuevos cambios con Codex`.
- No se realizaron cambios funcionales en la aplicación.

## 2026-07-16 — Documentación inicial

- Se crearon `AGENTS.md`, `PROJECT_SPEC.md`, `CURRENT_STATUS.md`, `CHANGELOG.md` y `TEST_CHECKLIST.md` en la carpeta principal.
- Se documentaron la arquitectura, pantallas, navegación, almacenamiento, conexiones, comandos, pruebas y estado comprobado del proyecto.
- Se registraron incertidumbres y riesgos observados.
- No se realizaron cambios funcionales, refactorizaciones, reparaciones, cambios de diseño ni cambios de datos.

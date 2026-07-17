# Estado actual

Fecha de inspección inicial: 2026-07-16.

Actualización 2026-07-17:

- Rama de trabajo: `fix/turbine-logic-and-layout`.
- Se restauraron los sensores de gas `AE-6304D` y `AE-6304E` en LM6000 Allestec y LM6000 EQP usando implementación histórica encontrada en respaldos locales del repo GitHub del 2026-07-13.
- En Allestec, el mapa de 4-20 mA vuelve a asignar AO1-AO8 como `AE-6304A`, `AE-6304B`, `AE-6304C`, `AE-6304D`, `AE-6304E`, `AE-6313`, `AE-3029`, `AE-3030`.
- En LMS100 PA, los botones `ACK`, `SILENCE`, `RESET` se alinearon verticalmente con el display de timer sin cambiar IDs ni listeners.
- Se agregó validación estática para evitar que `AE-6304D` y `AE-6304E` desaparezcan de LM6000 Allestec o LM6000 EQP.
- Validado con `node --check outputs\hmi_visual_prototype\app.js` y `node outputs\hmi_visual_prototype\tools\validate-architecture.js`.
- No se verificó con navegador ni hardware físico en esta actualización.
- Corrección visual adicional LMS100 PA: los controles `ACK`, `RESET`, `SILENCE` y el timer CO2 se agruparon en una banda específica de LMS100 para evitar recorte/compresión. Se verificó visualmente en navegador local servido por `http://127.0.0.1:8899/` a 1920×1080, 1679×1049 y 1100×720. Captura guardada en `outputs/hmi_visual_prototype/lms100-controls-final.png`.

Clasificación basada en lectura completa de los archivos fuente ejecutables, validación estática de JavaScript/JSON y revisión de lanzadores. No se conectó hardware y no se modificó código funcional.

## FUNCIONANDO

- Git está operativo en la rama `main`. El baseline estable inicial corresponde al commit `4b6221b59623836d6c292d31e14af8bf74874dbc`.
- Los archivos `app.js`, `relay_bridge.js`, `io_bridge.js` y `hmi_bridge_manager.js` pasan `node --check`.
- `devices.json`, `device-info.json`, `s3-logic.json`, `slideshow.json` y `training-timeline.json` se parsean como JSON válido.
- Existe un punto de entrada HTML con CSS y JavaScript enlazados.
- La navegación interna está implementada para selección inicial, barra inferior y vistas específicas por proyecto.
- Están implementadas en código la simulación de dispositivos, alarmas, eventos, ACK, SILENCE, RESET, selección Virtual/Real y entrenamiento.
- La carga de dispositivos, información y lógica S3 dispone de fallback cuando falla `fetch`.
- La persistencia de layouts, mapas, preferencias seriales, modo, dibujo y contraseña está implementada con `localStorage`.
- Existen lanzadores compatibles con Windows para iniciar/detener puentes y probar Modbus RTU.
- Los servicios Node.js exponen rutas HTTP locales y manejan errores como respuestas JSON.

## PARCIALMENTE FUNCIONANDO

- `Save Project` llama al guardado de dispositivos, pero el texto de interfaz indica almacenamiento editable en una futura aplicación Electron; sin `window.eqpApp`, el flujo queda limitado a comportamiento del navegador/descarga.
- Las cargas por `fetch("./config/...")` tienen fallback, pero abrir `index.html` como `file://` puede impedir algunas cargas según el navegador. El propio código pide localhost para Web Serial, mientras el lanzador abre el archivo directamente.
- Reports, Help, Manuals, Import Drawings y varias acciones de menú navegan a pantallas existentes, pero parte de su contenido se declara explícitamente como placeholder o “ready”.
- La comunicación física está implementada, pero no fue verificada sin relay, módulos I/O, EQP, adaptadores RS485 y configuración de red/COM.
- La integración `window.eqpApp` está contemplada, pero no se encontró su implementación en el repositorio.
- El README interno está desactualizado: afirma que no hay Modbus, almacenamiento ni comunicación real, aunque el código sí los contiene.

## NO FUNCIONANDO

- La referencia inicial `assets/slideshow/tm2500_xpress_power_plant.avif` de `index.html` apunta a un archivo inexistente. `slideshow.json` puede reemplazar posteriormente la imagen, pero la referencia HTML inicial está rota.
- Relay Module-2 declara `127.0.0.1:8766`, pero no existe un proceso relay2 en `hmi_bridge_manager.js`; el administrador solo gestiona `relay1` e `io`.

## PENDIENTE

- Ejecutar una prueba visual completa en Chrome/Edge a 1920×1080.
- Verificar cada proyecto y cada ruta de la barra inferior.
- Verificar todos los controles y acciones con datos reales del navegador.
- Confirmar el comportamiento de abrir directamente por `file://` frente a servir por localhost.
- Probar Web Serial en navegador compatible.
- Probar COM12/EQP y COM16/módulo analógico con hardware.
- Probar los endpoints contra Relay Module-1 y ambos módulos I/O reales.
- Verificar perfiles S3 con la aplicación S3 externa correspondiente.
- Determinar el alcance previsto de Electron/`window.eqpApp`.
- Agregar pruebas automatizadas de interfaz; no se encontró framework ni suite de tests web.
- Revisar funcionalmente los menús que actualmente solo muestran mensajes o contenedores placeholder.

## NO MODIFICAR

- Formato y contenido de `config/devices.json`, `device-info.json`, `s3-logic.json`, mapas CSV y perfiles S3 sin autorización.
- Claves existentes de `localStorage` o su estructura.
- Direcciones IP, puertos TCP/HTTP, COM, baud rate, slave IDs y mapas Modbus sin prueba y autorización.
- Rutas/vistas, identificadores DOM, nombres de proyecto y etiquetas de dispositivos.
- Secuencias de alarmas, lógica de liberación, inhibición, ACK, SILENCE y RESET.
- Lanzadores Windows y puentes locales salvo que el cambio solicitado los incluya expresamente.
- Diseño, SVG, Canvas, posiciones y recursos visuales existentes.

## Errores y riesgos observados

- La contraseña administrativa predeterminada `admin` forma parte del prototipo actual y debe cambiarse antes de publicar el repositorio o utilizar el sistema en producción.
- El lanzador y el mensaje de Web Serial no coinciden sobre `file://` frente a localhost.
- La contraseña administrativa se guarda en `localStorage` y tiene `admin` como valor predeterminado; es apropiado tratarlo como prototipo, no como control de seguridad robusto.
- Los servicios locales permiten CORS `*`; amplía el acceso desde páginas del equipo al puente local.
- Los servicios dependen de direcciones de red fijas por defecto y timeouts de 2500 ms.
- No hay pruebas automatizadas de regresión del HMI ni `package.json` con comandos de test.
- El repositorio Git local quedó inicializado de forma segura y dispone de un baseline verificable; todavía no tiene ningún repositorio remoto configurado.

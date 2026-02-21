# La seguridad inexistente

No sé cómo arrancar bien este post, pero ¿alguna vez pensaste que no tenías privacidad o que te espiaban? Si tu respuesta fue un "sí", la mía también. Si fue un "no", entonces podés seguir siendo un mortal apático.

Hasta hace poco (8 de febrero de 2026) surgió un reporte sobre una posible filtración de código o materiales relacionados con el software espía Pegasus. Pero ¿qué es eso? Pegasus es un spyware instalado en dispositivos que ejecutan ciertas versiones de iOS y Android, desarrollado por la firma cibernética israelí NSO.

Según la propia empresa:

> "Los gobiernos autorizados usan tecnología que los ayuda a combatir el terrorismo y el crimen" ~ Brindado por NSO.

Pegasus es capaz de leer mensajes de texto, rastrear llamadas, recopilar contraseñas, rastrear la ubicación del teléfono y recopilar información de aplicaciones. Apple lanzó la versión 9.3.5 de iOS para corregir vulnerabilidades explotadas por este software.

Un grupo iraní llamado "APT IRGC" afirmó haber obtenido información interna de Pegasus. Todavía no está confirmado oficialmente si lo obtenido es auténtico o parte de una campaña de desinformación.

Luego de leer un informe de Infobae, me puse a investigar si existían más casos que atentaran contra la privacidad de cualquier persona. La verdad es que sí encontré cosas que uno nunca pensaría que existen. Entonces acá va una recopilación de lo que fui encontrando.

---

## Uso de malware gubernamental por parte del FBI y su relación con los antivirus

Desde principios de los años 2000, agencias de seguridad de Estados Unidos, en particular el FBI, desarrollaron y utilizaron software de vigilancia como herramienta de investigación criminal. A diferencia del malware tradicional, estas herramientas se despliegan bajo órdenes judiciales específicas y están dirigidas a objetivos concretos.

Uno de los primeros casos conocidos fue **Magic Lantern**, revelado públicamente en 2001. Se trataba de un keylogger desarrollado con el objetivo de capturar contraseñas ingresadas en computadoras de sospechosos, especialmente para eludir sistemas de cifrado.

Aunque nunca se confirmó oficialmente su existencia, empresas de seguridad informática reconocieron haber recibido consultas gubernamentales respecto a la detección de este software.

Posteriormente se conoció **CIPAV**, una herramienta más avanzada utilizada en múltiples investigaciones. A diferencia de Magic Lantern, no estaba diseñada principalmente para robar contraseñas, sino para identificar técnicamente un dispositivo.

Entre los datos que podía obtener:

- Dirección IP real  
- Dirección MAC  
- Sistema operativo y versión  
- Nombre del equipo  
- Procesos en ejecución  
- Proveedor de servicios de internet  

### Relación con los antivirus

No existe una prohibición general que impida a los antivirus detectar malware gubernamental. Sin embargo, en casos puntuales y bajo contextos legales específicos, se solicitó a empresas de seguridad que no clasificaran ciertas herramientas como amenazas activas para no interferir en investigaciones en curso.

Con el tiempo, la postura de la industria cambió. Actualmente, la mayoría de los antivirus modernos detectan comportamientos maliciosos independientemente de quién haya desarrollado el software, basándose en análisis heurísticos y de comportamiento.

---

## Backdoors en CPUs

En este caso hablamos de algo que se encuentra dentro del hardware de cualquier computadora: componentes integrados en el procesador que pueden funcionar incluso cuando el equipo está apagado.

Se trata de Intel ME y AMD PSP, microcontroladores independientes dentro del procesador con acceso a memoria, red y otros recursos del sistema.

No está probado que exista acceso remoto masivo por parte de agencias, pero el problema radica en que son tecnologías cerradas (closed-source). Si fueran comprometidas, podrían representar un riesgo importante.

---

## Electrónica capaz de transmitir información por radiofrecuencia sin conexión a internet

Existe algo llamado **ANT/TAO Catalog**, un catálogo filtrado de herramientas de espionaje donde se detallan dispositivos y técnicas diseñadas para espiar computadoras, servidores y equipos electrónicos incluso sin conexión a ninguna red.

Uno de los ejemplos más conocidos es **COTTONMOUTH-1**. A simple vista es un cable USB común, pero internamente contiene hardware adicional capaz de interceptar datos, inyectar comandos y transmitir información por radiofrecuencia a un receptor cercano.

No necesita WiFi, Bluetooth ni internet. Utiliza radiofrecuencia que puede mezclarse con el ruido electromagnético del entorno.

Otro caso es **SURLYSPAWN**, otro implante de hardware del mismo catálogo. No se conocen todos los detalles técnicos porque siguen clasificados, pero la idea es similar: dispositivos modificados para exfiltrar información usando canales alternativos.

Estas herramientas no están presentes en dispositivos comunes. Son costosas, requieren acceso físico previo y están dirigidas a objetivos específicos como gobiernos o infraestructura crítica. El punto no es si le pasa a cualquiera, sino que la tecnología existe.

Esto rompe la idea de que un sistema está seguro solo por estar aislado (air-gapped). Si el hardware es comprometido antes de llegar al usuario, el problema existe desde el inicio.

---

## Intercepción y personas de interés

No siempre se puede asumir que un dispositivo llega intacto a destino.

Según documentos filtrados, ciertos equipos interceptaron envíos internacionales de hardware antes de su entrega. Se abrían los paquetes, se modificaba el hardware y luego se reenviaban.

Esto se conoce como *supply chain attack*, una forma de espionaje donde el compromiso ocurre antes de que el usuario encienda el equipo por primera vez.

No se trata de interceptar paquetes al azar. Este tipo de operaciones se enfoca en objetivos concretos como gobiernos, empresas estratégicas o infraestructura crítica. Son operaciones complejas y costosas.

Ser una "persona de interés" no implica automáticamente una vigilancia extrema. Este tipo de acciones se reserva para escenarios específicos.

El punto no es pensar “me va a pasar a mí”, sino entender que la capacidad existe. Que hay escenarios donde la seguridad no se rompe con un virus, sino modificando el hardware antes de que llegue a tus manos.

---

- Este es mi primer post (y espero que no el último). Cya.
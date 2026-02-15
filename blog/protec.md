# La seguridad inexistente.

No se como arrancar bien este post, pero, ¿alguna vez pensaste que no tenias privacidad o te espiaban? Si tu respuesta fue un "si" la mia tambien, si fue un "no" entonces podes seguir siendo un mortal apatico.

Hasta hace poco (8 de febrero de 2026) surgio un reporte sobre una posible filtracion del codigo o materiales relacionados con el software espia Pegasus, pero ¿que es eso? Pegasus es un spyware instalado en dispositivos que ejecutan ciertas versiones de iOS y Android, desarrollado por la firma cibernetica israeli (😶), NSO. Todo esto segun el siguiente comentario 
> "los gobiernos autorizados tecnologia que los ayuda a combatir el terrorismo y el crimen" ~ Brindado por NSO. 

Pegasus es capaz de leer mensajes de texto, rastrear llamadas, recopilar contraseñas, rastrear la ubicacion del teléfono y recopilar informacion de las aplicaciones. Apple lanzo la version 9.3.5 de su software iOS para corregir las vulnerabilidades (pero seguro sigue ahi).

Sabiendo esto, se vuelve al principio, un grupo irani llamado "APT IRGC" afirmo haber obtenido informacion interna de Pegasus. Todavia no esta confirmado oficialmente si lo obtenido es oficial o parte de una campaña de desinformacion. Sin embargo ahi esta.

Luego de haber leido eso de un informe de infobae [(este)](https://www.infobae.com/mexico/2025/07/05/presunta-filtracion-del-software-espia-pegasus-reaviva-preocupacion-por-el-uso-estatal-de-vigilancia-digital-en-mexico/), me puse a investigar si habian mas cosas que literalmente atentabas contra la privacidad de cualquier ser humano que tenga dos pies sobre la tierra. La verdad es que si encontre, no tanto pero encontre cosas que uno como persona nunca hubiese pensado que existian y que atentan contra la privacidad. Entonces aca va una recopilacion de cosas que fui encontrando a partir de esa filtracion de datos.

## Uso de malware gubernamental por parte del FBI y su relacion con los antivirus

Desde principios de los años 2000, distintas agencias de seguridad de Estados Unidos (en particular el FBI) estuvieron desarrollado y utilizado software de vigilancia ofensiva como herramienta de investigacion criminal. A diferencia del malware criminal tradicional, estas herramientas se despliegan bajo ordenes judiciales especificas y estan dirigidas a objetivos concretos, no a la poblacion general (teoricamente hablando).

Uno de los primeros casos conocidos fue **"Magic Lantern"**, revelado publicamente en 2001. Se trataba de un keylogger desarrollado por el FBI con el objetivo de capturar contraseñas introducidas en computadoras de sospechosos, especialmente para eludir sistemas de cifrado fuerte que impedian el acceso a informacion relevante durante investigaciones criminales.

Aunque el FBI nunca confirmo oficialmente la existencia de **Magic Lantern**, diversas empresas de seguridad informatica (incluyendo [Symantec](https://www.broadcom.com/products/cybersecurity)) reconocieron publicamente haber recibido presiones legales y consultas gubernamentales respecto a la deteccion de este software.

Posteriormente se conocio la existencia de **CIPAV**, una herramienta mas avanzada utilizada por el FBI en multiples investigaciones. A diferencia de Magic Lantern, CIPAV no estaba diseñada principalmente para robar contraseñas, sino para identificar técnicamente a un dispositivo.

Entre las cosas que puede agarrar CIPAV estan:
- Direccion IP real
- Direccion MAC
- Sistema operativo y version
- Nombre del equipo
- Procesos en ejecucion
- Proveedor de servicios de internet (ISP)

### Relacion con los antivirus

Esto va para todo el post entero y es que un punto clave es que no existe una prohibicion general que impida a los antivirus detectar malware gubernamental. Sin embargo, en casos puntuales y bajo contextos legales especificos, se solicito a empresas de seguridad que no clasificaran ciertas herramientas como amenazas activas, para no interferir con investigaciones en curso.

Con el paso del tiempo, la postura de la industria cambio hacia una mayor independencia. En la actualidad, la mayoria de los antivirus modernos detectan comportamientos maliciosos, independientemente de quién haya desarrollado el software, basandose en analisis heuristico y de comportamiento.

## Backdoors en CPUs

En este caso hablaremos de algo que se encuentra dentro del hardware de cualquier dispositivo (en lo que computadoras respectan), se encuentra dentro del procesador/microprocesador que inclusive funcionan cuando la computadora esta apagada.

Se trata de Intel ME y AMD PSP, un microcontrolador independiente que se encuentra dentro del procesador. Estos tiene acceso total a la computadora (memoria, red, hardware) e inclusive funcionan cuando la computadora esta apagada.

Aunque no este probado que la NSA tenga acceso remoto a todas las computadoras y que este activadamente en masa sigue siendo un problema porque es closed-source (no hay codigo fuente visible) y si alguien los compromete pueden llegar a ser usadas en masa y ser un problema real.

## Electrónica capaz de transmitir información mediante radiofrecuencia sin conexión a Internet

Existe algo llamado "**ANT/TAO Catalog**", que basicamente es un catalogo filtrado de herramientas de espionaje de la NSA (gracias **Snowden**), donde se detallan dispositivos y tecnicas pensadas para espiar computadoras, servidores y equipos electronicos incluso cuando no estan conectados a ninguna red.

Uno de los ejemplos mas conocidos es "**COTTONMOUTH-1**". A simple vista es un cable USB comun y corriente, de los que todos tenemos tirados en un cajon. El tema es que por dentro tiene hardware extra que permite interceptar datos, inyectar comandos y transmitir informacion por radiofrecuencia a un receptor cercano. O sea, el cable no solo carga o transfiere datos, tambien habla por radio.

Y no, no necesita WiFi, no necesita Bluetooth, no necesita internet. Usa radiofrecuencia, que se camufla dentro del ruido electromagnetico normal del ambiente. Invisible para vos, para el sistema operativo y para cualquier antivirus.

Otro caso es "**SURLYSPAWN**", que es otro implante de hardware del mismo catalogo. No se conocen todos los detalles tecnicos porque siguen clasificados, pero la idea es la misma: dispositivos modificados para exfiltrar informacion usando canales alternativos, activandose solo en ciertos momentos para no levantar sospechas.

Ahora, aca es donde tenemos que ver porque tampoco es que todos los dispositivos del mundo vienen con esto. No es que tu compu random o tu cable usb comprado en el chino estan transmitiendo datos secretos a la NSA. Estas herramientas son carisimas, requieren acceso fisico previo y estan pensadas para objetivos muy especificos: gobiernos, empresas estrategicas, infraestructura critica, espionaje entre estados. Pero el punto importante no es si te pasa a vos o no, sino que existe la tecnologia.

Esto rompe completamente la idea de que un sistema esta seguro solo porque esta aislado (lo que se llama air-gapped). Si alguien puede tocar el hardware antes de que llegue a tus manos, o interceptarlo en el envio, el sistema puede nacer comprometido desde el dia uno.

## Intercepcion y personas de interes.
Ni siquiera podes confiar en que el dispositivo te llegue “limpio” a tu casa.

Segun los documentos filtrados, la NSA (a traves del equipo TAO, Tailored Access Operations) intercepto envios internacionales de hardware antes de que llegaran a donde tenian que llegar. Estamos hablando de routers, servidores, equipos de red y dispositivos criticos. Los paquetes se abrian, el hardware se modificaba, y despues se reenviaban como si nada y asi se recibia.

Esto es lo que se conoce como supply chain attack, y es probablemente una de las formas mas poderosas de espionaje, porque no importa que sistema operativo uses, ni cuantos antivirus instales, ni cuantas veces formatees. Si el hardware ya viene tocado, el problema arranca antes de que vos prendas el equipo por primera vez.

Ahora, aca tambien hay que aclarar no agarran cada paquete de amazon o mercado libre. Esto no es algo masivo ni aleatorio, mas bien este tipo de ataques se enfocan en objetivos muy concretos, como gobiernos, empresas estrategicas, proveedores de infraestructura critica o redes de alto valor. Es caro, complejo y requiere mucha coordinacion. No es algo que se haga "porque si".

Existe la idea de que si sos una "persona de interes", automaticamente no dejas de ser libre por asi decirlo, no te hackean la heladera ni nada.

Puede ser que una persona es considerada de alto interes, las agencias pueden interceptar correo, abrir paquetes o eso pero es bastante no comun.

Y no, nadie esta instalando cosas raras en microondas o heladeras de gente comun. Eso es terreno de contraespionaje extremo y nivel estados contra estados.

El punto importante no es pensar “me va a pasar a mi”, si no entender que la capacidad existe. Que hay escenarios donde la seguridad no se rompe con un virus, sino tocando el paquete antes de que llegue a tus manos.

- Este es mi primer post (y espero que no el ultimo), cya.
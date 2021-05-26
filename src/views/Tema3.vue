<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 3
      .h3 Sistemas de gestión de bases de datos
    figure.mb-5.pt-5
      img(src="@/assets/curso/img11.svg", style="max-width: 80%; margin: auto;")
    #t_3_1.pt-4
    .titulo-segundo
      .h4 3.1 Introducción
    p.mb-5 Un gestor de base de datos o SGBD es una colección de programas, cuyo objetivo es servir de interfaz entre la base de datos, el usuario y las aplicaciones. Se compone de un lenguaje de definición de datos, de un lenguaje de manipulación de datos y de un lenguaje de consulta.
    #t_3_2.pt-4
    .titulo-segundo
      .h4 3.2 Características
    p.mb-5 Proveer a los administradores las herramientas que les permitan ejecutar tareas de mantenimiento y administración de los datos; algunas de sus características son:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Control de la redundancia de datos").align-items-center
        .col-md-4
          figure
            img(src='@/assets/curso/img12.svg', style="max-width: 50%; margin: auto;")
        .col-md-8.mb-4.mb-md-0
          p Consiste en lograr una mínima cantidad de espacio de almacenamiento para almacenar los datos evitando la duplicación de la información. De esta manera, se logran ahorros en el tiempo de procesamiento de la información, se tendrán menos inconsistencias, menores costos operativos y hará el mantenimiento más fácil.
      div(titulo="Compartimiento de datos")
        .row.align-items-center
          .col-md-4
            figure
              img(src='@/assets/curso/img13.svg', style="max-width: 50%; margin: auto;")
          .col-md-8.mb-4.mb-md-0
            p Una de las principales características de las bases de datos, es que los datos pueden ser compartidos entre muchos usuarios simultáneamente, proveyendo, de esta manera, máxima eficiencia.
      div(titulo="Mantenimiento de la integridad")
        .row.align-items-center
          .col-md-4
            figure
              img(src='@/assets/curso/img14.svg', style="max-width: 50%; margin: auto;")
          .col-md-8.mb-4.mb-md-0
            p La integridad de los datos es la que garantiza la precisión o exactitud de la información contenida en una base de datos. Los datos interrelacionados deben siempre representar información correcta a los usuarios.
      div(titulo="Soporte para control de transacciones y recuperación de fallas")
        .row.align-items-center
          .col-md-4
            figure
              img(src='@/assets/curso/img15.svg', style="max-width: 50%; margin: auto;")
          .col-md-8.mb-4.mb-md-0
            p Se conoce como transacción toda operación que se haga sobre la base de datos; las transacciones deben ser controladas de manera que no alteren la integridad de la base de datos. La recuperación de fallas tiene que ver con la capacidad de un sistema DBMS de recuperar la información que se haya perdido durante una falla en el software o en el hardware.
      div(titulo="Independencia de los datos")
        .row.align-items-center
          .col-md-4
            figure
              img(src='@/assets/curso/img16.svg', style="max-width: 50%; margin: auto;")
          .col-md-8.mb-4.mb-md-0
            p En las aplicaciones basadas en archivos, el programa de aplicación debe conocer tanto la organización de los datos como las técnicas que le permiten acceder a los datos. En los sistemas DBMS los programas de aplicación no necesitan conocer la organización de los datos en el disco duro, este es totalmente independiente de ello.
      div(titulo="Seguridad")
        .row.align-items-center
          .col-md-4
            figure
              img(src='@/assets/curso/img31.svg', style="max-width: 50%; margin: auto;")
          .col-md-8.mb-4.mb-md-0
            p La disponibilidad de los datos puede ser restringida a ciertos usuarios. Según los privilegios que posea cada usuario de la base de datos, podrá acceder a mayor información que otros.
      div(titulo="Velocidad")
        .row.align-items-center
          .col-md-4
            figure
              img(src='@/assets/curso/img17.svg', style="max-width: 50%; margin: auto;")
          .col-md-8.mb-4.mb-md-0
            p Los sistemas DBMS modernos poseen altas velocidades de respuesta y proceso.
      div(titulo="Independencia del hardware")
        .row.align-items-center
          .col-md-4
            figure
              img(src='@/assets/curso/img18.svg', style="max-width: 50%; margin: auto;")
          .col-md-8.mb-4.mb-md-0
            p La mayoría de los sistemas DBMS están disponibles para ser instalados en múltiples plataformas de hardware.
    #t_3_3.pt-4
    .titulo-segundo
      .h4 3.3 MySQL
    p.mb-4 En cuanto a la definición general, MySQL es un sistema de gestión de bases de datos relacionales de código abierto (RDBMS, por sus siglas en inglés) con un modelo cliente-servidor, cuya sigla en inglés se traslada a My Structured Query Language o lenguaje de consulta estructurado.
    p.mb-5 Código abierto significa que se puede usar y modificar con libertad, es decir, cualquiera puede instalar el software. También se puede aprender y personalizar el código fuente para que se adapte mejor a las necesidades; sin embargo, la GPL (licencia pública de GNU) determina lo que se puede hacer según las condiciones. La versión con licencia comercial está disponible si se requiere de una propiedad más flexible y un soporte avanzado.
    .h5 3.3.1. Características
    p.mb-4 MySQL es un sistema de base de datos relacional, lo cual quiere decir que archiva datos en tablas separadas en lugar de guardar todos los datos en un gran archivo, esto permite tener mayor velocidad y flexibilidad. Como estas tablas están relacionadas de formas definidas, se hace posible combinar distintos datos en varias tablas y conectarlos.
    p.mb-4 Cualquier persona puede utilizar MySQL y crear modificaciones descargando el código fuente con el fin de ajustarlo a su medida y para su uso, pues es un software de código abierto y se establece el GPL (General Public License) en donde se define lo que un usuario puede realizar o no con el software. Si un usuario no se ajusta a las medidas del GPL o requiere el uso del software para aplicaciones comerciales, puede comprar una versión comercial licenciada.
    .row.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/img19.svg', style="max-width: 74%; margin: auto;")
      .col-lg-8.mt-4.mt-lg-0
        p.mb-4 Algunas de sus características más importantes son:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Permite escoger múltiples motores de almacenamiento para cada tabla.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Agrupación de transacciones, pudiendo reunirlas de forma múltiple desde varias conexiones con el fin de incrementar el número de transacciones por segundo.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Conectividad segura.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Ejecución de transacciones y uso de claves foráneas.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Presenta un amplio subconjunto del lenguaje SQL.
          li 
            .lista-ol--cuadro__vineta
              span 6
            | Replicación.
          li 
            .lista-ol--cuadro__vineta
              span 7
            | Disponible en casi todas las plataformas o sistemas.
          li 
            .lista-ol--cuadro__vineta
              span 8
            | Búsqueda e indexación de campos de texto.
          li 
            .lista-ol--cuadro__vineta
              span 9
            | Utiliza varias herramientas para portabilidad.
          li 
            .lista-ol--cuadro__vineta
              span 10
            | Tablas hash en memorias temporales.
          li 
            .lista-ol--cuadro__vineta
              span 11
            | Uso de tablas en disco b-tree para búsquedas rápidas con compresión de índice.
          li 
            .lista-ol--cuadro__vineta
              span 12
            | Ofrece un sistema de contraseñas y privilegios seguros de verificación basado en el host y tráfico de contraseñas encriptado al conectarse a un servidor.
          li 
            .lista-ol--cuadro__vineta
              span 13
            | Uso de multihilos mediante hilos de Kernel.
          li 
            .lista-ol--cuadro__vineta
              span 14
            | Soporta gran cantidad de datos, incluso con más de 50 millones de registros.
          li 
            .lista-ol--cuadro__vineta
              span 15
            | En las últimas versiones, se permiten hasta 64 índices por tablas. Cada índice puede consistir desde 1 a 16 columnas o partes de columnas. El máximo ancho de límite es de 1.000 bytes
    .h5 3.3.2. Ventajas
    p.mb-5 A continuación, se presentan algunas de las ventajas de utilizar MySQL:
    .row.mb-5
      .col-lg-6
        hr
        .row.align-items-center
          .col-12
            figure.d-flex
              img(src='@/assets/curso/img13.png', style="max-width: 30px; height: 30px;").me-4
              p.mt-1 MySQL es de uso libre y gratuito.
        hr
        .row.align-items-center
          .col-12
            figure.d-flex
              img(src='@/assets/curso/img14.png', style="max-width: 30px; height: 30px;").me-4
              p.mt-1 Software con licencia GPL.
        hr
        .row.align-items-center
          figure.d-flex
              img(src='@/assets/curso/img15.png', style="max-width: 30px; height: 30px;").me-4
              p.mt-1 Bajo costo en requerimientos para la elaboración y ejecución del programa.
        hr
        .row.align-items-center
          .col-12
            figure.d-flex
              img(src='@/assets/curso/img16.png', style="max-width: 30px; height: 30px;").me-4
              p.mt-1 No se necesita disponer de hardware o software de alto rendimiento para la ejecución del programa.
        hr
        .row.align-items-center
          .col-12
            figure.d-flex
              img(src='@/assets/curso/img17.png', style="max-width: 30px; height: 30px;").me-4
              p.mt-1 Velocidad al realizar las operaciones y buen rendimiento.
        hr.d-none
      .col-lg-6
        hr
        .row.align-items-center
          .col-12
            figure.d-flex
              img(src='@/assets/curso/img18.png', style="max-width: 30px; height: 30px;").me-4
              p.mt-1 Facilidad de instalación y configuración.
        hr
        .row.align-items-center
          .col-12
            figure.d-flex
              img(src='@/assets/curso/img19.png', style="max-width: 30px; height: 30px;").me-4
              p.mt-1 Soporte en casi el 100% de los sistemas operativos actuales.
        hr
        .row.align-items-center
          .col-12
            figure.d-flex
              img(src='@/assets/curso/img20.png', style="max-width: 30px; height: 30px;").me-4
              p.mt-1 Entorno con seguridad y encriptación.
        hr
        .row.align-items-center
          .col-12
            figure.d-flex
              img(src='@/assets/curso/img21.png', style="max-width: 30px; height: 30px;").me-4
              p.mt-1 Baja probabilidad de corrupción de datos.
        hr
    h5 3.3.3. Modelo cliente servidor
    p.mb-4 La arquitectura cliente servidor tiene dos partes claramente diferenciadas, por un lado, la parte del servidor y por otro de cliente o grupo de clientes donde lo habitual es que un servidor sea una máquina bastante potente con un hardware y software específicos que actúan como depósito de datos y funcione a manera de un sistema gestor de base de datos o aplicaciones.
    p.mb-4 En esta arquitectura los clientes suelen ser estaciones de trabajo que solicitan varios servicios al servidor, mientras que un servidor es una máquina que actúa como depósito de datos y funciona como un sistema gestor de base de datos, este se encarga de dar la respuesta demandada por el cliente.
    p.mb-5 Para entender este modelo se nombrarán y definirán algunos conceptos básicos que lo conforman.
    .row.justify-content-center
      .col-11
        .row.align-items-center.mb-5
          .col-3.col-lg-2
            figure
              img(src='@/assets/curso/img20.svg', style="max-width: 80%; margin: auto;")
          .col-9.col-lg-10
            p #[b Red]
            p Conjunto de clientes, servidores y base de datos unidos de una manera física o no física en el que existen protocolos de transmisión de información establecidos.
        .row.align-items-center.mb-5
          .col-3.col-lg-2
            figure
              img(src='@/assets/curso/img21.svg', style="max-width: 80%; margin: auto;")
          .col-9.col-lg-10
            p #[b Cliente]
            p Este concepto hace referencia a un demandante de servicios, puede ser un ordenador como también una aplicación informática, la cual requiere información proveniente de la red para funcionar.
        .row.align-items-center.mb-5
          .col-3.col-lg-2
            figure
              img(src='@/assets/curso/img22.svg', style="max-width: 80%; margin: auto;")
          .col-9.col-lg-10
            p #[b Servidor]
            p Es un proveedor de servicios y este a su vez puede ser un ordenador o una aplicación informática la cual envía información a los demás agentes de la red.
        .row.align-items-center.mb-5
          .col-3.col-lg-2
            figure
              img(src='@/assets/curso/img23.svg', style="max-width: 80%; margin: auto;")
          .col-9.col-lg-10
            p #[b Protocolo]
            p Conjunto de normas o reglas y pasos establecidos de manera clara y concreta sobre el flujo de información en una red estructurada.
    .row.justify-content-center
      .col-10
        figure
          img(src='@/assets/curso/img22.png', style="max-width: 100%; margin: auto;")
        figcaption Modelo cliente servidor

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>

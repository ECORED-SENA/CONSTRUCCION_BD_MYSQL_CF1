<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Modelos de datos
    figure.mb-5
      img(src="@/assets/curso/img5.svg", style="max-width: 85%; margin: auto;")
    p.mb-4 Un modelo de datos es un conjunto de herramientas conceptuales para la descripción de los datos y las relaciones entre ellos, su semántica y las restricciones de consistencia; está compuesto por un conjunto de conceptos, reglas y convenciones que permiten describir los datos.
    p.mb-5 Por la orientación del presente programa de formación, se enfoca el estudio hacia el modelo relacional pero se recomienda la lectura de otros modelos como:
    .row.mb-5.align-items-start
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.text-white--hover.p-4
          .row.justify-content-center
            .col-7
              figure
                img(src='@/assets/curso/img6.svg', alt='Texto que describa la imagen')
        .h5.mt-4.text-center Modelo jerárquico
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4
          .row.justify-content-center
            .col-7
              figure
                img(src='@/assets/curso/img7.svg', alt='Texto que describa la imagen')
        .h5.mt-4.text-center Modelo de red
      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-contenido.p-4
          .row.justify-content-center
            .col-7
              figure
                img(src='@/assets/curso/img8.svg', alt='Texto que describa la imagen')
        .h5.mt-4.text-center Modelo orientado a objetos
      .col-sm-6.col-lg-3
        .tarjeta--boton.color-acento-botones.p-4
          .row.justify-content-center
            .col-7
              figure
                img(src='@/assets/curso/img9.svg', alt='Texto que describa la imagen')
        .h5.mt-4.text-center Modelo orientado a documentos
    p.mb-5 Este modelo basado en tablas, gira en torno al concepto de relación, un término bien definido en matemáticas y que aquí se utiliza como sinónimo de tabla. Para formular las relaciones se utiliza álgebra relacional, con cuya ayuda puede obtenerse la información de estas relaciones; este es el principio que fundamenta el lenguaje SQL.
    .tabla-a.mb-5
      table
        caption Tabla. Modelo basado en tablas
        thead
          tr
            th.table1 idCarro
            th.table1 Marca
            th.table1 Número_placa
            th.table1 Número_chasis
            th.table1 idDueño
        tbody
          tr
            td.table2 1
            td.table2 Mazda
            td.table2 GPQ 230
            td.table2 GHFD234567G
            td.table2 1
          tr
            td.table3 2
            td.table3 Chevrolet
            td.table3 GPL 432
            td.table3 HYJH12344H
            td.table3 2
          tr
            td.table2 3
            td.table2 Renault
            td.table2 GNU 654
            td.table2 G234578YTR2
            td.table2 3
          tr
            td.table3 4
            td.table3 Daewoo
            td.table3 LTG 345
            td.table3 K28698YTL2
            td.table3 4
    p.mb-5 Este modelo es solamente un método que se aprovecha para diseñar los esquemas que, posteriormente, se deben implementar en la base de datos. Este modelo se representa a través de diagramas y está formado por varios elementos que se analizarán a continuación.
    .row.justify-content-center.mb-4
      .col-lg-5
        .cajon.color-secundario.p-4.mb-4
          .h5 Entidad
          p Cada entidad representa cosas y objetos ya sean reales o abstractos y que se diferencian entre sí. En un diagrama las entidades se representan con rectángulos.
        .cajon.color-acento-botones.p-4.mb-4
          .h5 Atributos
          p Definen las características de las entidades, son las propiedades de cada una. Cada entidad contiene distintos atributos que dan información sobre esta entidad, estos atributos pueden ser de distintos tipos (numéricos, texto, fecha...) en cada una de las columnas de una tabla. En un diagrama los atributos se representan con círculos que descienden de la entidad.
      .col-lg-5
        figure
          img(src='@/assets/curso/img29.svg', style="max-width: 100%; margin: auto;")
        figcaption Atributos
    hr.mb-5
    .row.justify-content-center.mb-4
      .col-5.d-flex
        .cajon.color-secundario1.p-4.mb-4
          .h5 Tupla
          p Son elementos formados por una fila de una tabla. Cada fila de la entidad estaría compuesta por los atributos de la entidad correspondiente.
      .col-5
        .cajon.color-secundario2.p-4.mb-4
          .h5 Relación
          p Con una relación se establece qué tipo de dependencia se debe dar entre entidades, es decir, permite decir que ciertas entidades comparten ciertos atributos de manera necesaria.
    .row.mb-5.justify-content-center
      .col-10
        figure
          img(src='@/assets/curso/img30.svg', style="max-width: 100%; margin: auto;")
        figcaption Relación
    hr.mb-5
    h4 Tipos de relación
    p.mb-5 #[b Según cardinalidad.] La cardinalidad se representa en un diagrama ER como una etiqueta que se ubica en ambos extremos de la línea de relación de las entidades y que puede contener diversos valores entre los que destacan comúnmente el 1 y el *, obteniendo los siguientes tipos:
    SlyderC.mb-5(:datos="datosSlyder")
    hr.mb-5
    .row.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/img10.svg', style="max-width: 80%; margin: auto;")
      .col-lg-8.mt-4.mt-lg-0
        p.mb-4 Para el diseño de las bases de datos se pueden usar tres modelos que son los más populares y utilizados los cuales permitirán entender los requerimientos y trasladarlos a un modelo relacional que facilite, posteriormente, el almacenar los datos requeridos.
        p Complementar la información visualizando el siguiente video:
        a.anexo.mt-4.mb-lg-0(href="https://www.youtube.com/watch?v=-tuDXYWn3fQ" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Video.] HTML Rules (2019, septiembre 21). Diseño de bases de datos relacionales.
    #t_2_1.pt-5
    .titulo-segundo
      .h4 2.1	Modelos de datos conceptual
    p.mb-4 Representa el modelo de datos de forma independiente del DBMS (sistema de gestión de bases de datos) que se utilizará, usa una representación gráfica para representar el diseño donde los rectángulos representan entidades, los rombos relaciones y los óvalos propiedades o atributos.
    .row.mb-5.justify-content-center
      .col-lg-10
        figure
          img(src='@/assets/curso/img28.svg', style="max-width: 100%; margin: auto;")
        figcaption Modelo de datos de forma independiente
    #t_2_2.pt-4
    .titulo-segundo
      .h4 2.2 Modelo de datos lógico
    p.mb-5 Este modelo no es específico de un motor o base de datos que describe aspectos relacionados con las necesidades de una organización para recopilar datos y las relaciones, entre estos aspectos; un modelo lógico contiene representaciones de entidades, atributos y relaciones.
    .row.mb-5.justify-content-center
      .col-lg-6
        figure
          img(src='@/assets/curso/img26.svg', style="max-width: 100%; margin: auto;")
        figcaption Modelo de datos lógico
    #t_2_3.pt-4
    .titulo-segundo
      .h4 2.3	Modelo de datos físico
    p.mb-5 El paso de un modelo lógico a uno físico requiere de un profundo entendimiento del manejador de bases de datos que se desea emplear, incluyendo características como:
    .row
      .col-lg-6
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Conocimiento a fondo de los tipos de objetos (elementos) soportados.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Detalles acerca del indexamiento, integridad referencial, restricciones, tipos de datos, etc.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Detalles y variaciones de las versiones.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Parámetros de configuración.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | #[i Data Definition Language (DDL)].
      .col-lg-6.mt-4.mt-lg-0
        figure
          img(src='@/assets/curso/img27.svg', style="max-width: 100%;")
        figcaption Modelos de datos físico

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        texto:
          '<b>Relación 1 a 1.</b> La relación uno a uno define que un único registro de la tabla puede estar relacionado con un único registro de la tabla relacionada.',
        imagen: require('@/assets/curso/img24.svg'),
        leyendaImagen: 'Relación 1 a 1',
      },
      {
        texto:
          '<b>Relación 1 a *.</b> La relación de uno a varios define que un registro dado de una tabla auxiliar o secundaria solo puede estar vinculado con un único registro de la tabla principal con la que está relacionada.',
        imagen: require('@/assets/curso/img25.svg'),
        leyendaImagen: 'Relación 1 a *',
      },
      {
        texto:
          '<b>Relación * a *.</b> La relación de varios a varios define que un registro de una tabla puede estar relacionado con varios registros de la tabla relacionada y viceversa.',
        imagen: require('@/assets/curso/img25.svg'),
        leyendaImagen: 'Relación * a *',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>

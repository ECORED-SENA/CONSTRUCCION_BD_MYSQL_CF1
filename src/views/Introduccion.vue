<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    figure.mb-5
      img(src="@/assets/curso/img1.svg", style="max-width: 50%; margin: auto;")
    p En este módulo se estudiarán los principios y conocimientos generales de las bases de datos relacionales, enfatizando en el motor de MySQL como la herramienta seleccionada para el desarrollo del programa de formación, en este módulo se incluye el estudio de los diferentes modelos para el diseño de las bases de datos, así como las herramientas utilizadas para este propósito, y finaliza con la introducción y el estudio inicial del lenguaje estructurado de consulta SQL.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>

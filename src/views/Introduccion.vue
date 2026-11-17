<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p El desarrollo de estrategias de mercadeo digital requiere transformar los objetivos de una organización en decisiones ordenadas que orienten el uso de medios, recursos y acciones. La estrategia establece esa dirección general al relacionar los propósitos del negocio con los públicos, los canales disponibles y las capacidades de la organización. A partir de esta base, las tácticas permiten concretar formas de actuación acordes con los resultados esperados y priorizar alternativas pertinentes.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt=''  style="max-width: 500px").m-auto
        .col-xl
          p La planificación y ejecución convierten las decisiones tácticas en acciones organizadas, con actividades, recursos, responsables, tiempos y lineamientos definidos. Esta organización facilita la coordinación entre las personas involucradas, reduce la improvisación y permite anticipar necesidades durante la implementación. Asimismo, el seguimiento operativo contribuye a identificar avances, dificultades o ajustes requeridos para mantener la ejecución alineada con lo previsto.
          .caja-1(data-aos="fade-left")
            p.mb-0 De manera transversal, la comunicación digital acompaña todo el proceso mediante mensajes, contenidos y respuestas coherentes con los objetivos, la propuesta de valor y las características de cada medio. La articulación entre estrategia, tácticas, planificación, ejecución y comunicación permite aprovechar mejor los recursos disponibles, mantener una orientación común y desarrollar iniciativas digitales consistentes con las necesidades del negocio y de sus públicos.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

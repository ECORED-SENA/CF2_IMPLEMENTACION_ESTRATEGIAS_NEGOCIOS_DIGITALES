<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p La síntesis integra los conceptos principales desarrollados en el componente formativo:
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="La planeación y ejecución de estrategias digitales articulan el mercadeo, las tácticas, la organización de acciones y la comunicación digital. La estrategia de mercadeo relaciona los objetivos con los fundamentos del e-marketing y establece una estructura que integra las acciones digitales. Las tácticas concretan la estrategia mediante formas de actuación que se seleccionan y priorizan según los objetivos de campaña. La planificación organiza las actividades, los recursos, los responsables y los tiempos, mientras que la ejecución requiere guías, lineamientos y seguimiento operativo. La comunicación define el propósito y enfoque de los mensajes, mantiene la identidad y coherencia comunicativa y adapta el contenido al medio digital, conforme a los lineamientos de comunicación comercial.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

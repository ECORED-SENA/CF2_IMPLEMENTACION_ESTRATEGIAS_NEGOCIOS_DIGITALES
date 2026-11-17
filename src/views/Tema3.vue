<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Planificación y ejecución de acciones digitales
      .caja-5(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-5_p
            p.mb-0 La planificación de acciones digitales permite convertir las tácticas definidas en actividades concretas, organizadas y ejecutables. Este proceso establece qué debe realizarse, qué recursos se requieren, quiénes participan, cuándo se desarrollará cada actividad y bajo qué lineamientos deberá ejecutarse, favoreciendo la coordinación y la coherencia entre las acciones previstas.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img1.png', alt='' style="width: 500px").m-auto
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Definición de acciones digitales	
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p Una acción digital es una actividad concreta que se ejecuta mediante uno o varios recursos tecnológicos para materializar una táctica. Su formulación debe permitir identificar qué se realizará, asignar responsabilidades, establecer un periodo de ejecución y comprobar posteriormente su cumplimiento, manteniendo relación con el resultado esperado.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre estrategia, táctica y acción
      p.mb-5 Las acciones representan el nivel concreto de ejecución dentro de la planificación digital. Mientras la estrategia establece una orientación general y la táctica define una forma específica de actuación, la acción permite materializar esas decisiones mediante una actividad que puede desarrollarse, asignarse y verificarse. La relación entre estos niveles puede expresarse mediante la siguiente secuencia:
      .row.justify-content-center.mb-5
        .col-xl-6
          .caja-1.color-2(data-aos="zoom-in")
            h5.mb-0.text-center Estrategia → táctica → acción → resultado esperado
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img34.svg', alt='' style="width: 85px").m-auto
            .col-xl
              p.mb-0 Esta relación puede aplicarse a una situación orientada al contacto con clientes potenciales:
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] la estrategia consiste en fortalecer el contacto digital con clientes potenciales; la táctica busca facilitar mecanismos para solicitar información, y la acción corresponde a implementar un formulario simplificado para solicitudes comerciales. En este caso, la actividad puede ejecutarse, asignarse y comprobarse.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características de una acción digital
      p.mb-5 Para facilitar su ejecución y seguimiento, una acción digital debe formularse con suficiente precisión para diferenciarse de la estrategia o la táctica, relacionarse con un propósito y permitir su verificación. Una acción adecuada reúne las siguientes características:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Específica
                  p.mb-0.text-center Debe expresar con claridad qué actividad se realizará, evitando formulaciones demasiado amplias que dificulten identificar el trabajo concreto.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Relacionada con un propósito
                  p.mb-0.text-center Debe contribuir a una táctica y, por extensión, a un resultado determinado dentro de la estrategia.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Viable
                  p.mb-0.text-center Su desarrollo debe corresponder con los recursos y las capacidades disponibles para llevarla a cabo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Asignable
                  p.mb-0.text-center Debe permitir establecer quién será responsable de realizar la actividad o participar en su ejecución.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Temporal
                  p.mb-0.text-center Debe ubicarse dentro de un plazo o periodo que permita organizar su desarrollo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Verificable
                  p.mb-0.text-center Debe permitir comprobar posteriormente si la actividad fue ejecutada de acuerdo con lo previsto.
      p.mb-5 La precisión en la formulación permite convertir una intención general en una actividad verificable:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img11.png')})` }")
        .bloque-texto-g__texto.p-4
          p #[b Ejemplo aplicado:] la expresión «mejorar las redes sociales» resulta demasiado amplia para considerarse una acción concreta. Una formulación más precisa sería: «actualizar la información comercial publicada en los perfiles digitales seleccionados durante la primera semana de ejecución». Esta redacción permite identificar qué debe hacerse y comprobar posteriormente su cumplimiento.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Formulación de acciones digitales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1.ajuste-1(data-aos="fade-right")
            p La formulación de una acción debe precisar su propósito, participantes, recursos, momento de ejecución y forma de verificación. Aunque estos elementos no siempre aparezcan en el nombre de la actividad, deben quedar definidos durante la planificación. Para concretar una acción digital, pueden plantearse las siguientes preguntas:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué se realizará?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Para qué se realizará?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Dónde se desarrollará?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Quién participará?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué recursos serán necesarios?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Cuándo debe ejecutarse?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Cómo se comprobará su realización?
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img12.png', alt='' style="max-width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img26.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Una estructura básica permite expresar la acción de manera concreta:
      .row.justify-content-center.mb-5
        .col-xl-6
          .caja-1.color-2(data-aos="zoom-in")
            h5.mb-0.text-center Verbo de acción + actividad concreta + medio o elemento relacionado
      p.mb-5 Las acciones pueden formularse mediante expresiones concretas que identifiquen la actividad y el elemento relacionado:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img13.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Elaborar contenidos informativos
              p.mb-0.text-center Elaborar contenidos informativos para el sitio web.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img14.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Configurar mecanismos de atención
              p.mb-0.text-center Configurar mecanismos de atención mediante mensajería.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img15.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Actualizar información comercial
              p.mb-0.text-center Actualizar la información comercial de los productos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img16.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Programar comunicaciones
              p.mb-0.text-center Programar comunicaciones para clientes registrados.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img17.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Organizar publicaciones
              p.mb-0.text-center Organizar publicaciones relacionadas con una campaña.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t3/img18.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Implementar un formulario
              p.mb-0.text-center Implementar un formulario para solicitudes comerciales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de acciones digitales
      p.mb-5 Las acciones digitales cumplen distintas funciones dentro de una táctica. Identificar su función principal facilita organizar las actividades, distribuir los esfuerzos y mantener relación con los propósitos establecidos. Según su finalidad, las acciones pueden clasificarse de la siguiente manera:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img19.png", alt="" style="width: 250px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Acciones informativas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Proporcionan datos sobre productos, servicios, procesos o beneficios.
            .row(titulo="Acciones promocionales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Buscan dar visibilidad a una oferta o incentivar una respuesta.
            .row(titulo="Acciones de interacción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilitan conversaciones, consultas o formas de participación.
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Acciones comerciales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Apoyan procesos relacionados con solicitudes, compras, reservas o contrataciones.
            .row(titulo="Acciones de seguimiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten mantener contacto con personas que previamente han interactuado con la organización.
            .row(titulo="Acciones de actualización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Contribuyen a que la información disponible permanezca vigente y mantenga coherencia con las condiciones actuales.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img20.png", alt="" style="width: 250px").m-auto
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Organización de actividades y recursos	
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img21.png')})` }")
        .bloque-texto-g__texto.p-4
          p Después de definir las acciones digitales, es necesario organizarlas y determinar los recursos requeridos para desarrollarlas. La planificación permite establecer una secuencia lógica, reconocer dependencias entre tareas, anticipar necesidades y distribuir las capacidades disponibles, de manera que las actividades puedan ejecutarse en condiciones acordes con los resultados esperados.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Organización de las actividades
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Las acciones pueden depender unas de otras y requerir varias tareas antes de completarse. Identificar estas relaciones permite ordenar la ejecución, reconocer actividades simultáneas o dependientes y establecer tiempos más realistas. Una actividad puede desarrollarse mediante la siguiente secuencia:
          .caja-1.color-2(data-aos="fade-right")
            h5.mb-0.text-center Preparación → elaboración → revisión → aprobación → publicación
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img22.png', alt='' style="max-width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img26.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Las actividades pueden organizarse mediante diferentes criterios, según las necesidades de la planificación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img23.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Prioridad
                  p.mb-0 Permite ordenar las actividades según la importancia que tienen para el desarrollo de las acciones y los resultados esperados.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img24.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Fecha de ejecución
                  p.mb-0 Establece el momento previsto para desarrollar cada actividad y facilita su organización dentro del periodo disponible.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img25.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Objetivo
                  p.mb-0 Agrupa las actividades de acuerdo con el objetivo al cual contribuyen dentro de la planificación establecida.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img26.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Medio digital
                  p.mb-0 Permite organizar las actividades según el medio digital en el que se desarrollarán o utilizarán.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img27.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Tipo de contenido
                  p.mb-0 Clasifica las actividades según las características del contenido que debe prepararse, utilizarse o gestionarse durante su ejecución.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img28.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Responsable
                  p.mb-0 Permite identificar las actividades asignadas a las personas que participan en su preparación, desarrollo o seguimiento.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img29.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Dependencia de otras tareas
                  p.mb-0 Ayuda a reconocer qué actividades requieren la finalización previa de otras tareas antes de poder ejecutarse.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img30.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Recursos necesarios
                  p.mb-0 Permite organizar las actividades considerando los elementos que deben estar disponibles para desarrollar cada una de ellas.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La dependencia entre tareas debe considerarse antes de establecer las fechas de ejecución:
          .caja-1.color-3(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] antes de publicar determinada información, puede ser necesario elaborarla, revisarla, aprobarla y adaptarla al medio en el que será utilizada. Por ello, una publicación no debería programarse antes de finalizar la elaboración y aprobación del contenido.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img31.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Identificación de recursos
      p.mb-5 Los recursos son los elementos necesarios para desarrollar las acciones digitales. Identificarlos previamente permite anticipar necesidades y comprobar si existen las condiciones para ejecutar cada actividad. Estos recursos pueden agruparse de la siguiente manera:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img32.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img33.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Recursos humanos
                  p.mb-0.text-center Personas encargadas de crear, revisar, publicar, administrar o hacer seguimiento a las actividades.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img34.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Recursos tecnológicos
                  p.mb-0.text-center Computadores, dispositivos, plataformas, sistemas, aplicaciones y servicios digitales necesarios para ejecutar las acciones.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img35.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Recursos económicos
                  p.mb-0.text-center Presupuesto destinado a herramientas, servicios, producción o promoción de las actividades planificadas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img36.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Recursos informativos
                  p.mb-0.text-center Imágenes, textos, datos, información técnica y documentos necesarios para elaborar los contenidos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img37.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Tiempo
                  p.mb-0.text-center Disponibilidad requerida para preparar, ejecutar y revisar las actividades previstas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre actividades y recursos
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 No todas las actividades requieren los mismos recursos. Relacionar cada acción con los elementos necesarios permite anticipar condiciones de ejecución y distribuir mejor las capacidades disponibles. Esta correspondencia puede identificarse comparando las acciones con sus principales recursos:
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 8.
            span Relación entre acciones y recursos principales
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Acción
                  th.texto-left Recursos principales
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Elaborar contenido informativo
                  td.texto-left Información, redacción, imágenes y tiempo
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Configurar un formulario
                  td.texto-left Plataforma, conocimientos técnicos y revisión
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Enviar comunicaciones digitales
                  td.texto-left Base autorizada, plataforma y contenido
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Publicar material audiovisual
                  td.texto-left Archivo audiovisual, plataforma y responsable
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Atender solicitudes digitales
                  td.texto-left Personal, canal de atención y tiempo de respuesta
      p.mb-5 Esta relación facilita anticipar necesidades y distribuir las capacidades disponibles de acuerdo con las características de cada actividad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Priorización de recursos
      p.mb-5 Cuando los recursos son limitados, deben priorizarse las actividades con mayor importancia para los resultados esperados. Esta decisión facilita concentrar esfuerzos y evitar conflictos por el uso simultáneo de un mismo recurso. La distribución puede organizarse mediante la siguiente secuencia:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Acciones prioritarias
                p.mb-0 Se identifican primero las actividades que tienen mayor importancia para los resultados esperados y que requieren atención preferente durante la ejecución.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img38.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img39.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Recursos esenciales
                p.mb-0 Se asignan los recursos indispensables para desarrollar las acciones prioritarias, considerando su disponibilidad y las necesidades específicas de cada actividad.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Acciones complementarias
                p.mb-0 Una vez atendidas las necesidades prioritarias, los recursos disponibles pueden distribuirse entre actividades que complementan las acciones principales.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img40.png', alt='' style="width: 300px").m-auto
      .row.align-items-center.mb-0
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img34.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 También debe comprobarse si un mismo recurso se encuentra asignado simultáneamente a diferentes tareas, ya que esta situación puede generar retrasos o dificultades operativas.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Responsables y tiempos de ejecución	
      .caja-5(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-5_p
            p.mb-0 La asignación de responsables y la definición de tiempos permiten organizar la ejecución de las acciones digitales, distribuir funciones y establecer plazos realistas. Esta planificación contribuye a evitar duplicidades, retrasos y sobrecargas, además de facilitar la coordinación entre quienes elaboran, revisan, aprueban, publican y realizan seguimiento a las actividades.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img41.png', alt='' style="width: 500px").m-auto
      p.mb-5 La distribución de responsabilidades y la organización temporal de las acciones digitales se desarrollan mediante el siguiente video:
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. “Responsables y tiempos de ejecución”
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Guías y lineamientos de ejecución
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img42.png')})` }")
        .bloque-texto-g__texto.p-4
          p Los lineamientos de ejecución establecen criterios comunes para desarrollar las acciones digitales y mantener coherencia cuando participan diferentes personas. Mediante orientaciones sobre procedimientos, revisiones y condiciones de cumplimiento, permiten reducir interpretaciones distintas, prevenir errores y facilitar que las actividades se desarrollen de acuerdo con lo previsto.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Finalidad de los lineamientos
      p.mb-5 Los lineamientos orientan la ejecución mediante criterios compartidos que favorecen la uniformidad, la coordinación y la reducción de improvisaciones, especialmente cuando participan varias personas. Durante la ejecución, pueden cumplir las siguientes funciones:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img43.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img44.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Mantener uniformidad
                  p.mb-0.text-center Favorecen la aplicación de criterios comunes cuando distintas personas participan en el desarrollo de las acciones digitales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img45.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Evitar errores recurrentes
                  p.mb-0.text-center Permiten establecer orientaciones que ayuden a prevenir dificultades identificadas previamente durante la ejecución de las actividades.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img46.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Facilitar la coordinación
                  p.mb-0.text-center Proporcionan referencias compartidas que permiten organizar mejor la participación de las personas involucradas en una actividad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img47.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Definir criterios mínimos
                  p.mb-0.text-center Establecen las condiciones básicas que deben cumplirse antes de considerar que una actividad ha sido desarrollada adecuadamente.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img48.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Orientar a nuevos responsables
                  p.mb-0.text-center Facilitan la incorporación de personas que deben asumir actividades al proporcionar criterios claros sobre la forma de ejecutarlas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img49.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Reducir improvisaciones
                  p.mb-0.text-center Permiten desarrollar las tareas a partir de orientaciones previamente definidas y disminuir decisiones tomadas únicamente durante la ejecución.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img50.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Facilitar revisiones
                  p.mb-0.text-center Proporcionan criterios que pueden utilizarse para comprobar si una actividad cumple las condiciones previstas antes de finalizarla.
      p.mb-5 Una guía puede reunir distintos requisitos necesarios para desarrollar y revisar una actividad:
      .caja-5(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-5_p
            p.mb-0 #[b Ejemplo aplicado:] una guía para la publicación de contenidos puede establecer requisitos relacionados con el formato, la revisión, el mensaje, los enlaces, los derechos de uso y la aprobación.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img51.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos de una guía de ejecución
      p.mb-5 Una guía de ejecución reúne la información necesaria para orientar una actividad y comprobar su cumplimiento. Su nivel de detalle depende de la complejidad de la tarea. Entre los elementos que puede incorporar se encuentran:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img52.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Objetivo de la actividad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Explica para qué se realiza la actividad y permite relacionar su ejecución con el propósito establecido.
            .row(titulo="Responsable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define quién debe ejecutar la actividad y facilita la identificación de la persona encargada de su desarrollo.
            .row(titulo="Recursos requeridos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifica las herramientas, la información y demás elementos necesarios para desarrollar la actividad.
            .row(titulo="Procedimiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Describe los pasos principales que deben seguirse para realizar la tarea de acuerdo con lo previsto.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Criterios de revisión").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece los aspectos que deben comprobarse antes de considerar que la actividad cumple las condiciones requeridas.
            .row(titulo="Resultado esperado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Indica qué debe obtenerse al finalizar la actividad y proporciona una referencia para comprobar su cumplimiento.
            .row(titulo="Registro").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determina cómo se documentará la ejecución cuando resulte necesario dejar constancia de la actividad realizada.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img53.png", alt="" style="width: 250px").m-auto
      p.mb-5 Para actividades sencillas, una lista breve de verificación puede resultar suficiente para orientar la ejecución y comprobar las condiciones necesarias.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Lineamientos de calidad
      .bg-1
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              p Antes de ejecutar o publicar una acción digital, resulta conveniente comprobar determinados elementos relacionados con la información, el mensaje, el formato y las condiciones de funcionamiento. Esta revisión previa permite reducir errores que podrían afectar la experiencia del usuario o la imagen de la organización. La revisión puede considerar los siguientes criterios de calidad:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Claridad de la información.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Coherencia del mensaje.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Funcionamiento de los enlaces.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Legibilidad.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Adecuación del formato.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Corrección de los datos comerciales.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Vigencia de la información.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Correcta visualización.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Cumplimiento de requisitos internos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aplicación de criterios legales, cuando corresponda.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t3/img54.png', alt='' style="max-width: 500px").m-auto
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estandarización sin rigidez
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img55.png')})` }")
            .bloque-texto-g__texto.p-4
              p Los lineamientos deben mantener criterios comunes sin hacer rígida la ejecución, permitiendo ajustes cuando cambien los medios, procedimientos, herramientas o necesidades de la organización. Por ello, una guía debe revisarse cuando se presentan cambios que afectan su utilidad o pertinencia:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100.color-3
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t3/img56.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Cambio del medio utilizado
              p.mb-0.text-center La guía puede requerir ajustes cuando la actividad comienza a desarrollarse mediante un medio diferente al previsto inicialmente.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100.color-3
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t3/img57.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Modificación de un procedimiento
              p.mb-0.text-center Los criterios deben actualizarse cuando cambia la forma establecida para desarrollar una actividad.
        .col-xl-4.col-md-9(data-aos="zoom-in")
          .caja-3.h-100.color-3
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t3/img58.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Incorporación de una nueva herramienta
              p.mb-0.text-center La inclusión de nuevas herramientas puede requerir ajustes en los procedimientos o en las condiciones de ejecución.
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100.color-3
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t3/img59.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Identificación de errores recurrentes
              p.mb-0.text-center La repetición de determinadas dificultades puede indicar la necesidad de precisar o actualizar los lineamientos existentes.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100.color-3
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t3/img60.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Aparición de nuevos requisitos
              p.mb-0.text-center La guía debe ajustarse cuando surgen condiciones adicionales que deben cumplirse durante la ejecución.
        .col-xl-4.col-md-9(data-aos="zoom-in")
          .caja-3.h-100.color-3
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t3/img61.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Cambio en las necesidades actuales
              p.mb-0.text-center Los lineamientos requieren revisión cuando las actividades dejan de responder adecuadamente a las necesidades existentes.
      p.mb-0 Las guías deben funcionar como instrumentos prácticos que apoyen la ejecución, mantengan criterios comunes y permitan ajustes cuando las condiciones lo requieran.
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Seguimiento operativo de las acciones
      p.mb-5 El seguimiento operativo permite comprobar si las acciones avanzan según lo planificado mientras están en ejecución, sin abordar todavía una evaluación profunda de sus resultados. Durante este proceso pueden revisarse los siguientes aspectos:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img62.png', alt='' style="max-width: 300px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img63.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Actividades completadas
                  p.mb-0.text-center Permite identificar cuáles actividades previstas ya fueron ejecutadas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img64.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Actividades pendientes
                  p.mb-0.text-center Facilita reconocer las tareas que todavía requieren ejecución o continuidad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img65.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Cumplimiento de fechas
                  p.mb-0.text-center Permite comprobar si las actividades se desarrollan dentro de los plazos establecidos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img66.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Uso de recursos
                  p.mb-0.text-center Ayuda a revisar la utilización de los recursos asignados durante la ejecución.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img67.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Incidencias
                  p.mb-0.text-center Permite identificar situaciones no previstas que pueden afectar el desarrollo de las actividades.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img68.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Responsables
                  p.mb-0.text-center Facilita verificar la participación de las personas asignadas a cada actividad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img69.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Cambios realizados
                  p.mb-0.text-center Permite registrar modificaciones efectuadas durante la ejecución de las acciones.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Control del avance
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El control del avance permite identificar el estado de cada acción, organizar el seguimiento y reconocer las actividades que requieren atención. Para facilitar este control, las acciones pueden clasificarse mediante la siguiente secuencia:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Pendiente
                p.mb-0 La actividad está planificada, pero aún no se ha iniciado.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img70.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img71.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 En ejecución
                p.mb-0 La actividad se encuentra en desarrollo de acuerdo con las condiciones previstas.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Completada
                p.mb-0 La actividad prevista ha finalizado y puede pasar a su correspondiente revisión.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img72.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img73.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Revisada
                p.mb-0 La actividad completada ha sido comprobada de acuerdo con los criterios establecidos.
      .bg-1
        .px-5
          p.mb-5 Cuando las condiciones de ejecución cambian, también pueden utilizarse estados adicionales:
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t3/img74.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Aplazada
                  p.mb-0.text-center La actividad se pospone y queda pendiente de una nueva programación.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t3/img74.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Bloqueada
                  p.mb-0.text-center La actividad no puede continuar debido a una situación que impide su desarrollo.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t3/img74.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Requiere ajustes
                  p.mb-0.text-center La actividad necesita modificaciones antes de continuar o considerarse completada.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t3/img74.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Cancelada
                  p.mb-0.text-center La actividad deja de ejecutarse y se registra su estado dentro del seguimiento.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Registro de incidencias
          p.mb-5 Durante la ejecución pueden surgir situaciones no previstas que afecten el desarrollo de las actividades. Registrar estas incidencias permite identificar su causa y definir soluciones adecuadas. Las incidencias que pueden surgir durante la ejecución de acciones digitales se describen así:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 9.
                span Incidencias durante la ejecución de acciones digitales
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Incidencia
                      th.texto-left Descripción
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Falla tecnológica
                      td.texto-left Una dificultad relacionada con la tecnología afecta el desarrollo previsto de la actividad.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Retraso
                      td.texto-left La actividad no se desarrolla dentro del tiempo establecido en la planificación.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Recurso no disponible
                      td.texto-left Un elemento necesario para la ejecución no se encuentra disponible cuando se requiere.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Información incorrecta
                      td.texto-left Los datos utilizados presentan errores que pueden afectar la ejecución de la actividad.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cambio de prioridad
                      td.texto-left Una modificación en las prioridades altera el orden previsto para desarrollar las actividades.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Problema de coordinación
                      td.texto-left Se presentan dificultades en la articulación entre las personas o actividades involucradas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Dificultad para publicar
                      td.texto-left Una situación impide o retrasa la publicación prevista dentro de la acción digital.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Falta de aprobación
                      td.texto-left La actividad no puede continuar porque requiere una aprobación que todavía no ha sido otorgada.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ajustes operativos
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El seguimiento puede generar ajustes que permitan continuar la ejecución sin modificar la orientación general de la estrategia. Estos cambios deben responder a las situaciones identificadas y conservar relación con el propósito inicial. Entre los ajustes operativos se encuentran:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img75.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Reprogramar una fecha
                  p.mb-0 Modificar el momento previsto para ejecutar una actividad cuando las condiciones requieren un nuevo plazo.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img76.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Reasignar un responsable
                  p.mb-0 Cambiar la persona encargada de una actividad cuando resulta necesario para facilitar su ejecución.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img77.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Corregir un contenido
                  p.mb-0 Realizar las modificaciones necesarias cuando se identifican errores en la información utilizada.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img78.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Sustituir una herramienta
                  p.mb-0 Cambiar el recurso tecnológico empleado cuando existen dificultades para continuar con la herramienta prevista.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img79.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Modificar el orden de las tareas
                  p.mb-0 Reorganizar la secuencia cuando las condiciones de ejecución requieren desarrollar las actividades en un orden diferente.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img80.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Ampliar un plazo
                  p.mb-0 Extender el tiempo disponible cuando la actividad requiere un periodo mayor para completarse adecuadamente.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Verificación de cumplimiento
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-3.ajuste-3(data-aos="fade-right").mb-3
            p Al finalizar una acción, debe comprobarse si se ejecutó según lo previsto y si cumplió las condiciones establecidas. Esta verificación permite cerrar adecuadamente la actividad y conservar información útil para análisis posteriores. Puede orientarse mediante las siguientes preguntas:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Cumplimiento: ¿La actividad se realizó?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Tiempo: ¿Se realizó dentro del plazo?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Condiciones: ¿Cumplió los lineamientos establecidos?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Resultado operativo: ¿Se obtuvo el producto o la salida esperada?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Registro: ¿Quedó evidencia cuando era necesaria?
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img34.svg', alt='' style="width: 85px").m-auto
            .col-xl
              p.mb-0 La planificación y la ejecución de acciones digitales convierten las decisiones tácticas en actividades organizadas y verificables mediante la definición de acciones, recursos, responsables, tiempos, lineamientos y seguimiento.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img81.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema3',
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

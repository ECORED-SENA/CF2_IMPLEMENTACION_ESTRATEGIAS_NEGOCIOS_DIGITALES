<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Estrategia de mercadeo digital
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p La estrategia de mercadeo digital orienta las decisiones que una organización desarrolla en medios digitales para relacionarse con sus públicos y contribuir al cumplimiento de objetivos. Su formulación articula propósitos, recursos, medios y prioridades, de modo que las acciones mantengan una dirección común y se reduzca la improvisación en su ejecución.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Concepto y propósito de la estrategia digital
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img2.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p.mb-0 Una estrategia digital establece la orientación general para utilizar medios, tecnologías y recursos en función de objetivos previamente definidos. Su propósito es organizar decisiones, fijar prioridades y mantener coherencia entre las actividades, evitando que el uso de plataformas o herramientas se convierta en acciones aisladas sin una finalidad clara.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Concepto de estrategia digital
      p.mb-5 Una estrategia digital es el conjunto de decisiones y orientaciones que permiten utilizar medios, tecnologías y recursos digitales para contribuir al logro de objetivos previamente establecidos. Define una dirección general antes de concretar actividades y no equivale, por sí sola, al uso de una plataforma, herramienta o acción particular.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1.ajuste-1(data-aos="fade-right")
            p La formulación estratégica parte de preguntas que ayudan a establecer una base antes de definir actividades concretas:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué se pretende alcanzar?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿A qué público se dirige?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué resultado se espera obtener?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué medios pueden contribuir al propósito?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué recursos se encuentran disponibles?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué tipo de acciones pueden desarrollarse?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Cómo se mantendrá coherencia entre las diferentes actividades?
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img4.png', alt='' style="max-width: 500px").m-auto
      .bg-1
        .px-5
          .row.align-items-center.mb-5
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 85px").m-auto
            .col-xl
              p.mb-0 Utilizar redes sociales, correos electrónicos o publicaciones no constituye, por sí solo, una estrategia. Estas actividades adquieren sentido cuando responden a una finalidad definida. La relación entre los niveles de decisión puede organizarse así:
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t1/img6.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Objetivo
                  p.mb-0.text-center Expresa aquello que se desea alcanzar y funciona como referencia para orientar las decisiones que siguen.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-right")
                      img(src='@/assets/curso/temas/t1/img7.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Estrategia
                  p.mb-0.text-center Establece la orientación general para conseguir el objetivo antes de determinar las actividades concretas que serán ejecutadas.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t1/img8.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Táctica
                  p.mb-0.text-center Define enfoques más específicos que permiten llevar la estrategia a un nivel de actuación más concreto.
            .col-xl-3.col-md-9(data-aos="zoom-in")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.mb-4(data-aos="fade-left")
                      img(src='@/assets/curso/temas/t1/img9.svg', alt="" style="max-width: 90px").m-auto
                  h4.text-center Acción
                  p.mb-0.text-center Corresponde a la actividad concreta mediante la cual se ejecuta lo planificado y se materializan las decisiones anteriores.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img10.png', alt=''  style="max-width: 500px").m-auto
            .col-xl
              p La relación entre los cuatro niveles puede concretarse en una misma situación:
              .caja-1(data-aos="fade-left")
                p.mb-0 #[b Ejemplo aplicado:] una organización establece como objetivo aumentar las solicitudes comerciales recibidas mediante medios digitales. Para lograrlo, plantea como estrategia fortalecer los puntos de contacto digitales utilizados por clientes potenciales. Define como tácticas mejorar la comunicación de la oferta y facilitar los mecanismos de contacto. Finalmente, propone acciones como optimizar formularios, desarrollar contenidos informativos o implementar mecanismos de respuesta.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Propósito de una estrategia digital
      p.mb-5 El propósito de una estrategia digital es dar dirección y coherencia a las decisiones, ordenar esfuerzos, establecer prioridades y vincular las actividades con los objetivos. Para ello, cumple las siguientes funciones:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Organización de decisiones
                  p.mb-0 Ordena las decisiones digitales para que las actividades respondan a una orientación común y no funcionen como iniciativas independientes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Prioridades
                  p.mb-0 Permite concentrar los esfuerzos en las actividades más pertinentes y determinar cuáles decisiones no resultan prioritarias para la organización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Relación con objetivos
                  p.mb-0 Vincula las actividades digitales con los objetivos previamente definidos, de modo que cada decisión contribuya a una finalidad determinada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Coordinación de medios
                  p.mb-0 Facilita la coordinación entre diferentes medios para que sus funciones se complementen y mantengan una dirección común dentro de la estrategia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Distribución de recursos
                  p.mb-0 Permite distribuir los recursos disponibles de acuerdo con las prioridades establecidas y las actividades que deben desarrollarse.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Coherencia comunicativa
                  p.mb-0 Contribuye a mantener coherencia en la comunicación y evita que las actividades generen mensajes o esfuerzos difíciles de relacionar.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Responsabilidades generales
                  p.mb-0 Ayuda a definir responsabilidades generales para organizar la participación de quienes intervienen en el desarrollo de las actividades digitales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Seguimiento
                  p.mb-0 Facilita posteriormente el seguimiento, al proporcionar una orientación común frente a la cual pueden revisarse las actividades desarrolladas. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img18.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estrategia digital y necesidades del negocio
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Una estrategia digital debe responder a una necesidad identificada y orientar los esfuerzos hacia un propósito concreto. Esta relación entre necesidad, objetivo y estrategia puede organizarse mediante la siguiente secuencia:
      .row.justify-content-center.mb-0
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Necesidad identificada
                p.mb-0 Se reconoce una situación que requiere atención y se determina su relevancia para la organización, evitando iniciar la estrategia desde una herramienta o actividad.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img19.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img20.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Objetivo
                p.mb-0 Define el resultado que se espera alcanzar y orienta las decisiones posteriores, evitando acciones basadas únicamente en disponibilidad o tendencia.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Estrategia
                p.mb-0 Establece la orientación general para contribuir al objetivo mediante medios, tecnologías y recursos digitales, organizando las decisiones antes de definir tácticas y acciones concretas.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img21.png', alt='' style="width: 300px").m-auto
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Relación entre objetivos y estrategia
      p.mb-5 Los objetivos orientan la estructura de la estrategia digital y permiten priorizar recursos y acciones en función de resultados concretos. Esta relación puede organizarse desde los propósitos generales hasta las actividades específicas mediante la siguiente secuencia:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Objetivo organizacional")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Objetivo organizacional
              p.mb-0 Define el propósito general de las iniciativas digitales y establece los resultados prioritarios, evitando que las decisiones sobre medios, recursos o actividades se desarrollen de manera independiente.
        .py-3.py-md-4(titulo="Objetivo específico")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Objetivo específico
              p.mb-0 Delimita un resultado concreto que contribuye al objetivo organizacional y precisa qué se espera alcanzar para orientar posteriormente la estrategia digital y las acciones relacionadas.
        .py-3.py-md-4(titulo="Estrategia digital")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img24.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estrategia digital
              p.mb-0 Define la orientación para contribuir al objetivo específico y organiza recursos y decisiones según las necesidades del público, evitando que los medios o herramientas se conviertan en una finalidad.
        .py-3.py-md-4(titulo="Acciones")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img25.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Acciones
              p.mb-0 Concretan la estrategia mediante actividades ejecutables y organizadas, relacionadas con los objetivos establecidos para contribuir al resultado esperado y evitar iniciativas aisladas.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img26.svg', alt='' style="width: 85px").m-auto
            .col-xl
              p.mb-0 Esta relación puede aplicarse a una situación orientada a incrementar solicitudes:
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] si el objetivo consiste en aumentar las solicitudes relacionadas con determinado servicio, la estrategia debe orientar los recursos hacia actividades que faciliten que las personas conozcan la oferta, encuentren información relevante y dispongan de mecanismos adecuados para establecer contacto. 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img27.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Objetivos como criterio para tomar decisiones
      p.mb-5 Los objetivos permiten valorar si una decisión digital es pertinente según el resultado esperado, las necesidades del público y los recursos disponibles. Esta valoración puede realizarse mediante cinco aspectos relacionados con el objetivo establecido:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img28.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img29.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Contribución al resultado
                  p.mb-0.text-center La actividad debe aportar al resultado esperado. Cuando no existe una relación clara con el objetivo, resulta necesario revisar su utilidad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img30.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Correspondencia con el público
                  p.mb-0.text-center La decisión debe relacionarse con el público identificado, de manera que los esfuerzos se orienten hacia las personas vinculadas con el objetivo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img31.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Necesidad identificada
                  p.mb-0.text-center La incorporación de una actividad debe responder a una necesidad que justifique su utilización y no únicamente a la disponibilidad de una herramienta.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img32.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Recursos disponibles
                  p.mb-0.text-center La decisión debe ser coherente con los recursos de la organización, de modo que exista capacidad suficiente para implementarla y mantenerla.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img33.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Contribución al propósito
                  p.mb-0.text-center La actividad seleccionada debe apoyar el propósito establecido y conservar una relación verificable con la orientación general de la estrategia. 
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img34.svg', alt='' style="width: 70px").m-auto
            .col-xl
              p.mb-0 Una decisión basada únicamente en la popularidad de una herramienta puede carecer de pertinencia:
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] abrir una nueva plataforma únicamente porque posee gran cantidad de usuarios puede no resultar conveniente si el público prioritario no se encuentra allí o si la organización carece de recursos para administrarla. 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img35.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Correspondencia entre objetivos y alcance de la estrategia
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El alcance de una estrategia debe corresponder con el objetivo. Mientras uno específico puede requerir pocas acciones, uno más amplio puede involucrar varios medios y actividades coordinadas. Esta amplitud determina el nivel de complejidad de la estrategia:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img36.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Objetivo general
          p.mb-0 Fortalecer la comercialización digital de una línea de productos mediante acciones articuladas de comunicación, presencia digital, procesos comerciales y atención.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t1/img37.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Objetivo específico
          p.mb-0 Aumentar las solicitudes de información sobre un producto, enfocando la estrategia en mejorar la información disponible y los mecanismos de contacto.
      p.mb-5 Esta diferencia evidencia que no todas las estrategias requieren el mismo nivel de complejidad. 
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Resultados esperados
      p.mb-5 Una estrategia debe definir el resultado que busca favorecer, ya que este orienta las decisiones y facilita la selección posterior de indicadores de seguimiento. Los resultados esperados de una estrategia digital pueden adoptar las siguientes formas:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 1.
            span Resultados esperados de una estrategia digital 
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Resultado esperado
                  th.texto-left Descripción
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Visibilidad
                  td.texto-left Puede constituir el resultado esperado cuando la estrategia pretende favorecer una mayor presencia o reconocimiento de la organización o de su oferta.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Interacción
                  td.texto-left Corresponde a resultados relacionados con las acciones que desarrollan los públicos al entrar en contacto con los medios digitales de la organización.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Generación de contactos
                  td.texto-left Se relaciona con la obtención de nuevos contactos provenientes de las actividades desarrolladas mediante los diferentes medios incluidos en la estrategia.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Solicitudes
                  td.texto-left Puede establecerse como resultado cuando se espera que las personas interesadas realicen consultas o manifiesten interés mediante mecanismos dispuestos por la organización.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Registros
                  td.texto-left Corresponde a situaciones en las que el resultado esperado consiste en incrementar o favorecer el registro de personas mediante los mecanismos digitales disponibles.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Ventas
                  td.texto-left Puede definirse como resultado cuando la estrategia se relaciona directamente con propósitos comerciales y busca contribuir a las ventas de la organización.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Fidelización
                  td.texto-left Se relaciona con resultados orientados a mantener o fortalecer la relación con personas que ya han tenido contacto con la organización.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Uso de un servicio
                  td.texto-left Puede plantearse cuando el propósito consiste en favorecer que las personas accedan o utilicen un servicio dispuesto por la organización.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Participación de clientes
                  td.texto-left Corresponde a resultados relacionados con una mayor participación de los clientes dentro de las actividades o interacciones previstas en la estrategia.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Atención
                  td.texto-left Puede constituir un resultado cuando la estrategia pretende fortalecer los mecanismos mediante los cuales la organización atiende las necesidades de sus públicos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Alineación estratégica
      p.mb-5 La alineación estratégica permite comprobar que las acciones digitales correspondan con los objetivos, las necesidades del público y los recursos disponibles. Esta relación puede organizarse mediante la siguiente secuencia:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Objetivo
                p.mb-0 Define el resultado que se pretende alcanzar y orienta las decisiones posteriores, manteniendo relación con la estrategia.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img38.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img39.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Necesidad del público
                p.mb-0 Relaciona el objetivo con una necesidad del público para evitar actividades poco pertinentes frente al resultado esperado.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Orientación estratégica
                p.mb-0 Define cómo responder a la necesidad y contribuir al objetivo, considerando los recursos disponibles y la viabilidad de las actividades.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img40.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img41.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Actividad
                p.mb-0 Concreta la orientación estratégica mediante una acción específica, relacionada con el objetivo, la necesidad del público y la dirección establecida.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img34.svg', alt='' style="width: 70px").m-auto
            .col-xl
              p.mb-0 La falta de correspondencia entre estos elementos puede afectar la coherencia de la estrategia:
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] una actividad dirigida a un público distinto del relacionado con el objetivo puede consumir recursos sin aportar directamente al resultado esperado. Por ello, la alineación facilita que cada decisión tenga una justificación y contribuya a mantener una estructura ordenada. 
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img42.png', alt='' style="max-width: 500px").m-auto
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Fundamentos del #[i e-marketing]	
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img43.png')})` }")
        .bloque-texto-g__texto.p-4
          p El #[i e-marketing], o mercadeo electrónico, aplica principios y actividades de mercadeo mediante tecnologías y medios digitales para facilitar la relación entre una organización y sus públicos. Su desarrollo aprovecha las posibilidades de comunicación, interacción y acceso a información, sin sustituir los fundamentos generales del mercadeo, sino adaptándolos al entorno digital.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Medios que integra el #[i e-marketing]
      p.mb-5 El #[i e-marketing] integra recursos digitales para comunicar, comercializar, atender y facilitar experiencias relacionadas con productos o servicios. Cada medio cumple una función específica y debe seleccionarse según la finalidad de la estrategia y las necesidades de interacción con el público. Entre los recursos que pueden integrarse se encuentran:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img44.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Sitios web").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Proporcionan información sobre la oferta y orientan el contacto con la organización.
            .row(titulo="Motores de búsqueda").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten incorporar recursos asociados con la localización de información en entornos digitales.
            .row(titulo="Correo electrónico").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede utilizarse como medio de comunicación dentro de las actividades de mercadeo electrónico.
            .row(titulo="Plataformas sociales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Pueden integrarse como espacios digitales para desarrollar actividades relacionadas con los públicos.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Mensajería").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede apoyar la comunicación y las interacciones desarrolladas mediante recursos digitales.
            .row(titulo="Comercio electrónico").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite incorporar medios digitales dentro de actividades relacionadas con la comercialización.
            .row(titulo="Aplicaciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Pueden formar parte de los recursos utilizados para desarrollar diferentes interacciones digitales.
            .row(titulo="Publicidad digital").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede integrarse a las actividades de mercadeo desarrolladas mediante tecnologías y medios digitales.
            .row(titulo="Recursos de información y contenido").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten incorporar información y contenidos que apoyan la relación entre la organización y sus públicos.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img45.png", alt="" style="width: 300px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principios del #[i e-marketing]
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Los principios del #[i e-marketing] orientan el uso de medios digitales según las necesidades del usuario, la interacción, la integración, la adaptación y la información disponible. Estos principios se relacionan de la siguiente manera:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Orientación hacia el usuario")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img46.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Orientación hacia el usuario
              p.mb-0 Considera las necesidades, expectativas y comportamientos del público para relacionar las acciones digitales con sus características.
        .py-3.py-md-4(titulo="Interactividad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img47.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Interactividad
              p.mb-0 Permite que los usuarios respondan, consulten información, realicen solicitudes o desarrollen acciones mediante los medios digitales.
        .py-3.py-md-4(titulo="Integración de medios")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img48.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Integración de medios
              p.mb-0 Articula distintos recursos dentro de un mismo recorrido, de modo que cada medio cumpla una función y contribuya a un resultado común.
        .py-3.py-md-4(titulo="Capacidad de adaptación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img49.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Capacidad de adaptación
              p.mb-0 Permite ajustar las decisiones cuando cambian las condiciones, las necesidades del público o los resultados obtenidos.
        .py-3.py-md-4(titulo="Información para el seguimiento")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img50.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Información para el seguimiento
              p.mb-0 Aprovecha los datos generados en las interacciones para evaluar el desempeño y realizar los ajustes necesarios.
      p.mb-5 La integración permite que varios medios contribuyan de manera articulada a un mismo resultado:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img51.png')})` }")
        .bloque-texto-g__texto.p-4
          p #[b Ejemplo aplicado:] una persona puede iniciar una búsqueda, acceder posteriormente al sitio web, completar un formulario, recibir una comunicación por correo electrónico y continuar con un proceso de atención. En esta secuencia, cada medio cumple una función particular dentro del mismo recorrido.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 #[i E-marketing] y propuesta de valor
      p.mb-5 El #[i e-marketing] debe relacionar la propuesta de valor con las necesidades del público y comunicarla mediante medios adecuados. Esta relación puede organizarse mediante la siguiente secuencia:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Necesidad del público
                p.mb-0 Identifica la necesidad de la audiencia para orientar la comunicación hacia una situación relevante.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img52.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img53.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Propuesta de valor
                p.mb-0 Relaciona la necesidad identificada con el beneficio que puede aportar la oferta.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Mensaje
                p.mb-0 Comunica el beneficio y conecta la necesidad del público con la propuesta de la organización.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img54.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img55.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Medio
                p.mb-0 Presenta el mensaje mediante un canal digital adecuado para facilitar la interacción.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Interacción
                p.mb-0 Integra necesidad, propuesta, mensaje y medio para favorecer la respuesta esperada del público.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img56.png', alt='' style="width: 300px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 #[i E-marketing] y experiencia digital
      p.mb-5 El mercadeo electrónico también considera la experiencia durante la interacción con la organización, ya que las dificultades en el acceso, la solicitud o el contacto pueden afectar el resultado. Esta experiencia puede estar condicionada por los siguientes factores:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 2.
            span Factores que influyen en la experiencia digital
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Factor
                  th.texto-left Descripción
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Claridad de la información
                  td.texto-left La información debe facilitar la comprensión de aquello que la organización comunica durante las diferentes interacciones digitales.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Facilidad de navegación
                  td.texto-left El acceso y el desplazamiento por los recursos digitales pueden influir en la forma en que se desarrolla la experiencia.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Accesibilidad
                  td.texto-left Las condiciones de acceso a los recursos forman parte de los factores que pueden afectar la experiencia digital.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Rapidez del proceso
                  td.texto-left El tiempo requerido para desarrollar determinadas acciones puede influir en la experiencia de las personas durante la interacción.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Coherencia entre medios
                  td.texto-left Los diferentes medios que participan en el recorrido deben mantener una relación que favorezca la continuidad de la experiencia.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Disponibilidad de mecanismos de contacto
                  td.texto-left La posibilidad de establecer contacto con la organización puede influir en el desarrollo de las interacciones y en el resultado esperado.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Cumplimiento de expectativas
                  td.texto-left La experiencia también depende de la correspondencia entre las expectativas generadas y las condiciones que encuentra la persona durante sus interacciones.
      p.mb-0 Por esta razón, el e-marketing no se limita a atraer personas hacia una oferta, sino que también considera la forma en que se desarrollan los diferentes puntos de contacto.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Estructura de una estrategia digital
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img57.png')})` }")
        .bloque-texto-g__texto.p-4
          p Una estrategia digital puede organizarse mediante elementos que permiten pasar de una necesidad identificada a una orientación concreta. Aunque su estructura puede variar según las características de cada organización, resulta necesario relacionar la situación inicial, el objetivo, el público prioritario, la orientación estratégica y los recursos y medios disponibles.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos de una estrategia digital
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Los elementos de una estrategia digital permiten organizar la información y orientar las decisiones antes de definir tácticas y acciones. En conjunto, relacionan el contexto, los resultados esperados, el público y las capacidades disponibles. Estos elementos son:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img58.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Situación inicial").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reconoce las condiciones desde las que parte la organización, considerando la necesidad, los recursos, los medios, el público, las limitaciones y las oportunidades relevantes.
            .row(titulo="Objetivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define el resultado que se pretende alcanzar y orienta la selección posterior de actividades y el seguimiento del progreso.
            .row(titulo="Público prioritario").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifica el grupo relevante para el objetivo, como clientes actuales, potenciales, usuarios u otros públicos relacionados con la finalidad prevista.
            .row(titulo="Orientación estratégica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define, de manera general, cómo se contribuirá al objetivo mediante acciones relacionadas con contacto, información, visibilidad, comercialización o relacionamiento.
            .row(titulo="Recursos y medios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifica las capacidades necesarias para implementar la estrategia, como personas, tecnología, presupuesto, tiempo, canales, información y herramientas de apoyo.
      p.mb-5 Las preguntas asociadas permiten revisar cada elemento; la primera columna identifica el componente y la segunda presenta la pregunta que orienta su definición:
      .row.justify-content-center.mb-5
        .col-xl-6
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 3.
            span Elementos y preguntas orientadoras de una estrategia digital
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Elemento
                  th.texto-left Pregunta principal
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Situación inicial
                  td.texto-left ¿Cuál es el contexto actual?
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Objetivo
                  td.texto-left ¿Qué se pretende alcanzar?
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Público prioritario
                  td.texto-left ¿A quién se dirige?
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Orientación estratégica
                  td.texto-left ¿Cómo se contribuirá al objetivo?
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Recursos y medios
                  td.texto-left ¿Qué se necesita para implementarla?
      p.mb-5 Esta estructura permite organizar la estrategia antes de definir tácticas y acciones específicas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Coherencia de la estructura
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La coherencia de la estrategia depende de la relación entre sus elementos y de su correspondencia con los recursos, el público y la capacidad de ejecución. Para comprobar su viabilidad, deben revisarse los siguientes componentes:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img59.png', alt="" ).m-auto
              h4.text-center Relación entre los elementos
              .caja-4_p
                p.mb-0.text-center Cada elemento debe guardar correspondencia con los demás. Las decisiones relacionadas con el público, los recursos y los medios deben contribuir al objetivo y mantener una orientación común.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img60.png', alt="" ).m-auto
              h4.text-center Suficiencia de recursos
              .caja-4_p
                p.mb-0.text-center Un objetivo puede estar correctamente definido y, aun así, resultar difícil de alcanzar cuando la organización no dispone de los recursos necesarios para desarrollar las actividades previstas.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img61.png', alt="" ).m-auto
              h4.text-center Pertinencia de los medios
              .caja-4_p
                p.mb-0.text-center Un medio puede ser funcional desde el punto de vista técnico, pero perder pertinencia cuando no corresponde con el público prioritario o con las condiciones de ejecución de la organización.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img62.png', alt=''  style="max-width: 500px").m-auto
        .col-xl
          p La coherencia puede sintetizarse mediante la relación que debe mantenerse entre los componentes de la estrategia:
          .caja-1.color-2(data-aos="fade-left").mb-3
            h5.mb-0.text-center Objetivos + audiencia + recursos + medios + capacidad de ejecución
          p.mb-0 El equilibrio entre estos elementos permite establecer una orientación viable y coherente con las condiciones de la organización.
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Integración de acciones digitales
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img63.png')})` }")
        .bloque-texto-g__texto.p-4
          p La integración de acciones digitales permite articular medios y actividades para contribuir a una finalidad común. Para ello, se requiere mantener coherencia, organizar la secuencia de acciones y coordinar los recursos utilizados.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Complementariedad de los medios digitales
      p.mb-5 La integración articula distintos medios para acompañar el recorrido del usuario y contribuir a una finalidad común. Para ello, se seleccionan los recursos necesarios y se coordinan sus funciones dentro de la estrategia:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-4.h-100.color-3
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img64.png', alt="" ).m-auto
              h4.text-center Sitio web
              .caja-4_p
                p.mb-0.text-center Proporciona información que puede ser consultada por el usuario durante su recorrido. Su función se complementa con otros medios cuando la consulta conduce posteriormente hacia mecanismos de contacto o atención.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100.color-3
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img65.png', alt="" ).m-auto
              h4.text-center Correo electrónico
              .caja-4_p
                p.mb-0.text-center Permite mantener la comunicación y realizar seguimiento dentro del proceso. Puede intervenir después de una consulta o solicitud para dar continuidad a la relación establecida con el usuario.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-4.h-100.color-3
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img66.png', alt="" ).m-auto
              h4.text-center Mensajería
              .caja-4_p
                p.mb-0.text-center Facilita la atención directa y permite mantener un punto de contacto con el usuario. Su función puede complementar la información proporcionada y otros mecanismos de comunicación utilizados por la organización.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La complementariedad de estos medios puede organizar un recorrido continuo para el usuario:
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] una organización puede utilizar un sitio web, correo electrónico y mensajería de manera complementaria. Un posible recorrido puede expresarse así: consulta información → solicita contacto → recibe respuesta → continúa el proceso. La integración depende de las relaciones establecidas entre los recursos realmente necesarios.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img67.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Coherencia entre acciones
      p.mb-5 Las actividades de una estrategia deben mantener coherencia entre los distintos medios para evitar contradicciones y ofrecer una orientación consistente al público. Esta correspondencia debe conservarse en la información, los mensajes y las condiciones asociadas con la oferta, especialmente en los siguientes aspectos:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img68.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img69.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Objetivo
                  p.mb-0.text-center Las actividades deben contribuir al objetivo establecido y conservar una finalidad común dentro de la estrategia.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img70.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Público
                  p.mb-0.text-center Las acciones deben mantener correspondencia con las características del público al cual se dirige la estrategia.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img71.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Propuesta de valor
                  p.mb-0.text-center Los diferentes medios deben conservar la propuesta de valor que orienta la relación entre la oferta y el público.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img72.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Información
                  p.mb-0.text-center La información proporcionada debe ser consistente entre los distintos medios utilizados durante las interacciones.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img73.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Mensajes
                  p.mb-0.text-center Los mensajes deben mantener correspondencia entre sí para evitar comunicaciones contradictorias durante el recorrido del usuario.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img74.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Condiciones comerciales
                  p.mb-0.text-center Las condiciones relacionadas con la oferta deben conservar consistencia cuando se presentan mediante diferentes medios digitales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img75.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Mecanismos de contacto
                  p.mb-0.text-center Los mecanismos disponibles deben integrarse con las demás acciones para facilitar la continuidad de la interacción con el usuario.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img34.svg', alt='' style="width: 70px").m-auto
            .col-xl
              p.mb-0 La falta de coherencia entre medios puede generar dificultades para identificar la información correcta.
          .caja-1.color-3(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] si un producto aparece con características o condiciones diferentes en varios medios, el usuario puede tener dificultades para determinar cuál información es correcta. Por ello, las acciones deben mantener consistencia en los aspectos que comparten.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img76.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Secuencia de las acciones
      p.mb-5 Las acciones pueden organizarse de acuerdo con el recorrido esperado del usuario y con la función que cumplen en cada momento. Esta secuencia permite relacionar actividades orientadas al conocimiento, el interés, la consulta, la realización de una acción y la continuidad de la relación con la organización. El recorrido puede organizarse mediante una secuencia progresiva de acciones:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Conocer
                p.mb-0 La persona identifica la solución y recibe una base inicial para continuar su evaluación.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img77.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img78.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Interesarse
                p.mb-0 Busca información adicional para determinar si la solución resulta pertinente.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Consultar
                p.mb-0 Profundiza en la información o utiliza mecanismos que permitan resolver inquietudes.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img79.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img80.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Actuar
                p.mb-0 Realiza una acción concreta, como solicitar información, registrarse o comprar.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Continuar la relación
                p.mb-0 Mantiene la comunicación o recibe atención después de la acción realizada.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img81.png', alt='' style="width: 300px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Coordinación de recursos
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img82.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La integración de acciones requiere coordinar los recursos involucrados en su ejecución y definir con claridad responsabilidades, información, herramientas y momentos de desarrollo. Esta organización ayuda a reducir duplicaciones, relacionar las actividades entre sí y facilitar el cumplimiento de lo previsto. Para ello, deben precisarse los siguientes aspectos:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img83.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Responsables").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Debe establecerse quién realiza cada actividad para facilitar el cumplimiento de las responsabilidades asignadas.
            .row(titulo="Información necesaria").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cada actividad debe contar con la información requerida para desarrollarse de acuerdo con lo previsto.
            .row(titulo="Herramientas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es necesario identificar qué herramientas se utilizarán para desarrollar las actividades que integran la estrategia.
            .row(titulo="Momento de ejecución").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Debe existir claridad sobre cuándo se ejecutará cada actividad dentro de la organización prevista.
            .row(titulo="Relación entre acciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cada actividad debe considerar su relación con las demás para reducir duplicaciones y favorecer una ejecución coordinada.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Consistencia de la estrategia
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p Antes de avanzar hacia la ejecución, es necesario comprobar que los componentes de la estrategia mantengan coherencia entre el objetivo, las necesidades del público, los medios, las acciones y los recursos disponibles. Esta consistencia puede revisarse mediante las siguientes preguntas:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | ¿Existe un objetivo claramente definido?
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | ¿La estrategia responde a una necesidad identificada?
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | ¿El público seleccionado guarda relación con el objetivo?
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | ¿Los medios elegidos cumplen una función específica?
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | ¿Las diferentes acciones pueden complementarse?
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | ¿Existen recursos suficientes para desarrollar lo propuesto?
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | ¿La orientación puede mantenerse durante el periodo previsto?
          .caja-1.color-3.ajuste-2(data-aos="fade-right")
            p.mb-0 Una respuesta positiva a estas preguntas indica que existe una base coherente para avanzar hacia decisiones más específicas. La estrategia de mercadeo digital articula objetivos, públicos, recursos y medios para orientar las acciones y evitar esfuerzos aislados. Esta integración proporciona la base para definir tácticas específicas y organizadas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img84.png', alt='' style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Tema1',
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

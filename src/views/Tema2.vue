<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Tácticas para la estrategia digital
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p Las tácticas digitales permiten convertir la orientación estratégica en decisiones concretas que pueden desarrollarse mediante distintos medios y recursos. Su definición debe mantener coherencia con los objetivos, las características de las audiencias, los canales disponibles y la capacidad de la organización, de manera que las acciones posteriores contribuyan de forma organizada a los resultados esperados.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Concepto y función de las tácticas digitales
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p Las tácticas digitales permiten llevar la estrategia a un nivel más concreto al definir formas específicas de actuación vinculadas con los objetivos. Su función consiste en organizar acciones, orientar recursos y canales, establecer prioridades y mantener coherencia entre las actividades que posteriormente harán posible la ejecución de la estrategia.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Concepto de táctica digital
      p.mb-5 Una táctica digital define cómo utilizar recursos, canales o procedimientos para contribuir a un objetivo y conecta la orientación general de la estrategia con las acciones operativas. Dentro de este proceso, cada nivel cumple una función específica que permite avanzar de la estrategia a la ejecución:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-4.h-100.color-3
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img3.png', alt="" ).m-auto
              h4.text-center Estrategia
              .caja-4_p
                p.mb-0.text-center Establece el enfoque general que orienta los esfuerzos hacia el cumplimiento de un objetivo y proporciona una dirección para las decisiones posteriores.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100.color-3
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img4.png', alt="" ).m-auto
              h4.text-center Táctica
              .caja-4_p
                p.mb-0.text-center Determina una forma específica de implementar la estrategia y permite organizar diversas acciones alrededor de un propósito definido.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-4.h-100.color-3
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img5.png', alt="" ).m-auto
              h4.text-center Acción
              .caja-4_p
                p.mb-0.text-center Corresponde a una actividad concreta mediante la cual se ejecuta la táctica y se materializan las decisiones establecidas previamente.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
        .col-xl
          p La relación entre estos niveles puede concretarse en una misma situación:
          .caja-1.color-1(data-aos="fade-left").mb-3
            p.mb-0 #[b Ejemplo aplicado:] una organización plantea como estrategia fortalecer el relacionamiento digital con clientes potenciales. Para desarrollarla, define como táctica facilitar mecanismos de atención y respuesta mediante canales digitales. Esta orientación puede traducirse en acciones como establecer horarios de atención, configurar respuestas iniciales, organizar consultas frecuentes y asignar responsables.
          .row.align-items-center.mb-0
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 85px").m-auto
            .col-xl
              p.mb-0 En este caso, la táctica no corresponde a una única tarea, sino a una orientación específica que puede concretarse mediante varias actividades.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Función de las tácticas digitales
      p.mb-5 Las tácticas permiten organizar la ejecución de una estrategia al relacionar los objetivos con las actividades que deben desarrollarse. Su función es convertir la orientación estratégica en formas concretas de actuación, facilitando la distribución de recursos, la definición de prioridades y el seguimiento posterior. Sus principales funciones son:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Concretar la estrategia
                  p.mb-0 Traducen la orientación general de la estrategia en formas específicas de actuación que pueden desarrollarse posteriormente mediante acciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Organizar acciones
                  p.mb-0 Permiten agrupar diferentes actividades alrededor de un propósito común y evitar que se desarrollen de manera aislada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Facilitar la asignación de recursos
                  p.mb-0 Ayudan a determinar cómo pueden distribuirse los recursos necesarios para desarrollar las actividades previstas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Orientar los canales
                  p.mb-0 Permiten establecer cómo se utilizarán los canales seleccionados de acuerdo con la finalidad definida dentro de la estrategia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Establecer prioridades
                  p.mb-0 Contribuyen a determinar cuáles formas de actuación requieren mayor atención según los objetivos y las necesidades identificadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mantener coherencia
                  p.mb-0 Favorecen la relación entre las distintas actividades para que mantengan correspondencia con la orientación general de la estrategia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Facilitar el seguimiento
                  p.mb-0 Proporcionan una organización que posteriormente permite revisar la ejecución de las actividades relacionadas con cada táctica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img13.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img14.png', alt=''  style="max-width: 500px").m-auto
        .col-xl
          p Una misma organización puede definir tácticas diferentes según el resultado que pretenda alcanzar:
          .caja-1(data-aos="fade-left")
            p.mb-0 #[b Ejemplo aplicado:] si una organización busca incrementar el conocimiento de un nuevo servicio, puede orientar sus tácticas a ampliar la exposición de la información y facilitar la comprensión de los beneficios de la oferta. Si pretende aumentar las solicitudes comerciales, puede priorizar tácticas dirigidas a facilitar mecanismos de contacto y reducir dificultades durante el proceso.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características de una táctica adecuada
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Una táctica debe formularse con precisión para diferenciarse de la estrategia general y de una acción concreta. Además, debe relacionarse con el objetivo, ajustarse a los recursos disponibles e integrarse con las demás decisiones de la estrategia. Una táctica adecuada reúne las siguientes características:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100.color-3
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img15.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Pertinencia
              p.mb-0.text-center Debe guardar relación con el objetivo establecido y contribuir al propósito que orienta la estrategia.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100.color-3
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img16.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Claridad
              p.mb-0.text-center Debe expresar de manera comprensible el enfoque que se utilizará para llevar la estrategia a un nivel más concreto.
        .col-xl-4.col-md-9(data-aos="zoom-in")
          .caja-3.h-100.color-3
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t2/img17.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Viabilidad
              p.mb-0.text-center Debe poder desarrollarse de acuerdo con los recursos existentes o aquellos que se encuentren disponibles para su implementación.
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100.color-3
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img18.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Coherencia
              p.mb-0.text-center Debe integrarse con otras tácticas y mantener correspondencia con la orientación general definida en la estrategia.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100.color-3
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img19.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Aplicabilidad
              p.mb-0.text-center Debe permitir su posterior transformación en actividades concretas que puedan organizarse y ejecutarse.
        .col-xl-4.col-md-9(data-aos="zoom-in")
          .caja-3.h-100.color-3
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t2/img20.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Adaptabilidad
              p.mb-0.text-center Debe permitir ajustes cuando cambien las condiciones de ejecución o los resultados obtenidos durante su desarrollo.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La precisión en la formulación permite distinguir una táctica de los demás niveles de decisión:
          .caja-1.color-3(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] «mejorar el posicionamiento digital» resulta demasiado general. Una formulación táctica sería «fortalecer la visibilidad de la oferta mediante recursos informativos relacionados con las búsquedas del público». Una acción concreta derivada de esta táctica sería «elaborar y publicar una guía específica sobre una necesidad frecuente».
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img21.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tácticas aisladas y tácticas integradas
      p.mb-5 Las tácticas pueden desarrollarse de forma independiente o complementarse entre sí. Cuando una estrategia incluye varios objetivos o puntos de contacto, su integración ayuda a distribuir funciones, evitar esfuerzos desconectados y optimizar los recursos disponibles. Las modalidades de las tácticas se diferencian por su forma de contribuir a la estrategia:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 4.
            span Tácticas aisladas y tácticas integradas
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Modalidad de táctica
                  th.texto-left Descripción
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Tácticas aisladas
                  td.texto-left Pueden desarrollarse de manera independiente cuando cumplen una función específica dentro de la estrategia y no requieren necesariamente la articulación con otras tácticas para alcanzar su propósito.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Tácticas integradas
                  td.texto-left Se complementan para contribuir a una finalidad común. Esta relación resulta pertinente cuando la estrategia comprende diferentes objetivos o puntos de contacto que requieren formas de actuación coordinadas.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img22.png', alt='' style="max-width: 500px").m-auto
        .col-xl
          p La integración puede relacionar varias tácticas dentro de una misma estrategia:
          .caja-1.color-1(data-aos="fade-left").mb-3
            p.mb-0 #[b Ejemplo aplicado:] una estrategia orientada a fortalecer oportunidades comerciales puede integrar tres tácticas: aumentar la disponibilidad de información sobre la oferta, facilitar mecanismos de contacto y mantener comunicación con personas interesadas. Su relación puede organizarse mediante la secuencia: información → interés → contacto → seguimiento.
          .row.align-items-center.mb-0
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img34.svg', alt='' style="width: 70px").m-auto
            .col-xl
              p.mb-0 Esta organización permite que las tácticas cumplan funciones complementarias y utilicen los recursos de manera coordinada.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Diferencia entre estrategia, táctica y acción
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img23.png')})` }")
        .bloque-texto-g__texto.p-4
          p Diferenciar la estrategia, la táctica y la acción permite organizar las decisiones digitales de manera jerárquica y comprender la función de cada nivel. Mientras la estrategia define la orientación general, la táctica establece un enfoque específico y la acción concreta, la actividad que debe ejecutarse para contribuir al objetivo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre estrategia, táctica y acción
      p.mb-5 La estrategia, la táctica y la acción se relacionan de forma progresiva, desde el objetivo hasta la ejecución. Cada nivel aporta un mayor grado de concreción y evita confundir actividades aisladas con una estrategia completa. Esta relación puede organizarse mediante la siguiente secuencia:
      .row.justify-content-center.mb-5
        .col-xl-6
          .caja-1.color-2(data-aos="zoom-in")
            h5.mb-0.text-center Objetivo → estrategia → táctica → acción
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 85px").m-auto
            .col-xl
              p.mb-0 Esta secuencia puede aplicarse a una situación orientada a incrementar las solicitudes de un servicio:
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] el objetivo consiste en incrementar las solicitudes recibidas sobre un servicio. La estrategia busca fortalecer los mecanismos digitales que facilitan el contacto con clientes potenciales; la táctica propone simplificar los puntos de contacto utilizados para recibir consultas, y la acción consiste en reducir los campos requeridos en el formulario de solicitud.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img24.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Cada nivel responde a una pregunta distinta y presenta un grado particular de concreción:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img25.png", alt="" style="width: 250px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Estrategia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Responde a cómo se orientarán los esfuerzos para alcanzar el objetivo. Su alcance es amplio y puede integrar varias tácticas.
            .row(titulo="Táctica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define qué enfoque específico se utilizará para desarrollar la estrategia. Delimita una forma de actuación que puede incluir varias acciones.
            .row(titulo="Acción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece qué actividad concreta debe ejecutarse. Puede asignarse a un responsable, programarse y verificarse posteriormente.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia de mantener la jerarquía
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Mantener la jerarquía entre estrategia, táctica y acción permite relacionar cada actividad con los objetivos y facilitar los ajustes durante la ejecución. Cuando estos niveles se confunden, pueden desarrollarse tareas sin una finalidad clara. Por ello, una actividad concreta no debe presentarse como estrategia si no define la orientación que la sustenta:
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] considerar «publicar tres veces por semana» como una estrategia deja sin responder preguntas fundamentales sobre la finalidad y la relación de esa actividad con otras decisiones.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img26.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img27.png', alt='' style="max-width: 500px").m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img34.svg', alt='' style="width: 70px").m-auto
            .col-xl
              p.mb-0 Para establecer la función de una actividad dentro de la estrategia, conviene responder las siguientes preguntas:
          .caja-1.color-1.ajuste-2(data-aos="fade-left").mb-3
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Para qué se publica?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué objetivo se pretende apoyar?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué audiencia recibirá la información?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué función cumple esa actividad?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Cómo se relaciona con otras acciones?
      p.mb-5 La comparación permite identificar la función y la pregunta principal asociada con cada nivel de decisión:
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 5.
            span Diferencias entre estrategia, táctica y acción
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Nivel
                  th.ajuste-border-tabla.texto-left Función
                  th.texto-left Pregunta principal
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Estrategia
                  td.ajuste-border-tabla.texto-left Define la orientación general.
                  td.texto-left ¿Cómo se abordará el objetivo?
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Táctica
                  td.ajuste-border-tabla.texto-left Establece el enfoque específico.
                  td.texto-left ¿Qué forma de actuación se utilizará?
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Acción
                  td.ajuste-border-tabla.texto-left Corresponde a una actividad concreta.
                  td.texto-left ¿Qué debe hacerse?
      p.mb-0 Mantener esta estructura también facilita realizar ajustes durante la ejecución. Si una acción no produce el resultado esperado, puede sustituirse sin modificar necesariamente toda la estrategia; en cambio, si varias acciones asociadas con una misma táctica presentan dificultades, puede ser necesario revisar el enfoque táctico.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Tipos de tácticas digitales
      .caja-5(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-5_p
            p.mb-0 Las tácticas digitales pueden clasificarse según la función que cumplen dentro de una estrategia. Su selección debe considerar el objetivo establecido, las características del público, los medios disponibles y la capacidad de ejecución de la organización, ya que cada tipo responde a una finalidad diferente dentro del proceso.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img28.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Clasificación de las tácticas digitales
      p.mb-5 Las tácticas pueden orientarse a la visibilidad, atracción, interacción, conversión, relacionamiento o fidelización, según la respuesta que se espera del público. Cada categoría cumple una función particular dentro de la estrategia y permite organizar las actuaciones de acuerdo con las necesidades y los resultados esperados:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img29.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Tácticas de visibilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Buscan aumentar el reconocimiento de una organización, producto o servicio mediante mayor presencia, disponibilidad de información y exposición de la oferta.
            .row(titulo="Tácticas de atracción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Generan interés mediante información útil, beneficios, respuestas a preguntas frecuentes y soluciones relacionadas con las necesidades del público.
            .row(titulo="Tácticas de interacción").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilitan conversaciones, consultas, opiniones, participación y contacto directo, especialmente cuando el público requiere acompañamiento o información adicional.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Tácticas de conversión").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilitan el paso del interés a una acción concreta, como registrarse, solicitar información, reservar, descargar, comprar o contratar.
            .row(titulo="Tácticas de relacionamiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Buscan mantener la relación después de una interacción o transacción mediante seguimiento, comunicación, información relevante y nuevas interacciones.
            .row(titulo="Tácticas de fidelización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Fortalecen la relación con clientes actuales mediante atención posterior, beneficios, información personalizada, programas de reconocimiento y acompañamiento.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img30.png", alt="" style="width: 300px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre las tácticas y el recorrido del público
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 No todas las organizaciones requieren las mismas tácticas, ya que su selección depende de la etapa del público y del resultado esperado. Estas pueden complementarse dentro de una misma estrategia, aunque las personas no sigan siempre el mismo recorrido. Una posible secuencia es:
      .row.justify-content-center.mb-5
        .col-xl-6
          .caja-1.color-2(data-aos="zoom-in")
            h5.mb-0.text-center Visibilidad → atracción → interacción → conversión → relacionamiento
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img31.png')})` }")
        .bloque-texto-g__texto.p-4
          p Esta secuencia no representa un recorrido obligatorio. Su utilidad consiste en reconocer que las tácticas pueden cumplir funciones diferentes dentro de una misma estrategia y que las personas no necesariamente atraviesan todas las etapas ni lo hacen en el mismo orden.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Relación entre tácticas y objetivos de campaña	
      .caja-5(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-5_p
            p.mb-0 Una táctica adquiere sentido cuando contribuye a un objetivo de campaña. Su selección debe partir del resultado esperado y del comportamiento del público, manteniendo coherencia entre el propósito, la táctica y las acciones posteriores.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img32.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre objetivo, comportamiento esperado, táctica y acciones
      p.mb-5 La selección de una táctica parte del resultado esperado y del comportamiento que se busca facilitar en el público. A partir de ello, se define la forma de actuación y las actividades necesarias para desarrollarla. Esta relación puede organizarse mediante la siguiente secuencia:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Objetivo
                p.mb-0 Establece el resultado que se pretende alcanzar y proporciona la referencia inicial para determinar qué tipo de actuación puede contribuir a su cumplimiento.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img33.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img34.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Comportamiento esperado
                p.mb-0 Define la respuesta o actuación del público que puede contribuir al objetivo. Esta precisión permite orientar la selección de la táctica hacia una finalidad concreta.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Táctica
                p.mb-0 Determina la forma de actuación mediante la cual se busca favorecer el comportamiento esperado y contribuir al objetivo previamente establecido.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img35.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img36.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Acciones
                p.mb-0 Concretan la táctica mediante actividades específicas que pueden organizarse y ejecutarse para facilitar la respuesta esperada del público.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La secuencia puede aplicarse a un objetivo orientado a generar solicitudes de información:
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] el objetivo consiste en aumentar las solicitudes de información sobre un servicio. El comportamiento esperado es que las personas interesadas establezcan contacto; la táctica busca facilitar mecanismos digitales de consulta, y las acciones comprenden simplificar formularios, incluir mecanismos visibles de contacto y organizar respuestas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img37.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tácticas según los objetivos de campaña
      p.mb-5 Las tácticas varían según el objetivo de campaña: pueden favorecer el conocimiento, la interacción, los resultados comerciales o el relacionamiento con clientes. Su selección debe corresponder con la finalidad establecida. La orientación de las tácticas se relaciona con los objetivos de campaña de la siguiente manera:
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 6.
            span Tácticas según los objetivos de campaña
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Tipo de objetivo
                  th.texto-left Orientación de las tácticas
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Objetivos de conocimiento
                  td.texto-left Favorecer que el público conozca la oferta mediante mayor visibilidad, información, descubrimiento y comunicación de beneficios.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Objetivos de interacción
                  td.texto-left Aumentar la participación o la comunicación mediante conversaciones, consultas, puntos de contacto e iniciativas de participación.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Objetivos comerciales
                  td.texto-left Facilitar las solicitudes, reducir las barreras, aclarar las condiciones y mejorar el acceso a los procesos de compra o contratación.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Objetivos de relacionamiento
                  td.texto-left Fortalecer la relación con los clientes actuales mediante seguimiento, comunicación periódica, atención posterior, información relevante y beneficios de continuidad.
      p.mb-5 Una misma táctica puede contribuir a diferentes objetivos; sin embargo, debe establecerse con claridad cuál es su función principal dentro de la estrategia.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Correspondencia entre táctica y público
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Además de responder al objetivo, una táctica debe considerar las características y comportamientos del público para determinar su pertinencia y evitar decisiones basadas solo en tendencias, preferencias internas o herramientas disponibles. Estas características pueden modificar la conveniencia de una táctica:
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] una táctica basada en la interacción inmediata tendrá poca utilidad si el público prefiere consultar información detallada antes de establecer contacto.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img38.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img39.png', alt='' style="max-width: 500px").m-auto
        .col-xl
          p Antes de seleccionar una táctica, conviene comprobar su correspondencia con el objetivo, el público y las condiciones disponibles:
          .caja-1.color-3.ajuste-2(data-aos="fade-left").mb-3
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué objetivo debe apoyar?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Qué comportamiento se espera facilitar?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿La táctica resulta pertinente para la audiencia?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Puede desarrollarse mediante los canales disponibles?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Existen recursos suficientes?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Puede convertirse en acciones concretas?
          .row.align-items-center.mb-0
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img5.svg', alt='' style="width: 70px").m-auto
            .col-xl
              p.mb-0 Estas preguntas permiten fundamentar la selección de las tácticas y evitar que se elijan únicamente por tendencias o preferencias internas.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Priorización de tácticas digitales	
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img82.svg', alt='' style="width: 70px").m-auto
        .col-xl
          p.mb-0 Una estrategia puede generar varias alternativas tácticas, pero los recursos disponibles suelen ser limitados. Por ello, es necesario priorizar las opciones con mayor relación con los objetivos y mejores condiciones de implementación, considerando pertinencia, viabilidad, impacto y esfuerzo. Esta priorización permite organizar las tácticas según su función y momento de ejecución:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Desarrollar primero")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img40.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Desarrollar primero
              p.mb-0 Corresponde a las tácticas que presentan mejores condiciones para contribuir a los objetivos y cuya implementación resulta prioritaria.
        .py-3.py-md-4(titulo="Ejecutar posteriormente")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img41.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Ejecutar posteriormente
              p.mb-0 Incluye tácticas que pueden resultar pertinentes, pero cuya ejecución puede aplazarse hasta contar con condiciones más favorables.
        .py-3.py-md-4(titulo="Utilizar como apoyo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img42.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Utilizar como apoyo
              p.mb-0 Comprende tácticas que pueden complementar las iniciativas principales y fortalecer su desarrollo sin asumir una función prioritaria.
        .py-3.py-md-4(titulo="Descartar temporalmente")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img43.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Descartar temporalmente
              p.mb-0 Agrupa alternativas que, por sus condiciones actuales, no justifican su implementación y pueden reconsiderarse posteriormente.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Criterios para priorizar tácticas
      p.mb-5 La priorización requiere comparar el aporte de cada táctica y las condiciones necesarias para implementarla, evitando asignar recursos solo por preferencia, tendencia o disponibilidad de herramientas. Para definir su nivel de prioridad, pueden considerarse los siguientes criterios:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img44.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Contribución al objetivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Debe establecerse qué tan directamente puede contribuir la táctica al resultado esperado. Una alternativa con alta relación con el objetivo puede recibir mayor prioridad que otra cuyo aporte sea indirecto.
            .row(titulo="Pertinencia para la audiencia").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La táctica debe corresponder con las necesidades y los comportamientos del público. Una alternativa técnicamente atractiva puede perder prioridad cuando no coincide con las formas de interacción de la audiencia.
            .row(titulo="Viabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite determinar si la organización dispone de condiciones suficientes para implementar la táctica. Puede considerar personal, tecnología, conocimientos, tiempo, presupuesto y capacidad operativa.
            .row(titulo="Impacto esperado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde al nivel de contribución que podría generar la táctica. Una alternativa dirigida a un grupo reducido puede producir un aporte mayor si ese público mantiene una relación más directa con el objetivo.
            .row(titulo="Esfuerzo requerido").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite analizar los recursos necesarios para la implementación, como tiempo, complejidad, recursos económicos, personas involucradas y dependencias tecnológicas. Una táctica que exige gran esfuerzo para producir un aporte reducido puede recibir menor prioridad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Matriz de impacto y esfuerzo
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img82.svg', alt='' style="width: 70px").m-auto
        .col-xl
          p.mb-0 La comparación entre impacto y esfuerzo permite ordenar las alternativas tácticas según su aporte potencial y los recursos necesarios para desarrollarlas. Esta relación ayuda a identificar prioridades, necesidades de planificación y opciones complementarias. Según la combinación de ambos criterios, pueden establecerse las siguientes orientaciones:
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 7.
            span Priorización de tácticas según impacto y esfuerzo
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Impacto
                  th.ajuste-border-tabla.texto-left Esfuerzo
                  th.texto-left Orientación
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alto
                  td.ajuste-border-tabla.texto-left Bajo
                  td.texto-left Prioridad alta
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alto
                  td.ajuste-border-tabla.texto-left Alto
                  td.texto-left Requiere planificación y recursos suficientes.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Bajo
                  td.ajuste-border-tabla.texto-left Bajo
                  td.texto-left Puede desarrollarse como táctica complementaria.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Bajo
                  td.ajuste-border-tabla.texto-left Alto
                  td.texto-left Prioridad reducida
      p.mb-5 Esta clasificación permite concentrar los recursos en las alternativas con mayor potencial y valorar con mayor precisión el esfuerzo necesario para su implementación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Priorización progresiva
      p.mb-5 No todas las tácticas deben ejecutarse al mismo tiempo. Una organización puede priorizar las más relacionadas con los objetivos, incorporar después las complementarias y reservar otras para cuando existan mejores condiciones. Esta ejecución puede organizarse progresivamente según la prioridad asignada a cada táctica:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Tácticas prioritarias
                p.mb-0 Se desarrollan primero debido a su relación directa con los objetivos y a las condiciones favorables para su implementación.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img45.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img46.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Tácticas complementarias
                p.mb-0 Se incorporan para fortalecer las iniciativas principales y aportar funciones adicionales que contribuyan al desarrollo de la estrategia.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Tácticas posteriores
                p.mb-0 Pueden implementarse cuando existan condiciones suficientes, recursos disponibles o nuevos requerimientos que justifiquen su incorporación.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img47.png', alt='' style="width: 300px").m-auto
      p.mb-5 Esta organización contribuye a disminuir la dispersión de esfuerzos y facilita la administración de los recursos disponibles.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Revisión final de las tácticas
      p.mb-5 Antes de avanzar hacia la ejecución, resulta necesario comprobar que las tácticas seleccionadas mantengan correspondencia con los objetivos, las características de la audiencia, los medios y los recursos disponibles. Esta revisión también permite verificar que cada alternativa pueda transformarse en acciones concretas y tenga una prioridad justificada. La revisión final puede realizarse mediante las siguientes preguntas:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1.ajuste-2(data-aos="fade-right").mb-3
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Cada táctica se relaciona con un objetivo?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Existe claridad sobre su función?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Resulta pertinente para la audiencia?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Puede implementarse mediante los medios disponibles?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Existen recursos suficientes?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Puede traducirse en acciones concretas?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Su prioridad está justificada?
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | ¿Se integra con las demás tácticas?
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img34.svg', alt='' style="width: 85px").m-auto
            .col-xl
              p.mb-0 Una respuesta favorable a estas preguntas indica que existe una base adecuada para continuar con la ejecución.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img48.png', alt='' style="max-width: 500px").m-auto
      .caja-2(data-aos="zoom-in").mb-0
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img49.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p.mb-0 Las tácticas digitales convierten la estrategia en enfoques concretos y organizados, acordes con los objetivos, las audiencias y las capacidades de la organización. Una vez priorizadas, deben transformarse en acciones específicas con responsables, tiempos y lineamientos de ejecución.

</template>

<script>
export default {
  name: 'Tema2',
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

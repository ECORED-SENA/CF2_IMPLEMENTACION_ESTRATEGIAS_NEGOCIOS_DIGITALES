<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Estrategia de comunicación digital	
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p La estrategia de comunicación digital orienta los mensajes, contenidos e interacciones que una organización desarrolla mediante medios electrónicos. Su propósito es mantener claridad, coherencia y continuidad entre los diferentes puntos de contacto, relacionando lo que se comunica con las características del público, la identidad organizacional, el propósito previsto y las particularidades de cada medio.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Fundamentos de la comunicación digital	
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p La comunicación digital comprende el intercambio de información mediante tecnologías y medios digitales entre organizaciones, personas o grupos de usuarios. Se caracteriza por la velocidad, la interactividad, la diversidad de formatos y el uso de múltiples canales, cuya selección debe responder al propósito comunicativo y al medio utilizado.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características y formatos de la comunicación digital
      p.mb-5 La comunicación digital puede utilizar distintos formatos según su finalidad y las características del medio. Esta variedad permite transmitir información, facilitar interacciones y generar respuestas entre la organización y sus públicos. Entre los principales formatos se encuentran:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img3.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Texto
              p.mb-0.text-center Permite transmitir información escrita mediante diferentes medios y recursos digitales.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img4.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Imágenes
              p.mb-0.text-center Pueden utilizarse para complementar o comunicar información mediante recursos gráficos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img5.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Audio
              p.mb-0.text-center Permite desarrollar contenidos sonoros de acuerdo con el propósito y el medio seleccionado.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img6.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Video
              p.mb-0.text-center Integra recursos audiovisuales para comunicar contenidos mediante medios digitales.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img7.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Elementos interactivos
              p.mb-0.text-center Permiten incorporar formas de participación o interacción dentro de determinados entornos digitales.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img8.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Mensajes automatizados
              p.mb-0.text-center Facilitan el envío de comunicaciones previamente configuradas según determinadas condiciones o procesos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img9.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Formularios
              p.mb-0.text-center Permiten recopilar información o facilitar determinadas acciones por parte de los usuarios.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img10.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Conversaciones directas
              p.mb-0.text-center Facilitan el intercambio de información entre la organización y las personas mediante canales digitales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos básicos del proceso comunicativo
      p.mb-5 En la comunicación digital intervienen distintos elementos que estructuran el intercambio de información y permiten mantener coherencia entre el mensaje, el público, el medio y la respuesta esperada. Cada elemento cumple una función específica dentro del proceso comunicativo:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img11.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Emisor").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es la organización o persona que origina el mensaje y da inicio al proceso comunicativo.
            .row(titulo="Receptor").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde al público al cual se dirige la información transmitida.
            .row(titulo="Mensaje").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es el contenido que se desea comunicar mediante el medio seleccionado.
            .row(titulo="Canal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde al medio utilizado para transmitir la información al público.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Código").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende el lenguaje, los símbolos y los formatos empleados para construir el mensaje.
            .row(titulo="Contexto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponde a la situación en la que se desarrolla la comunicación.
            .row(titulo="Respuesta").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es la reacción o interacción que se genera a partir del mensaje comunicado.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img12.png", alt="" style="width: 250px").m-auto
      p.mb-5 La adecuación de estos elementos influye en la utilidad del mensaje para el público:
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img13.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p.mb-0 #[b Ejemplo aplicado:] un mensaje puede ser técnicamente correcto, pero resultar poco útil si utiliza términos difíciles para el público al cual se dirige.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comunicación unidireccional y bidireccional
      p.mb-5 Los medios digitales permiten distintas formas de comunicación según las posibilidades de respuesta que ofrecen. Algunos se centran en transmitir información y otros facilitan consultas, conversaciones o retroalimentación. Las modalidades de comunicación se diferencian por la transmisión del mensaje y las posibilidades de respuesta del público:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 10.
            span Comunicación unidireccional y bidireccional
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Modalidad
                  th.ajuste-border-tabla.texto-left Características
                  th.texto-left Posibilidad de respuesta
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Comunicación unidireccional
                  td.ajuste-border-tabla.texto-left La organización transmite información y se centra principalmente en la emisión del mensaje.
                  td.texto-left La posibilidad de respuesta del público es limitada.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Comunicación bidireccional
                  td.ajuste-border-tabla.texto-left Permite consultas, conversaciones o retroalimentación mediante comentarios, mensajería, formularios o chats.
                  td.texto-left El público puede interactuar, por lo que deben gestionarse sus respuestas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Claridad comunicativa
      p.mb-5 La claridad facilita que el público comprenda el contenido y la finalidad del mensaje. Para lograrlo, la información debe organizarse según las características de las personas destinatarias y evitar elementos innecesarios, contradicciones o datos desactualizados. Puede fortalecerse mediante los siguientes criterios:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Lenguaje apropiado
                  p.mb-0 Utilizar expresiones acordes con las características y necesidades del público al cual se dirige el mensaje.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Información necesaria
                  p.mb-0 Evitar contenidos innecesarios que puedan dificultar la identificación de las ideas principales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Organización de las ideas
                  p.mb-0 Estructurar la información de manera que facilite la comprensión del contenido comunicado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presentación del beneficio
                  p.mb-0 Expresar con claridad el beneficio cuando este forme parte de la finalidad del mensaje.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Indicación de acciones
                  p.mb-0 Precisar las acciones que debe realizar el usuario cuando resulten necesarias dentro de la comunicación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ausencia de contradicciones
                  p.mb-0 Mantener consistencia entre las ideas y la información presentada en el mensaje.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Información actualizada
                  p.mb-0 Conservar vigentes los datos comunicados para evitar confusiones o decisiones basadas en información desactualizada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img20.png', alt='' style="max-width: 500px").m-auto
      .row.align-items-center.mb-0
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img34.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La claridad adquiere especial importancia en los entornos digitales, donde una comunicación que no permite comprender rápidamente su finalidad puede dificultar la continuidad de la interacción.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Propósito y enfoque del mensaje
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img21.png')})` }")
        .bloque-texto-g__texto.p-4
          p Todo mensaje digital debe responder a una finalidad definida antes de elaborar el contenido. Establecer qué se pretende comunicar y qué respuesta se espera facilitar permite orientar su estructura, seleccionar el enfoque adecuado y mantener correspondencia entre las necesidades del público, la propuesta de valor y la acción esperada.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Propósito del mensaje
      p.mb-5 El propósito define la función principal del mensaje y orienta la forma de presentar la información y promover una respuesta del público. Los propósitos comunicativos y sus funciones se relacionan de la siguiente manera:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 11.
            span Propósitos del mensaje digital
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Propósito
                  th.texto-left Función del mensaje
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Informar
                  td.texto-left Proporcionar información relevante relacionada con una situación, producto, servicio o proceso.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Orientar
                  td.texto-left Facilitar la comprensión de los pasos o decisiones que una persona debe seguir.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Educar
                  td.texto-left Aportar información que contribuya a comprender un tema, proceso o situación determinada.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Promocionar
                  td.texto-left Comunicar una oferta, un beneficio o una condición que se desea destacar.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Persuadir
                  td.texto-left Presentar argumentos orientados a favorecer una determinada respuesta del público.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Recordar
                  td.texto-left Reforzar información previamente comunicada para mantenerla presente en un momento determinado.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Atender
                  td.texto-left Responder consultas, solicitudes o necesidades surgidas durante la interacción con el público.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Generar interacción
                  td.texto-left Favorecer la participación, la conversación o alguna forma de respuesta por parte de las personas.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Facilitar una acción
                  td.texto-left Orientar al público hacia una actividad concreta relacionada con el propósito de la comunicación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de mensajes según su finalidad
      p.mb-5 Los mensajes pueden adoptar distintos enfoques según la función que cumplen y la respuesta esperada del público. Los tipos de mensajes se distinguen por su finalidad y sus características:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 12.
        span Tipos de mensajes según su finalidad
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Tipo de mensaje
              th.ajuste-border-tabla.texto-left Finalidad
              th.texto-left Características
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Mensajes informativos
              td.ajuste-border-tabla.texto-left Proporcionar información sobre características, procedimientos, horarios, cambios o instrucciones.
              td.texto-left El mensaje debe ser preciso y facilitar la comprensión.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Mensajes promocionales
              td.ajuste-border-tabla.texto-left Destacar una oferta, un beneficio o una condición.
              td.texto-left El mensaje debe ser claro y evitar expectativas incorrectas. Puede organizarse mediante la secuencia: necesidad → beneficio → oferta → acción.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Mensajes de orientación
              td.ajuste-border-tabla.texto-left Indicar qué debe hacer la persona en procesos, formularios, registros o servicios.
              td.texto-left El mensaje debe reducir dudas y presentar instrucciones directas.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img22.png', alt='' style="max-width: 500px").m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img34.svg', alt='' style="width: 70px").m-auto
            .col-xl
              p.mb-0 La estructura de un mensaje promocional puede organizar los elementos de manera progresiva:
          .caja-1.color-1(data-aos="fade-left")
            p.mb-0 #[b Ejemplo aplicado:] necesidad: dificultad para acceder rápidamente a determinada solución. Beneficio: disponibilidad de un proceso más sencillo. Oferta: servicio que proporciona dicha posibilidad. Acción: mecanismo para obtener información o realizar una solicitud.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Enfoque centrado en el público
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La comunicación debe relacionarse con las necesidades del público y no centrarse únicamente en la perspectiva de la organización. Un enfoque orientado al usuario vincula la información con beneficios relevantes. La misma información puede formularse de manera diferente según el enfoque utilizado:
          .caja-1.color-3(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] un enfoque organizacional puede expresar: «Nuestra empresa cuenta con quince años de experiencia». Aunque la información puede ser relevante, no responde necesariamente de inmediato a una necesidad del público. Un enfoque orientado al usuario podría plantear: «Acceso a acompañamiento especializado respaldado por experiencia en el servicio». De esta manera, la información organizacional se relaciona con una utilidad para el receptor.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img23.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Propuesta de valor en el mensaje
      p.mb-5 La propuesta de valor debe mantener coherencia entre las necesidades del público y la oferta de la organización. No siempre es necesario incluir todos sus componentes, pero sí conservar relación con la propuesta general. Puede organizarse mediante la siguiente secuencia:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Necesidad
                p.mb-0 Identifica la situación o requerimiento del público al cual responde la comunicación.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img24.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img25.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Solución
                p.mb-0 Presenta aquello que la organización ofrece para atender la necesidad identificada.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Beneficio
                p.mb-0 Expresa la utilidad o el aporte que la solución puede representar para el público.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img26.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img27.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Diferenciador
                p.mb-0 Destaca aquello que permite distinguir la propuesta dentro de la comunicación.
      p.mb-5 No todos los mensajes necesitan incorporar los cuatro elementos de manera explícita; sin embargo, deben mantener correspondencia con la propuesta de valor general.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Llamado a la acción
      p.mb-5 Cuando se espera que una persona realice una acción, el mensaje debe indicarla con claridad y mantener coherencia con su propósito y el momento de la interacción. Entre las acciones que pueden plantearse explícitamente se encuentran:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t4/img28.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img29.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Consultar información
                  p.mb-0.text-center Orientar al público hacia contenidos que amplíen o complementen la información disponible.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img30.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Solicitar asesoría
                  p.mb-0.text-center Invitar a establecer contacto para recibir orientación relacionada con una necesidad determinada.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img31.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Registrarse
                  p.mb-0.text-center Indicar el mecanismo mediante el cual una persona puede completar un proceso de registro.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img32.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Descargar
                  p.mb-0.text-center Orientar hacia la obtención de un recurso disponible mediante un medio digital.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img33.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Comprar
                  p.mb-0.text-center Indicar la acción correspondiente cuando el propósito de la comunicación se relaciona con una compra.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img34.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Reservar
                  p.mb-0.text-center Facilitar el acceso al mecanismo previsto para realizar una reserva.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img35.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Contactar
                  p.mb-0.text-center Orientar al público hacia el medio dispuesto para establecer comunicación con la organización.
      p.mb-0 El llamado a la acción debe corresponder con el momento y el propósito de la comunicación, de manera que la respuesta solicitada mantenga coherencia con el contenido presentado.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Identidad y coherencia comunicativa
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img36.png')})` }")
        .bloque-texto-g__texto.p-4
          p La identidad y la coherencia comunicativa permiten mantener una forma reconocible de expresión en los diferentes medios digitales. Su aplicación integra elementos verbales y visuales, información consistente y mensajes acordes con la experiencia ofrecida, de manera que los distintos puntos de contacto conserven continuidad y correspondencia.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Identidad verbal y visual
      p.mb-5 La identidad comunicativa se construye mediante elementos verbales y visuales que deben mantenerse de forma consistente entre los distintos medios, sin impedir su adaptación a cada formato o público. La identidad comunicativa comprende las siguientes dimensiones y criterios de aplicación:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 13.
            span Identidad verbal y visual
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Tipo de identidad
                  th.texto-left Componentes y criterios de aplicación
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Identidad verbal
                  td.texto-left Comprende el tono, el estilo, el vocabulario, el nivel de formalidad y la manera de dirigirse al público. Debe mantenerse coherente entre los distintos medios.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Identidad visual
                  td.texto-left Incluye colores, tipografía, logotipos, estilo de imágenes, composición y recursos gráficos. Estos elementos favorecen el reconocimiento y deben conservar consistencia entre formatos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Coherencia de la información
      p.mb-5 La coherencia comunicativa requiere que la información conserve consistencia en los diferentes medios utilizados por la organización. Las diferencias entre datos relacionados con una misma oferta pueden generar confusión, disminuir la confianza del público o dificultar el proceso de decisión durante sus interacciones digitales. La coherencia entre medios requiere mantener consistencia en los siguientes aspectos:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 14.
            span Criterios de coherencia de la información
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Aspecto
                  th.texto-left Criterio de coherencia
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Precios
                  td.texto-left Los valores comunicados deben conservar correspondencia entre los diferentes medios en los que se presenta una misma oferta.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Características
                  td.texto-left La descripción de los productos o servicios debe mantener información consistente para evitar diferencias sobre aquello que se ofrece.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Disponibilidad
                  td.texto-left La información sobre la disponibilidad de una oferta debe mantenerse actualizada y ser coherente entre los distintos puntos de contacto.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Condiciones
                  td.texto-left Las condiciones asociadas con una oferta deben presentarse de manera consistente para evitar interpretaciones contradictorias entre medios.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Horarios
                  td.texto-left Los horarios informados deben coincidir en los diferentes canales utilizados para orientar la interacción con el público.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Beneficios
                  td.texto-left Los beneficios comunicados deben conservar el mismo sentido y evitar diferencias que puedan generar expectativas distintas sobre la oferta.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Información de contacto
                  td.texto-left Los datos suministrados para establecer comunicación deben mantenerse vigentes y conservar correspondencia entre los medios utilizados.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Procedimientos
                  td.texto-left Las orientaciones sobre procesos deben ser consistentes para evitar que las personas reciban instrucciones diferentes según el medio consultado.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Coherencia entre mensaje y experiencia
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La comunicación debe corresponder con lo que la organización realmente puede ofrecer. Cuando existe una diferencia entre la promesa y la experiencia, pueden generarse insatisfacción y pérdida de credibilidad. Esta relación puede identificarse en la siguiente situación:
          .caja-1.color-1(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] comunicar «respuesta inmediata» cuando un canal tarda varias horas en atender solicitudes genera una diferencia entre la promesa expresada y la experiencia que recibe el usuario.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img37.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La coherencia requiere mantener correspondencia entre ambos elementos:
      .row.justify-content-center.mb-5
        .col-xl-6
          .caja-1.color-2(data-aos="zoom-in")
            h5.mb-0.text-center Mensaje comunicado = experiencia que la organización puede ofrecer
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Manuales y criterios comunicativos
      p.mb-5 La consistencia puede fortalecerse mediante criterios comunes que orienten la forma de presentar información, utilizar recursos gráficos, dirigirse al público y responder durante las interacciones. Estas orientaciones pueden establecer criterios sobre los siguientes aspectos:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t4/img38.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img39.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Tono
                  p.mb-0.text-center Define la forma general de expresión que debe conservarse cuando diferentes personas desarrollan mensajes para la organización.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img40.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Palabras recomendadas
                  p.mb-0.text-center Establece expresiones que favorecen la coherencia con la forma de comunicación definida por la organización.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img41.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Palabras que deben evitarse
                  p.mb-0.text-center Identifica expresiones que no corresponden con los criterios comunicativos establecidos o que pueden generar interpretaciones inadecuadas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img42.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Presentación de productos
                  p.mb-0.text-center Orienta la manera en que deben comunicarse las características, los beneficios y demás información relacionada con los productos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img43.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Uso de elementos gráficos
                  p.mb-0.text-center Establece criterios para utilizar recursos visuales de forma consistente en las diferentes comunicaciones de la organización.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img44.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Respuestas frecuentes
                  p.mb-0.text-center Define orientaciones comunes para responder consultas o situaciones que se presentan repetidamente durante la comunicación con el público.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img45.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Atención de situaciones específicas
                  p.mb-0.text-center Proporciona criterios para abordar determinados casos y mantener coherencia cuando diferentes personas participan en la atención.
      p.mb-0 Estas orientaciones permiten que distintas personas comuniquen bajo criterios comunes y contribuyan a mantener una identidad coherente en los diferentes medios.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Adaptación del mensaje al medio digital	
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img46.png')})` }")
        .bloque-texto-g__texto.p-4
          p Un mismo mensaje puede requerir distintas formas de presentación según el medio digital en el que se comunique. La adaptación considera aspectos como extensión, formato, velocidad, comportamiento del usuario y posibilidades de interacción, sin modificar el significado principal, el propósito ni la información esencial de la comunicación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Adaptación según el medio digital
      p.mb-5 Cada medio presenta condiciones particulares para comunicar e interactuar con el público. Por ello, el mensaje debe adaptarse al canal sin perder su sentido principal, ajustando la extensión, la estructura y los recursos utilizados. Las características del mensaje se ajustan a cada medio digital de la siguiente manera:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 15.
            span Adaptación del mensaje según el medio digital
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Medio digital
                  th.texto-left Características del mensaje
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Sitio web
                  td.texto-left Permite presentar información amplia y estructurada, facilitando el acceso a descripciones, beneficios, condiciones y contenidos complementarios.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Redes sociales
                  td.texto-left En redes sociales suelen utilizarse mensajes breves y visuales que capten la atención sin perder claridad.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Correo electrónico
                  td.texto-left Permite comunicaciones directas y estructuradas con asunto, información principal, beneficio y llamado a la acción, evitando múltiples propósitos en un mismo mensaje.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Mensajería
                  td.texto-left Facilita una comunicación directa y conversacional para resolver consultas, orientar procesos, brindar soporte y realizar seguimiento.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Adaptación del formato
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La adaptación también implica seleccionar la forma de presentación más adecuada para cada medio. Una misma idea puede comunicarse mediante diferentes formatos sin alterar la información central, siempre que la forma elegida corresponda con las características del canal y facilite el propósito previsto. Una misma información puede adoptar diferentes formas de presentación según el medio utilizado:
          .caja-1.color-3(data-aos="fade-right")
            p.mb-0 #[b Ejemplo aplicado:] la información sobre el uso de un servicio puede presentarse mediante una explicación completa en el sitio web, un carrusel con pasos en una red social, una demostración práctica en video o una respuesta breve con instrucciones mediante mensajería. La información central permanece, pero cambia su forma de presentación.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img47.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Consistencia durante la adaptación
      p.mb-5 Adaptar un mensaje implica ajustar su forma al medio sin cambiar su sentido ni generar contradicciones. Para mantener continuidad entre los distintos puntos de contacto, deben conservarse los siguientes elementos:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img48.png", alt="" style="width: 250px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Mensaje principal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La idea central debe mantenerse entre los distintos medios, aunque cambien su extensión o forma de presentación.
            .row(titulo="Propuesta de valor").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El beneficio y la orientación general de la oferta deben conservar correspondencia en las diferentes comunicaciones.
            .row(titulo="Datos esenciales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La información necesaria para comprender el mensaje debe mantenerse correcta y consistente en cada medio.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Condiciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las condiciones asociadas con la oferta o el servicio deben conservarse sin contradicciones durante la adaptación.
            .row(titulo="Identidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los elementos que caracterizan la comunicación de la organización deben mantener continuidad entre los diferentes medios.
            .row(titulo="Propósito").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La finalidad del mensaje debe conservarse, aunque su estructura o formato se modifiquen para responder a las características del canal.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img49.png", alt="" style="width: 250px").m-auto
      p.mb-0 De esta manera, la adaptación permite ajustar la presentación del contenido a cada medio sin alterar su sentido principal ni generar mensajes contradictorios.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Lineamientos para la comunicación comercial	
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img50.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p.mb-0 La comunicación comercial reúne los mensajes vinculados con la promoción, presentación y comercialización de productos o servicios. Debido a su influencia en las decisiones del consumidor, debe desarrollarse con claridad, responsabilidad y coherencia, procurando que la información presentada corresponda con las características reales de la oferta y sus condiciones.
      p.mb-5 Los criterios que orientan una comunicación comercial clara, responsable y coherente se desarrollan mediante el siguiente pódcast:
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.caja-6(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t4/img51.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;Lineamientos para la comunicación comercial&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t4/img52.png" style="max-width: 510px").m-auto

</template>

<script>
import audio1 from '@/assets/curso/temas/t4/audios/audio-ej.mp3'
export default {
  name: 'Tema4',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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

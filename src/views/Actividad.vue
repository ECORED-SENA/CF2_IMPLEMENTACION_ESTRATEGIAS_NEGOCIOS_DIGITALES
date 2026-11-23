<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario sobre implementación y seguimiento de estrategias digitales',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar el nivel de apropiación de los conocimientos relacionados con la formulación de estrategias de mercadeo digital, la definición y priorización de tácticas, la planificación y ejecución de acciones y la aplicación de criterios de comunicación digital.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
{
          id: 1,
          texto: 'Una empresa publica en varios medios digitales sin definir qué resultado busca. ¿Qué decisión debería tomar antes de continuar?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elegir los medios que concentran más usuarios en el entorno digital.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Definir el objetivo y orientar las decisiones hacia dicho resultado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar las publicaciones para reforzar la actividad de los medios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Repetir las acciones que las compañías del sector realizan en línea.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'Una empresa quiere aumentar las solicitudes de información. Antes de abrir otra plataforma, ¿qué criterio debe revisar para mantener la alineación estratégica?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de empresas del sector que utilizan actualmente esa plataforma.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La variedad de funciones que la plataforma ofrece para crear publicaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La frecuencia de actualización que la plataforma anuncia para sus usuarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El vínculo del medio con el objetivo, el público y los recursos existentes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: 'Una organización conoce las necesidades de su público y define el beneficio de su oferta. ¿Qué corresponde hacer para aplicar el mercadeo electrónico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Relacionar la propuesta de valor con el mensaje y los medios convenientes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Organizar los medios según los formatos que prefiere el equipo de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Concentrar la oferta en el canal con más volumen de publicaciones diarias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tomar las herramientas actuales como base para definir el beneficio final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'Al estructurar una estrategia digital, el equipo identifica personal, presupuesto, tiempo y herramientas. ¿A qué elemento de la estrategia corresponde esta información?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Al público prioritario al que se dirigirán las diversas acciones digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'A los resultados esperados que orientan la selección de acciones digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'A los recursos y medios disponibles para implementar la estrategia digital.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'A la situación del usuario que define el beneficio de la propuesta digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: 'Una campaña utiliza un sitio web, correo electrónico y mensajería. ¿Qué condición permite integrar estos medios dentro de una misma estrategia?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar el uso de cada medio mediante objetivos diferentes entre sí.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Coordinar las funciones de los medios alrededor de un resultado común.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mantener cada medio centrado en la preferencia de quien lo administra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Seleccionar contenidos de cada medio según las tendencias del momento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: 'Una estrategia define una orientación general. ¿Qué aporta la táctica para avanzar hacia su ejecución?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un enfoque específico de actuación que puede concretarse en varias acciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un resultado global que sustituye el objetivo definido para la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una actividad ejecutada que reemplaza la dirección de la estrategia digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una fecha de entrega que determina el resultado esperado de toda la campaña.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: 'Una empresa decide simplificar sus puntos de contacto y luego reduce los campos de un formulario. ¿Cómo se clasifican, respectivamente, estas decisiones?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una estrategia orientada al contacto y una táctica para desarrollarla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un objetivo relacionado con el contacto y la estrategia para lograrlo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una táctica orientada al contacto y una estrategia para su desarrollo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una táctica dirigida al contacto y una acción concreta para aplicarla.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: 'Una campaña busca que las personas interesadas completen un registro. ¿Qué tipo de táctica corresponde a ese comportamiento esperado?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una táctica de visibilidad que aumente el reconocimiento de la oferta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una táctica de interacción que fomente conversaciones sobre la oferta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una táctica de conversión que facilite completar el registro previsto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una táctica de fidelización que refuerce la relación con sus clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'El público de una campaña prefiere consultar información detallada antes de contactar a la empresa. ¿Qué táctica corresponde a ese comportamiento?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Facilitar información completa y disponer mecanismos para consultas posteriores.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Priorizar conversaciones inmediatas para solucionar todas las dudas del público.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar la frecuencia de mensajes breves dirigidos directamente a los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recopilar la información en formularios que deban rellenarse antes de consultar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'Dos tácticas pertinentes apoyan el mismo objetivo. Una requiere poco esfuerzo y tiene alto impacto; otra exige gran esfuerzo y tiene bajo impacto. ¿Cuál debería priorizarse?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La táctica de bajo impacto y alto esfuerzo, por su complejidad técnica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ambas tácticas al mismo tiempo, dado que se relacionan con el objetivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La táctica de mayor esfuerzo, porque demanda más recursos de ejecución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La táctica de alto impacto y bajo esfuerzo, por el beneficio potencial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: 'Durante la planificación aparece la propuesta «mejorar las redes sociales». ¿Qué formulación la convierte en una acción específica y verificable?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fortalecer la presencia de la organización en los diferentes medios digitales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejorar la calidad de los contenidos comerciales dirigidos al público digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Actualizar la información comercial de los perfiles durante esta misma semana.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Impulsar la relación de la organización con las personas del público objetivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'Una publicación requiere información comercial aprobada antes de redactarse. ¿Qué decisión permite organizar esa dependencia durante la planificación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asignar a ambas actividades una misma fecha para desarrollarlas en paralelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Programar la aprobación de la información antes de empezar con la redacción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Comenzar la redacción y revisar la información después de publicar el texto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener las tareas separadas para impedir cambios en sus fechas de entrega.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'Dos personas preparan el mismo contenido y otra tarea queda sin atender. ¿Qué medida de planificación ayuda a evitar esta situación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asignar todos los contenidos al equipo sin diferenciar las responsabilidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Distribuir los contenidos según los medios utilizados sin definir encargados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Establecer una fecha común para las actividades sin definir sus responsables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Asignar responsables y plazos para cada actividad prevista dentro de un plan.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: 'Varias personas publican contenidos con criterios distintos. ¿Qué recurso permite unificar la ejecución y comprobar que cada actividad cumple las condiciones previstas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una guía con procedimientos y criterios comunes para revisar las actividades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un calendario de fechas de publicación y fechas de cierre de las actividades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un listado de plataformas disponibles para elaborar los contenidos digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un registro de publicaciones anteriores organizadas por fecha de realización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: 'Una herramienta falla y bloquea una acción digital en ejecución. ¿Qué respuesta corresponde al seguimiento operativo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar la actividad como completada para mantener el progreso del plan.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reiniciar toda la estrategia antes de analizar la dificultad de ejecución.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar la incidencia y ajustar la ejecución según el propósito inicial.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Conservar la programación inicial y aguardar hasta cerrar toda la campaña.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: 'Un canal permite que el público consulte, responda y converse con la organización. ¿Qué característica de la comunicación digital se aplica?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La comunicación unidireccional, porque distribuye información al público.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La identidad comunicativa, porque mantiene un mismo lenguaje reconocible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La adaptación del mensaje, porque ajusta su contenido al medio utilizado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La comunicación bidireccional, porque admite el diálogo y las respuestas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: 'Un mensaje explica un servicio y busca recibir solicitudes de información. ¿Qué llamado a la acción mantiene coherencia con ese propósito?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Descargue el catálogo completo de productos disponibles en esta categoría.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comparta el contenido publicado con personas interesadas en este servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solicite información sobre el servicio mediante el formulario de contacto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Investigue la historia de la compañía y conozca sus principales proyectos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: 'Un canal tarda varias horas en atender solicitudes, pero anuncia «respuesta inmediata». ¿Qué ajuste mantiene coherencia entre el mensaje y la experiencia?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Repetir la promesa de respuesta inmediata en los demás medios de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comunicar un tiempo de respuesta que corresponda con la atención disponible.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mantener la promesa de atención y quitar los mecanismos de consulta directa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Abreviar la información sobre la atención para conservar la promesa inicial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: 'Una oferta se difunde en el sitio web y en mensajería. ¿Qué ajuste conserva la coherencia comunicativa al adaptarla a cada medio?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar la presentación y conservar el precio, las condiciones y el propósito.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Modificar las condiciones de la oferta según el espacio existente en el medio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conservar textos idénticos en ambos medios aunque obstaculicen la comprensión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modificar el beneficio comunicado a fin de diferenciar cada punto de contacto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: 'Una empresa prepara un mensaje comercial sobre un servicio. ¿Qué criterio debe cumplir la información para orientar responsablemente la decisión del consumidor?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resaltar los beneficios potenciales sin especificar las condiciones del servicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Corresponder con las características reales del servicio y condiciones ofrecidas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Utilizar condiciones más favorables que las disponibles para aumentar el interés.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presentar beneficios que todavía no estén disponibles para sumar nuevos usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        }
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

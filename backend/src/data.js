const data = {
  challenges: [
    {
      title: '20 ORDENADORES PARA LA ESCOLA MIL-LENARI',
      date: 'November 30, 2020',
      miniDescription: 'La Escola Mil-lenari de Cardedeu necesita recopilar 20 ordenadores portátiles para los niños de la clase de 2º Primaria, para mantener la actividad de estudio en caso de confinamiento',
      description: 'La pandemia causada por la COVID-19 nos mostró la necesidad de adaptar nuestra vida ante posibles confinamientos.Durante el primer confinamiento sufrido durante el periodo de Marzo-Junio de 2020, desde la Escola pudimos observar que los niños que podian disponer de medios informáticos lograban mantener un buen ritmo académico, mientras que los que  no tenian dichos medios vieron muy comprometido su desarrollo académico. Por este motivo, iniciamos este Challenge para que ningún niño vea perjudicado su aprendizaje por causas económicas. Si consideras que todos debemos tener igualdad de oportunidades, ¡Únete al reto!',
      category: 'Children',
      image: 'https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      target: 2000,
      collected: 100,
      participants: 3,
      days: 30,
      creator: 'Victor',
      lat: 41.636077760895915,
      lng: 2.362037440802656,
    },
    {
      title: '500 MANTAS PARA AYUDA A PERSONAS SIN TECHO',
      date: 'November 15, 2020',
      miniDescription: 'La Asociación de vecinos de Granollers solicita recopilar 500 mantas para ayudar a personas sin techo durante este invierno',
      description: 'En Granollers hemos detectado que cada vez es mayor la comunidad de personas sin techo que viven y duermen en las calles. Por este motivo, hemos decidido ayudar recopilando mantas para todas estas personas-¡Ayudanos con este reto!',
      category: 'Homeless',
      image: 'https://images.pexels.com/photos/758794/pexels-photo-758794.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      target: 1500,
      collected: 800,
      participants: 25,
      days: 17,
      creator: 'Albert',
      lat: 41.60826049795665,
      lng: 2.2872998604405472,
    },
    {
      title: '200 Km en BTT por la diabetes',
      date: 'November 15, 2020',
      miniDescription: 'El próximo 17 de abril correré 200 km en BTT para recaudar fondos para la cura de la diabetes. Ayudanos a lograr este reto. Colabora y comparte',
      description: 'El próximo 14 de noviembre, dia internacional de la diabetes, hará tres años que nuestro hijo Joan convive con esta enfermedad. Desde entonces nuestro mayor deseo és que llegue el dia en el que la diabetes tenga cura. Por este motivo, y por cuarto año consecutivo, iniciamos un doble reto; acabar 200 quilómetros en BTT y recaudar fondos para la Fundación Diabetes Cero y para el CIDI (Centro para la innovación para la diabetes infantil) del Hospital Sant Joan de Deu.  Ayudanos una vez mas a lograr este nuevo reto. Colabora y comparte. ',
      category: 'Support',
      image: 'https://images.pexels.com/photos/287398/pexels-photo-287398.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      target: 2000,
      collected: 50,
      participants: 1,
      days: 29,
      creator: 'Gerard',
      lat: 41.599842293714985,
      lng: 2.2914629744953348,
    },
    {
      title: 'EPIS para garantizar el acompañamiento a las personas con autismo',
      date: 'September 9, 2020',
      miniDescription: 'Buscamos garantizar los recursos y servicios especializados para las personas con autismo y sus familias.',
      description: 'El impacto económico de la COVID-19 para las entidades del tercer sector pone en peligro la sostenibilidad de estas. Ahora más que nunca, ninguna persona con autismo debe quedar atrás. ¡Dona y ayúdanos a seguir a su lado!',
      category: 'Support',
      image: 'https://media.istockphoto.com/photos/autism-syndrome-person-picture-id1136507411',
      target: 3800,
      collected: 270,
      participants: 72,
      days: 5,
      creator: 'Santi',
      lat: 41.39867113104639,
      lng: 2.199980997782548,
    },
    {
      title: '¡STOP LUPUS!',
      date: 'September 5, 2020',
      miniDescription: 'La Asociación Catalana de Lupus E.G quiere apoyar la investigación que lleva a cabo el Hospital Clínic de Barcelona, aportando recursos para aumentar el grupo con un investigador dedicado al ensayo de la eficacia de nuevos medicamentos.',
      description: 'En el año 1995 el Hospital Clínico de Barcelona creó el Servicio de Enfermedades Autoinmunes, liderado por el Dr. Ricard Cervera,  desde el que se presta atención especializada a pacientes con enfermedades autoinmunes sistémicas como el lupus. También lleva a cabo proyectos de investigación a través de los cuales ha conseguido logros internacionalmente reconocidos en la mejora de tratamientos y la publicación de más de 500 artículos en prestigiosas revistas científicas. Gracias a la investigación el pronóstico del paciente de lupus ha mejorado de forma notable en los últimos 20 años. De una supervivencia del 50% al cabo de 5 años del diagnóstico actualmente este índice se sitúa en el 90%.',
      category: 'Support',
      image: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      target: 10000,
      collected: 9402,
      participants: 54,
      days: 18,
      creator: 'Helga',
      lat: 41.39867113104639,
      lng: 2.199980997782548,
    },
    {
      title: 'SALVAR EL HOGAR DE NUESTROS ANIMALES',
      date: 'November 13, 2020',
      miniDescription: 'Necesitamos tu ayuda para comprar el terreno donde está ubicada nuestra protectora para poder asegurar un hogar y un futuro a todos los animales necesitados.',
      description: 'A principios de este año se nos notificó que el terreno que nos habían cedido para crear el hogar de nuestra protectora, donde refugiamos a cientos de animales necesitados, se ponía a la venta. Nos piden 60.000€. Y no lo tenemos. Si no compramos este terreno, ¿Qué vamos a hacer con todos nuestros peludos? ¿Dónde irán a parar? ¿Y quién va a rescatar a los más necesitados? No queremos ni imaginarlo. Tenemos de tiempo hasta finales de 2020, si no conseguimos el dinero antes para comprar el terreno, no podremos quedarnos más y no sabemos qué vamos a hacer con todos los animales que tenemos... NECESITAMOS comprar el hogar de todos nuestros animales, no nos queremos rendir y vamos a luchar por que este refugio sea al fin nuestro refugio, SU REFUGIO para siempre.',
      category: 'Support',
      image: 'https://images.pexels.com/photos/3628100/pexels-photo-3628100.jpeg?cs=srgb&dl=pexels-eddie-galaxy-3628100.jpg&fm=jpg',
      target: 50000,
      collected: 25006,
      participants: 524,
      days: 19,
      creator: 'Marta',
      lat: 41.39867113104639,
      lng: 2.199980997782548,
    },
    {
      title: 'Conectamos a los invisibles',
      date: 'November 27, 2020',
      miniDescription: 'Ayúdanos a conectar con el mundo a personas con discapacidad y de la 3ª edad que están confinadas en residencias.',
      description: 'Debido a la situación de aislamiento, tanto físico como social, que viven las personas usuarias en residencias para personas con discapacidad, gente de la tercera edad, personas ingresadas temporalmente en hospitales o usuarios de centros especiales de ocupación y de educación, transformamos nuestros programas, hasta el momento completamente presenciales, a un proyecto basado en la virtualidad, pero que ha querido mantener la esencia de reforzar el vínculo con las personas usuarias.',
      category: 'Support',
      image: 'https://images.pexels.com/photos/3823542/pexels-photo-3823542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      target: 5000,
      collected: 3000,
      participants: 2,
      days: 173,
      creator: 'Albert',
      lat: 41.39867113104639,
      lng: 2.199980997782548,
    },
  ],
};

export default data;

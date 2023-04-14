let questions = [
    {
    numb: 1,
    question: "¿Qué es el área de seguridad en Metro de Madrid?",
    answer: "Es un tramo de línea que protege a los equipos de trabajadores y prohíbe la circulación de trenes sin autorización expresa.",
    options: [
        'Es un tramo de línea donde se realizan trabajos fuera del horario de servicio.',
        'Es un tramo de línea que permite la circulación de trenes sin autorización expresa.',
        'Es un tramo de línea que protege a los equipos de trabajadores y prohíbe la circulación de trenes sin autorización expresa.',
        'Es un tramo de línea que solo permite la circulación de trenes de mantenimiento.'
    ]
    },
    {
    numb: 2,
    question: "¿Cómo se define el área de trabajo en Metro de Madrid?",
    answer: 'Es un tramo de línea en el que se autoriza la realización de trabajos durante el horario de servicio.',
    options: [
        'Es un tramo de línea en el que se autoriza la circulación de trenes durante el horario de servicio.',
        'Es un tramo de línea en el que se autoriza la realización de trabajos durante el horario de servicio.',
        'Es un tramo de línea que solo puede ser ocupado por trenes auxiliares.',
        'Es un tramo de línea que no está autorizado para la circulación de trenes.'
    ]
    },
    {
    numb: 3,
    question:"¿Qué es el Auto-Shunt en Metro de Madrid?",
    answer: 'Una maniobra de inversión de marcha que se realiza sin conductor.',
    options: [
        'Un tipo de tren de alta velocidad.',
        'Una maniobra de inversión de marcha que se realiza sin conductor.',
        'Un sistema de control de tráfico centralizado.',
        'Un documento de programación.'
    ]
    },
    {
        numb: 4,
        question:"¿Qué es el Boletín de acceso a la plataforma de vía en Metro de Madrid?",
        answer: 'Un impreso que se cumple para autorizar el acceso de trabajadores a la plataforma de vía.',
        options: [
            'Un impreso que se cumple para autorizar el acceso de trabajadores a la plataforma de vía.',
            'Un sistema de seguridad que supervisa el estado de los circuitos de vía, señales, agujas y calzos.',
            'Un tramo de vía compuesto por uno o varios circuitos de vía y delimitado por dos señales consecutivas.',
            'Un documento elaborado por la Comisión de programación en el que figuran, para cada día, los cortes de tensión previstos y los trabajos programados.'
        ]
      },
      {
        numb: 5,
        question:"¿Qué es un enclavamiento de señales en Metro de Madrid?",
        answer: 'Un sistema de seguridad que supervisa el estado de los circuitos de vía, señales, agujas y calzos.',
        options: [
            'Un grupo de trabajadores que acceden a la plataforma de vía para realizar una misma actividad.',
            'Un sistema de seguridad que supervisa el estado de los circuitos de vía, señales, agujas y calzos.',
            'Un tramo de vía compuesto por uno o varios circuitos de vía y delimitado por dos señales consecutivas.',
            'Un documento elaborado por la Comisión de programación en el que figuran, para cada día, los cortes de tensión previstos y los trabajos programados.'
        ]
      },
      {
        numb: 6,
        question:"¿Qué es el Auto-Shunt?",
        answer: 'Una maniobra de inversión de marcha realizada sin conductor en el modo de conducción ATO.',
        options: [
            'Una maniobra de inversión de marcha realizada con conductor en el modo de conducción ATO.',
            'Una maniobra de inversión de marcha realizada sin conductor en el modo de conducción ATO.',
            'Una maniobra de inversión de marcha realizada en el modo de conducción manual con conductor.',
            'Una maniobra de inversión de marcha realizada en el modo de conducción manual sin conductor.'
        ]
      },
      {
        numb: 7,
        question:"¿Qué es el Área de Seguridad?",
        answer: 'Es un tramo de línea en el que se prohíbe la circulación de trenes sin autorización expresa del PCC.',
        options: [
            'Es un tramo de línea autorizado para la realización de trabajos en el periodo fuera de servicio.',
            'Es un tramo de línea en el que se prohíbe la circulación de trenes sin autorización expresa del PCC.',
            'Es el recinto donde se encierran los trenes para su estancia, revisión, reparación o limpieza.',
            'Es un elemento aislante de la catenaria que permite independizar sectores de tracción distintos.'
        ]
      },
      {
        numb: 8,
        question:"¿Qué es un Cantón?",
        answer: 'Un tramo de vía compuesto por uno o varios circuitos de vía y delimitado por dos señales consecutivas.',
        options: [
            'Un tramo de vía compuesto por uno o varios circuitos de vía y delimitado por dos señales consecutivas.',
            'Un sistema electromecánico o electrónico de seguridad que supervisa permanentemente el estado de los circuitos de vía, señales, agujas y calzos de un tramo de vía.',
            'Una marcha adelante de un tren, en sentido contrario al usualmente asignado a la vía por la que circula, con conductor en la cabeza del tren.',
            'Un elemento aislante de la catenaria que permite independizar sectores de tracción distintos.'
        ]
      },
      {
        numb: 9,
        question:"¿Qué es el Control de Tráfico Centralizado (CTC)?",
        answer: 'Un sistema que permite la visualización de la ocupación de los trenes en la línea y el telemando de los enclavamientos de señales.',
        options: [
            'Un sistema que permite la visualización de la ocupación de los trenes en la línea y el telemando de los enclavamientos de señales.',
            'Un tramo de línea en el que se prohíbe la circulación de trenes sin autorización expresa del PCC.',
            'Una maniobra de inversión de marcha, que se realiza en el modo de conducción ATO.',
            'Un impreso que se cumple durante el periodo de servicio para autorizar el acceso de trabajadores a la plataforma de vía.'
        ]
      },
      {
        numb: 10,
        question:"¿Qué es la Estación?",
        answer: 'Conjunto de instalaciones preparado para que los viajeros puedan subir y bajar de los trenes.',
        options: [
            'Un tramo de línea en el que se autoriza la realización de trabajos en el periodo fuera de servicio.',
            'Un impreso que se cumple durante el periodo de servicio para autorizar el acceso de trabajadores a la plataforma de vía.',
            'El recinto donde se encierran los trenes para su estancia, revisión, reparación o limpieza.',
            'Conjunto de instalaciones preparado para que los viajeros puedan subir y bajar de los trenes.'
        ]
      },
      {
        numb: 11,
        question:"¿Qué es la Hoja de recogida de firmas?",
        answer: 'Un impreso que se cumplimenta durante el periodo de servicio en una estación, depósito o cochera, donde se registra el enterado de los conductores de los trenes, mediante su firma, de la presencia de trabajadores en la plataforma de vía.',
        options: [
            'Una campaña social organizada por change.org',
            'Documento elaborado por la comisión de programación en el que figuran los cortes de tensión previstos',
            'Un impreso que se cumplimenta durante el periodo de servicio en una estación, depósito o cochera, para autorizar el acceso de trabajadores a la fiesta de fin de año.',
            'Un impreso que se cumplimenta durante el periodo de servicio en una estación, depósito o cochera, donde se registra el enterado de los conductores de los trenes, mediante su firma, de la presencia de trabajadores en la plataforma de vía.'
        ]
      },
      {
        numb: 12,
        question:"¿Qué es el Consorcio Regional de Transportes Públicos Regulares de Madrid?",
        answer: 'Una entidad con personalidad jurídica y patrimonio propios que articula la cooperación y participación de la Comunidad de Madrid y de los Ayuntamientos de la misma en la gestión conjunta del servicio de transporte público regular de viajeros.',
        options: [
            'Una empresa privada encargada de la gestión del transporte público regular de viajeros en Madrid.',
            'Una entidad con personalidad jurídica y patrimonio propios que articula la cooperación y participación de la Comunidad de Madrid y de los Ayuntamientos de la misma en la gestión conjunta del servicio de transporte público regular de viajeros.',
            'Una organización no gubernamental que lucha por los derechos de los usuarios del transporte público en Madrid.',
            'Una asociación de empresas privadas que prestan servicios de transporte público en Madrid.'
        ]
      },
      {
        numb:13,
        question:"¿Qué empresas pueden prestar el servicio de transporte público regular de viajeros bajo la gestión del Consorcio Regional de Transportes Públicos Regulares de Madrid?",
        answer: 'Tanto empresas públicas municipales o supramunicipales actualmente existentes o que puedan crearse en el futuro, como empresas privadas.',
        options: [
            'Solo empresas públicas municipales o supramunicipales actualmente existentes.',
            'Solo empresas privadas.',
            'Tanto empresas públicas municipales o supramunicipales actualmente existentes o que puedan crearse en el futuro, como empresas privadas.',
            'Ninguna de las anteriores.'
        ]
      },
      {numb: 14,
        question:"¿Cuál es el ámbito territorial de actuación del Consorcio Regional de Transportes Públicos Regulares de Madrid?",
        answer: 'El de la Comunidad de Madrid.',
        options: [
            'El de la ciudad de Madrid.',
            'El de la Comunidad de Madrid.',
            'El de la península ibérica.',
            'El de toda España.'
        ]
      },
      {
        numb: 15,
        question:"¿Quién asignará el número de tren definitivo a un tren que entre en un circuito de vía de transferencia entre la cochera o depósito y la línea?",
        answer: 'El sistema de CTC',
        options: [
          'El conductor del tren',
          'El departamento de Metro',
          'El sistema de CTC',
          'El Consorcio'
        ]
      },
      {
        numb: 16,
        question:"    ¿Qué es el Consorcio Regional de Transportes Públicos Regulares de Madrid?",
        answer: 'Una entidad con personalidad jurídica y patrimonio propios creada para la cooperación y participación de la Comunidad de Madrid y de los Ayuntamientos de la misma en la gestión conjunta del servicio de transporte público regular de viajeros.',
        options: [
            'Una empresa privada de transporte público.',
            'Una entidad sin personalidad jurídica.',
            'Una entidad con personalidad jurídica y patrimonio propios creada para la cooperación y participación de la Comunidad de Madrid y de los Ayuntamientos de la misma en la gestión conjunta del servicio de transporte público regular de viajeros.',
            'Una empresa pública de transporte creada por la Comunidad de Madrid.'
        ]
      },
      {
        numb: 17,
        question:"    ¿Cuál es el ámbito territorial de actuación del Consorcio?",
        answer: 'La Comunidad de Madrid.',
        options: [
            'La ciudad de Madrid.',
            'El municipio de Madrid.',
            'La Comunidad de Madrid.',
            'La península ibérica.'
        ]
      },
      {numb: 18,
        question:"    ¿Qué competencias tiene el Consorcio sobre el transporte público regular de viajeros?",
        answer: 'Las que corresponden o le sean delegadas a la Comunidad de Madrid y las que correspondan a los Ayuntamientos de la Comunidad de Madrid que se hayan adherido voluntariamente al Consorcio mediante acuerdo plenario.',
        options: [
            'Solo las que corresponden a la Comunidad de Madrid.',
            'Solo las que corresponden a los Ayuntamientos de la Comunidad de Madrid.',
            'Las que corresponden o le sean delegadas a la Comunidad de Madrid y las que correspondan a los Ayuntamientos de la Comunidad de Madrid que se hayan adherido voluntariamente al Consorcio mediante acuerdo plenario.',
            'No tiene competencias sobre el transporte público regular de viajeros.'
        ]
      },
      {
        numb: 19,
        question:"¿Qué deberá hacer el conductor del tren en caso de que sea relevado por otro conductor?",
        answer: 'Deberá conocer, memorizar y transmitir el número de tren asignado a todos los efectos',
        options: [
          'Deberá retirar el número de tren',
          'Deberá conocer, memorizar y transmitir el número de tren asignado a todos los efectos',
          'Deberá circular con el número de tren del conductor anterior',
          'Deberá esperar la autorización del PCC para continuar la circulación'
        ]
      },
      {
        numb: 20,
        question:"¿Qué competencia tiene la Comunidad de Madrid en relación al servicio de transporte público de viajeros a través de la red del ferrocarril metropolitano de Madrid?",
        answer: 'Autonómica',
        options: [
            'Municipal',
            'Autonómica',
            'Estatal',
            'Europea'
        ]
      },
      {
        numb: 21,
        question:"¿Qué obras y actuaciones está autorizada a realizar Metro de Madrid, S.A. en la red ferroviaria que explota directamente?",
        answer: 'Las que resulten necesarias para la conservación de la parte de dicha red ferroviaria.',
        options: [
            'Las que resulten necesarias para la conservación de la parte de dicha red ferroviaria.',
            'Las que resulten necesarias para la ampliación de la red ferroviaria.',
            'Las que resulten necesarias para la construcción de nuevas estaciones.',
            'Ninguna de las anteriores'
        ]
      },
      {
        numb: 22,
        question:"E¿Qué competencias y funciones tiene el Consorcio Regional de Transportes según el artículo 2 de esta Ley?",
        answer: 'Las atribuidas a la Comunidad de Madrid.',
        options: [
            'Ninguna',
            'Las atribuidas a la Comunidad de Madrid.',
            'Las atribuidas al Ayuntamiento de Madrid.',
            'Las atribuidas a la Administración autonómica.'
        ]
      },
      {
        numb: 23,
        question:"¿Qué titularidad tiene el conjunto de bienes y derechos inherentes a la prestación del servicio de transporte de la red explotada por Metro de Madrid, S.A.?",
        answer: 'El Ayuntamiento de Madrid.',
        options: [
            'La Comunidad de Madrid.',
            'El Ayuntamiento de Madrid.',
            'El Consorcio Regional de Transportes.',
            'Ninguna de las anteriores.'
        ]
      },
      {
        numb: 24,
        question:"¿Quiénes integran la Comisión Mixta de transferencias?",
        answer: 'Dos miembros en representación de la Comunidad de Madrid y dos miembros en representación del Ayuntamiento de Madrid.',
        options: [
            'Cuatro miembros en representación de la Comunidad de Madrid.',
            'Cuatro miembros en representación del Ayuntamiento de Madrid.',
            'Dos miembros en representación de la Comunidad de Madrid y dos miembros en representación del Ayuntamiento de Madrid.',
            'Tres miembros en representación de la Comunidad de Madrid y uno en representación del Ayuntamiento de Madrid.'
        ]
      },
      {
        numb: 25,
        question:"¿Qué se necesita para conducir un tren?",
        answer: 'Estar en posesión de la correspondiente habilitación',
        options: [
          'Estar en posesión de la correspondiente habilitación',
          'No se necesita nada',
          'Tener experiencia',
          'Tener estudios de ingeniería'
        ]
      },
      {
        numb: 26,
        question:"¿Qué son las habilitaciones para conducir trenes?",
        answer: 'Un permiso limitado para conducir un tipo de tren o un tipo de vías',
        options: [
          'Un permiso para conducir cualquier tipo de tren',
          'Un permiso limitado para conducir un tipo de tren o un tipo de vías',
          'Un permiso para conducir trenes de carga',
          'Un permiso para conducir trenes de viajeros'
        ]
      },
      {
        numb: 27,
        question:'¿Quiénes pueden conducir trenes para prácticas?',
        answer: 'Solo los trabajadores no habilitados para conducir',
        options: [
          'Sólo los trabajadores habilitados para conducir',
          'Cualquier trabajador',
          'Solo los trabajadores no habilitados para conducir',
          'Solo los trabajadores que hayan pasado un examen'
        ]
      },
      {
        numb: 28,
        question:"¿Qué deben hacer los trabajadores que imparten prácticas de conducción?",
        answer: 'Corregir cualquier actuación incorrecta de los practicantes',
        options: [
          'Dejar a los practicantes solos en la cabina de mando del tren',
          'No prestar atención a la actuación de los practicantes',
          'Corregir cualquier actuación incorrecta de los practicantes',
          'No supervisar a los practicante'
        ]
      },
      {
        numb:29,
        question:"¿Cuándo se puede acceder y salir de los trenes?",
        answer: 'Cuando estén completamente parados',
        options: [
          'Cuando estén en movimiento',
          'Cuando estén completamente parados',
          'Solo los trabajadores pueden acceder y salir de los trenes',
          'Solo los pasajeros pueden acceder y salir de los trenes'
        ]
      },
      {
        numb:30,
        question:"¿En qué casos se permite el tránsito entre coches en trenes que no tienen pasillo de intercomunicación?",
        answer: 'Cuando el tren está en movimiento y el pasajero es trabajador del ferrocarril',
        options: [
          'En ningún caso',
          'Solo cuando el tren se encuentra en movimiento',
          'Cuando el tren está completamente parado',
          'Cuando el tren está en movimiento y el pasajero es trabajador del ferrocarril'
        ]
      },
];
//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(40); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue =  40;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Tiempo"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Tiempo"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    // que_tag= questions[index].sort(()=> Math.random()-.5);

    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct options = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>Enhorabuena! 🎉, has obtenido <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>Genial 😎, obtuvistes <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>Lo siento 😐, solo obtuviste <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Tiempo"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 55);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 560){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
   
    let totalQueCounTag = '<span><p>'+ index +'</p> de <p>'+ questions.length +'</p> Preguntas</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; 
}
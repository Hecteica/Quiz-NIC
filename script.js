let questions = [
    {
    numb: 1,
    question: "¿Cuál es el objetivo de la Normativa Interna de Circulación de Metro de Madrid?",
    answer: "Regulación de la circulación de manera eficaz y segura tanto por la red principal como por la secundaria del metro de Madrid",
    options: [
      'Regulación de la circulación de manera eficaz y segura solo por la red principal del metro de Madrid',
      'Regulación de la circulación de manera eficaz y segura tanto por la red principal como por la secundaria del metro de Madrid',
      'Regulación de la circulación de manera eficaz y segura solo por la red secundaria del metro de Madrid',
      'Ninguna de las anteriores'
    ]
    },
    {
    numb: 2,
    question: "¿En qué lugares es de obligado cumplimiento la NIC?",
    answer: 'En toda la red operada por Metro de Madrid, excepto para aquellas explotaciones que tengan una Normativa propia',
    options: [
      'En todas las dependencias e instalaciones de Metro de Madrid',
      'En todas las explotaciones que tengan una Normativa propia',
      'En toda la red operada por Metro de Madrid, excepto para aquellas explotaciones que tengan una Normativa propia',
      'Solo en las situaciones especialmente sensibles desde la perspectiva de la seguridad'
  
    ]
    },
    {
    numb: 3,
    question:"¿Quiénes deben cumplir la NIC?",
    answer: 'Los trabajadores de Metro de Madrid, que intervengan en la circulación de trenes por la Red de Metro',
    options: [
      'Los trabajadores de Metro de Madrid, que intervengan en la circulación de trenes por la Red de Metro',
      'Todos los ciudadanos que usen el metro de Madrid',
      'Solo los conductores de trenes',
      'Ninguna de las anteriores'
  
    ]
    },
    {
        numb: 4,
        question:"¿Qué se considera fuera del ámbito de aplicación de la NIC?",
        answer: 'Las dependencias e instalaciones de Metro de Madrid cuando permanezcan cerradas a la explotación',
        options: [
          'Las dependencias e instalaciones de Metro de Madrid cuando permanezcan cerradas a la explotación',
          'El personal que trabaje en las dependencias e instalaciones de Metro de Madrid cuando permanezcan cerradas a la explotación',
          'Las dependencias e instalaciones de Metro de Madrid cuando estén en explotación',
          'Ninguna de las anteriores'
        ]
      },
      {
        numb: 5,
        question:"¿Cuál es el procedimiento para modificar o ampliar la NIC?",
        answer: 'Únicamente por circulares de Dirección',
        options: [
          'A través de un procedimiento judicial',
          'Solo mediante la aprobación del Consejo de Administración de Metro de Madrid',
          'Únicamente por circulares de Dirección',
          'Ninguna de las anteriores'
        ]
      },
      {
        numb: 6,
        question:"¿Cómo se distribuye la NIC?",
        answer: 'Por el sistema de hojas intercambiables para facilitar su sustitución',
        options: [
          'Por correo postal',
          'Por correo electrónico',
          'Por el sistema de hojas intercambiables para facilitar su sustitución',
          'Ninguna de las anteriores'
        ]
      },
      {
        numb: 7,
        question:"¿Quién es el máximo responsable de la explotación del servicio de Metro de Madrid?",
        answer: 'El PCC',
        options: [
          'El Consejo de Administración de Metro de Madrid',
          'El PCC',
          'El equipo de mantenimiento de material móvil e instalaciones',
          'Ninguna de las anteriores'
        ]
      },
      {
        numb: 8,
        question:"Qué es el PCC",
        answer: 'El encargado de la supervisión, control y regulación de la circulación',
        options: [
          'Un equipo de mantenimiento de material móvil e instalaciones',
          'El encargado de la supervisión, control y regulación de la circulación',
          'El responsable operativo ubicado en las líneas, estaciones, depósitos o cocheras',
          'Ninguna de las anteriores'
        ]
      },
      {
        numb: 9,
        question:"¿Cuál es el objetivo de la señalización?",
        answer: 'Regular la circulación de trenes con seguridad',
        options: [
          'Regular el tráfico en general',
          'Regular la circulación de trenes con seguridad',
          'Dar órdenes a los trabajadores',
          'Señalizar las vías secundarias'
        ]
      },
      {
        numb: 10,
        question:"¿Cómo deben ser las señales para los conductores de los trenes?",
        answer: 'Deben ser perceptibles en el sentido de la circulación',
        options: [
          'Deben ser audibles',
          'Deben ser visibles solo de cerca',
          'Deben ser perceptibles en el sentido de la circulación',
          'Deben ser señales luminosas'
        ]
      },
      {
        numb: 11,
        question:"¿Qué deben hacer los trabajadores en relación con las órdenes de la señalización?",
        answer: 'Obedecerlas estrictamente y de inmediato',
        options: [
          'Desobedecerlas si no están de acuerdo',
          'Obedecerlas solo si es conveniente para ellos',
          'Obedecerlas estrictamente y de inmediato',
          'Desobedecerlas si no hay una excepción en la NIC'
        ]
      },
      {
        numb: 12,
        question:"¿Qué señales son las que deben conocer los maquinistas?",
        answer: 'Señales fijas ferroviarias',
        options: [
          'Señales de carretera',
          'Señales luminosas de emergencia',
          'Señales de tráfico marítimo',
          'Señales fijas ferroviarias'
        ]
      },
      {
        numb:13,
        question:"¿Qué se debe hacer si un conductor encuentra varias señales o carteles en un mismo lugar?",
        answer: 'Obedecer todas las órdenes si son compatibles',
        options: [
          'Obedecer solo la indicación más restrictiva',
          'Obedecer todas las órdenes si son compatibles',
          'Obedecer todas las señales sin excepción',
          'Obedecer solo la última señal en el camino'
        ]
      },
      {numb: 14,
        question:"¿Cuál es el orden de prioridad entre los distintos tipos de señales y carteles?",
        answer: 'Las señales gestuales de emergencia, la señalización circunstancial mediante indicadores luminosos o carteles que modifiquen la utilización normal de la vía, las señales fijas ferroviarias y las señales de limitación de velocidad',
        options: [
          'Las señales de tracción eléctrica, las señales gestuales de emergencia, las señales de limitación de velocidad',
          'Las señales fijas ferroviarias, las señales de limitación de velocidad, las señales gestuales de emergencia',
          'Las señales gestuales de emergencia, la señalización circunstancial mediante indicadores luminosos o carteles que modifiquen la utilización normal de la vía, las señales fijas ferroviarias y las señales de limitación de velocidad',
          'Las señales acústicas, las señales de tracción eléctrica, las señales fijas de emergencia'
        ]
      },
      {
        numb: 15,
        question:"¿Qué debe hacer un trabajador si detecta una avería o irregularidad en la señalización o en los aparatos de vía?",
        answer: 'Comunicarlo de inmediato al PCC o al responsable operativo',
        options: [
          'Ignorar la avería',
          'Comunicarlo de inmediato al PCC o al responsable operativo',
          'Esperar a que otro trabajador lo detecte',
          'Quedarse junto a la señal o aparato averiado para arreglarlo'
        ]
      },
      {
        numb: 16,
        question:"¿Qué son las señales gestuales de emergencia?",
        answer: 'Señales que se realizan agitando ostensiblemente cualquier objeto o los brazos',
        options: [
          'Señales fijas ferroviarias que indican una emergencia',
          'Señales acústicas que se usan en caso de emergencia',
          'Señales luminosas que indican una emergencia',
          'Señales que se realizan agitando ostensiblemente cualquier objeto o los brazos'
        ]
      },
      {
        numb: 17,
        question:"¿En qué situaciones se deben utilizar las señales gestuales?",
        answer: 'se utilizará exclusivamente en caso de emergencia',
        options: [
          'Para regular el tráfico engeneral',
          'Para comunicar una avería en la vía' ,
          'para saludar al maquinista',
          'se utilizará exclusivamente en caso de emergencia'
        ]
      },
      {numb: 18,
        question:"¿Cuántos tipos de indicadores luminosos existen?",
        answer: 'Dos',
        options: [
            'Uno',
            'Dos',
            'Tres',
            'Cuatro'
        ]
      },
      {
        numb: 19,
        question:"¿Qué son los indicadores luminosos portátiles?",
        answer: 'Señales que indican la presencia de personas o situaciones en la plataforma de vía',
        options: [
          'Señales que informan sobre la regulación de la circulación',
          'Luces que indican el tiempo que falta para la salida de un tren',
          'Señales que indican la presencia de personas o situaciones en la plataforma de vía',
          'Farolas que iluminan la vía férrea'
        ]
      },
      {
        numb: 20,
        question:"¿Cuál es el propósito de la baliza roja?",
        answer: 'Indicar la prohibición absoluta de rebasarla cuando se sitúa en la plataforma de vía',
        options: [
          'Indicar el inicio de precaución',
          'Indicar la presencia de trabajadores en la franja de borde de andén',
          'Indicar la prohibición absoluta de rebasarla cuando se sitúa en la plataforma de vía',
          'Indicar la finalización de precaución'
        ]
      },
      {
        numb: 21,
        question:"¿Cuál es la altura mínima a la que debe estar colocada la baliza roja?",
        answer: '1,5 m',
        options: [
            '1,5 cm',
            '1,5 m',
            '15 cm',
            '15 m'
        ]
      },
      {
        numb: 22,
        question:"¿Qué es el farol amarillo?",
        answer: 'Indica el inicio de precaución',
        options: [
          'Indica la finalización de precaución',
          'Indica la presencia de trabajadores en la franja de borde de andén',
          'Indica el inicio de precaución',
          'Indica el inicio de la zona de obras'
        ]
      },
      {
        numb: 23,
        question:"¿Dónde se sitúa el farol amarillo?",
        answer: 'Entre el carril exterior de la vía y el paramento lateral del túnel o el límite de la plataforma de vía',
        options: [
          'En la plataforma de vía',
          'Entre el carril exterior de la vía y el paramento lateral del túnel o el límite de la plataforma de vía',
          'En el piñón de algunas estaciones',
          'En los túneles'
        ]
      },
      {
        numb: 24,
        question:"¿Qué indica el farol azul?",
        answer: 'Indica el inicio de la zona de obras',
        options: [
          'Indica la finalización de precaución',
          'Indica la presencia de trabajadores en la franja de borde de andén',
         ' Indica el inicio de precaución',
          'Indica el inicio de la zona de obras'
        ]
      },
      {
        numb: 25,
        question:"¿Cuál es el objeto de los carteles?",
        answer: 'Informar sobre circunstancias especiales de la circulación',
        options: [
          'Informar sobre estaciones y trenes',
          'Informar sobre instalaciones',
          'Informar sobre circunstancias especiales de la circulación',
          'Todas las anteriores'
        ]
      },
      {
        numb: 26,
        question:"¿Dónde se colocan los carteles?",
        answer: 'En los piñones de las estaciones',
        options: [
          'En los túneles',
          'En los piñones de las estaciones',
          'En los andenes',
          'En las vías'
        ]
      },
      {
        numb: 27,
        question:'¿Qué información proporciona un cartel avisador de precaución próxima?',
        answer: 'Advierte de la proximidad de una zona de trabajo',
        options: [
          'Indica la presencia de personal en la plataforma de vía',
          'Obliga a seleccionar el modo de conducción',
          'Advierte de la proximidad de una zona de trabajo',
          'Todas las anteriores'
        ]
      },
      {
        numb: 28,
        question:"¿Cuál es el tamaño aproximado del cartel avisador de precaución próxima?",
        answer: '80X40 cm',
        options: [
          '40X80 cm',
          '80X40 cm',
          '30X80 cm',
          '10X80 cm'
        ]
      },
      {
        numb:29,
        question:"¿Qué color tiene la parte superior que compone el cartel avisador de precaución próxima?",
        answer: 'Amarillo',
        options: [
          'Azul',
          'Verde',
          'Amarillo',
          'Rojo'
        ]
      },
      {
        numb:30,
        question:"¿Qué inscripción aparece en letras blancas sobre fondo azul en el cartel avisador de precaución próxima?",
        answer: '"SELECCIONAR A.T.P."',
        options: [
          '"SELECCIONAR A.T.P."',
          '"¡PRECAUCIÓN! ZONA DE OBRAS"',
          '"¡PRECAUCIÓN! PERSONAL EN PLATAFORMA DE VÍA"',
          'Ninguna de las anteriores'
        ]
      },
      {
        numb: 31,
        question:'¿Dónde se sitúa el cartel avisador de precaución próxima?',
        answer: 'En el piñón de salida de la estación anterior donde se encuentra el primer cartel precautorio',
        options: [
          'En la estación donde se encuentra un cartel precautorio',
          'En el piñón de salida de la estación anterior donde se encuentra el primer cartel precautorio',
          'En la estación donde se encuentra el último cartel precautorio',
          'En la estación donde no hay cartel precautorio'
        ]
      },
      {
        numb: 32,
        question:"¿Qué tipo de cartel es el precautorio por la presencia de personal en la plataforma de vía?",
        answer: 'De advertencia de peligro',
        options: [
          'De información',
          'De advertencia de peligro',
          'De prohibición',
          'De recomendación'
        ]
      },
      {
        numb:33,
        question:"¿Dónde se sitúa el cartel precautorio por la presencia de personal en la plataforma de vía?",
        answer: 'En los piñones de salida de las estaciones y en las bocas de acceso al túnel desde los depósitos o cocheras',
        options: [
          'En los piñones de salida de las estaciones y en las bocas de acceso al túnel desde los depósitos o cocheras',
          'En los piñones de salida de las estaciones',
          'En las vías',
          'En los túneles'
        ]
      },
      {
        numb:34,
        question:"¿Qué tipo de cartel es el precautorio por la existencia de una zona de obras sin presencia de personal en la plataforma de vía?",
        answer: 'De advertencia de peligro',
        options: [
          'De circulación',
          'De información',
          'De prohibición',
          'De advertencia de peligro'
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
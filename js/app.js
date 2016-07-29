/*step 1 - declare the global variables*/
var questionsArray = [
    //Question 1
    {
        questionText: 'What is the elevation of Pikes Peak?',
        questionChoices: ['14,114', '13,131', '14,223'],
        questionCorrectChoice: 0,
        correctDetails: 'Pikes Peak is 14,114 feet high. '
    },

    //Question 2
    {
        questionText: 'Who wrote America the beautiful on top of Pikes Peak?',
        questionChoices: ['Samuel Ward', 'Katharine Bates', 'Julia Achibald Holmes'],
        questionCorrectChoice: 1,
        correctDetails: 'Katharine Bates wrote America the beautiful in 1893 on top of Pikes Peak.'
    },

    //Question 3
    {
        questionText: 'Who is Pikes Peak named after?',
        questionChoices: ['Albert Pike', 'William Pike', 'Zebulon Pike'],
        questionCorrectChoice: 2,
        correctDetails: 'Early November 1806, Zebulon Pike and his team sighted and tried to climb to the summit.'
    },

    //Question 4
    {
        questionText: 'What did the Ute indians call the Mountain?',
        questionChoices: ['Soaring Mountain', 'Long Mountain', 'Sun Mountain'],
        questionCorrectChoice: 2,
        correctDetails: 'Sun Mountain or People of Sun Mountain.'
    },

    //Question 5
    {
        questionText: 'Each year how many people visit Pikes Peak?',
        questionChoices: ['3.8 million', '2.9 million', '5.9 million'],
        questionCorrectChoice: 2,
        correctDetails: 'Each year around 5.9 million people visit.'
    },

    //Question 6
    {
        questionText: 'Pikes Peak is the _ Highest Mountain in Colorado?',
        questionChoices: ['1st', '5th', '31st'],
        questionCorrectChoice: 2,
        correctDetails: 'Pikes Peak is the 31st tallest of the 53 mountains that are above 14,000 feet and are known as the "Fourteeners"'
    },

    //Question 7
    {
        questionText: 'Who was the first woman to claim Pikes Peak?',
        questionChoices: ['Katharine Bates', 'Julia Archibald Holmes', 'Betsy Ross'],
        questionCorrectChoice: 1,
        correctDetails: 'In 1858 Julia Archibald Holmes became the first woman to reach the summit.She did so wearing bloomers,a short dress and moccasins'
    },

    //Question 8
    {
        questionText: 'When was the road to the top of Pikes Peak completed?',
        questionChoices: ['1914', '1916', '1918'],
        questionCorrectChoice: 1,
        correctDetails: '1916.'
    },

    //Question 9
    {
        questionText: 'When was the first auto and motorcycle race up Pikes Peak?',
        questionChoices: ['1901', '1900', '1991'],
        questionCorrectChoice: 0,
        correctDetails: 'The first race to the summit was in 1901,later to be named "Pikes Peak Inernational Hill Climb".'
    },

    //Question 10
    {
        questionText: 'What year did the Cog Railway begin taking passengers to the top of the mountain?',
        questionChoices: ['1900', '1889', '1901'],
        questionCorrectChoice: 2,
        correctDetails: 'After two and a half years the Railway was finished in 1891.'
    }
];

var currentQuestionNumber = 0;
var totalNumberOfQuestion = questionsArray.length;
var totalNumberOfCorrectAnswers = 0;

/*step 2 - define functions*/
function questionDisplay() {
    //1 - update the each question text
    $('#question').text(questionsArray[currentQuestionNumber].questionText);

    //2 - display the what are the choices for the current question

    //2.1 - first delete all the existing choices before populating it with new ones
    $('#choices').empty();

    //2.2 - the get the total number of choices for the current question
    var totalNumberOfChoices = questionsArray[currentQuestionNumber].questionChoices.length;

    //2.3 - loop through all the choices and append them to the choices container
    for (var i = 0; i < totalNumberOfChoices; i++) {
        //2.3.1 - loop thru the answer choices and create a dynamically generated row for each of them
        var buildEachChoiceHTML = "<input type='radio' class='option' name='option' value=" + i + ">" + questionsArray[currentQuestionNumber].questionChoices[i] + "<br>";
        //2.3.2 append that row to the choices container in html
        $('#choices').append(buildEachChoiceHTML);
    }
    //3 - displays the number of the current question
    $('#questionNumberDisplay').text("Question " + (currentQuestionNumber + 1) + " of " + totalNumberOfQuestion);
}

/*step 3 - use functions*/

$(document).ready(function () {
    /*when page loads hide quiz and results containers*/
    $('.quiz-section').hide();
    $('.result-section').hide();

    /* click on start button hide start and results containers and show */
    $('#startQuizButton').click(function () { //start the quiz and show the first question
        $('.result-section').hide();
        $('.start-section').hide();
        $('.quiz-section').show();
        questionDisplay();
    });


    /* click on a an answer to hide the quiz and start containers  and show the result one*/
    $('.quiz-section').on('click', '.option', function () {

        //get the question answer from the user
        var userAnswer = $("input[class='option']:checked").val();

        //get the correct answer from the questionsArray above
        var correctAnswer = questionsArray[currentQuestionNumber].questionCorrectChoice;

        //compare the user answer with the correct answer
        if (userAnswer == correctAnswer) {

            //if the answer was correct increment the total number of correct answers
            totalNumberOfCorrectAnswers++;
        }
        //if quiz is finished, show result-section
        if ((currentQuestionNumber + 1) == totalNumberOfQuestion) {

            //show the final score
            $('#finalScore').text(totalNumberOfCorrectAnswers + "/" + totalNumberOfQuestion);

            //hide other containers
            $('.quiz-section').hide();
            $('.start-section').hide();
            $('.result-section').show();
        }
        //else continue to next question
        else {
            //increment the current question number
            currentQuestionNumber++;
            //display the following question
            questionDisplay();
        }
    });

    /* click on try again will hide the quiz and results containers and show the start one*/
    $('.result-section').on('click', '#tryagain', function () {
        $('.start-section').show();
        $('.quiz-section').hide();
        $('.result-section').hide();
        //reset variables to start quiz again
        currentQuestionNumber = 0;
        totalNumberOfCorrectAnswers = 0;
    });
});

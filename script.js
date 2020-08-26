var quizController = (function() {
    localStorage.setItem('data', JSON.stringify([1,2,3,4]))
    console.log(JSON.parse(localStorage.getItem('data')))
})();

var UIController = (function() {
 
})();

var controller = (function(quizCtrl, UICtrl) {

})(quizController, UIController);


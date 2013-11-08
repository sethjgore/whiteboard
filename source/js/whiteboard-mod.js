(function (){
  function functionIsCalled(){
    $functionName = $(this);
    //console.log("function " + $functionName + " is called.")

    var myName = $functionName.arguments.callee.toString();
     myName = myName.substr('function '.length);
     myName = myName.substr(0, myName.indexOf('('));

    console.log("the name of the function is " + myName);
  }

  //  FUNCTION
  //  PARA:   the value of sentence
  //  EXEC:   parses sentence into words
  //  RETU:   array of words 
  $.fn.convertSentenceIntoWords = function(whichSentence){
    var $this = $(this)
    //  establishes sentence via el's array
    ,   $whichSentence = whichSentence;

    //  gets the sentence & parses into words
    var $wordsInSentence = $whichSentence.split(" ");

    //  gets the words in words array & the value of sentence, prints both
    //  console.log("We have the words " + $wordsInSentence + "in " + $whichSentence);

    return $wordsInSentence;
  }

  //  FUNCTION
  //  PARA:   array of words
  //  EXEC:   words into discrete elements
  //  RETU:   array of discrete elements
  $.fn.convertEachWordIntoElement = function(whichWords){
    var $this = $(this)
    //  establishes wordlist via the el's array
    ,   whichWords = whichWords
    ,   elementWordBank = [];

    for(var word in whichWords){
      var theWord = whichWords[word];
      // get each word's contents and print
      // console.log(whichWords[word]);

      elementWordBank[word] = "<li class='sentence__morpheme'>"+theWord+"</li>";
    }

    return elementWordBank;
  }

  $.fn.buildSentence = function(sentence){
    var  $this = $(this)
    ,    sentenceEl = sentence
    ,    bullshit = $this.bullshit;

    $('.sentence__whiteboard').empty().append(sentenceEl);
  }

  $.fn.makeSentence = function(elementWordBank){
    var $this = $(this)
    ,   elementWordBank = elementWordBank;

    //TODO use createtextnode + documentfragment instead of appending items individually

    $('.sentence__built').empty();
    
    for(var el in elementWordBank){
      $('.sentence__built').append(elementWordBank[el]);
    } 
  }

  $.fn.swapSentenceConsole = function(currentConsole){
    var $this = $(this)
    , consoles = ["sentence__editing", "sentence__whiteboard"]
    , currentConsole  = currentConsole;

    $("."+currentConsole+"").toggleClass("hidden");

    switch(currentConsole){
      case "sentence__editing": 
        currentConsole = consoles[1];
        break;
      case "sentence__whiteboard":
        currentConsole = consoles[0];
        break;
      default:
        currentConsole = consoles[1];
        break;
    }

    $("."+currentConsole+"").toggleClass("hidden");
    $(".sentence__container").focus();

    
    //console.log(currentConsole);
    return currentConsole;
  }

  $.fn.enterConsoleEditing = function(){
      var $this = $(this)
      ,   $wordsStorage = []
      ,   $sentence = ""
      ,   $elementWordBank = []
      ,   sentenceEl = "<article class='sentence__built'/>";

      $sentence = $this.find(".sentence__container").val();
      console.log($sentence + "HELLO");
      // uses the func. to establish sentence;

      $wordsStorage = $this.convertSentenceIntoWords($sentence);
      //console.log($wordsStorage);

      // uses the func. to parse word list into elements
      $elementWordBank = $this.convertEachWordIntoElement($wordsStorage);
      //console.log($elementWordBank);
      
      $this.buildSentence(sentenceEl);
      $this.makeSentence($elementWordBank);
      currentConsole = $this.swapSentenceConsole(currentConsole);

  }


  //swap elements
  //  make current console invisible
  //  make swapped console visible
  //on focus
  //  swap elements function
  $(".sentence__editing").submit(function(){
    $(this).enterConsoleEditing();
    $(this).swapSentenceConsole(currentConsole);
  });
  
  $input = $('.sentence__editing');

  $.fn.changeContent = function(){
    $input = $('.sentence__container');
    
    $inputVal = $input.val();
    console.log($inputVal);
  }

  $('.sentence__editing').blur(function(){
      changeContent();
      console.log("Hello!")
    });

  $('.sentence__whiteboard').click(function(){
    var $this = $(this);

    $('sentence__built').swapSentenceConsole(currentConsole);

    });
  
  var currentConsole = "sentence__whiteboard";

  ( function() {

    var container = document.querySelector('.whiteboard__storage');
    var pckry = new Packery(container, {"itemSelector": "figure"});
    var words = container.querySelectorAll('figure');

    for( var word in words) {
      var word = words[word];
      new Draggabilly(word, {containment: false});
    }
  })();
}());
















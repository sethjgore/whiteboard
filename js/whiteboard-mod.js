!function(){$.fn.convertSentenceIntoWords=function(e){var n=($(this),e),t=n.split(" ");return t},$.fn.convertEachWordIntoElement=function(e){var e=($(this),e),n=[];for(var t in e){var i=e[t];n[t]="<li class='sentence__morpheme'>"+i+"</li>"}return n},$.fn.buildSentence=function(e){var n=$(this),t=e;n.bullshit,$(".sentence__whiteboard").empty().append(t)},$.fn.makeSentence=function(e){var e=($(this),e);$(".sentence__built").empty();for(var n in e)$(".sentence__built").append(e[n])},$.fn.swapSentenceConsole=function(e){var n=($(this),["sentence__editing","sentence__whiteboard"]),e=e;switch($("."+e).toggleClass("hidden"),e){case"sentence__editing":e=n[1];break;case"sentence__whiteboard":e=n[0];break;default:e=n[1]}return $("."+e).toggleClass("hidden"),$(".sentence__container").focus(),e},$.fn.enterConsoleEditing=function(){var n=$(this),t=[],i="",o=[],c="<article class='sentence__built'/>";i=n.find(".sentence__container").val(),console.log(i+"HELLO"),t=n.convertSentenceIntoWords(i),o=n.convertEachWordIntoElement(t),n.buildSentence(c),n.makeSentence(o),e=n.swapSentenceConsole(e)},$(".sentence__editing").submit(function(){$(this).enterConsoleEditing(),$(this).swapSentenceConsole(e)}),$input=$(".sentence__editing"),$.fn.changeContent=function(){$input=$(".sentence__container"),$inputVal=$input.val(),console.log($inputVal)},$(".sentence__editing").blur(function(){changeContent(),console.log("Hello!")}),$(".sentence__whiteboard").click(function(){$(this),$("sentence__built").swapSentenceConsole(e)});var e="sentence__whiteboard";!function(){var e=document.querySelector(".whiteboard__storage");new Packery(e,{itemSelector:"figure"});var n=e.querySelectorAll("figure");for(var t in n){var t=n[t];new Draggabilly(t,{containment:!1})}}()}();
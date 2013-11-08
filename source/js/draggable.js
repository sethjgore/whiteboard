( function() {

    var container = document.querySelector('.j-whiteboard__storage');
    var pckry = new Packery(container, {"itemSelector": "figure", "containerStyle":"null"});
    var blocks = container.querySelectorAll('figure');

    for( var block in blocks) {
      var block = blocks[block];
      new Draggabilly(block, {containment: false});
    }

  })();
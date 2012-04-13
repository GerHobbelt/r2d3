rd3 = {}

(function() {

  var papers = [];


  var rd3 = {

    appendChild: function(element, namespace, name) {

      if ("http://www.w3.org/2000/svg" === namespace) {

        if ("svg" === namespace) {
          paper = Raphael(element, 0, 0);
          papers.push(paper)
        }




      } else {
        this.appendChild(document.createElement(name));
      }
    }
	};

  function getElementPaper(element) {
    var paper = null;
    papers.each(function(pap) {
      paper
    })
  }

	window.rd3 = rd3;
})();

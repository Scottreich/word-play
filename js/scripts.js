$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var quoteInput = $("input#favSentence").val();
    var stringQuotes = quoteInput.split(" ");
    var overThree = [];

    alert(stringQuotes)

    stringQuotes.forEach(function(stringQuote) {
      if (stringQuote.length >= 3 ) {
        overThree.push(stringQuote);
      }
    });
    alert(overThree);
  });
});


    $(document).ready(function() {
        var newQuote = "";
        var newAuthor = "";
        function genQuote() {
            $.getJSON("https://talaikis.com/api/quotes/random/", function(json) {
                newQuote = JSON.stringify(json.quote);
                $("#quote").html(newQuote);
                newAuthor = JSON.stringify(json.author);
                newAuthor = newAuthor.replace(/\"/g, "");
                $("#author").html(newAuthor);
            });
        };
        genQuote();
        $(".btn-primary").on("click", function() {
            genQuote();
        });
        $("#twitter").on("click", function() {
            var twitterLink = "http://twitter.com/intent/tweet?text=" +
		encodeURIComponent(newQuote + " - " + newAuthor);
            window.open(twitterLink, "_blank");
        });
});

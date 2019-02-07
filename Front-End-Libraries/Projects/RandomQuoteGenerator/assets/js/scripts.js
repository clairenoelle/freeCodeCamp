
    $(document).ready(function() {
        var newQuote = "";
        function genQuote() {
            $.getJSON("https://ron-swanson-quotes.herokuapp.com/v2/quotes", function(json) {
                newQuote = JSON.stringify(json.quote);
                $("#quote").html(newQuote);
            });
        };
        genQuote();
        $(".btn-primary").on("click", function() {
            genQuote();
        });
        $("#twitter").on("click", function() {
            var twitterLink = "http://twitter.com/intent/tweet?text=" +
		encodeURIComponent(newQuote);
            window.open(twitterLink, "_blank");
        });
});

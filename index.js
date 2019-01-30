function handleSearch() {
    $("form").submit(function (event) {
        event.preventDefault();
        console.log(data.businesses)
        $("#search-page").hide()
        $("#results-page").show()
        $("nav").removeClass("hidden")
        for (let i=0; i<=data.businesses.length; i++) {
            $(".results-header").html(`<h2 id="results-header">We found ${data.businesses.length} results</h2>`)
            $("#results-page").append(`
            <div class="result">
            <div class="result-pic">
                <!-- <img src="https://i.imgur.com/QKYRRXn.jpg" alt="pic"> -->
            </div>
            <div class="result-info">
                <h3 class="result-name">${data.businesses[i].name}</h3>
                <h4>Price: ${data.businesses[i].price}   Rating: ${data.businesses[i].rating}</h4>
                <p>Coffee & Tea, Juice Bars & Smoothies, Sandwiches</p>
                <div class="results-links">
                    <button type="button" class="details-button">Details</button>
                    <button type="button" class="yelp-button">Yelp</button>
                </div>
            </div> 
        </div>`)
        }
        // $("#results-page").html(`<h2 id="results-header">We found ${data.businesses.length} results</h2>
        // <div class="result">
        //     <div class="result-pic">
        //         <!-- <img src="https://i.imgur.com/QKYRRXn.jpg" alt="pic"> -->
        //     </div>
        //     <div class="result-info">
        //         <h3 class="result-name">${data.businesses[0].name}</h3>
        //         <h4>Price: ${data.businesses[0].price}   Rating: ${data.businesses[0].rating}</h4>
        //         <p>Coffee & Tea, Juice Bars & Smoothies, Sandwiches</p>
        //         <div class="results-links">
        //             <button type="button" class="details-button">Details</button>
        //             <button type="button" class="yelp-button">Yelp</button>
        //         </div>
        //     </div> 
        // </div>`)
    })
}

$('body').on('click', '.yelp-button', function(event){
    console.log(`${data.businesses[0].url}`)
    window.location = `${data.businesses[0].url}`;
})

// function URL() {
//     location.href = 'www.google.com';
// }

$(document).ready(function() {
    handleSearch();
});
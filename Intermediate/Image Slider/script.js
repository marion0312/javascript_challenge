var images = document.querySelectorAll(".slider img")
var container = document.querySelector(".cover")
var image_sources = new Array()
var next_button = document.querySelector("#next")
var prev_button = document.querySelector("#prev")
var new_image_url = ''

images.forEach( e => { //loop through the image nodes
    image_sources.push( e.getAttribute('src') ) //store the sources in an array
})

const changeImage = ( button_clicked, image_index ) => {
    if ( button_clicked == 'next' )
    {
        if ( image_sources.length - 1 <= image_index ) {
            new_image_url = image_sources[0]
        }
        else {
            new_image_url = image_sources[image_index + 1]
        }
    }

    if ( button_clicked == 'prev' )
    {
        console.log( image_index );
        if ( image_index == 0 ) {
            new_image_url = image_sources[ image_sources.length - 1 ]
        }
        else {
            new_image_url = image_sources[image_index - 1]
        }
    }

    return new_image_url
}


next_button.onclick = () => container.setAttribute( "src", changeImage( 'next', image_sources.indexOf( container.getAttribute('src') ) ) )
prev_button.onclick = () => container.setAttribute( "src", changeImage( 'prev', image_sources.indexOf( container.getAttribute('src') ) ) )
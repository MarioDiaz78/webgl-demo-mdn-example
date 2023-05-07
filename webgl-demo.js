main();

//
// start here
//
function main() {
    const canvas = document.querySelector("#glcanvas");
    // Initialize the GL context
    const gl = canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (gl === null) {
        alert(
            "Unable to initialize WebGL. Your browser or machine may not support it."
        );
        return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
}

/*The main() function is called when our script is loaded. Its purpose is to set up the WebGL context and start rendering content.

The first thing we do here is obtain a reference to the canvas, assigning it to a variable named canvas.

Once we have the canvas, we try to get a WebGLRenderingContext for it by calling getContext() and passing it the string "webgl". If the browser does not support WebGL, getContext() will return null in which case we display a message to the user and exit.

If the context is successfully initialized, the variable gl is our reference to it. In this case, we set the clear color to black, and clear the context to that color (redrawing the canvas with the background color).

At this point, you have enough code that the WebGL context should successfully initialize, and you should wind up with a big black, empty box, ready and waiting to receive content.*/
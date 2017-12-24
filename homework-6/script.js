/* Function of parameter output in windows */

(function (win) {
    var params = { // object
        states: {
            url: "/", // url
            template: "temlate.js" // file name
        }
    };

    function setStates(params) {
        if (win && !win.params) {
            win.params = params;
        }
    }

    setStates(); //function upload
    console.log(params.states.template); // output in console
})(window);
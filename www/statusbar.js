var exec = require('cordova/exec');

/* constructor */
function Wurst() {}

Wurst.prototype.dummy = function() {
        exec(
            function(result){ alert('ok: '+reply);      },
            function(err){ alert('Error: '+err); }
        , "Wurst", "echoTest", ['dummy']);
}

<..>

var wurst = new Wurst();
module.exports = wurst;
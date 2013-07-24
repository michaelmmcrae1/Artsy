
var canvas;
var ctx;

var hexCode;

var r;
var g;
var b;

var isR;
var isB;
var isG;

var Int;

$(document).ready(function($) {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');

    register();
    init();

function register() {

    //registerring mouse-DOWN events for RGB buttons
    $('#red_button').mousedown(function() {
        isR = true;
        updateByButtons();
    });
    $('#green_button').mousedown(function() {
        isG = true;
        updateByButtons();
    });
    $('#blue_button').mousedown(function() {
        isB = true;
        updateByButtons();
    });


    //registerring mouse-UP events for RGB buttons
    $('#red_button').mouseup(function() {
        isR = false;
    });
    $('#green_button').mouseup(function() {
        isG = false;
    });
    $('#blue_button').mouseup(function() {
        isB = false;
    });

    /* REGISTERRING mouse-OUT EVENTS for RGB buttons */
    $('#red_button').mouseout(function() {
        isR = false;
    });
    $('#green_button').mouseout(function() {
        isG = false;
    });
    $('#blue_button').mouseout(function() {
        isB = false;
    });
    
    //REGISTERRING range events
    $('#range_red').change(updateByRange);
    $('#range_green').change(updateByRange);
    $('#range_blue').change(updateByRange);

    //REGISTERING SET buttons
    $('#set_rgb').click(updateByRGB);  
    $('#set_hex').click(updateByHex);
    $('#reset').click(init);

}

function init() {
    r = 255;
    g = 255;
    b = 255;
    
    $('#rgb_red').val("" + r);
    $('#rgb_green').val("" + g);
    $('#rgb_blue').val("" + b);
    
    $('#hex_text').val("FFFFFF");
    
    $('#range_red').val("" + r);
    $('#range_green').val("" + g);
    $('#range_blue').val("" + b);
    
    paint();
}

function updateByRGB() {
    r = $('#rgb_red').val();
    g = $('#rgb_green').val();
    b = $('#rgb_blue').val();
    hexCode = RGBToHex(r) + RGBToHex(g) + RGBToHex(b);
    $('#hex_text').val("" + hexCode);
    $('#range_red').val("" + r);
    $('#range_green').val("" + g);
    $('#range_blue').val("" + b);
    paint();
}

function updateByHex() {
    hexCode = $('#hex_text').val().toUpperCase();
    HexToRGB();
    $('#rgb_red').val(r);
    $('#rgb_green').val(g);
    $('#rgb_blue').val(b);
    $('#range_red').val(r);
    $('#range_green').val(g);
    $('#range_blue').val(b);
    paint();
}
        
function updateByButtons() {
    Int = setInterval(function() {
        if (isR) {
            if (g > 0) {
                g--;
            }
            if (b > 0) {
                b--;
            }
        } else if(isG) {
            if (r > 0){
                r--;
            }
            if (b > 0) {
               b--; 
            }
        } else if(isB) {
            if (r > 0){
                r--;
            }
            if (g > 0) {
               g--; 
            }
        } else if(!isR && !isG && !isB){
            clearInterval(Int);
        }
        hexCode = RGBToHex(r) + RGBToHex(g) + RGBToHex(b);
        $('#hex_text').val("" + hexCode);
        $('#range_red').val("" + r);
        $('#range_green').val("" + g);
        $('#range_blue').val("" + b);
        $('#rgb_red').val("" + r);
        $('#rgb_green').val("" + g);
        $('#rgb_blue').val("" + b);
        paint();
    }, 50);
}

function updateByRange() {
    r = $('#range_red').val();
    g = $('#range_green').val();
    b = $('#range_blue').val();
    $('#rgb_red').val("" + r);
    $('#rgb_green').val("" + g);
    $('#rgb_blue').val("" + b);
    hexCode = RGBToHex(r) + RGBToHex(g) + RGBToHex(b);
    $('#hex_text').val("" + hexCode);
    paint();
}

function paint() {
    ctx.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
    ctx.fillRect(0, 0, 340, 412);
}

function RGBToHex(c) {
    c = Math.max(0, Math.min(c, 255));
    return "0123456789ABCDEF".charAt((c - c % 16) / 16)
            + "0123456789ABCDEF".charAt(c % 16);
}

function HexToRGB() {
   s1 = GiveDec(hexCode.substring(0, 1));
   s2 = GiveDec(hexCode.substring(1, 2));
   s3 = GiveDec(hexCode.substring(2, 3));
   s4 = GiveDec(hexCode.substring(3, 4));
   s5 = GiveDec(hexCode.substring(4, 5));
   s6 = GiveDec(hexCode.substring(5, 6));

   r = Math.max(0, Math.min((s1 * 16) + s2, 255)); //(s1 * 16) + s2
   g = Math.max(0, Math.min((s3 * 16) + s4, 255));//(s3 * 16) + s4
   b = Math.max(0, Math.min((s5 * 16) + s6, 255));//(s5 * 16) + s6
}

function GiveDec(Hex) {
   if(Hex === "A") {
       return 10;
   } else if(Hex === "B") {
       return 11;
   } else if(Hex === "C") {
       return 12;
   } else if(Hex === "D") {
       return 13;
   } else if(Hex === "E") {
       return  14;
   } else if(Hex === "F") {
       return  15;
   } else {
       return  Hex;
   } 
}

});


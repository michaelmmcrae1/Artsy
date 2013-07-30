/* 
 * When user clicks to change "canvas theme," they change the background
 * image and the background color for the different color-setting boxes.
 */

$(document).ready(function($) {
    
    $('#canary').click(function() {
        $('body').css('background-image', 'url(images/canvas-1.jpg)');
        $('#changeCanvas').css('background-color', '#B4587D');
        $('#range').css('background-color', '#B4587D');
        $('#color-buttons').css('background-color', '#B4587D');
        $('#hex').css('background-color', '#B4587D');
        $('#rgb').css('background-color', '#B4587D');
    });
    
    $('#orange').click(function() {
        $('body').css('background-image', 'url(images/canvas-3.jpg)');
        $('#changeCanvas').css('background-color', '#43757A');
        $('#range').css('background-color', '#43757A');
        $('#color-buttons').css('background-color', '#43757A');
        $('#hex').css('background-color', '#43757A');
        $('#rgb').css('background-color', '#43757A');
    });
    
    $('#green').click(function() {
        $('body').css('background-image', 'url(images/canvas-4.jpg)');
        $('#changeCanvas').css('background-color', '#FF4A4A');
        $('#range').css('background-color', '#FF4A4A');
        $('#color-buttons').css('background-color', '#FF4A4A');
        $('#hex').css('background-color', '#FF4A4A');
        $('#rgb').css('background-color', '#FF4A4A');
    });
    
    $('#light').click(function() {
        $('body').css('background-image', 'url(images/canvas-5.jpg)');
        $('#changeCanvas').css('background-color', '#7343B3');
        $('#range').css('background-color', '#7343B3');
        $('#color-buttons').css('background-color', '#7343B3');
        $('#hex').css('background-color', '#7343B3');
        $('#rgb').css('background-color', '#7343B3');
    });
    
    $('#thread').click(function() {
        $('body').css('background-image', 'url(images/canvas-6.jpg)');
        $('#changeCanvas').css('background-color', '#E4D1B6');
        $('#range').css('background-color', '#E4D1B6');
        $('#color-buttons').css('background-color', '#E4D1B6');
        $('#hex').css('background-color', '#E4D1B6');
        $('#rgb').css('background-color', '#E4D1B6');
    });
    
    $('#violet').click(function() {
        $('body').css('background-image', 'url(images/canvas-2.jpg)');
        $('#changeCanvas').css('background-color', '#00CED1');
        $('#range').css('background-color', '#00CED1');
        $('#color-buttons').css('background-color', '#00CED1');
        $('#hex').css('background-color', '#00CED1');
        $('#rgb').css('background-color', '#00CED1');
    });
    
});

$(document).ready(function () {
    // INHERITED CODE
    var yOff = 5;
    var xOff = -20;
    
    // GATHERING ELEMENTS
    let textCollection = document.getElementsByClassName('text-hover-image');
    let imgCollection = document.getElementsByClassName('hover-img');
    let strCollection = []; 
    
    for(i = 0; i < textCollection.length; i++){
        strCollection.push(textCollection[i].innerHTML)
    }

    $(".text-hover-image").hover(function (e) {
        let thisNum = strCollection.indexOf(this.innerHTML);
        let thisImg = imgCollection[thisNum].outerHTML;
        $("body").append("<p id='image-when-hovering-text'>" + thisImg + "</p>");
        $("#image-when-hovering-text")
            .css("position", "absolute")
            .css("top", (e.pageY - yOff) + "px")
            .css("left", (e.pageX + xOff) + "px")
            .fadeIn("fast");
    },

    function () {
        $("#image-when-hovering-text").remove();
    });

    $(".text-hover-image").mousemove(function (e) {
        $("#image-when-hovering-text")
            .css("top", (e.pageY - yOff) + "px")
            .css("left", (e.pageX + xOff) + "px");
    });
});
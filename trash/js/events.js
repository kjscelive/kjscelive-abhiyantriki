var card = document.querySelector('#mytemplate');


$("#informals").click(function(){
    $(this).toggleClass('orange');
})

function openevent(evt, evtName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(evtName).style.display = "flex";
    evt.currentTarget.className += " active";
}

$('.container').on('click', function () {
    $(this).children().toggleClass('flipped');
  });
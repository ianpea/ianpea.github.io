const dos = ['company-name', 'position-offered', 'hiring-manager-fullname', 'hiring-manager-name', 'emphasize-logistics'];

let i = 0;

function next() {
    if (i != dos.length - 1) {
        $("." + dos[i]).html($("#input").val());
    } else {

        let emphasisilogistics = $("#emphasizelogistics").is(':checked');
        if (emphasisilogistics) {
            $(".emphasize-logistics").css("font-weight", "bold");
        }
    }
    $("#input").val('');
    i++;
    if (i == dos.length - 1) {

        $("#emphasizelogisticswrapper").show();
        $("#input").hide();
    }
    $("#modaltitle").html(dos[i]);
    $("#input").focus();
    if (i >= dos.length) {
        $("#inputmodal").modal('hide');
    }
}


$(this).on('load', function() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const d = new Date();
    today = dd + " " + monthNames[d.getMonth()] + " " + yyyy;
    document.getElementById("todaydate").innerHTML = today;
    $("#inputmodal").modal('show');
    $("#modaltitle").html(dos[i]);
    console.log(dos[i]);
    $('#inputmodal').keypress(function(e) {
        if (e.keyCode == 13)
            next()
    });
});
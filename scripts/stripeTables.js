function stripeTables () {
    var tablels = document.getElementsByTagName("table");
    var odd,rows;
    for (var i = 0; i < tablels.length;i++){
        odd = false;
        rows = tablels[i].getElementsByTagName("tr");
        for (var j = 0; j < rows.length; j++){
            if (odd == true) {
                rows[j].style.backgroundColor = "#ffc";
                odd = false;
            }else {
                odd = true;
            }
        }
    }
}

addLoadEvent(stripeTables);
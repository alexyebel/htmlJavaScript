function multiplicationLoop() {
    var i,j,result=1;
    document.write("<table border=1 cellspacing='5px' cellpadding='5px'>");
    for(i=1;i<11;i++){
        document.write("<tr>");
        for(j=1;j<11;j++){
            document.write("<td>"+i*j+"</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");

}
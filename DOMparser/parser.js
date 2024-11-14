// Wichtig: die result Variable ausserhalb von parseNode() deklarieren, 
// sonst wird sie bei rekursivem Aufruf überschrieben (d.h. neu deklariert)  
var result = "";

function parseNode(startNode) {
    
    for (var i = 0; i < startNode.childNodes.length; i++) {
   
        var nd =  startNode.childNodes[i];
       
        result += "<tr>"; 
            result+= "<td>" + nd.nodeType + "</td>"
        result += "<td>" + nd.nodeName + "</td>"
        result += "<td>" + nd.nodeValue + "</td>"
        result += "<td>" + nd.nodeContent + "</td>"
        // nächsten Node parsen durch rekursiven Aufruf dieser Funktion
        parseNode(nd);
    }

    return "<table><tr><th>nodeType</th><th>nodeName</th><th>nodeValue</th><th>textContent</th></tr>" + result + "</table>";
}
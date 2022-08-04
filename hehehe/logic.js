orderList = [];

function onAdd(item) {
    orderList.push(item);
    document.getElementById("orderList").innerHTML = "";
    orderList.forEach(order => {
        const node = document.createElement("div");
        const text = document.createTextNode("o " + order);
        node.addEventListener("click", function() { onRemove(order) });
        node.appendChild(text);
        document.getElementById("orderList").appendChild(node)
    });
}

function onRemove(item) {
    const index = orderList.indexOf(item);
    if (index > -1) {
        orderList.splice(index, 1);
        console.log(orderList.length);
        document.getElementById("orderList").innerHTML = "";
        orderList.forEach(order => {
            const node = document.createElement("div");
            const text = document.createTextNode("o " + order);
            node.addEventListener("click", function() { onRemove(order) });
            node.appendChild(text);
            document.getElementById("orderList").appendChild(node)
        });
    }
}

function sendOrder() {
    msgStr = "Hi baby hehe XOXO, I want to order these for tonight: ";
    orderList.forEach(ol => {
        msgStr += "*" + ol + "*" + ", ";
    })

    msgStr = msgStr.substring(0, msgStr.length - 2);
    msgStr += ".";
    console.log(msgStr);

    window.open("https://wa.me/+6591942624?text=" + encodeURI(msgStr));
}
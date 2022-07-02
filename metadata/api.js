document.addEventListener('DOMContentLoaded', function() {

    // Getting the NFT tokenId
    const path = String(window.location.pathname);
    for (x=path.length; x>0; x--) {
        console.log(path[x])
        if (path[x] === "/") {
            var id = path.substring(x + 1, path.length).replace(/\D/g, "");
            break
        }
    }
    console.log(`ID: ${id}`)

    // Returning the API data for that id
    const obj = JSON.stringify(data[id], null, 4)
    document.querySelector("#raw").innerHTML = obj;

});
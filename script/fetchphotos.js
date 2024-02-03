var sno, direc=""
var imgel = document.createElement('img');
imgel.id="imgel"
imgel.src=direc
var imgcon = document.getElementById('imgcont');
imgcon.appendChild(imgel);
function setimg(newImageUrl) {
        imgel.src = newImageUrl;
}

async function fetchdat(){
    const uid="S"+document.getElementById("inp").value+"U"+document.getElementById("inp2").value;
    try{
    fetch('dat/0a.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log("UID="+uid)
            if (data && data[uid] && data[uid].length > 1) {
                nm = data[uid][2];
                document.getElementById('funtxt').innerHTML="Greetings "+nm+"!";
               setimg("photos/"+data[uid][3]+".jpg");
            }
            else document.getElementById('funtxt').innerHTML="Invalid Credentials";
        })
        .catch(error => {
            console.log("Error fetching data:", error);
        });
    }
    catch(error){
        console.log("Unable to fetch", error)
        return;
    }
}

var button = document.getElementById("act");
button.addEventListener("click", fetchdat);
var sno, direc="", cval=0
var imgel = document.createElement('img');
imgel.id="imgel"
imgel.src=direc
var imgcon = document.getElementById('imgcont');
imgcon.appendChild(imgel);
function setimg(newImageUrl) {
        imgel.src = newImageUrl;
}

function switchimg(imgid){
	cval+=imgid;
	if(data[uid][3+cval]!=null)
	setimg("photos/"+data[uid][3+cval]+".jpg");
}

async function fetchdat(){
    const uid="S"+document.getElementById("inp").value; //+"U"+document.getElementById("inp2").value;
    const uid2=documen.getElementById("inp2").value;
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
            const ui2=data[uid][2];
            if(uid2!=ui2) throw new Error('INCORRECT UID 2');
            if (data && data[uid] && data[uid].length > 1) {
                nm = data[uid][3];
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

var nex = document.getElementById("next");
nex.addEventListener("click", setimg(1));

var nex = document.getElementById("prev");
prev.addEventListener("click", setimg(-1));

let taskDOM = document.querySelector("#task")
const alertDOM= document.querySelector("#alerttt")
let alertfunction=(message)=>`<div class="alert alert-info" role="alert">
${message}
</div>`

let btnDOM = document.querySelector("#liveToastBtn") 
btnDOM.addEventListener("click",domClick)
let ulDOM = document.querySelector("#list")
let liDOM= document.createElement("li")

function domClick(){
    if(taskDOM.value.length!=0 && taskDOM.value!=" " ){
        
        let liDOM= document.createElement("li")
        liDOM.innerHTML=taskDOM.value + `<button onclick="myFunction()" class="center">x</button>`
        taskDOM.value=""
        ulDOM.appendChild(liDOM);
        alertDOM.innerHTML=alertfunction("Listeye eklendi.");
        elemanSilmeButonu = document.querySelectorAll(".center");
 
        // tüm eleman silme butonlarına dinleyici tanımlandı
        for (let i = 0; i < elemanSilmeButonu.length; i++) {
            elemanSilmeButonu[i].addEventListener("click", elemansil);
        }
        let userStatus = taskDOM.value;
        localStorage.setItem("Yeni Bilgi", JSON.stringify(userStatus));
        user=JSON.parse(localStorage.getItem("userStatus"))

    }else{
      alertDOM.innerHTML=alertfunction("Boş giriş yapamazsınız!");
    }
}


 
// tüm eleman silme butonlarına dinleyici tanımlandı
        


function elemansil(){
  let secim = confirm("Emin Misiniz?");
    if (secim == true) {
        
        // eğer onaylanırsa tıklanan i değişkeninin üst etiketi silinsin
        var silinecek = this.parentElement;
        silinecek.remove();
    }

}
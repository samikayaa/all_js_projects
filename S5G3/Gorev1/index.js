/*
 Adım 1: Aşağıdaki HTML button yapısını oluşturup geri dönecek 'IconButton' isimli bir fonksiyon yazın.


 <button class="btn btn-{btnColor}">
   <i class="{iconClass}" />
   {btnText}
 </button>


 'IconButton' fonksiyonu 3 argüman alacak:
 - btnText: butonun içindeki metin
 - btnColor: butonun arkplan rengi [ blue | orange | red ] değerlerini alabilir
 - iconClass: FontAwesome kütüphanesi icon class ismi


Adım 2: Bu fonksiyonu kullanarak aşağıdaki butonları oluşturun:


   1. { btnText: "Aç", btnColor: "blue", iconClass: "fa fa-folder-open" }
   2. { btnText: "Düzenle", btnColor: "orange", iconClass: "fa fa-pen" }
   3. { btnText: "Sil", btnColor: "red", iconClass: "fa fa-trash" }


Adım 3: Oluşturduğunuz buttonları div#icon-buttons içerisine ekleyin


*/


function IconButton(btnText, btnColor, iconClass) {
    const button = document.createElement("button");
    button.classList.add(`btn`, `btn-${btnColor}`);
    button.textContent = btnText;
    // button.style.color = btnColor;

    const icon = document.createElement("i");
    icon.classList.add(`${iconClass}`);
    
    button.appendChild(icon);
    return button;
}


/// CHAT-GPT ///
function IconButton(btnText, btnColor, iconClass) {
    const button = document.createElement('button');
    const icon = document.createElement('i');
    button.classList.add('btn', `btn-${btnColor}`);
    iconClass.split(' ').forEach((cls) => icon.classList.add(cls)); // Icon'un class'larını ayırıp tek tek ekliyoruz
   
    button.appendChild(icon);
    button.appendChild(document.createTextNode(` ${btnText}`)); // Icondan sonra text eklemek için
   
       return button;
   }
   
   // Butonları oluşturuyoruz
   const button1 = IconButton('Aç', 'blue', 'fa fa-folder-open');
   const button2 = IconButton('Düzenle', 'orange', 'fa fa-pen');
   const button3 = IconButton('Sil', 'red', 'fa fa-trash');
   
   // div#icon-buttons içerisine ekliyoruz
   const iconButtons = document.querySelector('#icon-buttons');
   iconButtons.appendChild(button1);
   iconButtons.appendChild(button2);
   iconButtons.appendChild(button3);
   

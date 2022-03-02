// handle click event
const searchPhone = () => {
const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    // console.log(searchText);
    // clear data 
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch (url) 
    .then(res => res.json()) 
    .then(data => displaySearchResult(data.data.slice(0,20) ))
}
const displaySearchResult = phones => {
  // Error massage 
  if (phones.length =='') {
    document.getElementById('worn-result').style.display = 'block';
} 
else{
    document.getElementById('worn-result').style.display = 'none';
}
   // Search your favorit phone 
   const searchResult= document.getElementById('search-result');
   searchResult.innerHTML ='';
   phones.forEach(phone => {
      //  console.log(phone)
       const div = document.createElement('div');
       div.classList.add('col')
       div.innerHTML = `<div class="card">
             <img  src="${phone.image}" class="card-img-top img  mx-auto" alt="...">
             <div class="card-body">
             <h5 class="card-title ">Name:   ${phone.phone_name}</h5>
             <h5 class="card-title ">Brand:  ${phone.brand}</h5>
             <p>${phone.slug}</P>
             <button onclick= "loadphoneDetali('${phone.slug}')" class="btn btn-primary button background px-4">Details</button>
       </div>
     </div>`;
     searchResult.appendChild(div)  
   })
}
// show the phone Detals 
const loadphoneDetali = (phoneId) =>{
const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
fetch(url)
.then(res => res.json())   
.then(data => displayMobileDetails (data))
}
const displayMobileDetails = data => {
  const parant = document.getElementById('details-section');
  // if releaseDate condition code 
  if (data.data.releaseDate == '') {
      parant.innerHTML = `
     <div class="card m-auto" style="width:60%">
     <img src="${data.data.image}" class="card-img-top  img mx-auto">
     <div class="card-body">
         <h5 class="card-title">releaseDate: </h5>
         <p class="card-text">No Release date Found</p>
     </div>
     <ul class="list-group list-group-flush">
         <li class="list-group-item">Chipset: ${data.data.mainFeatures.chipSet}</li>
         <li class="list-group-item">display size: ${data.data.mainFeatures.displaySize}</li>
         <li class="list-group-item">memory: ${data.data.mainFeatures.memory}</li>
     </ul>
     <p class="p-2">
   <span class="sensor-others">sensors :</span>
     ${data.data.mainFeatures.sensors[0]},
     ${data.data.mainFeatures.sensors[1]},
     ${data.data.mainFeatures.sensors[2]},
     ${data.data.mainFeatures.sensors[3]},
     ${data.data.mainFeatures.sensors[4]},
     ${data.data.mainFeatures.sensors[5]}
     </p>
     <ul class="list-group list-group-flush">
     <li class="list-group-item  sensor-others">Others:</li>
     <li class="list-group-item">Blouetooth: ${data.data.others.Bluetooth}</li>
     <li class="list-group-item">GPS: ${data.data.others.GPS}</li>
     <li class="list-group-item">NFC: ${data.data.others.NFC}</li>
     <li class="list-group-item">Radio: ${data.data.others.Radio}</li>
     <li class="list-group-item">WLAN: ${data.data.others.WLAN}</li>
     </ul>
 </div>
    `
  }
  // else releaseDate not found condition code
   else {
      parant.innerHTML = `
     <div class="card m-auto" style="width:60%">
     <img src="${data.data.image}" class="card-img-top img mx-auto">
     <div class="card-body">
         <h5 class="card-title">releaseDate: </h5>
         <p class="card-text">${data.data.releaseDate}</p>
     </div>
     <ul class="list-group list-group-flush">
         <li class="list-group-item">Chipset: ${data.data.mainFeatures.chipSet}</li>
         <li class="list-group-item">display Size: ${data.data.mainFeatures.displaySize}</li>
         <li class="list-group-item">Memory: ${data.data.mainFeatures.memory}</li>
     </ul>
     <p class="p-2">
     <span class="sensor-others">sensors :</span>
     ${data.data.mainFeatures.sensors[0]},
     ${data.data.mainFeatures.sensors[1]},
     ${data.data.mainFeatures.sensors[2]},
     ${data.data.mainFeatures.sensors[3]},
     ${data.data.mainFeatures.sensors[4]},
     ${data.data.mainFeatures.sensors[5]}
     </p>
     <ul class="list-group list-group-flush">
     <li class="list-group-item  sensor-others">Others:</li>
     <li class="list-group-item">Blouetooth: ${data.data.others.Bluetooth}</li>
     <li class="list-group-item">GPS: ${data.data.others.GPS}</li>
     <li class="list-group-item">NFC: ${data.data.others.NFC}</li>
     <li class="list-group-item">Radio: ${data.data.others.Radio}</li>
     <li class="list-group-item">WLAN: ${data.data.others.WLAN}</li>
     </ul>
 </div>
   `
  }

  //console.log(data.data.mainFeatures)
  // console.log(data);
} 



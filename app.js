// handle click event
const searchPhone = () => {
    const searchField = document.getElementById('search-field')
    // .value.toLowerCase();
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
  if (phones.length == '') {
    document.getElementById('worn-result').style.display = 'block';
} 
else {
    document.getElementById('worn-result').style.display = 'none';
}
   const searchResult= document.getElementById('search-result');
   searchResult.innerHTML ='';
   phones.forEach(phone => {
       console.log(phone)
       const div = document.createElement('div');
       div.classList.add('col')
       div.innerHTML = ` <div class="card   ">
             <img  src="${phone.image}" class="card-img-top w-25  mx-auto" alt="...">
             <div class="card-body">
             <h5 class="card-title ">Name:   ${phone.phone_name}</h5>
             <h5 class="card-title ">Brand:  ${phone.brand}</h5>
             <p>${phone.slug}</P>
             <button onclick= "loadphoneDetali('${phone.slug}')" class="btn btn-primary button background px-4">Details</button>
       </div>
     </div>`;
     searchResult.appendChild(div)  
   })
   // show the phone Detals 
}
const loadphoneDetali = phoneId =>{
    // console.log(id)
const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
fetch(url)
.then(res => res.json()) 
.then(data => displayPhoneDetails (data.data))
}
    //details card code 
const displayPhoneDetails = details => {
   //console.log(details);
const phoneDetails = document.getElementById('single-phone-detains');
phoneDetails.innerHTML = '';
const div = document.createElement('div');
div.classList.add('card');
div.innerHTML = `
 <div class="card">
 <div class="row g-0 my-5">
 <div class="col-md-7">
 <div class="card-body">
      <h4>Brand Name: ${details.brand}</h4>
      <h5 class="card-title">Model : ${details.name}</h5>
      <p class="card-text">${details.releaseDate}</p>
      <p>Storage: ${details.mainFeatures.storage}</p>
      <span>ChipSet: ${details.mainFeatures.chipSet}</span></br>
      <span>${details.others.Bluetooth}</span>
      <span>usb: ${details.others.USB}</span></br>
      <span>Disply Size: ${details.mainFeatures.displaySize}</span></br>
      <span>Memory : ${details.mainFeatures.memory}</span>
      <p class="card-text"><small class="text-muted">Date: ${details.releaseDate}</small></p>
  </div>
  </div>
  <div class="col-md-5">
  <img src="${details.image}" class="img-fluid rounded-start w-50" alt="...">
  </div>
</div>
</div>
`;
phoneDetails.appendChild(div);

}
const searchPhone = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    console.log(url)
    fetch (url) 
    .then(res => res.json())
    .then(data => displaySearchResult(data.data ))
}
const displaySearchResult = phones => {
   const searchResult= document.getElementById('search-result');
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
            <a  href="#" class="btn btn-primary button">Details</a>
       </div>
     </div>`;
     searchResult.appendChild(div)
   })
}
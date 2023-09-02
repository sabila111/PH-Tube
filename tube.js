// navbar 
function blogPage(){
    window.location.href = 'index2.html'
}
// button js
const handleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    const buttonContainer = document.getElementById('button-container');
    const trimData = data.data;

    trimData.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick="handleButton('${category.category_id}')" class="btn btn-info bg-[#25252526] border-transparent">${category.category}</button>
        `;

        buttonContainer.appendChild(div);
    });
};

const handleButton = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML="";

    data.data?.forEach((entertainment) => {
        console.log(entertainment);
        const div = document.createElement('div');
        div.innerHTML = `
      <div class="card w-[350px] bg-base-100 mb-2 my-10">
        <figure>
        <img class="w-full h-[200px] rounded-[8px]" src=${entertainment?.thumbnail} />
        </figure>
        <div class="card-body">
        <div class="flex justify-items-start gap-3">
        <img class="w-10 h-10 rounded-[40px]" src=${entertainment?.authors[0].profile_picture} />
        <h2 class="card-title">${entertainment.title} </h2>
        </div>
       <div class="flex justify-items-start gap-3">
       <p>${entertainment.authors[0].profile_name} ${entertainment.authors[0].verified}</p>
       <img class="w-5 h-5" src="fi_10629607.jpg" alt="">
       </div>
        <p>${entertainment.others.views}</p>
        
  </div>
</div>
        `;
        cardContainer.appendChild(div);
    });

}

handleCategory();
handleButton('1000');





const handle = () => {
    fetch('https://openapi.programming-hero.com/api/videos/categories')
        .then((res) => res.json())
        .then((data) => console.log(data));
};
handle();
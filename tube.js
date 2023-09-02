const handleCategory = async ()=>{
    const response = await fetch ('https://openapi.programming-hero.com/api/videos/categories');
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

const handleButton = async(categoryId) =>{
    const response = await fetch (`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    console.log(data.data);

}

handleCategory();





const handle = ()=> {
    fetch('https://openapi.programming-hero.com/api/videos/categories')
    .then ((res) => res.json())
    .then ((data) => console.log(data));
};
handle();
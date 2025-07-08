let houses = document.querySelectorAll('img.house-images')

houses.forEach(element => {

    element.addEventListener("mouseover", ()=>{
        element.textContent = "Explore"
    })
    
});
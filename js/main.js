const worksImg = document.querySelectorAll('.works-img-hover')
worksImg.forEach(img => {
    img.addEventListener('mouseover', () =>  {
        img.style.opacity = 1;
    })
    img.addEventListener('mouseout', () =>  {
        img.style.opacity = 0;
    })
})
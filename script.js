

const grade = document.querySelector("#text");
const calculate = document.querySelector(".btn-calculate");
const harfsonuc = document.querySelector(".harf")

const grades = [
    {min : 90 , max : 100 , grade : "AA",  color : "green"},
    {min : 80 , max : 90 , grade : "BA", color : "green"},
    {min : 75 , max : 80 , grade : "BB", color : "green"},
    {min : 70 , max : 75 , grade : "CB", color : "green"},
    {min : 60 , max : 70 , grade : "CC", color : "green"},
    {min : 55 , max : 60 , grade : "DC", color : "green"},
    {min : 50 , max : 55 , grade : "DD", color : "green"},
    {min : 0 , max : 50 , grade : "FF", color : "red"},
]

const calculateFunc = () => {
    const gradeValue = grade.value

    const getGrade = grades.find((grade) => gradeValue >= grade.min && gradeValue < grade.max )
    harfsonuc.textContent = `Harf Notun ${getGrade.grade}`
    harfsonuc.style.color= getGrade.color;
}

calculate.addEventListener("click", calculateFunc);
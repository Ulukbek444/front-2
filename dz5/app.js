const color = prompt("Введите цвет светофора")
const text = document.querySelector("h1")

if(color === "red"){
    console.log("Остановитесь!")
}else if(color === "green"){
    console.log("Можете ехать!")
}else if(color === "yellow"){
    console.log("Приготовьтесь!")
}else{
    console.log("Ошибка: некорректный цвет светофора.")
}
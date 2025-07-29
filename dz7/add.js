console.log("hello world")
let studentGrades = {
    student: {
        name: 'Ulukbek',
        id: 1,
        course: 2
    },
    subjects: ['Math', 'Physics', 'Programming', 'English'],
    grades: {
        'Math': [5, 4, 5, 3],
        'Physics': [4, 4, 3, 5],
        'Programming': [5, 5, 5, 4],
        'English': [4, 3, 4, 4]
    }
};
let addToSubject = "Math"
let addGrade = 5

studentGrades.grades[addToSubject].push(addGrade);
console.log(studentGrades.grades[addToSubject]);

let bestSubjectByGrades =""
let bestGrades = 0
for(let subject in studentGrades.grades) {
    let count = 0
    let sum = 0
    for (let i = 0; i < studentGrades.grades[subject].length; i++) {
        sum += studentGrades.grades[subject][i]
        count++
    }
    let average = sum / count
    console.log(`Средний балл по предмету ${subject} : ${average} `)
    if(average > bestGrades) {
        bestGrades = average
        bestSubjectByGrades =  subject
    }
}

console.log(`лучший предмет по среднему баллу ${bestSubjectByGrades } (${bestGrades})`)

let store = {
    products: [
        { id: 1, name: 'Хлеб', price: 25, category: 'Продукты', stock: 50 },
        { id: 2, name: 'Молоко', price: 60, category: 'Продукты', stock: 30 },
        { id: 3, name: 'Футболка', price: 800, category: 'Одежда', stock: 15 },
        { id: 4, name: 'Джинс', price: 2500, category: 'Одежда', stock: 8 }
    ],
};



for(let i = 0; i < store.products.length; i++ ) {
        console.log(`название: ${store.products[i].name} 
       Цена4 ${store.products[i].price}
       В наличии;${store.products[i].stock}
       Категория; ${store.products[i].category}`)
}
let searchId = 2
let searchCategory = 'Одежда'
let searchCount = 0
 for(let i = 0; i < store.products.length; i++ ) {
     if (store.products[i].id === searchId) {
         console.log(`Продукт по ID ${searchId} - ${store.products[i].name}`)
     }
     if(store.products[i].category === searchCategory) {
         if(searchCount === 0){
             console.log(`Продукт с категорией  ${searchCategory} - ${store.products[i].name}`)
             searchCount++
         }
         else{
             console.log(`А также : ${store.products[i].name}`)
         }
     }
 }
let newProduct = {

    id: 5,

    name: 'Кефир',

    price: 45,

    category: 'Продукты',

    stock: 25

};

 store.products.push(newProduct);
 console.log(store.products);


let container = document.getElementById("container")
let fetchbtn = document.getElementById("fetchtodos")

let url = `https://jsonplaceholder.typicode.com/todos`

function ShowData(){
    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        DisplayData(data)
    })
    .catch(function(error){
        console.log("Error" , error)
    })


}

fetchbtn.addEventListener("click" , function(){
    ShowData()
    
})

function DisplayData(arr){

    arr.forEach(function(ele){
        let card = document.createElement("div")
        
        // let id = document.createElement("h3")
        // id.innerHTML = ele.id
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.id = "checkbox"
        
        
        

        let title = document.createElement("h2")
        title.innerHTML = ele.title

        // let auth = document.createElement("h4")
        // auth.innerHTML = ele.completed


        card.append(title,checkbox)
        container.append(card)


    })
}

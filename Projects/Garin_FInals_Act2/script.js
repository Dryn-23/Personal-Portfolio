const Message = document.getElementById("message")
const Button = document.getElementById("loadBtn")
const changeBtn = document.getElementById("changeBtn")
const Profile = document.getElementById("profile")
const Grade = document.getElementById("grades")
const Schedule = document.getElementById("schedule")
const baddie = document.getElementById("body")
const card = document.getElementById("card")

function showMessage(txt){
    Message.innerHTML = txt
}

//===CODE===
//===FUNCTION AND DELAY CODE===
// Button.addEventListener(
//     "click", function(){
//         // Message.innerHTML = "Loading...."
//         showMessage("Loading")

//         setTimeout(function(){
//             // Message.innerHTML = "Welcome to JavaScript!"
//             showMessage("Welcome to JavaScript!")
//         },3000)
// })


//===PROMISE FUNCTION===
// function loadMessage(){
//     return new Promise(function(resolve, reject){
//             setTimeout(function(){
//                 let success = true
//                 if(success){
//                     resolve("Welcome to PDM!")
//                 } else {
//                     reject("Failed to Load!")
//                 }
//         },3000)
//     })
// }

// Button.addEventListener(
//     "click", function(){

//         showMessage("Loading")
        
//         loadMessage()

//         .then(function(result){
//             Message.innerHTML = result
//         })

//         .catch(function(error){
//             Message.innerHTML = error
//     })
// })


//===MULTI THEN===
function loadMessageTo(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Checking Account....")
            Message.style.color = "green"
        },3000)
    })
}

Button.addEventListener("click", function(){
    showMessage("Loading....")
    Profile.innerHTML = ""
    Grade.innerHTML = ""
    Schedule.innerHTML = ""
    loadMessageTo()

    .then(function(result){
        showMessage(result)

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Checking Assets...")
                Message.style.color = "red"
            },3000)
        })  
    })

    .then(function(result){
        showMessage(result)

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Checking...")
                Message.style.color = "yellow"
            },3000)
        })
    })

    .then(function(result){
        showMessage(result)
        
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Welcome Garin!!!")
                Message.style.color = "blue"
            },3000)
        })
    })

    .then(function(result){
        showMessage(result)
    })
})

changeBtn.addEventListener("click", function(){
    showMessage("Loading Dashboard....")
    Profile.innerHTML = "Profile: Waiting..."
    Grade.innerHTML = "Grades: Waiting..."
    Schedule.innerHTML = "Schedule: Waiting..."

    const profilePromise = new Promise(function(resolve){
        setTimeout(function(){
            Profile.innerHTML = "Profile: Loaded"
            Profile.style.color = "green"
            resolve()
        }, 1000)
    })

    const gradePromise = new Promise(function(resolve){
        setTimeout(function(){
            Grade.innerHTML = "Grades: Loaded"
            Grade.style.color = "green"
            resolve()
        }, 3000)
    })

    const schedulePromise = new Promise(function(resolve){
        setTimeout(function(){
            Schedule.innerHTML = "Schedule: Loaded"
            Schedule.style.color = "green"
            resolve()
        }, 5000)
    })

    Promise.all([profilePromise, gradePromise, schedulePromise])

    .then(function(){
        setTimeout(function(){
            showMessage("Dashboard Ready!!")
            Message.style.color = "green"
            resolve()
        }, 2000)
    })
})

Button.addEventListener("mouseover", function(){
      Button.style.backgroundColor = "blue"
           baddie.style.backgroundColor = "black"
      card.style.backgroundColor = "black"
          Message.style.color = "white"
          document.getElementById("header").style.color = "white"
      
})

Button.addEventListener("mouseout", function(){
      Button.style.backgroundColor = "cyan"
           baddie.style.backgroundColor = "white"
      card.style.backgroundColor = "whitesmoke"
      Grade.style.color = "green"
      Schedule.style.color = "green"
    Profile.style.color = "green"
    Message.style.color = "black"
              document.getElementById("header").style.color = "black"
})

changeBtn.addEventListener("mouseover", function(){
      changeBtn.style.backgroundColor = "blue"
      baddie.style.backgroundColor = "black"
      card.style.backgroundColor = "black"
          Message.style.color = "white"
          document.getElementById("header").style.color = "white"
      

})

changeBtn.addEventListener("mouseout", function(){
      changeBtn.style.backgroundColor = "cyan"
      baddie.style.backgroundColor = "white"
      card.style.backgroundColor = "whitesmoke"
      Grade.style.color = "green"
      Schedule.style.color = "green"
    Profile.style.color = "green"
    Message.style.color = "black"
              document.getElementById("header").style.color = "black"
})
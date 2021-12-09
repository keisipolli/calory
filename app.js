// Module pattern basic structure
(function(){
    // Declare private variables and functions

    return {
        // Declare public variables and functions
    }
})();

// Standard module pattern
// It will be UI Controller
const UIController = (function(){
    let text = "Hello World"

    const changeText = function(){
        const element = document.querySelector("h1")
        element.textContent = text
    }
    return {
        callChangeText: function(){
            changeText()
            console.log(text)
        }
    }
})();

UIController.callChangeText()

// Revealing module pattern
// It will be Item Controller
const ItemController = (function(){
    let data = []

    function add(item){
        data.push(item)
        console.log("Item is added")
    }

    function get(id){
        return data.find(item => {
            return item.id === id
        })
    }

    return {
        add: add,
        get: get
    }
})();

ItemController.add({id: 1, name: "Kate"})
console.log(ItemController.get(1))
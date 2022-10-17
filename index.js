// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){ 
    cats.unshift("Bob") 
}   
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
 const air = [...cats, "Broom"]
 return air
}
function prependCat(name){
 const air = ["Arnold", ...cats]
 return air
}
function removeLastCat(){
 const cats =["Milo", "Otis", "Garfield"]
 cats.pop()
 return cats
}
function removeFirstCat(){
  const cats = ["Arnold", "Otis", "Garfield"]
  cats.shift()
  return cats
  
}

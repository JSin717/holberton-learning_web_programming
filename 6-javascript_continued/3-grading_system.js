let my_parameter = process.argv[2];{
console.log("Here is the first passed parameter: " + my_parameter)
if (my_parameter >= 95){
    console.log("You recieved an A+")
}else if(my_parameter >= 90){
    console.log("You recieved an A")
}
else if(my_parameter >= 85){
    console.log("You recieved an B+")
}
else if(my_parameter >= 80){
    console.log("You recieved an B")
}
else if(my_parameter >= 75){
    console.log("You recieved an C+")
}
else if(my_parameter >= 70){
    console.log("You recieved an C")
}
else if(my_parameter <= 65){
    console.log("You recieved an D")
}
}

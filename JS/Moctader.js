
// Md Golam Moctader

function window_calculation() {
    let windows_height = Number(document.getElementById("window_height").value);
    let window_width = Number(document.getElementById("window_width").value);
    let window_amount = Number(document.getElementById("window_amount").value);


    let message = "";

    if (windows_height <= 200 && window_width <= 200){
        let wood_needed = ((windows_height * window_width * 6)/10000)
        let glass_needed = ((windows_height * window_width * 1)/10000)


        let Set_wood = (wood_needed * window_amount)
        let Set_glass = (glass_needed * window_amount)


        document.getElementById("wood").innerHTML = wood_needed;
        document.getElementById("glass").innerHTML = glass_needed;

        document.getElementById("woods").innerHTML = Set_wood;
        document.getElementById("glasses").innerHTML = Set_glass;

        document.getElementById("size").innerHTML = "large window";
        

    } else {
        message = "Maximum height and width of window is 200cm"
        document.getElementById("error").innerHTML = message;

    }
    
    /*
    
    if (windows_height <= 50 && window_width <= 50 && window_amount >=12){
        message ="Minimum height and width of window is 50cm."
 
    } else if (windows_height <= 100 && window_width <= 100 && window_amount <=12) {
        message = "No more than 10 equal size windows."

    } else {
        message = "No amount. 1 assumed."

    }
    document.getElementById("error").innerHTML = message;

*/
}
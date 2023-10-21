const calcArea=()=>{
    const inputArea = document.getElementById('area').value;
    const areaSelected = document.getElementById('area_diff');
    const valueArea = area_diff.options[areaSelected.selectedIndex].value;

    //Yard to Squarefeet
    const yardTosq = (yard)=>{
        let squareFeet = (yard * 9).toFixed(1);
        return squareFeet;    
    }
    //Squarefeet to yard
    const sqToYard = (sqFeet) =>{
        let yard = (sqFeet / 9).toFixed(1);
        return yard;
    }
    if (valueArea== 'yard'){
        document.getElementById("result").innerHTML = yardTosq (inputArea) + "&#176; Sqaure feet";

    }
    else {
                document.getElementById("result").innerHTML = sqToYard (inputArea) + "&#176; Yard";

    }
}
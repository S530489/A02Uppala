function gpa(){
    
    var gained_credits= grade( $('#textbox2').val()) + grade($('#textbox5').val())+grade($('#textbox8').val());
    testing_credits($('#textbox3').val(),$('#textbox6').val(),$('#textbox9').val())
    var total_credits= parseInt($('#textbox3').val())+parseInt($('#textbox6').val())+parseInt($('#textbox9').val());
    var result= (gained_credits*3)/total_credits;
    result=result.toFixed(2);
    $('#textbox10').val(result);
    //document.getElementById('textbox10').value=result;
}
function testing_credits(textbox3,textbox6,textbox9){
    if(isNaN(parseInt(textbox3))||isNaN(parseInt(textbox6))||isNaN(parseInt(textbox9)))
    {
        alert("please enter only number in credits column");
        $("#col").html("Click on recalculate button below to calculate again");
        throw Error('The given arguments is not a number');
    }
    else if (textbox3<0||textbox6<0||textbox9<0){
        alert("please enter the positive numbers");
        throw Error('The given numbers are negative');
    }
    else
        return "valid inputs";
}
function grade(i){
    if( i == 'A'|| i == "a"){
        return 4;}
    else if(i == "B"|| i == "b"){
        return 3;}
    else if(i == "C"|| i=='c') {
        return 2;}
    else if(i == "D"|| i=='d'){
        return 1;}
    else if(i=="E"|| i=="e"){
        return 0;}
    else
        {
        alert("please enter the corrects grades from A to E");
       reload();
    }
}
function reload(){

    location.reload();
}

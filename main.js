var name_of_array=[];
function submit(){
    var display_students=[];
    for (var j=1;j<=4;j++){
        var value=document.getElementById("name_of_the_student_"+j).value;
        console.log(value);
        name_of_array.push(value);

    }
    var store_length= name_of_array.length;
    console.log(store_length);
    for (var i=0;i<store_length;i++){
        display_students.push("<h4>Name- "+name_of_array[i]+"</h4>")
        console.log(display_students);

    }
    console.log(display_students);
    document.getElementById("display_name_with_commas").innerHTML=display_students;

    var no_coma=display_students.join(" ");
    console.log(no_coma);
    document.getElementById("display_name_without_commas").innerHTML=no_coma;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

} 
function sorting(){
    name_of_array.sort();
    console.log(name_of_array);
    var array_new=[];
    var store_pt2=name_of_array.length;
    console.log(store_pt2);
    for (var k=0;k<store_pt2;k++){
        array_new.push("<h4>Name- "+name_of_array[k]+"</h4>");
        console.log(array_new);
    }
    var jomama=array_new.join(" ");
    console.log(jomama);
    document.getElementById("display_name_without_commas").innerHTML=jomama;
}                           
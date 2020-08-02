var data = new Array;
var i = 0;

function tambahdata(){
    data[i] = parseInt(document.getElementById('txtinput').value);
    i++;
    document.getElementById('txtinput').value =" ";
}

function tampildata(){
    for(var a=0; a < data.length; a++){
        document.getElementById('lbldata').innerHTML += data[a] + '<br>';
    }
}

function quickSort(data) {
	if (data.length <= 1) { 
		return data;
	} else {
		var left = [];
		var right = [];
		var newArray = [];
		var pivot = data.pop();

		for (var i = 0; i < data.length; i++) {
			if (data[i] <= pivot) {
				left.push(data[i]);
			} else {
				right.push(data[i]);
			}
        }

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

function sortir(){
    var sortArray = quickSort(data);
    document.getElementById("lblsorting").innerHTML = sortArray;
}
function processData(data) {
    var inputNumbers = [];
    console.log("data process");
    document.getElementById('errorblk').innerHTML = "";
    document.getElementById('output').style.display = 'none';
    var numArray = data.split(',');
    numArray.forEach(function (num) {
        if (num) {
            var rangeArray = num.split('-')
            if (rangeArray.length === 2) {
                var a = parseInt(rangeArray[0]);
                var b = parseInt(rangeArray[1]);
                if (Number.isInteger(a) && Number.isInteger(b) && (b > a)) {
                    for (var i = a; i <= b; i++) {
                        inputNumbers.push(i);
                    }
                } else {
                    document.getElementById('errorblk').innerHTML = "Input Range Error";
                }
            } else if(rangeArray.length > 2){
                document.getElementById('errorblk').innerHTML = "Input Range Error";
            } else {
                num = parseInt(num);
                if (Number.isInteger(num)) {
                    inputNumbers.push(num);
                } else {
                    document.getElementById('errorblk').innerHTML = "Input Data Error";
                }
            }
        }
    });
    // Processing Duplicates and Unique List
    var convertedObj = {};
    var duplicateList = [];
    var uniqueList = [];
    for(var i=0; i<inputNumbers.length; i++){
        convertedObj[inputNumbers[i]] ? convertedObj[inputNumbers[i]] +=1 : convertedObj[inputNumbers[i]] = 1;
    }
    for(var key in convertedObj) {
        if(convertedObj.hasOwnProperty(key)){
            convertedObj[key] > 1 ? duplicateList.push(key) : uniqueList.push(key);
        }
    }
    if(duplicateList.length > 0) {
        var toastHTML = '<span>Duplicates are Detected in the Input Data !!!</span>';
        M.toast({html: toastHTML, classes: 'rounded'});  
    }
    document.getElementById('duplicatelist').innerHTML = duplicateList;
    document.getElementById('uniquelist').innerHTML = uniqueList;   
    document.getElementById('output').style.display = 'block';

}

function detectKeyPress() {
    var data = document.getElementById('numberlist').value;
    document.getElementById('numberlist').value = data.trim();
    if (!data || data.length === 0) {
        document.getElementById('errorblk').innerHTML = "";
        document.getElementById('duplicatelist').innerHTML = "";
        document.getElementById('uniquelist').innerHTML = "";
    }
    if (data[data.length - 1] === ',') {
        processData(data);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var options = {};
    var instances = M.Collapsible.init(elems, options);
  });



    function click() {
        let lname = document.getElementById('lname').value;
        let fname = document.getElementById('fname').value;
        let email = document.getElementById('email').value;

        if (fname === "" || lname === "" || email === "") {
            alert('Please fill in all the required fields');
        } else {
            alert(`Welcome ${lname}`);
        }
    }

    var date = new Date();
    var year = date.getFullYear();
    document.getElementById('year').innerHTML = year;

    var httprequest = new XMLHttpRequest();

    function sendreq() {
        var formData = new FormData(); // Create a new FormData object
        formData.append('fname', document.getElementById('fname').value);
        formData.append('lname', document.getElementById('lname').value);
        formData.append('email', document.getElementById('email').value);

        httprequest.onreadystatechange = writecontent;
        httprequest.open('POST', 'index.php');
        httprequest.send(formData); // Send the form data with the request
    }

    function writecontent() {
        if (httprequest.readyState === 4 && httprequest.status === 200) {
            var response = httprequest.responseText;
            alert(response);
        } else {
            alert('There was a problem with the request');
        }
    }
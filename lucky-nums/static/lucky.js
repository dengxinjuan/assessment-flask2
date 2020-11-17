/** processForm: get data from form and make AJAX call to our API. */

function processForm(evt) {
    evt.preventDefault();

    $.ajax({
        method:"POST",
        url: "/api/get-lucky-num",
        contentType: "application/json",
        data: JSON.stringify(
            {
                name:$("#name").val(),
                email: $("#email").val(),
                year: $("#year").val(),
                color: $("#color").val()
            }),
            success : handleResponse // call handleresponse function if success
    });

}

/** handleResponse: deal with response from our lucky-num API. */
// to check is there any errors in response
function handleResponse(resp) {
    if("errors" in resp){
        for( let field in resp.errors){
            $(`#${field}-err`).text(resp.erros[field]);
        }
    }else{
        let {num, year} = resp;
        let msg = `Your lucky number is ${num.num} (${num.fact}).
        Your birth year (${year.year}) fact is ${year.fact}.`;
    
        $("#lucky-results").text(msg);

    }

}


$("#lucky-form").on("submit", processForm);

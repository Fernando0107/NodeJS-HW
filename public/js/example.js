$(document).ready(function() {
    $('.send').click(function() {
        let newName = $('#nombre').val()
        console.log(newName);
        if (newName && newName.length > 0) {
            $.post('/save-user', {name:newName}, function(data, status) {
                console.log(`${data.message} and status is ${status}`)
                alert(data.message)
                setTimeout(function() {
                    location.reload();s
                }, 2000);
            })
        }
    })
})
/*
function eliminar(name) {

    //console.log(name.name)

}*/

function eliminar(name) {
    $.post('/delete', name, function () {

        if (!alert('Deleting....\n')) {         //Reload page automatic
            window.location.reload();
        }
        

    });
}


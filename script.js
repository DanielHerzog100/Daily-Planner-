var saveButton = $(".saveBtn")

saveButton.on('click' , function () {

console.log($(this).siblings(".description").val())
    })
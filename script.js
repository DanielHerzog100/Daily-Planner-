var saveButton = $(".saveBtn")

saveButton.on('click' , function () {
var timeId = $(this).parent().attr("id")
var description = $(this).siblings(".description").val()
  localStorage.setItem(timeId , description) 
})
  
// const currentHour = new Date().getHours()
const currentHour = 104
    $('div[id^="block-"]').each (function(){
    var timeId = $(this).attr("id")
        var description = localStorage.getItem(timeId)
        $(this).children(".description").val(description)

        var divHour = +timeId.split("-")[1]
        if (divHour<currentHour){
            $(this).addClass("past")
        } else if (divHour>currentHour){
            $(this).addClass("future")
        } else {
            $(this).addClass("present")
        }
})

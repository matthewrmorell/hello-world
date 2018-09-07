function getCustomerFeedbackValues()
{
    var name = document.feedbackForm.name.valueOf();
    var email = document.feedbackForm.email.valueOf();
    var howTheyFoundUs = document.feedbackForm.findus.valueOf();
    var message = document.feedbackForm.message.valueOf();
    
    alert("Thank you for your feedback!");
    return true; 
}

//function sendMail()
//{
//  var link = "mailto:j.caraballo.1114@gmail.com"+
//             "?cc=CCaddress@example.com"+
//             "&subject=" + escape("This is subject")+
//             "&body=" + escape("This is bodyyyyyyyyyyyyyy");
//  window.open(link);
//}




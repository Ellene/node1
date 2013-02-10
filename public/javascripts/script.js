$(document).ready(function(){

    setMenu();

});

function setMenu()
{
    
        var list = "<% _.each(express.public_pages, function(page) { %> <li><a href='./<%=page.url %>'><%= page.properties.title %></a></li> <% }); %>";
        $('#publicMenu').append(_.template(list, express.public_pages));

}
var content = 'Interested to work in the computer software industry alongside interested to work in Artificial Intelligence (AI) sector as well . Skilled in, OOP (Object Oriented Programming), JAVA, Python, Data Analysis, Data Visualization, Microsoft Office, Event Management, IT Strategy, and Problem Solving . I have completed my Bachelor of Science (B.Sc) degree with major in Computer Science and Engineering (CSE) from BRAC University.';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo('#typewriter').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});
var content = 'Experienced Software Engineer of Quality Assurance with a demonstrated history of working in the computer software industry. Skilled in Java, Python, SQL, Selenium, Automation Testing, Manual Testing, and Web Development. Enthusiast in the field of Machine Learning, Emotion AI, and Mobile Application Development. Strong years of Engineering professional Teaching experience with a Bachelor of Science (B.Sc.) focused on Computer Science and Engineering from BRAC University as a Teaching Assistant/ Student Tutor.';

var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


$(ele).hide().appendTo('#typewriter').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});
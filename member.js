function skillsMember()
{
    // Display skills in a list
    var skills = [
        "Python",
        "C++",
        "C",
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
        "Git",
        "Docker"
    ];

    // Add skills to list
    for(var i = 0; i < skills.length; i++)
    {
        document.write("<li>" + skills[i] + "</li>");
    }
}
function count()
{
    var noofwords=document.getElementById("WordCount").value;
    noofwords=noofwords.match(/\w+/g);
    if(noofwords.length<201)
    {
        document.getElementById("count").innerHTML="Number of words written: "+noofwords;
        var r=200-noofwords.length;
        document.getElementById("remaining").innerHTML="Number of words remaining: "+r;
    }
    else
    {
        alert("You have exced the words limit,please enter the words less than or equal to 200.\n\n Number of words entered: "+noofwords.length);
    }
}
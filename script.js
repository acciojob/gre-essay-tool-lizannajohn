//your code here
function updateWordCount()
{
    let text = document.getElementById("evaluatedText").value;
    let wcount = text.trim() ? text.trim().split(" ").length : 0;

    document.getElementById("wordCount").innerHTML = wcount;
}
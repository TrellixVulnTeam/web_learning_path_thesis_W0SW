function myFunction4() {
    document.getElementById("demo").innerHTML = "<h>Project 4      ##### id = demo </h>";
    document.getElementById("demo1").innerHTML = "Hello Malikan!      ##### id = demo1 ";
    document.getElementById("demo2").innerHTML ="<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptas pariatur repellat veritatis atque, tempora quasi quas facere impedit aliquam libero qui iure cumque incidunt facilis soluta necessitatibus laboriosam nemo. Delectus architecto</p>";
    document.getElementById("demo3").innerHTML =" <p> sed, excepturi natus iste vel quidem officia corrupti repudiandae!</p>";
    document.getElementById("demo4").innerHTML ="<p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, deleniti eaque eligendi minus maxime tempora eiusi.</p>";
    document.getElementById("demo5").innerHTML ="<p>Have a nice day</p>";

    var s = "/miniproject";
    var bnt = "<p class='button1' style='vertical-align:middle' ><span> Start </span></p>";
    var result = bnt.link(s);
    document.getElementById("project-click").innerHTML = result;

}
function myFunction2() {
    document.getElementById("demo").innerHTML = "<h4>Project 2      ##### id = demo </h4>";
    document.getElementById("demo1").innerHTML = "Hello Malikan!      ##### id = demo1 ";
    document.getElementById("demo2").innerHTML ="<h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptas pariatur repellat veritatis atque, tempora quasi quas facere impedit aliquam libero qui iure cumque incidunt facilis soluta necessitatibus laboriosam nemo. Delectus architecto</h4>";
    document.getElementById("demo3").innerHTML =" <h4> sed, excepturi natus iste vel quidem officia corrupti repudiandae!</h4>";
    document.getElementById("demo4").innerHTML ="<h4> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, deleniti eaque eligendi minus maxime tempora eiusi.</h4>";
    document.getElementById("demo5").innerHTML ="<h4>Have a nice day</h4>";

    var s = "/miniproject";
    var bnt = "<p class='button11' style='vertical-align:middle' ><span> Start </span></p>";
    var result = bnt.link(s);
    document.getElementById("project-click").innerHTML = result;

}
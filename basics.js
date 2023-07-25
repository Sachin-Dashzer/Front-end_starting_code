

//    Javascript - javascript is a scripting and weakly type language used to perform some type of work in our webpage. 

    document.write("<h1>Javascript code</h1>");

    
    // -> we use <script> tag to attached our javascript file into our program and src attribute to attached an external javascript. 


  
  
    // 1. Variables -> its is basically a type of container/bucket used to store data in our program.
                    //-> variable name can only be start with alphabates or '_' , '$'. 
                    //-> javascript is a case sensative language means the value of 'a' and 'A' will be different.

        // type of variables -:

        // 1. Var = the data inside this bucket can changable and easily accessable throughout the code.

        // 2. Let = the data inside this bucket can changable but we can not access outside its ScriptProcessorNode({}).

        // 3. Const = the data inside this bucket in unchangable/fixed its cannot be changed after initillization.

        // --> Local variables == those type of variables which values can not be access outside of its scope '{}' called local variable.

        // --> Global variables == those type of variables which values can be accessed thoughout the program called global variable.

            // ways to define golbal variable -: 

                // 1. create the value outside from any scope '{}'. 
                // 2. create the value with the help of window.x .

            // how to execute any global variable -:

                // we can excess any variable with the help of window. either its inside or outside of our scope(but if we acess outside the scope the value will be unidentified).  


    

    

    

    // 2. Datatype  = it tells us what type of data we store in our program . 

    //     type of datatypes -:

    //     1. primitive -: 

    //         number = its stores integers (var x = 5;)
    //         string = its stores our alphabets (var x = "Hello";) //(a string always written in double quotes(""));
    //         Boolean = its stores two values either true or false (var x = true;) // we do not use 0 or 1 while initialling cause its consider it as numbers. 
    //         undefined = its stores any unknown/random value (var x;). 
    //         Null = its store a blank/empty bucket (var x = '' ;);

            //  ---> addition in primitive datatypes = action always consider in left to right manner

                // if we add a number into a string the answer will be in string
                // if we add a boolen into a number it add like number (if true == 1, false == 0);
                // if we add boolen into a string it add like string
                // if we add undefined into any number datatype its gives us NAN(not a number)

            
        // 2. Non - promitive -:

            // Array = its a collection/bucket of same datatypes. 
                    // array indexes always start with 0.
                    // we can access array element by their index Number. 

                    // for example =  

                        // var x = ["Hii", "my" , "name" , "Dashzer"];

                        // document.write(x);
                        // document.write("<br>")

                        // document.write(x[3]);
                        // document.write("<br>")

                        // document.write(x[4]);



            // Object = its a bucket used to store data of different datatypes. 
                        // it can store different datatypes. 
                        // we can access its element by '.' operator.
                        // its always made under curely brackets.
                        
                        // for example -:

                            // var id = {

                            //     name : "Dashzer",
                            //     class : "twelth",
                            //     rollno : 42,
                            //     male : true
                            // }

                            // document.write(id.name);
                            // document.write("</br>")

                            // document.write(id.rollno);
                            // document.write("</br>")

                            // document.write(id.male);
                        



    


    // 3. Operators =  these are some special elements help us to perform some type of comparison or work into our program. 


        // types of Operators -:

            // 1. Arthematic operators = used to perform any mathematical operation;

                // '+' = used to add elements in numbers also used in conctination of two strings. 
                // '-' = used for subtraction 
                // '*' = used for multiplication
                // '/' = used for division
                // '%' = used for modulus.
                // '++' = used for pre or post increment the value 
                // '--' = used for pre or post decrement the value


            // 2. Comparison Operator -: used for comparison or giving condition purposes.

                // '=='  = equal to each other
                // '>' = greater then
                // '<' = less then
                // '>=' = greater then equal to 
                // '<=' = less then equal to 
                // '===' = used to examine that both value or datetypes are same or not 
                // '!=' = not equal to 
                // '!==' = not equal to and datatype are also not same


            // 3. Binary operators -: its work on binary system (0 ,1).

                // '&'(and) = if both conditions are ture then true otherwise false

                        // 0 & 0 => 0
                        // 0 & 1 => 0
                        // 1 & 0 => 0
                        // 1 & 1 => 1

                // '|'(or) = if both condition is false then false otherwise true 

                        // 0 | 0 => 0
                        // 0 | 1 => 1
                        // 1 | 0 => 1
                        // 1 | 1 => 1

                // '~'(not) = if condition is false then true and vice versa 

                        // ~1 => 0
                        // ~0 => 1

                // '^'(xor) = if both condition is true or false then true

                        // 0 ^ 0 => 1
                        // 0 ^ 1 => 0
                        // 1 ^ 0 => 0
                        // 1 ^ 1 => 1



            // 4. Logical operators -: its basically used for logical purpose


                    // '&&' = and operators
                    // '||' = or operators
                    // '!'  = not operators

            
            // 5. Assingment operator -: used for assingning the value purpose. 

                // '=' = assing
                // '+=' = add and assing
                // '-=' = subtract and assing
                // '*=' = multiply and assing
                // '/=' = divide and assing
                // '%=' = modulus and assing


            // 6. Special operator -: these are some special operator used to reduce the code the make it simple many of them are used only in javascript. 

                // '?:'(conditional operator) == used always on some codition if condition is true case apply otherwise second case apply

                                            // ex =   
                                            //     var a = 15;
                                            //     var b = 7;
                                            //     var z = (a > b) ? true : false;
                                            //      document.write(z);


                // ','(comma operator) = when we have to assing more then one value to a component. 

                                            // ex =
                                                // var a = (2 , 4 , 6);
                                                // document.write(a);


                // delete = delete operator is used when we have to delete any entry in Object. 

                                            // ex =

                                            // var id = {

                                            //     firstname : "Dashzer",
                                            //     class : "fifth",
                                            //     Rollno : 45,
                                            //     fees : "5k"
                                            // }

                                            // document.write(id.firstname);
                                            // document.write("</br>")

                                            // delete id.firstname;

                                            // document.write(id.firstname);



                // in = to check whether the given property is present in the object or not. 
                        
                                            // ex =
                                                // var id = {
                                                //     firstname : "Dashzer",
                                                //     class : "fifth",
                                                //     Rollno : 45,
                                                //     fees : "5k"
                                                // }

                                                // var ans1 = "age" in id ? true : false;
                                                // var ans2 = "fees" in id ? true : false;

                                                // document.write("if age present in id = " + ans1);
                                                // document.write("</br>")
                                                // document.write("if fees present in id = " + ans2);


            
                // typeof = this operator is basically used to find the type of oprator we have using;

                                            // ex =

                                            // var a = [1 , 2, 3];

                                            // document.write(typeof(a));





    // 4. if/else  


    // 5. loops -: loops are generally used when we have to do multiple work at same way. 

            // types of loops =

            // 1. while
            // 2. dowhile 
            // 3. for

            // 4. for in = this loops is generally used on objects when we have to print the values or details of a objects. 

                        // syntax -:

                            // for(value in objectname){
                            //     write code here;
                            // }


                        // for ex = 

                            // var temp = "";

                            // var id = {
                            //     firstname : "Sachin", 
                            //     lastname : "kumar",
                            //     age : 45,
                            //     married : "Unmarried"
                            // }


                            // for(value in id){
                            //     // document.writeln(value);
                            //     // document.writeln(id[value] + "</br>");
                            //     // temp = temp + id[value] + "</br>";
                            // }

                            // document.writeln(temp);



            

            // 5. for of -: this loop is basically used for printing array indexes or string letters. 

                        // syntax -: 

                            // for(value of array/stringname){
                            //     write code here;
                            // }


                        // for ex =

                            // var a = ["Hii" , "i" , "am" , "here" , "!"];
                            // var b = "Dashzer";

                            // for(value of a){
                            //     document.writeln(value + " ");
                            // }
                            
                            // for(value of b){
                            //     document.writeln(value + ' ');
                            // }
    




    // 6. Function -: function is a pair of code which used for make our program more faster and better. 
                    // -> it makes our code clean and reusable. 
                    

                    // There are two type of function in js -:

                    //                         1. regular function
                    //                         2. fat arrow function


                        // 1. regular function -:
                            
                            // syntax -:

                                // function name(var x){
                                //     write your code here;
                                //     return value;
                                // }

                            // for example = 

                                // function login(){
                                //     alert("You forget to login");
                                // }
                                // login();

                                // function square(x){
                                //     return x*x;
                                // }
                                // alert(square(6));


                        // 2. fat arrow function == it declared in es6 javascript its the modern way to declared a fucniton

                            // syntax -: 
                                    
                                    // const name = (x , y) => {
                                    //     write your code here;
                                    //     return value;
                                    // }


                // note -: difference between normal and fat arrow function

                            // 1. arguments objects are not allowed in arrow function

                            //     for ex-:

                                    // function add(x , y){
                                    //     console.log(arguments);
                                    //     return x + y;
                                    // }
                                    // add(34 , 23);

                                    // const add = (x , y) => {
                                    //     console.log(arguments);
                                    //     return x + y;
                                    // }
                                    // add(223 ,34);

                            // 2. Regular function creating using function declaration and expression are 'constructible' and 'callable';

                                    // for ex -:

                                        // function car(name){
                                        //     this.brand = name;
                                        // }
                                        // let cardata = new car('maruti');
                                        // console.log(cardata);

                                        // const car = (name) =>{
                                        //     this.brand = name;
                                        // }
                                        //  let cardata = new car('maruti');
                                        // console.log(cardata);


                            // 3. we can not use lexical this in arrow function

                            //         for ex -:

                                        // let myname = {
                                        //     name : "Dashzer",

                                            // fullname(){
                                            //     console.log("Gamer " + this.name);
                                            // }

                                        //     fullname : () =>{
                                        //         console.log("Gamer " + this.name);
                                        //     }
                                        // }

                                        // myname.fullname();


                            // 4. implicity returned by the arrow fucntion

                            //         for ex -:

                                        // fucntion mask(){
                                        //     100;
                                        // }

                                        // const mask = ()=> 100;

                                        // console.log(mask());
            


    // 7. Object  -:   A javascript is an entity having state and behavior(properties and method).
    //                 javascript is basically a object based scripting language 
    //                 object are used to connected it to real life based example. 
    //                 class can not be created it in javascript we create object directly in javascript.

                        // properties of object is like quality or identity of and object
                        // method of object is like what type of work the object can do

                    // for ex =  car , pen , bike ,glass , books etc.


            // types of creating a object in javascript -:

                // 1. By object literal

                        // var person = {

                        //     firstname : "Suraj",
                        //     lastname : "Yadav",
                        //     age : 23,
                        //     salary : 20000
                        // }

                        // // document.writeln("The first person is " + person.firstname + " " +  person.lastname + " of " + person.age + " years old with salery of " + person.salary );

                        // document.writeln("The first employee identity is :" + "</be>")

                        // for(value in person){
                        //     document.writeln(person[value] + " , ")
                        // }

                
                // 2. By creating the object with new keyword (instance of an object)

                        // var person = new Object();

                        // person.firstname = "Suraj";
                        // person.lastname = "Yadav";
                        // person.age = 23;
                        // person.salary = 20000;

                        // document.writeln("The first employee identity is :" + "</be>")

                        // for(value in person){
                        //     document.writeln(person[value] + " , ")
                        // }


                // 3. By using object constructor

                        // function person(name , age , salary){

                        //     this.name = name;
                        //     this.age = age;
                        //     this.salary = salary;
                        // }


                        // var firstperson = new person("Ramesh kumar" , 34 , 25000);

                        // document.writeln("The first employee identity is :" + "</be>")

                        // for(value in firstperson){
                        //     document.writeln(firstperson[value] + " , ")
                        // }



        // Method in javascript -:


                        // function employee(name , age , salary){
                            // this.name = name;
                            // this.age = age;
                            // this.salary = salary;

                            // this.update = update;
                            // function update(newsalary){
                            //     this.salary = newsalary;
                            // }
                        // }


                        // var f = new employee("Sachin" , 19 , 18000);
                        // document.writeln("Before covid salary of web-designer is : " + f.salary);                       

                        // document.writeln("</br>")

                        // f.update(25000);
                        // document.writeln("After covid salary of web-designer is : " + f.salary);




    // 8. BOM (Browser object model)  -:  BOM is basically used to interact with browser. 
                                        // window is a default object of browser mean we can call fuction either with or without him. 

                                        // for ex -: 

                                        // window.alert("This is a private webpage");
                                        // alert("You can't open this page without permission");


                        //  BOM objects -:

                            // 1. alert = use to give some massage to the user.
                                        // alert("Thanks for visiting here!");

                            // 2. confirm = used to take order from the user in the form of true or false. 
                                        // confirm("Are you 18+");

                                        // if(confirm == true){
                                        //     document.writeln("Thanks for visiting here!.");
                                        // }
                                        // else{
                                        //     document.writeln("You're not eligible for this.");
                                        // }


                            // 3. prompt() = used to take some input from user.
                                    
                                        // var name = prompt("what is your name");                                    
                                        // document.writeln("Thanks for visiting here MR. " + name);

                            // 4. open() = used to open a new webpage. 

                                        // function photos(){
                                        //     open("https://www.wallpaperflare.com/search?wallpaper=death+note");
                                        // }  
                                        
                            // 5. close() = it used to close any tab. 
                                        
                                        // function Quit(){
                                        //     close();
                                        // }

                            // 6. settimeout() = its is used to set the time when we want to perform/delay the work. 

                                    // function refresh(){
                                    //     setTimeout(() => {
                                    //         alert("Server error!")                                           
                                    //     }, 3000);
                                    // }
                            

                            // 7. history = hsitory object is basically used for acess in history objects. 

                                    // history.length() == this will tell us how many webpages are open in background 

                                            // document.writeln("Total background pages are : " + history.length);

                                    // history.forward/history.forward == this will help you to go previous or forward webpages. 

                                            // function back(){
                                            //     history.back();
                                            // }

                                            // function next(){
                                            //     history.forward();
                                            // }
                                        
                                    // history.go == this will give you access to go through any page with their distance from the current webpage. 

                                            // function home(){
                                            //     history.go(-2);
                                            // }

                            
                                // 8. Navigator = navigator object basically used to collect the data from the browser like name , code , version ,java is support or not. 

                                            // document.writeln("The appname is : " + navigator.appname + "<br>" + "</br>");
                                            // document.writeln("The appversion is : " + navigator.appversion  + " </br>" + "</br>");
                                            // document.writeln("The appCodeName is : " + navigator.appCodeName  + " </br>" + "</br>");
                                            // document.writeln("The cookieEnabled is : " + navigator.cookieEnabled + " </br>" + "</br>");
                                            // document.writeln("The userAgent is : " + navigator.userAgent  + " </br>" + "</br>");
                                            // document.writeln("The language is : " + navigator.language  + " </br>" + "</br>");
                                            // document.writeln("The userLanguage is : " + navigator.userLanguage  + " </br>" + "</br>");
                                            // document.writeln("The plugins is : " + navigator.plugins + " </br>" + "</br>");
                                            // document.writeln("The systemLanguage is : " + navigator.systemLanguage + " </br>" + "</br>");
                                            // document.writeln("The mimeTypes is : " + navigator.mimeTypes + " </br>" + "</br>");
                                            // document.writeln("The javaEnabled() is : " + navigator.javaEnabled() + " </br>" + "</br>");


                                // 9. screen = screen object is used for callect the data related browser screeen. 
                                            
                                            // document.writeln("The height of the screen is : " + screen.height + "<br><br>")
                                            // document.writeln("The width of the screen is : " + screen.width + "<br><br>")
                                            // document.writeln("The availHeight of the screen is : " + screen.availHeight + "<br><br>")
                                            // document.writeln("The availWidth of the screen is : " + screen.availWidth + "<br><br>")
                                            // document.writeln("The colorDepth of the screen is : " + screen.colorDepth + "<br><br>")
                                            // document.writeln("The pixelDepth of the screen is : " + screen.pixelDepth + "<br><br>")

                                        



    // 9. DOM (document object model) == DOM is basically used to interact with html elements. 

                // .innerHTML = basically used to access the inner html code of Element. 
                // .innerText = basicallu used to access the inner texts of the Element. 
                // .value = basically used in input section to acess user input value. 
                // .appendChild = its used to put some tag inside another tag as parent or child
                // .removeChild = its used to erase some tag from its parent tag


            
                // there are mainly three type of works of DOM -:

                    // 1. changing HTML content using innner HTML -:

                            // document.write() == its used to write something in our webpage directly without any spaces. 
                            // document.writeln() == its used to add some sapces also.


                            // document.createElement() == its used to create any html tag
                            // document.getElementById() = used to access any element by id name. 
                            // document.getElementsByClassName() = used to acess element by their class name.
                            // document.getElementsByName() = used to acess element by their input names. 
                            // document.getElementByTagName() = used to acess element by their tag names.
                            // document.querySelector("header div h5") = used to access element just like CSS. 
                            // document.querySelectorAll("header div h5") = used to access all element with same tag just like CSS. 


                    // 2. changing HTML attribute value -:

                            //  document.querySelector("header").style.backgroundColor = "red"; // ==   to change in CSS. 
                            // document.getElementById("myimage").src = "myfiles.jpg";  == to change the source of image or videos. 

                    
                    // 3. modifying class in HTML -:

                            // element.classList.add() == for adding some new class in any element;
                            // element.classList.remove() == for removing some new class in any element;
                            // element.classList.toggle() == it change it to opposite condition;

                                        // for ex-:

                                            // let x = document.getElementsByClassName("text");

                                            // x[0].classList.add('new');
                                            // x[0].classList.remove('new');
                                            // x[0].classList.toggle('new');





    //10. Callback => callback is used when we work with asyncronous function so we set a callback function which inform us when the given task is completed on that function.

    //                     asyncronous -: when over program is running multiple code at a same time that's called asyncronous function
    //                     syncronous -: when over program is running line by line finishing tasks;


                    // for ex -: 

                        // setTimeout is the best example of asyncronous function because it execute the code after a certain time until the rest program is running

                        // function remindme() {
                        //     setTimeout(()=>{
                        //         console.log("hii there");
                        //     } , 2000)
                        // }
                        // remindme();


            // callback ex-:

                // function findcheese(callback){
                //     setTimeout(()=>{
                //         const cheese = '🧀';
                //         console.log("Here is your cheese :" + cheese);
                //         callback(cheese);
                //     } , 2000)
                // }

                // function finddouge(cheese , callback){
                //     setTimeout(()=>{
                //         const dough = cheese + "🍥";
                //         console.log("Here is your dough " + dough);
                //         callback(dough);
                //     } , 2000)
                // }

                // function makepizza(dough , callback){
                //     setTimeout(()=>{
                //         const pizza = dough + "🍕";
                //         console.log("Here is your pizza " + pizza );
                //         callback(pizza);
                //     } , 2000)
                // }


                // findcheese((cheese)=>{
                //         finddouge(cheese , (dough)=>{
                //             makepizza(dough , (pizza)=>{
                //                 console.log("Your order is shipped " + pizza);
                //             })
                //         })
                // })   
                        //  AS you can see the code here is totally nested and coplex as much as we increase the callback fuction work so this type
                        // of code we call callback hell.




    // 11. Promises /async and await => its basically used in asyncronous function where we need some data from a given time-interval so promises work is 
    //                                     it give as a promise instead of data to assure us that our data is ready after some time

                                // there are three things in promise -:

                                //         1. resolve = when the operation is done;
                                //         2. pending = when the operation is in process;
                                //         3. reject = when the operation is rejected;


                                //         we use =:

                                //                 .then() = for resolve data;
                                //                 .catch() = for rejected data;
                                //                 .finally() = its run in both condition either resolve or reject;
                    // for ex -: 


                        function findcheese(){
                            return new Promise((resolve , reject) => {
                                setTimeout(()=>{
                                     const cheese = '🧀';
                                     resolve(cheese);
                                 } , 2000)
                            })                         
                        }

                        function finddouge(cheese){
                            return new Promise((resolve , reject) =>{
                                    setTimeout(()=>{
                                        const dough = cheese + "🍥";
                                        resolve(dough);
                                        // reject("Sorry, We are out of stock");
                                    } , 2000)
                            })                            
                        }

                        function makepizza(dough){
                            return new Promise((resolve , reject) => {
                                    setTimeout(()=>{
                                        const pizza = dough + "🍕";
                                        resolve(pizza);
                                    } , 2000)
                            })                         
                        }



                        // findcheese()
                        //         .then((cheese) =>{
                        //             console.log("Here is your cheese :" + cheese);
                        //             return finddouge(cheese)
                        //         })

                        //         .then((dough) =>{
                        //             console.log("Here is your dough " + dough);
                        //             return makepizza(dough)
                        //         })
                        //         .then((pizza) =>{
                        //             console.log("Here is your pizza " + pizza );
                        //         })
                        //         .catch((err)=>{
                        //             console.log(err)
                        //         })
                        //         .finally(()=>{
                        //             console.log("Have a good day!")
                        //         })
                                

            // async and await = These are basically a type of asyncronous function which can control the syncronous nature of code by using await we 
            //                     can decide until the process is done we dont move forward

                                // try{}catch() = its used to find error if our value does not given from any promises so we can call catch fucntion.


                        // for ex lets see above makepizza code -:

                        // async function orderpizza(){
                            
                        //     try {
                        //         const cheese = await findcheese();
                        //         console.log("Here is your cheese :" + cheese);

                        //         const dough = await finddouge(cheese);
                        //         console.log("Here is your dough " + dough);

                        //         const pizza = await makepizza(dough);
                        //         console.log("Here is your pizza " + pizza );
                        //     }
                        //     catch(err){
                        //         console.log(err);
                        //     }

                        //     console.log("Have a good day!")

                        // }

                        // orderpizza();
<!DOCTYPE html>
<html>
    <head>
         
        
        <link rel="stylesheet" href="css/quote.css">
        <link rel="stylesheet" href="css/header.css">
        <title>WS-Pools Onine Quote</title></head>
    <body>
        <link href="https://fonts.googleapis.com/css?family=REM:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />
        <div class="header">
            <div class="gallDrop">
                <label class="gallary" onclick="homePage()">Home Page</label>
                
            </div>
                <div class="gallDrop">
                    <label class="gallary">Gallary</label>
                    <div class="linkOpts">
                        <label class="l1">Serviced Pools</label>
                        <label class="l1">Re-furbished Pools</label>
                        <label class="l1">Built Pools</label>
                    </div>
                </div>    
                <label class="borderL">|</label>
                <label class="options" onclick="about()">About</label>
                <label class="borderL">|</label>
                <label class="options"onclick="about()">Contact</label>
            
            <div class="info">
                <label class="email">.....@gmail.com</label>
                <label class="phone">089 1234 789</label>
            </div>
        </div>
        
    
        <div class="menu">
            
        </div><br><br><br>
      
        
        
        <label class="welcome" style="position:fixed;z-index:999;">WS-Pools</label><br>   
        
        <div class="main">
                
                <div id="main">   
                    <label id="no1" style="font-size:60px;display:block;text-align: center;margin-left: auto;margin-right: auto;color:rgba(0, 217, 255, 0.885);">What would you like to do</label><br> 
                        <div id="temp" class="optionDiv">
                            <button class="opt" onclick="service()">Clean</button>
                            <button class="opt" onclick="repairs()">Repairs</button>
                            <button class="opt" onclick="build()">Build</button>
                        </div>
                </div>
                
                
            </div>
    <script>
        let no1=document.getElementById("no1");
        let br=new Array();
        let quote=new Array();
        let startDiv=false;
        let building=false;
        function savePic()
        {
            let can=document.getElementById("can");
            let image=can.toDataURL("image/png");
            quote[0]="Build Pool";
            quote[1]=image;
            building=true;
            //createInputs();
            div();
            //selectM();
            poolMaterial();
        }
        function build()
        {
            div();
            no1.innerHTML="Draw the birds-eye view of your pool";
            let button=document.createElement("button");
            button.setAttribute("class","submit");
            button.innerHTML="Submit";
            button.setAttribute("onclick","savePic()");

            let button2=document.createElement("button");
            button2.setAttribute("class","submit");
            button2.innerHTML="Restart";
            button2.setAttribute("onclick","res()");

            let can=document.createElement("canvas");
            can.id="can";
            can.width=500;
            can.height=200;
            can.setAttribute("style","background-color:white; margin-bottom:30px;");
            let ctx=can.getContext("2d");

            document.getElementById("temp").appendChild(can);
            document.getElementById("temp").appendChild(button);
            document.getElementById("temp").appendChild(button2);

            let canv=document.getElementById("can");
            let click=false;
            let dup=false;
            let ddown=false;
            let dleft=false;
            let dright=false;
            let xd;
            let xy;
            
            let clicked=false;
            let enter=false;
            canv.addEventListener("mousedown",(e1)=>
            {
                click=true;
                if(clicked==false)
                {
                    xd=e1.offsetX;
                    yd=e1.offsetY;
                    clicked=true;
                }
                canv.addEventListener("mousemove",(e)=>
                {
                    let x=e.offsetX;
                    let y=e.offsetY;
                    let dS=false;
                    //xd=12 x=20 x-axis positive ------>
                    if(xd<x && yd==y && dS!=true)//moving right
                    {
                        dright=true;
                        dS=true;
                        //-----------------
                        ddown=false;
                        dup=false;
                        dleft=false;
                    }
                    //xd=20 x=15 x-axis negative <---------
                    if(xd>x && yd==y && dS!=true)//moving left
                    {
                        dleft=true;
                        dS=true;
                        //----------------
                        ddown=false;
                        dup=false;
                        dright=false
                    }
                    //yd=15 y=20 y-axis 
                    if(xd==x && yd<y && dS!=true)//moving down
                    {
                        ddown=true;
                        dS=true;
                        //-------------
                        dup=false;
                        dright=false;
                        dleft=false;
                    }//yd=20 y=15
                    if(xd==x && yd>y && dS!=true)//moving up
                    {
                        dup=true;
                        dS=true;
                        //---------------------
                        ddown=false;
                        dleft=false;
                        dright=false;

                    }
                    //xd=15 x=20, yd=15 y=20
                    if(xd<x && yd<y && dS!=true)//moving down, right
                    {
                        dright=true;
                        ddown=true;
                        dS=true;
                        //---------------------
                        dleft=false;
                        dup=false;
                    }
                    //xd=20 x=15, yd=15 y=20
                    if(xd>x && yd<y && dS!=true)//moving down, left
                    {
                        dleft=true;
                        ddown=true;
                        dS=true;
                        //----------------------
                        dright=false;
                        dup=false;
                    }
                    //xd=20 x=15 yd=20 y=15
                    if(xd>x && yd>y && dS!=true)//moving up, moving left
                    {
                        dleft=true;
                        dup=true;
                        dS=true;
                        //--------------------
                        dright=false;
                        ddown=false;

                    }
                    //xd=15 x=20, yd=20 y=15
                    if(xd<x && yd>y && dS!=true)//moving up, moving right
                    {
                        dright=true;
                        dup=true;
                        dS=true;
                        //---------------------
                        dleft=false;
                        ddown=false;
                    }
                    let dir=[dup,ddown,dleft,dright];
                    
                    if(click==true)
                    {
                        //directs();
                        
                            draw(x,y,dir);
                        
                    }
                });
            });
            canv.addEventListener("mouseup",()=>
            {
                click=false;
                clicked=false;
            });
            let x1=0;
            let y1=0;
            function draw(x,y,dir)
            {
                let xs=1;
                let ys=1;
                ctx.beginPath();
                        //up down left right
                        /*
                        if(dir[0]==true && dir[1]==false && dir[2]==false && dir[3]==false)
                        {
                            //console.log("Going up");
                            ys=1;
                            xs=false;
                            ctx.moveTo(x,y-10);
                        }
                        //up down left right
                        if(dir[0]==false && dir[1]==true && dir[2]==false && dir[3]==false)
                        {
                            //console.log("Going down");
                            ys=-1;
                            xs=false;
                            ctx.moveTo(x,y+10);
                        }
                        //up down left right
                        if(dir[0]==true && dir[1]==false && dir[2]==true && dir[3]==false)
                        {
                            //console.log("Going up and left");
                            ys=1;
                            xs=-1;
                            ctx.moveTo(x+10,y+10);
                        }
                        //up down left right
                        if(dir[0]==true && dir[1]==false && dir[2]==false && dir[3]==true)
                        {
                            //console.log("Going up and right");
                            ys=1;
                            xs=1;
                            ctx.moveTo(x-10,y-10);
                        }
                        //up down left right
                        if(dir[0]==false && dir[1]==true && dir[2]==true && dir[3]==false)
                        {
                            //console.log("Going down and left");
                            ys=-1;
                            xs=-1;
                            ctx.moveTo(x+10,y-10);
                        }
                        //up down left right
                        if(dir[0]==false && dir[1]==true && dir[2]==false && dir[3]==true)
                        {
                            //console.log("Going down and right");
                            ys=-1;
                            xs=1;
                            ctx.moveTo(x-10,y+10);
                        }
                        //up down left right
                        if(dir[0]==false && dir[1]==false && dir[2]==true && dir[3]==false)
                        {
                            //console.log("Going left");
                            xs=-1
                            ys=false;
                            ctx.moveTo(x+10,y);
                        }
                        //up down left right
                        if(dir[0]==false && dir[1]==false && dir[2]==false && dir[3]==true)
                        {
                            //console.log("Going right");
                            xs=1;
                            ys=false;
                            ctx.moveTo(x-10,y);
                        }*/
                let drw=false;
                ctx.beginPath();
                ctx.arc(x, y, 2, 0, 2 * Math.PI);
                ctx.fillStyle = "black";
                ctx.fill();
                ctx.lineWidth = 5;
                ctx.stroke();
                ctx.closePath();        
                //requestAnimationFrame(draw);
            }
        }
        function res()
        {
            let can=document.getElementById("can");
            let ctx=can.getContext("2d");
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.beginPath();
        }
        function userData()
        {
            no1.innerHTML="Enter your details below";
            let email=document.createElement("input");
            email.type="email";
            email.id="email";
            email.setAttribute("class","textBox");
            let cell=document.createElement("input");
            cell.type="number";
            cell.id="cell";
            cell.setAttribute("class","textBox");
            let name=document.createElement("input");
            name.id="fn";
            name.setAttribute("class","textBox");
            let last=document.createElement("input");
            last.id="ln";
            last.setAttribute("class","textBox");
            
            let l1=document.createElement("label");
            let l2=document.createElement("label");
            let l3=document.createElement("label");
            let l4=document.createElement("label");
            l1.innerHTML="Enter you email";
            l2.innerHTML="Enter your name";
            l3.innerHTML="Enter you last-name";
            l4.innerHTML="Enter you cell phone number";

            let ar=new Array();
            for(let i=0;i<10;i++)
            {
                ar[i]=document.createElement("br");
                ar[i].id="b"+i.toString();
            }
            document.getElementById("temp").appendChild(l2);
            document.getElementById("temp").appendChild(ar[0]);
            document.getElementById("temp").appendChild(name);
            document.getElementById("temp").appendChild(ar[1]);
            document.getElementById("temp").appendChild(l3);
            document.getElementById("temp").appendChild(ar[2]);
            document.getElementById("temp").appendChild(last);
            document.getElementById("temp").appendChild(ar[3]);
            document.getElementById("temp").appendChild(l1);
            document.getElementById("temp").appendChild(ar[4]);
            document.getElementById("temp").appendChild(email);
            document.getElementById("temp").appendChild(ar[5]);
            document.getElementById("temp").appendChild(l4);
            document.getElementById("temp").appendChild(ar[6]);
            document.getElementById("temp").appendChild(cell);
            let button=document.createElement("button");
            button.innerHTML="Submit";
            button.setAttribute("class","submit");
            button.setAttribute("onclick","sendData()");
            document.getElementById("temp").appendChild(button);

        }
        function homePage()
        {
            window.location.href="http://localhost:4010/";
        }
        function about()
        {
            window.location.href="http://localhost:4010/contact";
        }
        async function sendData()
        {
            let data=[document.getElementById("email").value,document.getElementById("fn").value,document.getElementById("ln").value,document.getElementById("cell").value];
            let em=false;
            let fn=false;
            let ln=false;
            let cell=false
            if(data[0]!=undefined)
            {
                if(data[0]!="")
                em=true;
            }
            if(data[1]!=undefined)
            {
                data[1]!=""
                fn=true;
            }
            if(data[2]!=undefined)
            {
                if(data[2]!="")
                ln=true;
            }
            if(data[3]!=undefined)
            {
                if(data[3]!=null)
                cell=true
            }
            if(cell==true && ln==true && em==true && fn==true)
            {
                div();
                no1.innerHTML="Your request has been sent";
            
                let button=document.createElement("button");
                button.innerHTML="Another Quote";
                button.setAttribute("class","submit");
                button.setAttribute("onclick","createFirst()");
            
                let button1=document.createElement("button");
                button1.innerHTML="Home Page";
                button1.setAttribute("class","submit");
                button1.setAttribute("onclick","homePage()");

                document.getElementById("temp").appendChild(button);
                document.getElementById("temp").appendChild(button1);
                console.log("Quote being sent to server:");
                
                const buildURL="http://localhost:4010/array";

                if(building==true)
                {
                    building=false;
                    if(quote[11]==undefined)
                    {
                        quote[11]=data;
                    }
                    else
                    {
                        quote[12]=data;
                    }
                    const res=await fetch(buildURL,
                    {
                        method:"POST",
                        headers:
                        {
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify(
                        {
                            Quote:quote,
                            Build:true
                        })
                    });
                    const dataIn=await res.json();
                    console.log(dataIn);
                    quote=new Array();
                }
                else
                {
                    console.log(quote);
                    let i=quote.length;
                    quote[i]=data;
                    const res=await fetch(buildURL,
                    {
                        method:"POST",
                        headers:
                        {
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify(
                        {
                            Quote:quote,
                            Build:false
                        })
                    });
                    const dataIn=await res.json();
                    console.log(dataIn);
                    quote=new Array();

                }
            }
            else
            {
                no1.innerHTML="Please Finish the contact info";
            }
            
            
        }
        async function menu()
        {
            try{div()}catch(err){}
            /*
            <button class="opt" onclick="service()">Clean</button>
                            <button class="opt">Repairs</button>
                            <button class="opt">Build</button>*/
            div();
            let label=document.createElement("label");
            label.innerHTML=""
            
        }
        for(let i=0;i<100;i++)
        {
            br[i]=document.createElement("br");
            br[i].id="i"+i.toString();
        }
        function start()
        {
            quote=new Array();
            let button=document.getElementById("submit");
            button.innerHTML="Submit";
            let ops=document.getElementsByName("option");
            console.log("Start function");
            for(let i=0;i<ops.length;i++)
            {        
                if(ops[i].checked)
                {
                    quote[0]=ops[i].value;
                    if(ops[i].value=="service")
                    {
                        service();
                    }
                }
            }
        }
        function div()
        {
            let tempDel=document.getElementById("temp");
            tempDel.remove();
            let temp=document.createElement("div");
            temp.id="temp";
            temp.setAttribute("class","optionDiv");
            document.getElementById("main").appendChild(temp);
        }
        function basicServ()
        {
            div();
            quote[0]="Basic Service";
            userData();
        }
        function PHCor()
        {
            div();
            quote[0]="Clean and PH correction";
            userData();
        }
        function drain()
        {
            quote[0]="Drain and replace water";
            div();
            createInputs();
        }
        function createInputs()
        {
            no1.innerHTML="Enter the appoximate pool dimensions"
            let button=document.createElement("button");
            button.innerHTML="Submit";
            button.setAttribute("onclick","calc()");
            button.setAttribute("class","submit");
            let width=document.createElement("input");
            width.id="width";
            width.type="number";
            width.setAttribute("class","textBox");

            let height=document.createElement("input");
            height.id="length";
            height.type="number";
            height.setAttribute("class","textBox");


            let depth=document.createElement("input");
            depth.id="depth";
            depth.type="number";
            depth.setAttribute("class","textBox");

            let l1=document.createElement("label");
            l1.innerHTML="Enter the width of your pool (meters)";
            let l2=document.createElement("label");
            l2.innerHTML="Enter the length of your pool (meters)";
            let l3=document.createElement("label");
            l3.innerHTML="How deep is your pool (meters)";
            document.getElementById("temp").appendChild(l1);
            document.getElementById("temp").appendChild(br[4]);
            document.getElementById("temp").appendChild(width);
            document.getElementById("temp").appendChild(br[5]);
            document.getElementById("temp").appendChild(l2);
            document.getElementById("temp").appendChild(br[6]);
            document.getElementById("temp").appendChild(height);
            document.getElementById("temp").appendChild(br[7]);
            document.getElementById("temp").appendChild(l3);
            document.getElementById("temp").appendChild(br[8]);
            document.getElementById("temp").appendChild(depth);
            document.getElementById("temp").appendChild(br[9]);
            document.getElementById("temp").appendChild(button);
        }
        function calc()
        {
            let w=document.getElementById("width").value;
            let l=document.getElementById("length").value;
            let d=document.getElementById("depth").value;
            let inputs=[w,l,d];
            let pass=true;
            console.log(w);
            for(let i=0;i<inputs.length;i++)
            {
                if(inputs[i]==null || inputs[i]==undefined || inputs[i]=="")
                {
                    pass=false;
                }
            }
            if(pass==true)
            {
                let area=l*d*w;
                if(building==false)
                {
                    quote[1]=[l,w,d,area];
                    console.log(quote);
                    div();
                    userData();
                }
                else
                {
                    //quote[2]=area;
                    //div();
                    //selectM();
                    div();
                    last();
                    quote[7]=["Length:"+l,"Width:"+w,"Depth:"+d,"Area:"+area];
                    //userData();
                }
            }
            console.log(pass);
            
        }
        function last(color)
        {
            div();
            no1.innerHTML="Is there anything we missed, you would like to add?";
            //imgObj={box:box1,img:img1,label:l1};
            //outer upPic infoOnly
            if(color!="Agr")
            color.img.setAttribute("class","colorsS");
            let temp=document.getElementById("temp");
            temp.setAttribute("style","font-size:45px;");
            let img1=document.createElement("img");
            img1.src=quote[1];

            let poolPavers=document.createElement("label");
            poolPavers.innerHTML="Pool Pavers<br>"+quote[3]+"<br>"
            
            let dim=document.createElement("label");
            if(building==true)
            {
                dim.innerHTML="<br>"+quote[7][0]+"<br>"+quote[7][1]+"<br>"+quote[7][2];
            }
            let img2=document.createElement("img");
            img2.src=quote[4];

            let img3;
            let l1;

            let img4;
            let l2;

            let des;

            let upload=false

            let l4=document.createElement("label");
            l4.innerHTML="Birds eye-view<br>Design to be Built<br>";

            let box1=document.createElement("div");
            box1.id="b1";
            box1.setAttribute("class","box1");

            let flex1=document.createElement("div");
            flex1.id="f1";
            flex1.setAttribute("class","divFlex");

            document.getElementById("temp").appendChild(flex1);
            document.getElementById("f1").appendChild(box1);
            document.getElementById("b1").appendChild(l4);
            document.getElementById("b1").appendChild(img1);
            document.getElementById("b1").appendChild(dim);
            if(outer==true)
            {
                upload=true;
                img3=document.createElement("img");
                img3.src=quote[5][1];

                l1=document.createElement("label");
                l1.innerHTML=quote[5][0]+"<br>";

            }
            else
            {
                l1=document.createElement("label");
                l1.innerHTML=quote[5]+"<br>";
                console.log(quote[5]);
                upload=false;
            }
            console.log("Line 597 before condition");
            if(upPic==true)
            {
                console.log("Line 600 in condition");
                img4=document.createElement("img");
                img4.src=quote[6][2];
                l2=document.createElement("label");
                let str=quote[6][1];
                let spaced="";
                let c=0;
                console.log(str.length+" line 605");
                let swap=false
                for(let i=0;i<str.length;i++)
                {
                    let line=str.substr(i,1);
                    console.log(line);
                    if(line=="." || line=="?" || line=="!" || c>=25)
                    {
                        console.log(line);
                        if(c!=25 && c<25)
                        {
                            spaced=spaced+line+"<br>";
                        }
                        else if(line!="." || line!="?" || line!="!")
                        {
                            spaced=spaced+"<br>-"+line;
                            c=0;
                        }
                        
                    }
                    else
                    {
                        spaced=spaced+line;
                    }
                    c++;
                }
                l2.innerHTML="<br>"+spaced+"<br>";
                des=document.createElement("label");
                des.innerHTML="Sample picture of design<br>";
            }
            else
            {
                l2=document.createElement("label");
                l2.innerHTML="Design Details<br><br>"+quote[6][1]+"<br>";
            }

            let Finish=document.createElement("label");
            Finish.innerHTML="Finish<br>";

            let mat=document.createElement("label");
            mat.innerHTML=quote[8][0]+"<br>";
            
            
            let flex2=document.createElement("div");
            flex2.id="f2";
            flex2.setAttribute("class","divFlex");

            let box2=document.createElement("div")
            box2.id="b2";
            box2.setAttribute("class","box1");

            let label=document.createElement("label");
            label.innerHTML="Pool Pavers<br>"+quote[3]+"<br>";

            document.getElementById("temp").appendChild(flex2);
            document.getElementById("f2").appendChild(box2);
            document.getElementById("b2").appendChild(label);
            document.getElementById("b2").appendChild(img2);
            
            let flex3=document.createElement("div");
            flex3.id="f3";
            flex3.setAttribute("class","flexDiv");

            let box3=document.createElement("div");
            box3.id="b3";
            box3.setAttribute("class","box1");

            

            if(outer==true)
            {
                document.getElementById("temp").appendChild(flex3);
                document.getElementById("f3").appendChild(box3);
                document.getElementById("b3").appendChild(l1);
                document.getElementById("b3").appendChild(img3);
            }
            else
            {
                document.getElementById("temp").appendChild(flex3);
                document.getElementById("f3").appendChild(box3);
                document.getElementById("b3").appendChild(l1);
            }

            let flex4=document.createElement("div");
            flex4.id="f4";
            flex4.setAttribute("class","flexDiv");

            let box4=document.createElement("div");
            box4.id="b4";
            box4.setAttribute("class","box1");

            if(upPic==true)
            {
                document.getElementById("temp").appendChild(flex4);
                document.getElementById("f4").appendChild(box4);
                document.getElementById("b4").appendChild(des);
                document.getElementById("b4").appendChild(img4);
                document.getElementById("b4").appendChild(l2);
            }
            else
            {
                document.getElementById("temp").appendChild(flex4);
                document.getElementById("f4").appendChild(box4);
                document.getElementById("b4").appendChild(l2);
            }

            let flex5=document.createElement("div");
            flex5.id="f5";
            flex5.setAttribute("class","flexDiv");

            let box5=document.createElement("div");
            box5.id="b5";
            box5.setAttribute("class","box1");

            document.getElementById("temp").appendChild(flex5);
            document.getElementById("f5").appendChild(box5);
            document.getElementById("b5").appendChild(Finish);
            document.getElementById("b5").appendChild(mat);
            if(color!="Agr")
            {
                document.getElementById("b5").appendChild(color.img);
                document.getElementById("b5").appendChild(color.label);
            }
            else
            {
                let img=new Array();
                let lab=document.createElement("label");
                let lab1=document.createElement("label");
                lab.innerHTML="<br>Uploaded sample Images or Aggregate Finish<br>"
                document.getElementById("b5").appendChild(lab)
                for(let i=1;i<quote[8].length;i++)
                {
                    img[i]=document.createElement("img");
                    img[i].setAttribute("style","height:200px;width:200px;padding:20px;")
                    img[i].src=quote[8][i];
                    document.getElementById("b5").appendChild(img[i]);
                }
                document.getElementById("b5").appendChild("<br>"+quote[9]+"<br>");

            }

            let input=document.createElement("textarea");
            input.id="input";
            input.setAttribute("class","textBox");
            input.setAttribute("style","width:90%; height:250px;");

            let inputInfo=document.createElement("label");
            inputInfo.setAttribute("style","font-size:20px;");
            inputInfo.innerHTML="<br>Write down any other features you would like<br>to add to the inside of your pool<br>Mosaics, designs ect.<br>"
            //imgObj={box:box1,img:img1,label:l1};
            
            let submit=document.createElement("button");
            submit.setAttribute("class","submit");
            submit.innerHTML="Submit";

            let submit1=document.createElement("button");
            submit1.setAttribute("class","submit");
            submit1.innerHTML="Dont Upload!";
            submit1.addEventListener("click",()=>
            {
                div();
                userData();
            });
            submit.addEventListener("click",()=>
            {
                //console.log(inputInfo.value);
                let data=document.getElementById("input").value
                console.log(data);
                console.log("Line 796");
                if(data!=undefined)
                {
                    if(data!="" && quote[9]==undefined)
                    {
                        quote[9]=["Inside pool details",data];
                        let pic=document.createElement("button");
                        pic.setAttribute("class","submit");
                        pic.innerHTML="Upload pictures?";
                        submit.replaceWith(submit1);
                        document.getElementById("b5").appendChild(pic);
                        let upload=document.createElement("input");
                        upload.type="file";
                        upload.setAttribute("class","file");
                        upload.setAttribute("accept","image/*");
                        upload.setAttribute("multiple","");
                        upload.id="upload";
                    
                        pic.addEventListener("click",()=>
                        {
                            pic.remove();
                            document.getElementById("b5").appendChild(upload);
                        });
                        let imgArr=new Array();
                        let temp=new Array();
                        upload.addEventListener("change",async()=>
                        {
                            let output = document.getElementById("upload");
                            try
                            {
                            
                                for(let i=0;i<output.files.length;i++)
                                {

                                    let fr = new FileReader;
                                    let { resolve, reject, promise } = Promise.withResolvers();
                                    try
                                    {
                                        fr.onload = (e) => resolve(e.target.result);
                                        fr.readAsDataURL(output.files[i]);
                                      
                                        imgArr[i]=document.createElement("img");
                                        imgArr[i].src=await promise;
                                        temp[i]=await promise;
                                        imgArr[i].setAttribute("style","width:200px; height:200px;");
                                        let ladel=document.createElement("label")
                                        let r=i+1;
                                        ladel.innerHTML="Image No."+r.toString()+"<br>";
                                        let br=document.createElement("br")

                                        document.getElementById("b5").appendChild(ladel);
                                        document.getElementById("b5").appendChild(imgArr[i]);
                                        document.getElementById("b5").appendChild(br);

                                        console.log("Success line 781");
                                    }
                                    catch(err)
                                    {
                                        console.log(err);
                                    }
    
                                }
                            
                                console.log(quote);
                                submit.replaceWith(submit1);
                                submit1.innerHTML="Submit";
                                upload.remove();
                            
                            }
                            catch(err)
                            {
                                console.log(err);
                            }
                            quote[10]=["Inside pool Design pics",temp];
                        });
                    }
                    else
                    {
                        quote[10]=["Inside pool details",data];
                        let pic=document.createElement("button");
                        pic.setAttribute("class","submit");
                        pic.innerHTML="Upload pictures?";
                        submit.replaceWith(submit1);
                        document.getElementById("b5").appendChild(pic);
                        let upload=document.createElement("input");
                        upload.type="file";
                        upload.setAttribute("class","file");
                        upload.setAttribute("accept","image/*");
                        upload.setAttribute("multiple","");
                        upload.id="upload";
                    
                        pic.addEventListener("click",()=>
                        {
                            pic.remove();
                            document.getElementById("b5").appendChild(upload);
                        });
                        let imgArr=new Array();
                        let temp=new Array();
                        upload.addEventListener("change",async()=>
                        {
                            let output = document.getElementById("upload");
                            try
                            {
                            
                                for(let i=0;i<output.files.length;i++)
                                {

                                    let fr = new FileReader;
                                    let { resolve, reject, promise } = Promise.withResolvers();
                                    try
                                    {
                                        fr.onload = (e) => resolve(e.target.result);
                                        fr.readAsDataURL(output.files[i]);
                                      
                                        imgArr[i]=document.createElement("img");
                                        imgArr[i].src=await promise;
                                        temp[i]=await promise;
                                        imgArr[i].setAttribute("style","width:200px; height:200px;");
                                        let ladel=document.createElement("label")
                                        let r=i+1;
                                        ladel.innerHTML="Image No."+r.toString()+"<br>";
                                        let br=document.createElement("br")

                                        document.getElementById("b5").appendChild(ladel);
                                        document.getElementById("b5").appendChild(imgArr[i]);
                                        document.getElementById("b5").appendChild(br);

                                        console.log("Success line 781");
                                    }
                                    catch(err)
                                    {
                                        console.log(err);
                                    }
    
                                }
                            
                                console.log(quote);
                                submit.replaceWith(submit1);
                                submit1.innerHTML="Submit";
                                upload.remove();
                            
                            }
                            catch(err)
                            {
                                console.log(err);
                            }
                            quote[11]=["Inside pool Design pics",temp];
                        });
                    }
                }
            });
            document.getElementById("b5").appendChild(inputInfo);
            document.getElementById("b5").appendChild(input);
            document.getElementById("b5").appendChild(submit);
            
            console.log(quote);
        }
        let agr=false;
        let tiled=false;
        let fiber=false;
        let vine=false;
        let plas=false;
        function concrete()
        {
            div();
            no1.innerHTML="Select your Masonary Finish";
            let labelA=document.createElement("label");
            labelA.innerHTML="This will be the interior finish of your pool";
            labelA.id="l1";
            let plaster=document.createElement("button");
            plaster.innerHTML="Plaster Finish";
            plaster.setAttribute("class","opt");
            plaster.addEventListener("click",()=>
            {
                plas=true;
                quote[2]=["Finish:Plaster"]
                div();
                let imgObj=new Object();
                no1.innerHTML="What color would you like to paint the inside?";

                let divFlex1=document.createElement("div");
                divFlex1.setAttribute("class","divFlex");
                divFlex1.id="df1";

                let divFlex2=document.createElement("div");
                divFlex2.setAttribute("class","divFlex");
                divFlex2.id="df2";

                let divFlex3=document.createElement("div");
                divFlex3.setAttribute("class","divFlex");
                divFlex3.id="df3";

                let box1=document.createElement("div");
                box1.setAttribute("class","box");
                box1.id="b1";
                box1.addEventListener("click",()=>
                {
                    imgObj={box:box1,img:img1,label:l1};
                    quote[2][1]="Color:Aquamist";
                    div()
                    selectM();
                    console.log(quote);
                });

                let box2=document.createElement("div");
                box2.setAttribute("class","box");
                box2.id="b2";
                box2.addEventListener("click",()=>
                {
                    imgObj={box:box2,img:img2,label:l2};
                    quote[2][1]="Color:Atlantis";
                    div()
                    selectM();
                });

                let box3=document.createElement("div");
                box3.setAttribute("class","box");
                box3.id="b3";
                box3.addEventListener("click",()=>
                {
                    imgObj={box:box3,img:img3,label:l3};
                    quote[2][1]="Color:Brook Green";
                    console.log(quote);
                    div()
                    selectM();
                });

                let box4=document.createElement("div");
                box4.setAttribute("class","box");
                box4.id="b4";
                box4.addEventListener("click",()=>
                {
                    imgObj={box:box4,img:img4,label:l4};
                    quote[2][1]="Color:Emarald Green";
                    console.log(quote);
                    div()
                    selectM();
                });

                let box5=document.createElement("div");
                box5.setAttribute("class","box");
                box5.id="b5";
                box5.addEventListener("click",()=>
                {
                    imgObj={box:box5,img:img5,label:l5};
                    quote[2][1]="Color:Lagoon";
                    console.log(quote);
                    div()
                    selectM();
                });

                let box6=document.createElement("div");
                box6.setAttribute("class","box");
                box6.id="b6";
                box6.addEventListener("click",()=>
                {
                    imgObj={box:box6,img:img6,label:l6};
                    quote[2][1]="Color:New Riversand";
                    console.log(quote);
                    div()
                    selectM();
                });

                let box7=document.createElement("div");
                box7.setAttribute("class","box");
                box7.id="b7";
                box7.addEventListener("click",()=>
                {
                    imgObj={box:box7,img:img7,label:l7};
                    quote[2][1]="Color:Opaline";
                    console.log(quote);
                    div()
                    selectM();
                });

                let box8=document.createElement("div");
                box8.setAttribute("class","box");
                box8.id="b8";
                box8.addEventListener("click",()=>
                {
                    imgObj={box:box8,img:img8,label:l8};
                    quote[2][1]="Color:Pond Green";
                    console.log(quote);
                    div()
                    selectM();
                });

                let box9=document.createElement("div");
                box9.setAttribute("class","box");
                box9.id="b9";
                box9.addEventListener("click",()=>
                {
                    imgObj={box:box9,img:img9,label:l9};
                    quote[2][1]="Color:Regancy White";
                    console.log(quote);
                    div()
                    selectM();
                });

                let box10=document.createElement("div");
                box10.setAttribute("class","box");
                box10.id="b10";
                box10.addEventListener("click",()=>
                {
                    imgObj={box:box10,img:img10,label:l10};
                    quote[2][1]="Color:Turquoise";
                    console.log(quote);
                    div()
                    selectM();
                });

                let box11=document.createElement("div");
                box11.setAttribute("class","box");
                box11.id="b11";
                box1.addEventListener("click",()=>
                {
                    imgObj={box:box11,img:img11,label:l11};
                    quote[2][1]="Color:White";
                    console.log(quote);
                    div()
                    selectM();
                });

                let box12=document.createElement("div");
                box12.setAttribute("class","box");
                box12.id="b12";
                box12.addEventListener("click",()=>
                {
                    imgObj={box:box12,img:img12,label:l12};
                    quote[2][1]="Color:Whitsunday";
                    console.log(quote);
                    div()
                    selectM();
                });

                let img1=document.createElement("img");
                img1.setAttribute("class","colors");
                img1.src="img/color/aquamist.png";

                let img2=document.createElement("img");
                img2.setAttribute("class","colors");
                img2.src="img/color/atlantis.png";

                let img3=document.createElement("img");
                img3.setAttribute("class","colors");
                img3.src="img/color/brookGreen.png";

                let img4=document.createElement("img");
                img4.setAttribute("class","colors");
                img4.src="img/color/emararldGreen.png";

                let img5=document.createElement("img");
                img5.setAttribute("class","colors");
                img5.src="img/color/lagoon.png";

                let img6=document.createElement("img");
                img6.setAttribute("class","colors");
                img6.src="img/color/newRiversand.png";

                let img7=document.createElement("img");
                img7.setAttribute("class","colors");
                img7.src="img/color/opaline.png";

                let img8=document.createElement("img");
                img8.setAttribute("class","colors");
                img8.src="img/color/pondGreen.png";

                let img9=document.createElement("img");
                img9.setAttribute("class","colors");
                img9.src="img/color/RegancyWhite.png";

                let img10=document.createElement("img");
                img10.setAttribute("class","colors");
                img10.src="img/color/turq.png";

                let img11=document.createElement("img");
                img11.setAttribute("class","colors");
                img11.src="img/color/white.png";

                let img12=document.createElement("img");
                img12.setAttribute("class","colors");
                img12.src="img/color/whitsunday.png";


                let l1=document.createElement("label");
                l1.innerHTML="<br>Aquamist";

                let l2=document.createElement("label");
                l2.innerHTML="<br>Atlantis";

                let l3=document.createElement("label");
                l3.innerHTML="<br>Brook Green";

                let l4=document.createElement("label");
                l4.innerHTML="<br>Emarald Green";

                let l5=document.createElement("label");
                l5.innerHTML="<br>Lagoon";

                let l6=document.createElement("label");
                l6.innerHTML="<br>New Riversand";

                let l7=document.createElement("label");
                l7.innerHTML="<br>Opaline";

                let l8=document.createElement("label");
                l8.innerHTML="<br>Pond Green";

                let l9=document.createElement("label");
                l9.innerHTML="<br>Regancy White";

                let l10=document.createElement("label");
                l10.innerHTML="<br>Turquoise";

                let l11=document.createElement("label");
                l11.innerHTML="<br>White";

                let l12=document.createElement("label");
                l12.innerHTML="<br>Whitsunday";

                document.getElementById("temp").appendChild(divFlex1);
                
                document.getElementById("df1").appendChild(box1);
                document.getElementById("b1").appendChild(img1);
                document.getElementById("b1").appendChild(l1);
                

                document.getElementById("df1").appendChild(box2);
                document.getElementById("b2").appendChild(img2);
                document.getElementById("b2").appendChild(l2);

                document.getElementById("df1").appendChild(box3);
                document.getElementById("b3").appendChild(img3);
                document.getElementById("b3").appendChild(l3);

                document.getElementById("df1").appendChild(box4);
                document.getElementById("b4").appendChild(img4);
                document.getElementById("b4").appendChild(l4);

                document.getElementById("temp").appendChild(br[50]);
                document.getElementById("temp").appendChild(divFlex2);

                document.getElementById("df2").appendChild(box5);
                document.getElementById("b5").appendChild(img5);
                document.getElementById("b5").appendChild(l5);

                document.getElementById("df2").appendChild(box6);
                document.getElementById("b6").appendChild(img6);
                document.getElementById("b6").appendChild(l6);

                document.getElementById("df2").appendChild(box7);
                document.getElementById("b7").appendChild(img7);
                document.getElementById("b7").appendChild(l7);

                document.getElementById("df2").appendChild(box8);
                document.getElementById("b8").appendChild(img8);
                document.getElementById("b8").appendChild(l8);

                document.getElementById("temp").appendChild(br[51]);
                document.getElementById("temp").appendChild(divFlex3);

                document.getElementById("df3").appendChild(box9);
                document.getElementById("b9").appendChild(img9);
                document.getElementById("b9").appendChild(l9);

                document.getElementById("df3").appendChild(box10);
                document.getElementById("b10").appendChild(img10);
                document.getElementById("b10").appendChild(l10);

                document.getElementById("df3").appendChild(box11);
                document.getElementById("b11").appendChild(img11);
                document.getElementById("b11").appendChild(l11);

                document.getElementById("df3").appendChild(box12);
                document.getElementById("b12").appendChild(img12);
                document.getElementById("b12").appendChild(l12);
            })

            let agr=document.createElement("button");
            agr.innerHTML="Aggregate Finish";
            agr.setAttribute("class","opt");
            agr.addEventListener("click",()=>
            {
                div();
                agr=true;
                quote[2]=["Aggregate Finish"];
                no1.innerHTML="You have selected an Aggregate Finish";

                let upload=document.createElement("input");
                upload.type="file";
                upload.setAttribute("class","file");
                upload.setAttribute("accept","image/*");
                upload.setAttribute("multiple","");
                upload.id="upload";

                let label=document.createElement("label");
                label.innerHTML="<br>Write some down addition info please<br>";

                let input=document.createElement("textarea");
                input.id="input";
                input.rows=5;
                input.cols=15;
                input.setAttribute("class","textBox");
                input.setAttribute("style","width:70%; height:200px;");

                let submit=document.createElement("button");
                submit.innerHTML="Submit";
                submit.setAttribute("class","submit");

                document.getElementById("temp").appendChild(upload);
                document.getElementById("temp").appendChild(label);
                document.getElementById("temp").appendChild(input);
                document.getElementById("temp").appendChild(submit);
                let upl=false;

                submit.addEventListener("click",()=>
                {
                    if(input.value!="" && input.value!=undefined && upl!=false)
                    {
                        quote[2][1]=input.value;
                        div();
                        selectM();
                    }
                    else if(input.value=="" || input.value==undefined)
                    {
                        no1.innerHTML="Please add some more information";
                    }
                    else if(upl!=true)
                    {
                        no1.innerHTML="Please upload some pictures";
                    }
                });

                upload.addEventListener("change",async()=>
                {
                    let output = document.getElementById("upload");
                    let c=0;
                    try
                    {
                        let temp=new Array();
                        for(let i=0;i<output.files.length;i++)
                        {
                            c++;
                            let fr = new FileReader;
                            let { resolve, reject, promise } = Promise.withResolvers();
                            try
                            {
                                fr.onload = (e) => resolve(e.target.result);
                                fr.readAsDataURL(output.files[i]);
                                temp[i]=await promise;
                                console.log("Success line 1304");
                                upl=true;
                            }
                            catch(err)
                            {
                                console.log(err);
                            }
    
                        }
                        quote[2][2]=temp;                        
                    }
                    catch(err)
                    {
                        console.log(err);
                    }
                    
                });
                

            });

            let tile=document.createElement("button");
            tile.innerHTML="Tiled Finish";
            tile.setAttribute("class","opt")
            tile.addEventListener("click",()=>
            {
                div();
                tiled=true;
                quote[2]=["Tiled Finish"];
                no1.innerHTML="You have selected a tiled Finish";

                let upload=document.createElement("input");
                upload.type="file";
                upload.setAttribute("class","file");
                upload.setAttribute("accept","image/*");
                upload.setAttribute("multiple","");
                upload.id="upload";

                let label=document.createElement("label");
                label.innerHTML="<br>Write some down addition info please<br>";

                let input=document.createElement("textarea");
                input.id="input";
                input.rows=5;
                input.cols=15;
                input.setAttribute("class","textBox");
                input.setAttribute("style","width:70%; height:200px;");

                let submit=document.createElement("button");
                submit.innerHTML="Submit";
                submit.setAttribute("class","submit");

                document.getElementById("temp").appendChild(upload);
                document.getElementById("temp").appendChild(label);
                document.getElementById("temp").appendChild(input);
                document.getElementById("temp").appendChild(submit);
                let upl=false;

                submit.addEventListener("click",()=>
                {
                    if(input.value!="" && input.value!=undefined && upl!=false)
                    {
                        quote[2][1]=input.value;
                        div();
                        selectM();
                    }
                    else if(input.value=="" || input.value==undefined)
                    {
                        no1.innerHTML="Please add some more information";
                    }
                    else if(upl!=true)
                    {
                        no1.innerHTML="Please upload some pictures";
                    }
                });

                upload.addEventListener("change",async()=>
                {
                    let output = document.getElementById("upload");
                    let c=0;
                    try
                    {
                        let temp=new Array();
                        for(let i=0;i<output.files.length;i++)
                        {
                            c++;
                            let fr = new FileReader;
                            let { resolve, reject, promise } = Promise.withResolvers();
                            try
                            {
                                fr.onload = (e) => resolve(e.target.result);
                                fr.readAsDataURL(output.files[i]);
                                temp[i]=await promise;
                                console.log("Success line 1304");
                                upl=true;
                            }
                            catch(err)
                            {
                                console.log(err);
                            }
    
                        }
                        quote[2][1]=temp;
                    }
                    catch(err)
                    {
                        console.log(err);
                    }
                    
                });
            });
        
            document.getElementById("temp").appendChild(labelA);
            document.getElementById("temp").appendChild(plaster);
            document.getElementById("temp").appendChild(agr);
            document.getElementById("temp").appendChild(tile);

        }
        function fib()
        {
            div();
            no1.innerHTML="Select you positioning of your pool";

            let out=document.createElement("button");
            out.innerHTML="Out of the ground";
            out.setAttribute("class","opt");
            out.addEventListener("click",()=>
            {
                fiber=true;
            })

            let inG=document.createElement("button");
            inG.innerHTML="In the ground";
            inG.addEventListener("click",()=>
            {
                div();
                quote[2]=["Fiber Glass:In-ground"];
                no1.innerHTML="You have selected to build it in the ground";

                let upload=document.createElement("input");
                upload.type="file";
                upload.setAttribute("class","file");
                upload.setAttribute("accept","image/*");
                upload.setAttribute("multiple","");
                upload.id="upload";

                let label=document.createElement("label");
                label.innerHTML="<br>Tell us more about how you would like the pool to be<br>";

                let input=document.createElement("textarea");
                input.id="input";
                input.rows=5;
                input.cols=15;
                input.setAttribute("class","textBox");
                input.setAttribute("style","width:70%; height:200px;");

                let submit=document.createElement("button");
                submit.innerHTML="Submit";
                submit.setAttribute("class","submit");

                document.getElementById("temp").appendChild(upload);
                document.getElementById("temp").appendChild(label);
                document.getElementById("temp").appendChild(input);
                document.getElementById("temp").appendChild(submit);
                let upl=false;

                submit.addEventListener("click",()=>
                {
                    if(input.value!="" && input.value!=undefined && upl!=false)
                    {
                        quote[2][1]=input.value;
                        div();
                        let data="Agr";
                        last(data);
                    }
                    else if(input.value=="" || input.value==undefined)
                    {
                        no1.innerHTML="Please add some more information";
                    }
                    else if(upl!=true)
                    {
                        no1.innerHTML="Please upload some pictures";
                    }
                });

                upload.addEventListener("change",async()=>
                {
                    let output = document.getElementById("upload");
                    let c=0;
                    try
                    {
                        let temp=new Array();
                        for(let i=0;i<output.files.length;i++)
                        {
                            c++;
                            let fr = new FileReader;
                            let { resolve, reject, promise } = Promise.withResolvers();
                            try
                            {
                                fr.onload = (e) => resolve(e.target.result);
                                fr.readAsDataURL(output.files[i]);
                                temp[i]=await promise;
                                console.log("Success line 1304");
                                upl=true;
                            }
                            catch(err)
                            {
                                console.log(err);
                            }
    
                        }
                        quote[2][1]=temp;
                        console.log(quote[2]);                        
                    }
                    catch(err)
                    {
                        console.log(err);
                    }
                    
                });  
            })

            document.getElementById("temp").appendChild(out);
            document.getElementById("temp").appendChild(inG);

        }
        function vin()
        {
            div();
        }
        function poolMaterial()
        {
            no1.innerHTML="What would you like the inner lining of you pool to be?";
            let mas=document.createElement("button");
            mas.innerHTML="Masonry Liners";
            mas.setAttribute("class","opt");
            mas.setAttribute("onclick","concrete()");

            let fiber=document.createElement("button");
            fiber.innerHTML="Fiberglass Liners";
            fiber.setAttribute("class","opt");
            fiber.setAttribute("onclick","fib()");


            let vinly=document.createElement("button");
            vinly.innerHTML="Vinyl Liners";
            vinly.setAttribute("class","opt");
            vinly.setAttribute("onclick","vin()");


            let info=document.createElement("button");
            info.innerHTML="Learn more about inner pool linings";
            info.setAttribute("class","infoW");

            info.addEventListener("click",()=>
            {
                let label=document.createElement("label");
                label.innerHTML="The are 3 types of commanly used pool liners<br>";
                label.setAttribute("style","font-weight:bold;font-size:50px;");

                let label1=document.createElement("label");
                label1.innerHTML="Masonary<br>Fiber Glass<br>Vinly<br><br>";
                label1.setAttribute("style","font-weight:bold;font-size:40px;");

                let label2=document.createElement("label");
                label2.innerHTML="This is the material used to line the inside of your pool to prevent<br>your pool from loosing any water.<br><br>";
                label2.setAttribute("style","font-size:35px;");

                let label3=document.createElement("label");
                label3.innerHTML="Masonary<br>The standard, yet classy approuch<br>You get 3 common types of finishes<br>Plaster, which is the traditional standard and the cheapest<br>Exposed Aggregate, which will add texture to your pool surfaces<br>Polished Aggregate, which would be the exposed aggregate but just flat and smooth.<br>Both types of aggregate commanly use stones or pebbles to give it the<br>smooth or textured look<br><br>Fiber Glass<br>Is commanly used for creating<br>pre-fabricated moulds<br>Which is then placed into the ground or above it<br>With a closure built around it<br>If the mould is above ground, you could build a wooden deck or platform you choose<br><br>Vinyl<br>Is a strong film placed inside the pool<br>Its used to create asthetically pleasing visual contrasts<br>It comes in many different patterns<br><br>";

                let label4=document.createElement("label");
                label4.innerHTML="A Plastered finished is mix of cement, sand, marble and water<br>and can be painted a color you choose.<br>Plaster is the standard pool look.<br>It's a classic look.<br>It will require a lot more maintanance as it's not the smoothest<br>It is also the cheapest";

                let label5=document.createElement("label");
                label5.innerHTML="Exposed Aggregrate Finish<br>This would add a layer of texture to your pool surfaces<br>Requires a lot more work<br>but definatly worth the effort<br>Adds elagance to your pool and a look that says<br>'Im different'";

                let label6=document.createElement("label");
                label6.innerHTML="This would be the same as an exposed aggregate finsh but with a polished texture<br>Meaning all the surfaces would be smooth and flat.<br>Would also need a lot less work to keep clean<br>Mostly used around the top of the pool and flat surfaces<br>Provides a visually clean look";

                let label7=document.createElement("label");
                label7.innerHTML="A tiled finish would add a uniqueness<br>You could incorporate many different styles and patters<br>Play with different colors and textures until your saitified with the pattern and color scheme";
                
                let label8=document.createElement("label");
                label8.innerHTML="A pre-fabricated mould placed in the ground would take a lot less time to complete<br>Apposed to other methods";
                
                let label9=document.createElement("label");
                label9.innerHTML="A pre-fabricated mould placed ontop of the ground<br> One would do this so one could build a enclosure around it";
                
                let label10=document.createElement("label");
                label10.innerHTML="A vinly film is placed inside the pool<br>They come in different thicknesses and paterns";
                
                let heading1=document.createElement("label");
                heading1.innerHTML="Masonary Finishes";
                heading1.setAttribute("style","text-decoration-line: underline;font-weight:bold;font-size:45px;text-align:center;display:block;margin:auto;")

                let heading2=document.createElement("label");
                heading2.innerHTML="-Plaster-";
                heading2.setAttribute("style","font-weight:bold;font-size:40px;text-align:center;display:block;margin:auto;")

                let heading3=document.createElement("label");
                heading3.innerHTML="<br><br>-Exposed Aggregate-";
                heading3.setAttribute("style","font-weight:bold;font-size:40px;text-align:center;display:block;margin:auto;");

                let heading4=document.createElement("label");
                heading4.innerHTML="<br><br>-Polished Aggregate-";
                heading4.setAttribute("style","font-weight:bold;font-size:40px;text-align:center;display:block;margin:auto;")

                let heading5=document.createElement("label");
                heading5.innerHTML="<br><br>-Tiled-";
                heading5.setAttribute("style","font-weight:bold;font-size:40px;text-align:center;display:block;margin:auto;")

                let heading6=document.createElement("label");
                heading6.innerHTML="<br><br>Fiber Glass";
                heading6.setAttribute("style","text-decoration-line: underline;font-weight:bold;font-size:45px;text-align:center;display:block;margin:auto;")

                let heading7=document.createElement("label");
                heading7.innerHTML="-Fiber Glass Mould In ground-";
                heading7.setAttribute("style","font-weight:bold;font-size:40px;text-align:center;display:block;margin:auto;")

                let heading8=document.createElement("label");
                heading8.innerHTML="<br><br>-Fiber Glass Mould out of ground-";
                heading8.setAttribute("style","font-weight:bold;font-size:40px;text-align:center;display:block;margin:auto;")

                let heading9=document.createElement("label");
                heading9.innerHTML="<br><br>Vinly";
                heading9.setAttribute("style","text-decoration-line: underline;font-weight:bold;font-size:45px;text-align:center;display:block;margin:auto;")

                let heading10=document.createElement("label");
                heading10.innerHTML="-Vinly comes in many different styles-";
                heading10.setAttribute("style","font-weight:bold;font-size:40px;text-align:center;display:block;margin:auto;")


                let img1=document.createElement("img");
                img1.src="img/Finishes/plaster.jpg";
                img1.setAttribute("class","pic");

                let img2=document.createElement("img");
                img2.setAttribute("class","pic");
                img2.src="img/Finishes/plaster2.jpg";

                let img3=document.createElement("img");
                img3.src="img/Finishes/plaster3.jpg";
                img3.setAttribute("class","pic");

                let img4=document.createElement("img");
                img4.src="img/Finishes/e1.png";
                img4.setAttribute("class","pic");

                let img5=document.createElement("img");
                img5.src="img/Finishes/e2.jpg";
                img5.setAttribute("class","pic");

                let img6=document.createElement("img");
                img6.src="img/Finishes/e3.jpg";
                img6.setAttribute("class","pic");

                let img7=document.createElement("img");
                img7.src="img/Finishes/p2.jpg";
                img7.setAttribute("class","pic");

                let img8=document.createElement("img");
                img8.src="img/Finishes/p3.jpg";
                img8.setAttribute("class","pic");

                let img9=document.createElement("img");
                img9.src="img/Finishes/p4.jpg";
                img9.setAttribute("class","pic");

                let img10=document.createElement("img");
                img10.src="img/Finishes/t1.jpg";
                img10.setAttribute("class","pic");

                let img11=document.createElement("img");
                img11.src="img/Finishes/t2.jpg";
                img11.setAttribute("class","pic");

                let img12=document.createElement("img");
                img12.src="img/Finishes/t3.jpg";
                img12.setAttribute("class","pic");

                let img13=document.createElement("img");
                img13.src="img/Finishes/f1.jpg";
                img13.setAttribute("class","pic");

                let img14=document.createElement("img");
                img14.src="img/Finishes/f2.jpg";
                img14.setAttribute("class","pic");

                let img15=document.createElement("img");
                img15.src="img/Finishes/f3.jpg";
                img15.setAttribute("class","pic");

                let img16=document.createElement("img");
                img16.src="img/Finishes/fo1.jpg";
                img16.setAttribute("class","pic");

                let img17=document.createElement("img");
                img17.src="img/Finishes/fo2.jpg";
                img17.setAttribute("class","pic");

                let img18=document.createElement("img");
                img18.src="img/Finishes/fo3.jpg";
                img18.setAttribute("class","pic");

                let img19=document.createElement("img");
                img19.src="img/Finishes/v1.jpg";
                img19.setAttribute("class","pic");

                let div=document.createElement("div");
                div.id="d";
                div.setAttribute("class","infoDiv");

                let div1=document.createElement("div");
                div1.id="d1";
                div1.setAttribute("class","flexDiv");

                let div2=document.createElement("div");
                div2.id="d2";
                div2.setAttribute("class","flexDiv");

                let div3=document.createElement("div");
                div3.id="d3";
                div3.setAttribute("class","flexDiv");

                let div4=document.createElement("div");
                div4.id="d4";
                div4.setAttribute("class","flexDiv");

                let div5=document.createElement("div");
                div5.id="d5";
                div5.setAttribute("class","flexDiv");

                let div6=document.createElement("div");
                div6.id="d6";
                div6.setAttribute("class","flexDiv");

                let div7=document.createElement("div");
                div7.id="d7";
                div7.setAttribute("class","flexDiv");

                document.getElementById("temp").appendChild(div);
                document.getElementById("d").appendChild(label);
                document.getElementById("d").appendChild(label1);
                document.getElementById("d").appendChild(label2);
                document.getElementById("d").appendChild(label3);

                document.getElementById("d").appendChild(heading1);
                document.getElementById("d").appendChild(heading2);
                document.getElementById("temp").appendChild(div1);

                document.getElementById("d1").appendChild(img1);
                document.getElementById("d1").appendChild(img2);
                document.getElementById("d1").appendChild(img3);

                document.getElementById("temp").appendChild(label4);
                document.getElementById("temp").appendChild(heading3);
                document.getElementById("temp").appendChild(div2);

                document.getElementById("d2").appendChild(img4);
                document.getElementById("d2").appendChild(img5);
                document.getElementById("d2").appendChild(img6);
                document.getElementById("temp").appendChild(label5);

                document.getElementById("temp").appendChild(heading4);
                document.getElementById("temp").appendChild(div3);
                document.getElementById("d3").appendChild(img7);
                document.getElementById("d3").appendChild(img8);
                document.getElementById("d3").appendChild(img9);
                document.getElementById("temp").appendChild(label6);
                
                document.getElementById("temp").appendChild(heading5);
                document.getElementById("temp").appendChild(div4);

                document.getElementById("d4").appendChild(img10);
                document.getElementById("d4").appendChild(img11);
                document.getElementById("d4").appendChild(img12);

                document.getElementById("temp").appendChild(label7);                
                document.getElementById("temp").appendChild(heading6);
                document.getElementById("temp").appendChild(heading7);                 
                document.getElementById("temp").appendChild(div5);
                
                document.getElementById("d5").appendChild(img13);                
                document.getElementById("d5").appendChild(img14);                
                document.getElementById("d5").appendChild(img15); 
                
                document.getElementById("temp").appendChild(label8);

                document.getElementById("temp").appendChild(heading8);                 
                document.getElementById("temp").appendChild(div6);
                
                document.getElementById("d6").appendChild(img16);                
                document.getElementById("d6").appendChild(img17);                
                document.getElementById("d6").appendChild(img18); 
                
                document.getElementById("temp").appendChild(label9);

                document.getElementById("temp").appendChild(heading9);
                document.getElementById("temp").appendChild(heading10);
                document.getElementById("temp").appendChild(div7);
                document.getElementById("d7").appendChild(img19);
                document.getElementById("temp").appendChild(label10);                
            })

            document.getElementById("temp").appendChild(mas)
            document.getElementById("temp").appendChild(fiber)
            document.getElementById("temp").appendChild(vinly)
            document.getElementById("temp").appendChild(info)
            

        }
       // div();
       // poolMaterial();
        function loadAdd()
        {
            div();
            no1.innerHTML="Tell us more";
            let label=document.createElement("label");
            label.innerHTML="What would you like to do around the pool";

            let input=document.createElement("textarea");
            input.id="input";
            input.rows=5;
            input.cols=15;
            input.setAttribute("class","textBox");
            input.setAttribute("style","width:90%; height:300px;");

            let submit=document.createElement("button");
            submit.innerHTML="Submit";
            submit.setAttribute("class","submit");
            
            document.getElementById("temp").appendChild(label);
            document.getElementById("temp").appendChild(br[13]);
            document.getElementById("temp").appendChild(input);
            document.getElementById("temp").appendChild(submit);

            submit.addEventListener("click",()=>
            {
                if(input.value!="")
                {
                    quote[5]=input.value;
                    console.log(quote);
                    additional();
                }
                else
                {
                    label.innerHTML="You need to write additional info";
                }
            });

        }
        //outer upPic infoOnly
        let upPic=false;
        let infoOnly=false;
        function additional()
        {
            div();
            no1.innerHTML="Any specific designs you have in mind?";
            let label=document.createElement("label");
            label.innerHTML="Upload a sample pic of the design";

            let upload=document.createElement("input");
            upload.setAttribute("class","file");
            upload.type="file";
            upload.setAttribute("accept","image/*");
            upload.id="upload";

            let label1=document.createElement("label");
            label1.innerHTML="Tell us more about the design and anything else you would like to do";

            let input=document.createElement("textarea");
            input.id="input";
            input.rows=5;
            input.cols=15;
            input.setAttribute("class","textBox");
            input.setAttribute("style","width:90%; height:300px;");
            let submit=document.createElement("button");
            submit.innerHTML="Submit";
            submit.setAttribute("class","submit");
            
            let img=document.createElement("img");
            let imageBase64="";

            document.getElementById("temp").appendChild(br[13]);
            document.getElementById("temp").appendChild(label);
            document.getElementById("temp").appendChild(br[14]);
            document.getElementById("temp").appendChild(upload);
            document.getElementById("temp").appendChild(br[17]);
            document.getElementById("temp").appendChild(img);
            document.getElementById("temp").appendChild(br[15]);
            document.getElementById("temp").appendChild(label1);
            document.getElementById("temp").appendChild(br[16]);
            document.getElementById("temp").appendChild(input);
            document.getElementById("temp").appendChild(submit);
            
            upload.addEventListener("change",async()=>
            {
                let output = document.getElementById("upload");
                let fr = new FileReader;
                let { resolve, reject, promise } = Promise.withResolvers();
                try
                {
                    fr.onload = (e) => resolve(e.target.result);
                    fr.readAsDataURL(output.files[0]);
                    imageBase64=await promise;
                    img.setAttribute("style","height:100px;width:100px;");
                    img.src=await promise;
                    upPic=true;
                }
                catch(err)
                {
                    label.innerHTML="Sorry could not load image";
                    console.log(err);
                }
            });

            submit.addEventListener("click",()=>
            {
                if(input.value!="" && imageBase64=="")
                {
                    quote[6]=["Design info:",input.value];
                    console.log(quote);
                    div()
                    createInputs();
                    infoOnly=true;
                }
                else if(input.value!="" && imageBase64!="")
                {
                    quote[6]=["Design info:",input.value,imageBase64];
                    div();
                    createInputs();
                }
                else
                {
                    label1.innerHTML="Sorry we need additional info";
                }
            });


        }
        let outer=false;
        function paving()
        {
            div();
            no1.innerHTML="Upload a pic of the Paving you would like to use";
            let label=document.createElement("label");
            label.innerHTML="This is the paving around the outer edges of your pool";
            let submit=document.createElement("button");
            submit.setAttribute("class","submit");
            submit.innerHTML="Submit";
            submit.setAttribute("onclick","additional()");
            let img=document.createElement("img");
            img.setAttribute("style","height:100px;width:100px;");
            let other=document.createElement("button");
            other.innerHTML="Other";
            other.setAttribute("class","submit");
            let upload=document.createElement("input");
            upload.setAttribute("class","file");
            upload.type="file";
            upload.setAttribute("accept","image/*");
            upload.id="upload";
            document.getElementById("temp").appendChild(label);
            document.getElementById("temp").appendChild(br[12]);
            document.getElementById("temp").appendChild(upload);
            document.getElementById("temp").appendChild(other);
            let times=false;
            other.setAttribute("onclick","loadAdd()");
            upload.addEventListener("change",async()=>
            {
                let output = document.getElementById("upload");
                let fr = new FileReader;
                let { resolve, reject, promise } = Promise.withResolvers();
                try
                {
                    fr.onload = (e) => resolve(e.target.result);
                    fr.readAsDataURL(output.files[0]);
                    outer=true;
                    quote[5] =["Outer Paving", await promise];
                    no1.innerHTML="Picture uploaded";
                    img.src=await promise;
                    other.innerHTML="Submit";
                    other.remove();
                    other.setAttribute("onclick","additional()");
                    document.getElementById("temp").appendChild(br[13]);
                    document.getElementById("temp").appendChild(img);
                    document.getElementById("temp").appendChild(other);


                }
                catch(err)
                {
                    no1.innerHTML="Sorry could not load image";
                    console.log(err);
                }
            });

        }
        async function trav()
        {
            div();
            quote[3]="Paving Travertine";
            no1.innerHTML="You have selected travertine"
            let heading=document.createElement("label");
            heading.innerHTML="Upload a sample pic of Travertine your would like to use";
            let submit=document.createElement("button");
            submit.setAttribute("class","submit");
            submit.innerHTML="Submit";
            submit.setAttribute("onclick","paving()");
            let img=document.createElement("img");
            img.setAttribute("style","width:100px; height:100px;")
            let upload=document.createElement("input");
            upload.setAttribute("class","file");
            upload.setAttribute("accept","image/*");
            upload.id="upload";
            upload.type="file";
            document.getElementById("temp").appendChild(heading);
            document.getElementById("temp").appendChild(br[30]);
            document.getElementById("temp").appendChild(upload);
            document.getElementById("temp").appendChild(br[31]);
            
            

            upload.addEventListener("change",async()=>
            {
                let output = document.getElementById("upload");
                let fr = new FileReader;
                let { resolve, reject, promise } = Promise.withResolvers();
                try
                {
                    fr.onload = (e) => resolve(e.target.result);
                    fr.readAsDataURL(output.files[0]);
                    quote[4] = await promise;
                    no1.innerHTML="Picture uploaded";
                    img.src=quote[4];
                    document.getElementById("temp").appendChild(img);
                    document.getElementById("temp").appendChild(submit);
                }
                catch(err)
                {
                    no1.innerHTML="Sorry could not load image";
                    console.log(err);
                }
            });
        }
        async function gra()
        {
            div();
            quote[3]="Paving Granite";
            no1.innerHTML="You have selected Granite"
            let heading=document.createElement("label");
            heading.innerHTML="Upload a sample pic of Granite your would like to use";
            let submit=document.createElement("button");
            submit.setAttribute("class","submit");
            submit.innerHTML="Submit";
            submit.setAttribute("onclick","paving()");
            let img=document.createElement("img");
            img.setAttribute("style","width:100px; height:100px;")
            let upload=document.createElement("input");
            upload.setAttribute("class","file");
            upload.setAttribute("accept","image/*");
            upload.id="upload";
            upload.type="file";
            document.getElementById("temp").appendChild(heading);
            document.getElementById("temp").appendChild(br[30]);
            document.getElementById("temp").appendChild(upload);
            document.getElementById("temp").appendChild(br[31]);
            
            

            upload.addEventListener("change",async()=>
            {
                let output = document.getElementById("upload");
                let fr = new FileReader;
                let { resolve, reject, promise } = Promise.withResolvers();
                try
                {
                    fr.onload = (e) => resolve(e.target.result);
                    fr.readAsDataURL(output.files[0]);
                    quote[4] = await promise;
                    no1.innerHTML="Picture uploaded";
                    img.src=quote[4];
                    document.getElementById("temp").appendChild(img);
                    document.getElementById("temp").appendChild(submit);
                }
                catch(err)
                {
                    no1.innerHTML="Sorry could not load image";
                    console.log(err);
                }
            });
        }
        async function mar()
        {
            div();
            quote[3]="Paving Marble";
            no1.innerHTML="You have selected Marble"
            let heading=document.createElement("label");
            heading.innerHTML="Upload a sample pic of Marble your would like to use";
            let submit=document.createElement("button");
            submit.setAttribute("class","submit");
            submit.innerHTML="Submit";
            submit.setAttribute("onclick","paving()");
            let img=document.createElement("img");
            img.setAttribute("style","width:100px; height:100px;")
            let upload=document.createElement("input");
            upload.setAttribute("class","file");
            upload.setAttribute("accept","image/*");
            upload.id="upload";
            upload.type="file";
            document.getElementById("temp").appendChild(heading);
            document.getElementById("temp").appendChild(br[30]);
            document.getElementById("temp").appendChild(upload);
            document.getElementById("temp").appendChild(br[31]);
            
            

            upload.addEventListener("change",async()=>
            {
                let output = document.getElementById("upload");
                let fr = new FileReader;
                let { resolve, reject, promise } = Promise.withResolvers();
                try
                {
                    fr.onload = (e) => resolve(e.target.result);
                    fr.readAsDataURL(output.files[0]);
                    quote[4] = await promise;
                    no1.innerHTML="Picture uploaded";
                    img.src=quote[4];
                    document.getElementById("temp").appendChild(img);
                    document.getElementById("temp").appendChild(submit);
                }
                catch(err)
                {
                    no1.innerHTML="Sorry could not load image";
                    console.log(err);
                }
            });
        }
        async function sla()
        {
            div();
            quote[3]="Paving Slate";
            no1.innerHTML="You have selected Slate"
            let heading=document.createElement("label");
            heading.innerHTML="Upload a sample pic of Slate your would like to use";
            let submit=document.createElement("button");
            submit.setAttribute("class","submit");
            submit.innerHTML="Submit";
            submit.setAttribute("onclick","paving()");
            let img=document.createElement("img");
            img.setAttribute("style","width:100px; height:100px;")
            let upload=document.createElement("input");
            upload.setAttribute("class","file");
            upload.setAttribute("accept","image/*");
            upload.id="upload";
            upload.type="file";
            document.getElementById("temp").appendChild(heading);
            document.getElementById("temp").appendChild(br[30]);
            document.getElementById("temp").appendChild(upload);
            document.getElementById("temp").appendChild(br[31]);
            
            

            upload.addEventListener("change",async()=>
            {
                let output = document.getElementById("upload");
                let fr = new FileReader;
                let { resolve, reject, promise } = Promise.withResolvers();
                try
                {
                    fr.onload = (e) => resolve(e.target.result);
                    fr.readAsDataURL(output.files[0]);
                    quote[4] = await promise;
                    no1.innerHTML="Picture uploaded";
                    img.src=quote[4];
                    document.getElementById("temp").appendChild(img);
                    document.getElementById("temp").appendChild(submit);
                }
                catch(err)
                {
                    no1.innerHTML="Sorry could not load image";
                    console.log(err);
                }
            });
        }
        async function lim()
        {
            div();
            quote[3]="Paving Limestone";
            no1.innerHTML="You have selected Limestone"
            let heading=document.createElement("label");
            heading.innerHTML="Upload a sample pic of Limestone your would like to use";
            let submit=document.createElement("button");
            submit.setAttribute("class","submit");
            submit.innerHTML="Submit";
            submit.setAttribute("onclick","paving()");
            let img=document.createElement("img");
            img.setAttribute("style","width:100px; height:100px;")
            let upload=document.createElement("input");
            upload.setAttribute("class","file");
            upload.setAttribute("accept","image/*");
            upload.id="upload";
            upload.type="file";
            document.getElementById("temp").appendChild(heading);
            document.getElementById("temp").appendChild(br[30]);
            document.getElementById("temp").appendChild(upload);
            document.getElementById("temp").appendChild(br[31]);
            
            

            upload.addEventListener("change",async()=>
            {
                let output = document.getElementById("upload");
                let fr = new FileReader;
                let { resolve, reject, promise } = Promise.withResolvers();
                try
                {
                    fr.onload = (e) => resolve(e.target.result);
                    fr.readAsDataURL(output.files[0]);
                    quote[4] = await promise;
                    no1.innerHTML="Picture uploaded";
                    img.src=quote[4];
                    document.getElementById("temp").appendChild(img);
                    document.getElementById("temp").appendChild(submit);
                }
                catch(err)
                {
                    no1.innerHTML="Sorry could not load image";
                    console.log(err);
                }
            });
        }
        async function cor()
        {
            div();
            quote[3]="Paving Coral";
            no1.innerHTML="You have selected Coral"
            let heading=document.createElement("label");
            heading.innerHTML="Upload a sample pic of Coral your would like to use";
            let submit=document.createElement("button");
            submit.setAttribute("class","submit");
            submit.innerHTML="Submit";
            submit.setAttribute("onclick","paving()");
            let img=document.createElement("img");
            img.setAttribute("style","width:100px; height:100px;")
            let upload=document.createElement("input");
            upload.setAttribute("class","file");
            upload.setAttribute("accept","image/*");
            upload.id="upload";
            upload.type="file";
            document.getElementById("temp").appendChild(heading);
            document.getElementById("temp").appendChild(br[30]);
            document.getElementById("temp").appendChild(upload);
            document.getElementById("temp").appendChild(br[31]);
            
            

            upload.addEventListener("change",async()=>
            {
                let output = document.getElementById("upload");
                let fr = new FileReader;
                let { resolve, reject, promise } = Promise.withResolvers();
                try
                {
                    fr.onload = (e) => resolve(e.target.result);
                    fr.readAsDataURL(output.files[0]);
                    quote[4] = await promise;
                    no1.innerHTML="Picture uploaded";
                    img.src=quote[4];
                    document.getElementById("temp").appendChild(img);
                    document.getElementById("temp").appendChild(submit);
                }
                catch(err)
                {
                    no1.innerHTML="Sorry could not load image";
                    console.log(err);
                }
            });
        }
        async function qua()
        {
            div();
            quote[3]="Paving Quartzite";
            no1.innerHTML="You have selected Quartzite"
            let heading=document.createElement("label");
            heading.innerHTML="Upload a sample pic of Quartzite your would like to use";
            let submit=document.createElement("button");
            submit.setAttribute("class","submit");
            submit.innerHTML="Submit";
            submit.setAttribute("onclick","paving()");
            let img=document.createElement("img");
            img.setAttribute("style","width:100px; height:100px;")
            let upload=document.createElement("input");
            upload.setAttribute("class","file");
            upload.setAttribute("accept","image/*");
            upload.id="upload";
            upload.type="file";
            document.getElementById("temp").appendChild(heading);
            document.getElementById("temp").appendChild(br[30]);
            document.getElementById("temp").appendChild(upload);
            document.getElementById("temp").appendChild(br[31]);
            
            

            upload.addEventListener("change",async()=>
            {
                let output = document.getElementById("upload");
                let fr = new FileReader;
                let { resolve, reject, promise } = Promise.withResolvers();
                try
                {
                    fr.onload = (e) => resolve(e.target.result);
                    fr.readAsDataURL(output.files[0]);
                    quote[4] = await promise;
                    no1.innerHTML="Picture uploaded";
                    img.src=quote[4];
                    document.getElementById("temp").appendChild(img);
                    document.getElementById("temp").appendChild(submit);
                }
                catch(err)
                {
                    no1.innerHTML="Sorry could not load image";
                    console.log(err);
                }
            });
        }
        async function oth()
        {
            div();
            quote[3]="Paving Other";
            no1.innerHTML="You have selected Other"
            let heading=document.createElement("label");
            heading.innerHTML="Upload a sample pic";
            let submit=document.createElement("button");
            submit.setAttribute("class","submit");
            submit.innerHTML="Submit";
            submit.setAttribute("onclick","paving()");
            let img=document.createElement("img");
            img.setAttribute("style","width:100px; height:100px;")
            let upload=document.createElement("input");
            upload.setAttribute("class","file");
            upload.setAttribute("accept","image/*");
            upload.id="upload";
            upload.type="file";
            document.getElementById("temp").appendChild(heading);
            document.getElementById("temp").appendChild(br[30]);
            document.getElementById("temp").appendChild(upload);
            document.getElementById("temp").appendChild(br[31]);
            
            

            upload.addEventListener("change",async()=>
            {
                let output = document.getElementById("upload");
                let fr = new FileReader;
                let { resolve, reject, promise } = Promise.withResolvers();
                try
                {
                    fr.onload = (e) => resolve(e.target.result);
                    fr.readAsDataURL(output.files[0]);
                    quote[4] = await promise;
                    no1.innerHTML="Picture uploaded";
                    img.src=quote[4];
                    document.getElementById("temp").appendChild(img);
                    document.getElementById("temp").appendChild(submit);
                }
                catch(err)
                {
                    no1.innerHTML="Sorry could not load image";
                    console.log(err);
                }
            });
        }
        function selectM()
        {
            no1.innerHTML="Select your pool pavers";
            let info=document.createElement("label");
            info.innerHTML="This is the paving that goes around the top-edges of your pool";
            let pav1=document.createElement("button");
            pav1.setAttribute("class","opt");
            pav1.innerHTML="Travertine";
            pav1.setAttribute("onclick","trav()");

            let pav2=document.createElement("button");
            pav2.setAttribute("class","opt");
            pav2.innerHTML="Granite";
            pav2.setAttribute("onclick","gra()");

            let pav3=document.createElement("button");
            pav3.setAttribute("class","opt");
            pav3.innerHTML="Marble";
            pav3.setAttribute("onclick","mar()");

            let pav4=document.createElement("button");
            pav4.setAttribute("class","opt");
            pav4.innerHTML="Slate";
            pav4.setAttribute("onclick","sla()");

            let pav5=document.createElement("button");
            pav5.setAttribute("class","opt");
            pav5.innerHTML="Limestone";
            pav5.setAttribute("onclick","lim()");

            let pav6=document.createElement("button");
            pav6.setAttribute("class","opt");
            pav6.innerHTML="Coral";
            pav6.setAttribute("onclick","cor()");

            let pav7=document.createElement("button");
            pav7.setAttribute("class","opt");
            pav7.innerHTML="Quartzite";
            pav7.setAttribute("onclick","qua()");


            let other=document.createElement("button");
            other.setAttribute("class","opt");
            other.innerHTML="Other";
            other.setAttribute("onclick","oth()");

            document.getElementById("temp").appendChild(info);
            document.getElementById("temp").appendChild(pav1);
            document.getElementById("temp").appendChild(pav2);
            document.getElementById("temp").appendChild(pav3);
            document.getElementById("temp").appendChild(pav4);
            document.getElementById("temp").appendChild(pav5);
            document.getElementById("temp").appendChild(pav6);
            document.getElementById("temp").appendChild(other);

        }
        function createFirst()
        {
            div();
            /*
                            <button class="opt" onclick="service()">Clean</button>
                            <button class="opt">Repairs</button>
                            <button class="opt">Build</button>
            */
           let clean=document.createElement("button");
           clean.innerHTML="Clean";
           clean.setAttribute("onclick","service()");
           clean.setAttribute("class","opt");
           let repairs=document.createElement("button");
           repairs.innerHTML="Repairs";
           repairs.setAttribute("onclick","repairs()");
           repairs.setAttribute("class","opt");
           let build=document.createElement("button");
           build.innerHTML="Build";
           build.setAttribute("onclick","build()");
           build.setAttribute("class","opt");

           document.getElementById("temp").appendChild(clean);
           document.getElementById("temp").appendChild(repairs);
           document.getElementById("temp").appendChild(build);
        }
        function pipes()
        {
            quote[0]="Repair pipe leaks";
            div();
            userData();
        }
        function pump()
        {
            quote[0]="Repair pump";
            div();
            userData();
        }
        function both()
        {
            quote[0]="Repair pump and pipes";
            div();
            userData();
        }
        function poolleaks()
        {
            quote[0]="Repair pool leaks";
            div();
            createInputs();
        }
        function leaks()
        {
            div();

            let userInput=document.createElement("textarea");
            userInput.rows=6;
            userInput.cols=40;
            userInput.id="input";
            userInput.setAttribute("class","textBox");

            no1.innerHTML="What type of leak?"
            let pipes=document.createElement("button");
            pipes.setAttribute("class","opt");
            pipes.innerHTML="Pipe leaks";
            pipes.addEventListener("click",()=>
            {
                div();
                no1.innerHTML="Explain your pipe leak";
                let label=document.createElement("label");
                label.innerHTML="What seems to be the issue?<br>"

                let submit=document.createElement("button");
                submit.setAttribute("class","submit");
                submit.innerHTML="Submit";

                document.getElementById("temp").appendChild(label);
                document.getElementById("temp").appendChild(userInput);
                document.getElementById("temp").appendChild(submit);
                submit.addEventListener("click",()=>
                {
                    let data=document.getElementById("input").value;
                    if(data!=undefined && data!="")
                    {
                        quote[0]=["Leaking pipes",data];
                        div();
                        userData();
                    }
                });

            });
           // pipes.setAttribute("onclick","pipes()");

            let pump=document.createElement("button");
            pump.setAttribute("class","opt");
            pump.innerHTML="Pump leaks";
            pump.addEventListener("click",()=>
            {
                div();
                no1.innerHTML="Explain your pump leak";
                let label=document.createElement("label");
                label.innerHTML="How is your pump leaking?<br>"

                let submit=document.createElement("button");
                submit.setAttribute("class","submit");
                submit.innerHTML="Submit";

                document.getElementById("temp").appendChild(label);
                document.getElementById("temp").appendChild(userInput);
                document.getElementById("temp").appendChild(submit);
                submit.addEventListener("click",()=>
                {
                    let data=document.getElementById("input").value;
                    if(data!=undefined && data!="")
                    {
                        quote[0]=["Leaking pump",data];
                        div();
                        userData();
                    }
                });

            });

            let both=document.createElement("button");
            both.setAttribute("class","opt");
            both.innerHTML="Both pump and pipes";
            both.addEventListener("click",()=>
            {
                div();
                no1.innerHTML="Explain your leak";
                let label=document.createElement("label");
                label.innerHTML="What seems to be the problem?<br>"

                let submit=document.createElement("button");
                submit.setAttribute("class","submit");
                submit.innerHTML="Submit";

                document.getElementById("temp").appendChild(label);
                document.getElementById("temp").appendChild(userInput);
                document.getElementById("temp").appendChild(submit);
                submit.addEventListener("click",()=>
                {
                    let data=document.getElementById("input").value;
                    if(data!=undefined && data!="")
                    {
                        quote[0]=["leaks",data];
                        div();
                        userData();
                    }
                });

            });

            let pool=document.createElement("button");
            pool.setAttribute("class","opt");
            pool.innerHTML="Pool leaks";
            pool.addEventListener("click",()=>
            {
                div();
                no1.innerHTML="Explain your pool leak";
                let label=document.createElement("label");
                label.innerHTML="How is pool leaking?<br>"

                let submit=document.createElement("button");
                submit.setAttribute("class","submit");
                submit.innerHTML="Submit";

                document.getElementById("temp").appendChild(label);
                document.getElementById("temp").appendChild(userInput);
                document.getElementById("temp").appendChild(submit);
                submit.addEventListener("click",()=>
                {
                    let data=document.getElementById("input").value;
                    if(data!=undefined && data!="")
                    {
                        quote[0]=["Leaking pool",data];
                        div();
                        userData();
                    }
                });

            });

            document.getElementById("temp").appendChild(pipes);
            document.getElementById("temp").appendChild(pump);
            document.getElementById("temp").appendChild(both);
            document.getElementById("temp").appendChild(pool);
        }
        function electrical()
        {
            no1.innerHTML="What type of issue?";
            div();

            let pump=document.createElement("button");
            pump.innerHTML="Problem with the pump";
            pump.setAttribute("class","opt");
            pump.setAttribute("onclick","pumpE()");

            let light=document.createElement("button");
            light.innerHTML="Pool light not working";
            light.setAttribute("class","opt");
            light.setAttribute("onclick","light()");

            let wire=document.createElement("button");
            wire.innerHTML="Wiring issue";
            wire.setAttribute("class","opt");
            wire.setAttribute("onclick","wire()");

            document.getElementById("temp").appendChild(pump);
            document.getElementById("temp").appendChild(light);
            document.getElementById("temp").appendChild(wire);
        }
        function wire()
        {
            div();
            no1.innerHTML="Please explain the wiring issue"
            quote[0]="Wiring issue";
            let label=document.createElement("label");
            label.innerHTML="Explain briefly what problem you have<br>"
            let input=document.createElement("textarea");
            input.id="input";
            input.setAttribute("class","textBox");
            input.setAttribute("style","width:60%;height:250px;");
            let submit=document.createElement("button");
            submit.innerHTML="Submit"
            submit.setAttribute("class","submit");
            document.getElementById("temp").appendChild(label)
            document.getElementById("temp").appendChild(input)
            document.getElementById("temp").appendChild(submit)

            submit.addEventListener("click",()=>
            {
                let data=document.getElementById("input").value;
                if(data!=undefined && data!="")
                {
                    div();
                    quote[0]=["Wiring issue",data];
                    userData();
                }
                else
                {
                    no1.innerHTML="We need to know what the problem is"
                }
            });
        }
        function light()
        {
            div();
            no1.innerHTML="What seems to the problem?"
            let label=document.createElement("label");
            label.innerHTML="Explain briefly what problem you have<br>"
            let input=document.createElement("textarea");
            input.id="input";
            input.setAttribute("class","textBox");
            input.setAttribute("style","width:60%;height:250px;");
            let submit=document.createElement("button");
            submit.innerHTML="Submit"
            submit.setAttribute("class","submit");
            document.getElementById("temp").appendChild(label)
            document.getElementById("temp").appendChild(input)
            document.getElementById("temp").appendChild(submit)

            submit.addEventListener("click",()=>
            {
                let data=document.getElementById("input").value;
                if(data!=undefined && data!="")
                {
                    div();
                    quote[0]=["Pool Light",data];
                    userData();
                }
                else
                {
                    no1.innerHTML="We need to know what the problem is"
                }
            });
        }
        function pumpE()
        {
            div();
            no1.innerHTML="Your pump isnt working?"
            let label=document.createElement("label");
            label.innerHTML="Explain briefly what problem you have<br>"
            let input=document.createElement("textarea");
            input.id="input";
            input.setAttribute("class","textBox");
            input.setAttribute("style","width:60%;height:250px;");
            let submit=document.createElement("button");
            submit.innerHTML="Submit"
            submit.setAttribute("class","submit");
            document.getElementById("temp").appendChild(label)
            document.getElementById("temp").appendChild(input)
            document.getElementById("temp").appendChild(submit)

            submit.addEventListener("click",()=>
            {
                let data=document.getElementById("input").value;
                if(data!=undefined && data!="")
                {
                    quote[0]=["Pump problem",data];
                    div();
                    userData();
                }
                else
                {
                    no1.innerHTML="We need to know what the problem is"
                }
            });
        }
        function repairs()
        {
            div();
            no1.innerHTML="What would you like to repair?";
            let leaks=document.createElement("button");
            leaks.innerHTML="Leaks";
            leaks.setAttribute("class","opt");
            leaks.setAttribute("onclick","leaks()");

            let elec=document.createElement("button");
            elec.innerHTML="Pump and electical";
            elec.setAttribute("class","opt");
            elec.setAttribute("onclick","electrical()");

            let cos=document.createElement("button");
            cos.innerHTML="Cosmetics";
            cos.setAttribute("class","opt");
            cos.setAttribute("onclick","cos()");

            let pool=document.createElement("button");
            pool.innerHTML="Pool repairs";
            pool.setAttribute("class","opt");
            pool.setAttribute("onclick","poolRep()");

            document.getElementById("temp").appendChild(leaks);
            document.getElementById("temp").appendChild(elec);
            document.getElementById("temp").appendChild(cos);
            document.getElementById("temp").appendChild(pool);
        }
        function poolRep()
        {
            div();
            no1.innerHTML="Describe your pool problem";
            let userInput=document.createElement("textarea");
            userInput.rows=6;
            userInput.cols=40;
            userInput.id="input";
            userInput.setAttribute("class","textBox");

            let submit=document.createElement("button");
            submit.setAttribute("class","submit");
            submit.innerHTML="Submit"
            submit.addEventListener("click",()=>
            {
                let data=document.getElementById("input").value;
                if(data!="" && data!=undefined)
                {   
                    quote[0]=["Pool repairs",data];
                    div();
                    userData();
                }
                else
                {
                    no1.innerHTML="We need additional info"
                }
            });

            let label=document.createElement("label");
            label.innerHTML="Tell us whats wrong with your pool<br>"
            document.getElementById("temp").appendChild(label);
            document.getElementById("temp").appendChild(userInput);
            document.getElementById("temp").appendChild(submit);

        }
        function collectInput()
        {
            let data=document.getElementById("input");
            let pass=false;
            if(data.value=="")
            {
                pass=false
            }
            else
            {
                quote[0]=data.value;
                div();
                userData();
            }
        }
        function cos()
        {
            div();
            no1.innerHTML="Describe your cosmetic issue";
            let userInput=document.createElement("textarea");
            userInput.rows=6;
            userInput.cols=40;
            userInput.id="input";
            userInput.setAttribute("class","textBox");

            let submit=document.createElement("button");
            submit.setAttribute("class","submit");
            submit.innerHTML="Submit"
            submit.addEventListener("click",()=>
            {
                let data=document.getElementById("input").value;
                if(data!="" && data!=undefined)
                {   
                    quote[0]=["Cosmetic",data];
                    div();
                    userData();
                }
                else
                {
                    no1.innerHTML="We need additional info"
                }
            });

            let label=document.createElement("label");
            label.innerHTML="Tell us what cosmetic issue you have<br>"
            document.getElementById("temp").appendChild(label);
            document.getElementById("temp").appendChild(userInput);
            document.getElementById("temp").appendChild(submit);
            
        }
        function filter()
        {
            quote[0]="Filter sand change";
            div();
            userData();
        }
        function service()
        {
            div();
            let basic=document.createElement("button");
            basic.innerHTML="Basic Clean";
            basic.setAttribute("onclick","basicServ()");
            basic.setAttribute("class","opt");
            
            let basicPH=document.createElement("button");
            basicPH.innerHTML="Clean and PH correction";
            basicPH.setAttribute("onclick","PHCor()");
            basicPH.setAttribute("class","opt");

            let filter=document.createElement("button");
            filter.innerHTML="Filter material replacement";
            filter.setAttribute("onclick","filter()");
            filter.setAttribute("class","opt")

            let drain=document.createElement("button");
            drain.innerHTML="Drain and replace water";
            drain.setAttribute("onclick","drain()");
            drain.setAttribute("class","opt")

            document.getElementById("temp").appendChild(basic);
            document.getElementById("temp").appendChild(basicPH);
            document.getElementById("temp").appendChild(filter);
            document.getElementById("temp").appendChild(drain);
        }
    </script>
    </body>
</html>

const express=require("express");
const app=express();
const path=require("path");
const bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: "25mb" }))
app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname,'img')));
app.use(express.static(__dirname));

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "tomatoes602@gmail.com",
    pass: "",
  },
});

app.get("/",(req,res)=>
{
    res.sendFile(path.resolve(__dirname,"homePage.html"));
});



app.get("/quote",(req,res)=>
{
    res.sendFile(path.resolve(__dirname,"onlineQuote.html"));
});
function random()
{
    let opt=new Array();
    for(let i=0;i<6;i++)
    {
        opt[i]=Math.floor(Math.random()*10);
    }
    return opt;
}
app.post("/opts",async(req,res)=>
{
    console.log("Line 45 opt req");
    let input=await req.body.Email;
    let sent=false;
    let out=random();
    let number=out[0].toString();
    for(let i=1;i<out.length;i++)
    {
        number=number+out[i].toString();
    }
    try
    {
        console.log(input);
        const info = await transporter.sendMail(
        {
            from: '"WS-Pools" <tomatoes602@gmail.com>', // sender address
            to: input, // list of receivers
            subject: "Your Pin", // Subject line
            text:"Hello good afternoon\n\nBelow is your one time pine to proceed with the quote\n"+number, // plain text body
                //html: "<b>Hello world?</b>", // html body
        });
        console.log("Email sent");
        sent=true;
    }
    catch(err)
    {
        console.log(err);
        sent=false;
    }
   console.log("sent");
    res.json(number);
});
app.post("/array",async(req,res)=>
{
    let data=req.body.Quote;
    let build=req.body.Build;
    let set1=req.body.load;
    let set2=req.body.pavi;
    let agr=req.body.a;
    let plas=req.body.p;
    let tiled=req.body.t;
    let fiber=req.body.f;
    let fiber1=req.body.f1;
    let quote=new Object();
    console.log(data[0][0]);
    if(build==false)
    {
        if(data[0]!="Drain and replace water" && data[0][0]!="Leaking pipes")
        {
            quote=
            {
                option:data[0],
                contact:
                {
                    FullName:data[1][1]+" "+data[1][2],
                    cell:data[1][3],
                    email:data[1][0]
                }
            }
        }
        else if(data[0]=="Drain and replace water" && data[0][0]!="Leaking pipes")
        {
            quote=
            {
                option:data[0],
                pool:
                {
                    length:data[1][0],
                    width:data[1][1],
                    depth:data[1][2],
                    area:data[1][3]
                },
                contact:
                {
                    FullName:data[2][1]+" "+data[2][2],
                    cell:data[2][3],
                    email:data[2][0]
                }

            }
        }
        if(data[0][0]=="Leaking pipes" || data[0][0]=="Leaking pump" || data[0][0]=="leaks" || data[0][0]=="Leaking pool" || data[0][0]=="Pump problem" || data[0][0]=="Pool Light" || data[0][0]=="Wiring issue" || data[0][0]=="Cosmetic" || data[0][0]=="Pool repairs")
        {
            quote=
            {
                option:data[0][0],
                message:data[0][1],
                contact:
                {
                    FullName:data[1][1]+" "+data[1][2],
                    cell:data[1][3],
                    email:data[1][0]
                }

            }
        }
        let textIn= "Hello Good afternoon\n\nA new quote from\n\n"+quote.contact.FullName+"\nCell Number: "+quote.contact.cell+"\nEmail: "+quote.contact.email+"\n\nRequest to:\n"+quote.option
        let opt=new Array();
        for(let i=0;i<6;i++)
        {
            opt[i]=Math.random()*10;
        }
        console.log(opt);/*
        try
        {
            const info = await transporter.sendMail(
            {
                from: '"Joshua" <tomatoes602@gmail.com>', // sender address
                to: "tomatoes602@gmail.com", // list of receivers
                subject: "Hello ✔", // Subject line
                text:textIn, // plain text body
                //html: "<b>Hello world?</b>", // html body
            });
            console.log("Email sent");
          
        }
          catch(err)
          {
            console.log(err);
          }*/
        
    }
    else //3 cells in agri [aggregate,info,pictures] cell[2]
    {
        function imgFunc()
        {

        }
        function dataSet1()
        {
            if(set2==false)
            {
                let dataA=
                [
                    data[4][0],
                    data[4][1]
                ]
                return dataA;
            }
            else
            {
                return data[4];
            }
        }
        function dataSet()
        {
            if(set1==true)
            {
                let dataA=
                [
                    data[5][1],
                    data[5][0]
                ]
                return dataA//data[5][1]
            }
            else
            {
                return data[5][1]
            }
        }
        if(plas==true)
        {
            quote=
            {
                contact:
                {
                    FullName:data[10][1]+" "+data[10][2],
                    cell:data[10][3],
                    email:data[10][0]
                },
                option:
                {
                    build:data[0],
                    image:data[1]
                },
                finish:data[2][0],
                color:data[2][1],
                poolPavers:
                {
                    pavers:data[3],
                    image:dataSet1()
                },
                outerPaving:dataSet(),//data[5][1]
                design:
                {
                    image:data[6][2],
                    info:data[6][1]
                },
                size:
                {
                    length:data[7][0],
                    width:data[7][1],
                    depth:data[7][2],
                    area:data[7][3]
                },
                addtional:
                {
                    info:data[9],
                    image:data[8]
                }
            }
        }
        if(agr==true || tiled==true)
        {
            quote=
            {
                contact:
                {
                    FullName:data[10][1]+" "+data[10][2],
                    cell:data[10][3],
                    email:data[10][0]
                },
                option:
                {
                    build:data[0],
                   // image:data[1]
                },
                finish://3 cells in agri [aggregate,info,pictures] cell[2]
                {
                    type:data[2][0],
                    info:data[2][1],
                  //  image:data[2][2]
                },
                poolPavers:
                {
                    pavers:data[3],
                   // image:dataSet1()
                },
                outerPaving:dataSet(),//data[5][1]
                design:
                {
                  //  image:data[6][2],
                    info:data[6][1]
                },
                size:
                {
                    length:data[7][0],
                    width:data[7][1],
                    depth:data[7][2],
                    area:data[7][3]
                },
                addtional:
                {
                    info:data[9],
                    //image:data[8]
                }
            }
        }
        if(fiber==true)
        {
            quote=
            {
                contact:
                {
                    FullName:data[6][1]+" "+data[6][2],
                    cell:data[6][3],
                    email:data[6][0]
                },
                option:
                {
                    build:data[0],
                    image:data[1]
                },
                finish://3 cells in agri [aggregate,info,pictures] cell[2]
                {
                    type:data[2][0],
                    color:data[2][1],
                    image:data[2][2],
                    description:data[2][3]
                },
                design:
                {
                    image:data[4][2],
                    info:data[4][1]
                },
                size:
                {
                    length:data[5][0],
                    width:data[5][1],
                    depth:data[5][2],
                    area:data[5][3]
                },
            }
        }
    }
    if(fiber1==true)
    {
        quote=
            {
                contact:
                {
                    FullName:data[9][1]+" "+data[9][2],
                    cell:data[9][3],
                    email:data[9][0]
                },
                option:
                {
                    build:data[0],
                    image:data[1]
                },
                finish://3 cells in agri [aggregate,info,pictures] cell[2]
                {
                    type:data[2][0],
                    color:data[2][3],
                    image:data[2][2],
                    description:data[2][1]
                },
                design:
                {
                    image:data[4][2],
                    info:data[4][1]
                },
                size:
                {
                    length:data[5][0],
                    width:data[5][1],
                    depth:data[5][2],
                    area:data[5][3]
                },
            }
    }
    console.log(quote);

    res.json(build);
});


/*quote=
            {
                option:data[0][0],
                message:data[0][1],
                contact:
                {
                    FullName:data[1][1]+" "+data[1][2],
                    cell:data[1][3],
                    email:data[1][0]
                }

            }*/
app.listen(4010);

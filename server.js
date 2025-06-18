/*
Alpha Testing
_________________________________
Phase 1
1)Express check
2)Path check
3)bodyParser check
4)https check
5)fs check

6)Certificates options variables check
7)Express app directories check (app.use)
8)Nodemailer email address properties check
9)app.get pages served check
10)Random otp number generator check
11)Post method for otp check
12)
_________________________________

Loading time has increased after adding 
const https = require("https");
const fs = require("fs");



*/
const express = require('express')
const app = express()
const port = 4010

const path=require("path");
const bodyParser = require('body-parser');
const https = require("https");
const fs = require("fs");

const fs1 = require('node:fs/promises');

const cors = require('cors');
let ops = 
{
    origin:"*",
}
app.use(cors(ops));
const options = {
    //key: fs.readFileSync("server.key"),
    //cert: fs.readFileSync("server.cert"),
};

app.use(bodyParser.json({ limit: "25mb" }))
app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname,'img')));
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Joshua:K0DV2Ne7YW2vpH6n@welcome.ie3bi.mongodb.net/?retryWrites=true&w=majority&appName=Welcome";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});




const nodemailer = require("nodemailer");
const { argv } = require('node:process');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "tomatoes602@gmail.com",
    pass: "kwih ljac rbxr ncog",
  },
});

let users=0;
let start1=false;
let start2=true;

let mongoUsers=new Array();
let iA=0
async function connection()
{
  	await client.connect();
  	await client.db("admin").command({ ping: 1 });
    console.log("Mongo connection made");
}
async function dataBase()
{
 	const database =await client.db('Pools');
   	const collection =await database.collection('Reviews');
  	return collection;
}
let swi=new Array();
async function close()
{
 		
        
  			await client.close();
            console.log("Mongo connection closed");
        
}

app.get("/mobile",async (req,res)=>
{
    res.sendFile(path.resolve(__dirname,"mobile.html"));
});

app.get("/",async (req,res)=>
{
    start1=true;
  	/*swi[iA]=false;
    
  	mongoUsers[iA]=
    {
      	mongoConnect:async function(){await connection()},
        mongoDatabase:await dataBase(),
        mongoClose:async function(){await close()}
    }
    await mongoUsers[iA].mongoConnect();
    reviews=await mongoUsers[iA].mongoDatabase.find({}).toArray();
    
  	await mongoUsers[iA].mongoClose();
  	iA++;
    console.log(reviews);*/
    res.sendFile(path.resolve(__dirname,"homePage.html"));
    
  	//res.send("Initiate Progress bar 404 beta version testing bravo one delta tango tango 2 times<br>");
});
app.get("/gal",(req,res)=>
{
    res.sendFile(path.resolve(__dirname,"gallary.html"));
});

app.get("/contact",(req,res)=>
{
    res.sendFile(path.resolve(__dirname,"about.html"));
});

app.get("/quote",(req,res)=>
{
    res.sendFile(path.resolve(__dirname,"onlineQuote.html"));
});

let input;
let mail;
app.post("/otpIn",async(req,res)=>
{
    let email=req.body.Email;
    let out=random();
    let number=out[0].toString();
    console.log("Made connection for otp");
    for(let i=1;i<out.length;i++)
    {
        number=number+out[i].toString();
    }
    console.log(number)
    try
    {
        const info = await transporter.sendMail(
        {
            from: '"WS-Pools" <tomatoes602@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Otp to continue with review", // Subject line
            html:"<label>Hello good afternoon</label><br><br><label>Below is your one time pin to proceed with the quote</label><br><br><label style='font-size:45px'>"+number+"</label><br><br><a href='https://affiliates.olitt.com/idevaffiliate.php?id=272'>Click Here to build your own website</a>", // plain text body
                //html: "<b>Hello world?</b>", // html body
        });
        console.log("Opt sent for review checking");
    }
    catch(err)
    {
        console.log(err);
    }
    res.json(number);
});
let out;
let userObj=new Array();
async function readFileArray()
{
    try
    {
        fs.readFile('test.txt', async(err, data) => 
        {
            out=await data.toString();
            //"[Start]A"+id1+"(*)"+review[0]+"(*)"+review[1]+"(*)"+review[2]+"(*)"+review[3]+"[end]";
            let array=out.split("[Start]");
            
            /*
                review[0]=name;
                review[1]=email;
                review[2]=text;
                review[3]=emj[1];
                review[4]=document.getElementById("pic").src;
            */
            for(let i=1;i<array.length;i++)
            {
                let temp=array[i].split("(*)");
                userObj[i-1]=
                {
                    id:temp[0],
                    name:temp[1],
                    email:temp[2],
                    review:temp[3],
                    emoji:temp[4],
                    profilePic:"Base64 String"
                }
            }
            console.log(userObj);
        });
    }
    catch(err)
    {
        console.log("Unable to start array storing for data send");
        dataOut=false;
        res.json(dataOut);
    }
}//readFileArray();
async function write() 
    {
        try 
        {
            //let id1=id.toString();
            //let content ="[Start]A"+id1+"(*)"+review[0]+"(*)"+review[1]+"(*)"+review[2]+"(*)"+review[3]+"(*)"+review[0];
            let content="Testing";
            await fs1.writeFile("/home/demo-ws-pools.co.za/public_html/test2.txt",content, { flag: 'a+' }, err => {});
            console.log("Written the file");
        } 
        catch (err) 
        {
            console.log(err);
        }
      }
    try
    {
        //write();
    }
    catch(err)
    {
        console.log("Unable to write to the server");
    }
    

app.post("/len",async(req,res)=>
{
    let c=userObj.length
    console.log("Front to back handshake completed");
    res.json(c);
});
let u=0;
let reviews=new Object();
let len;
let iu;
let off=false;
async function collect()
{
    
  	
  	
      	await client.connect();
        await client.db("admin").command({ ping: 1 });
      	const database =await client.db('Pools');
    	const collection =await database.collection('Reviews');
      	console.log("Mongo Connection open");
        reviews=await collection.find({}).toArray();
    
  
    
    
        await client.close();
        console.log("Mongo Connection closed and user reviews collected");
        len=reviews.length;
        console.log("Size of database:"+len);
    /*
        coll.find({}).toArray(function (err, result) {
        if (err) {
            res.send(err);
        } else {

            res.send(JSON.stringify(result));
        }
    })
    */
}
try
{
    collect();
}
catch(err)
{
    console.log(err);
}
//start1=false page served =true
//start2=true
app.post("/upt",async(req,res)=>
{
  //I cant keep the database open
  //For automatic updates the user will have to refresh the page after uploading their review
  //
  //Trying to figure out why sometimes is doesnt load???
  //idk my emojis keep disapearing to for some reason. Wreckad Rulf is having sex with them in emoji world. Emoji sex orgy
  try
  {
    //await collect;
  	res.json(true);
    
  }
  catch(err)
  {
    res.json(false);
    
  }
});

let r=0;
app.post("/read",async(req,res)=>
{
    try
    {    
        let end=false;
        let once=req.body.access;
        if(once==false)
        {
            try
            {
                await client.close();
                await collect();
                console.log("Try no1");
            }
            catch(err)
            {
                console.log(err);
                end=true;
            }
        }
        if(r==reviews.length-1)
        {
            end=true;
            r=0;
        }
        let a=req.body.num;
        let i=parseInt(a);
        console.log("Reading Cell:"+a);
        let dOut=reviews[i];
        let dataOut=[end,dOut];
        res.json(dataOut);
        r++;
    }
    catch(err)
    {
        res.json("Could Not load reviews");
    }
});

let i1=0;
let updateArr=new Array();

app.post("/rev",async(req,res)=>
{
    let review=req.body.array;
    let id;
    let dataOut;
    off=true;
    console.log("Review recieved");
    try
    {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Entered Mongo");
        const database =await client.db('Pools');
        const collection =await database.collection('Reviews');
        let idA="A1";
        let c=1
        let user=
        {
            _id:idA,
            Name:review[0],
            Email:review[1],
            Text:review[2],
            Rating:review[3],
            Picture:review[4]
        }
        let found=await collection.findOne({_id:user._id});
        let end=false;
        //console.log(found);
        if(found!=null)
        {
            for(let i=1;end!=true;i++)
            {    
                c++;
                idA="A"+i.toString()
                console.log("Checking id:"+idA);
                found=await collection.findOne({_id:idA});
                //console.log("Found:"+found._id);
                if(found==null)
                {
                    user._id=idA;
                    await collection.insertOne(user);
                    console.log("Added review to database");
                    end=true;
                    try
                    {
                        await client.close();
                        await collect();
                    }
                    catch(err)
                    {
                        console.log(err);
                    }
                    console.log("Review storage updated");
                    
                  	res.json("Review Added");
                  	iu++;
                    //await collect();
                }
            }
        }
        else
        {
            await collection.insertOne(user);
            console.log("Added review to database");
            //await collect()
            try
            {    
                await client.close()
                await collect();
            }
            catch(err)
            {
                console.log(err);
            }
            console.log("Review storage updated");
          	
          	res.json("Review Added");
          	iu++;
          	//thank you
        }
    }
    catch(err)
    {
        console.log(err);
        await client.close();
      	let error="Uable to add review\n\n"+err;
        res.json(error)
    }  
});

//post method for otp
///message
app.post("/message",async(req,res)=>
{
  console.log("In the message url");
    let email=req.body.Email;
  let name=req.body.Name;
  let cell=req.body.Phone;
  let message=req.body.Message;
  let sent=false;
  try
  {
  	sent=true;
    const info = await transporter.sendMail(
        {
            from: '"WS-Pools" <tomatoes602@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Client Engament", // Subject line
            html:"<label>Hello good day</label><br><br>You have a message from<br>"+name+"<br>Cell : "+cell+"<br>Email : "+email+"<br><br>Message<br>"+message+"<br><br><a href='https://affiliates.olitt.com/idevaffiliate.php?id=272'>Click Here to build your own website</a>", // plain text body
                //html: "<b>Hello world?</b>", // html body
        });
        console.log("Email sent");
  }
  catch(err)
  {
    sent=false;
  }
  res.json(sent);
});
app.post("/opts",async(req,res)=>
{
    console.log("Line 45 opt req");
    try
    {
        input=await req.body.Email;
        mail=[input,"tomatoes602@gmail.com"];
    }
    catch(err)
    {}
    let sent=false;
    let out=random();
    let number=out[0].toString();

    for(let i=1;i<out.length;i++)
    {
        number=number+out[i].toString();
    }
    try//justkidssa@gmail.com
    {
        console.log(input);
        const info = await transporter.sendMail(
        {
            from: '"WS-Pools" <tomatoes602@gmail.com>', // sender address
            to: input, // list of receivers
            subject: "Your Pin", // Subject line
            html:"<label>Hello good afternoon</label><br><br><label>Below is your one time pin to proceed with the quote</label><br><br><label style='font-size:45px'>"+number+"</label><br><br><a href='https://affiliates.olitt.com/idevaffiliate.php?id=272'>Click Here to build your own website</a>", // plain text body
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

//post for quote array front-end quoteHTML
app.post("/array",async(req,res)=>
{
    let enter=false;
    let data;
    let build;
    let set1;
    let set2;
    let agr;
    let plas;
    let tiled;
    let fiber;
    let fiber1;
    let quote=new Object();
    enter=true;
    try
    {
        data=req.body.Quote;
        build=req.body.Build;
        set1=req.body.load;
        set2=req.body.pavi;
        agr=req.body.a;
        plas=req.body.p;
        tiled=req.body.t;
        fiber=req.body.f;
        fiber1=req.body.f1;
        quote=new Object();
        enter=true;
    }
    catch(err)
    {enter=false}if(enter==true){
    if(build==false)
    {
        let s=false;
        
        if(data[0][0]=="Leaking pipes" || data[0][0]=="Leaking pump" || data[0][0]=="leaks" || data[0][0]=="Leaking pool" || data[0][0]=="Pump problem" || data[0][0]=="Pool Light" || data[0][0]=="Wiring issue" || data[0][0]=="Cosmetic" || data[0][0]=="Pool repairs")
        {
            s=true;
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
            let text="<label>Hello Good afternoon<br><br>You have recieved a new quote from<br>"+
                        quote.contact.FullName+"<br>"+quote.contact.cell+"<br>"+quote.contact.email+
                        "<br><br>Request to:<br>"+quote.option+
                        "<br><br>Message:</label><br><label>"+quote.message+"</label><br><br><a href='https://affiliates.olitt.com/idevaffiliate.php?id=272'>Click Here to build your own website</a>";
            try
            {
                const info = await transporter.sendMail(
                {
                    from: '"WS-Pools" <tomatoes602@gmail.com>', // sender address
                    to: mail, // list of receivers
                    subject: "Quote", // Subject line
                    html:text, // plain text body
                        //html: "<b>Hello world?</b>", // html body
                });
                console.log("Email sent");
                
            }
            catch(err)
            {
                console.log(err);
            }
        }
        if(data[0]!="Drain and replace water" && data[0][0]!="Leaking pipes" && s!=true)
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
            let text="<label>Hello Good afternoon<br><br>You have recieved a new quote from<br>"+
                    quote.contact.FullName+"<br>"+quote.contact.cell+"<br>"+quote.contact.email+
                    "<br><br>Request to:<br>"+quote.option+"<br><br><a href='https://affiliates.olitt.com/idevaffiliate.php?id=272'>Click Here to build your own website</a>";
            try
            {
                const info = await transporter.sendMail(
                {
                    from: '"WS-Pools" <tomatoes602@gmail.com>', // sender address
                    to: mail, // list of receivers
                    subject: "Quote", // Subject line
                    html:text, // plain text body
                    //html: "<b>Hello world?</b>", // html body
                });
                console.log("Email sent");
            
            }
            catch(err)
            {
                console.log(err);
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
            let text="Hello Good afternoon<br><br>You have recieved a new quote from<br>"+
                    quote.contact.FullName+"<br>"+quote.contact.cell+"<br>"+quote.contact.email+
                    "<br><br>Request to:<br>"+quote.option+
                    "<br><br>Pool size:<br>Length:"+quote.pool.length+"<br>Width:"+quote.pool.width+"<br>Depth"+quote.pool.depth+"<br><br><a href='https://affiliates.olitt.com/idevaffiliate.php?id=272'>Click Here to build your own website</a>";
            try
            {
                const info = await transporter.sendMail(
                {
                    from: '"WS-Pools" <tomatoes602@gmail.com>', // sender address
                    to: mail, // list of receivers
                    subject: "Quote", // Subject line
                    html:text, // plain text body
                    //html: "<b>Hello world?</b>", // html body
                });
                console.log("Email sent");
            
            }
            catch(err)
            {
                console.log(err);
            }
        }
        
    }
    else //3 cells in agri [aggregate,info,pictures] cell[2]
    {
        function dataSet1()
        {
            if(set2!=false)
            {
                let dataA=
                [
                    data[4][1],
                    data[4][0]
                ];
                return dataA;
            }
            else
            {
                let dataA=
                [
                    data[4],
                    data[3]
                ];
                return dataA;
            }
        }
        function dataSet()
        {
            if(set1==true)
            {
                let dataA=
                [
                    data[5][0],
                    data[5][1]
                ];
                return dataA;//data[5][1]
            }
            else
            {
                let dataA=
                [
                    data[5][0],
                    data[5][1]
                ];
                return dataA;
            }
        }
        //console.log(dataSet());
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
            try
            {
                const info = await transporter.sendMail(
                {
                    from: '"WS-Pools" <tomatoes602@gmail.com>', // sender address
                    to: mail, // list of receivers
                    subject: "Quote",

                    html:"<label>Hello good afternoon<br><br>You have recieved a new quote request from<br><label>"
                    +quote.contact.FullName+
                    "<br>Cell:"
                    +quote.contact.cell+"<br>"
                    +quote.contact.email+
                    "<br><br>Request to:<br>"
                    +quote.option.build+
                    "<br><br>Birds Eye View:<br></label><img src='cid:img1@nodemailer.com' style='width:400px;height:200px'></img>"+
                    "<br><label>Size:<br>"+quote.size.length+"<br>"+quote.size.width+"<br>"+quote.size.depth+
                    "<br><br><label>Finish:</label><br><label>"+quote.finish+"</label><br><label>"
                    +quote.color+"</label><br><br>"+
                    "<label>Pool Pavers</label><br>"+quote.poolPavers.image[1]+
                    "<br><img style='width:300px;height:300px' src='cid:img2@nodemailer.com'><br>"+
                    "<label><br>Outer Paving<br>"+quote.outerPaving[0]+"</label><br><img style='width:300px;height:300px;' src='cid:img3@nodemailer.com'></img><br>"+
                    "<br><label>Design:</label><br>"+
                    "<img src='cid:img4@nodemailer.com' style='width:300px;height:300px;'></img><br><label>Info:<br>"
                    +quote.design.info+"</label><br><br>"+
                    "<label>Additional Design info<br>"+quote.addtional.info+"<br><br><a href='https://affiliates.olitt.com/idevaffiliate.php?id=272'>Click Here to build your own website</a>",
                    attachments:attach()
                });
                function attach()
                {
                        /*{
                            filename: 'additionalDesignInfo.jpg',
                            path:quote.addtional.image,
                            cid: 'img5@nodemailer.com'
                        },*/
                        let obj=new Object();
                        let len=quote.addtional.image.length;
                        let objArr=new Array();
                        let num=5;
                        for(let i=0;i<len;i++)
                        {
                            num=num+i;
                            
                            objArr[i]=
                            {
                                filename:"Addtional"+i.toString(),
                                path:quote.addtional.image[i],
                                cid:"img"+num.toString()+"@nodemailer.com"
                            }
                        }
                        objArr[len+1]=
                        {
                            filename: 'Birds.png',
                            path:quote.option.image,
                            cid: 'img1@nodemailer.com' //same cid value as in the html img src
                        }
                        objArr[len+2]=
                        {
                            filename: 'Pavers.jpg',
                            path:quote.poolPavers.image[0],
                            cid: 'img2@nodemailer.com'
                        }
                        objArr[len+3]=
                        {
                            filename: 'outerPaving.jpg',
                            path:quote.outerPaving[1],
                            cid: 'img3@nodemailer.com'
                        }
                        objArr[len+4]=
                        {
                            filename: 'design.jpg',
                            path:quote.design.image,
                            cid: 'img4@nodemailer.com'
                        }
                        return objArr;
                }
                    console.log("Email sent");
            }
            catch(err)
            {
                console.log(err);
            }
        }
        console.log(agr+" "+tiled);
        if(agr==true)
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
                finish://3 cells in agri [aggregate,info,pictures] cell[2]
                {
                    type:data[2][0],
                    info:data[2][1],
                    image:data[2][2]
                },
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
            let htmlData="";
            let endL=false
            function setImages(i)
            {
                //quote.finish.image;
                if(endL==true)
                {
                    return htmlData;
                }
                else
                {
                    let cd="a"+i.toString();
                    let html="<img src='cid:img";
                    let html1="@nodemailer.com' style='width:300px;height:300px'></img><br>";
                    htmlData=htmlData+html+cd+html1;
                }
            }
            function create()
            {
                let len=quote.finish.image.length;
                console.log("Length:"+len);
                for(let i=0;i<len;i++)
                {
                    setImages(i);
                    
                    if(i==quote.finish.image.length-1)
                    {
                        endL=true;
                    }
                }
            }create();
            function attach()
            {
                let obj=new Object();
                let len=quote.addtional.image.length;
                let objArr=new Array();
                let num=5;
                for(let i=0;i<len;i++)
                {
                    num=num+i;
                            
                    objArr[i]=
                    {
                        filename:"Addtional"+i.toString(),
                        path:quote.addtional.image[i],
                        cid:"img"+num.toString()+"@nodemailer.com"
                    }
                }
                objArr[len+1]=
                {
                    filename: 'Birds.png',
                    path:quote.option.image,
                    cid: 'img1@nodemailer.com' //same cid value as in the html img src
                }
                objArr[len+2]=
                {
                    filename: 'Pavers.jpg',
                    path:quote.poolPavers.image[0],
                    cid: 'img2@nodemailer.com'
                }
                objArr[len+3]=
                {
                    filename: 'outerPaving.jpg',
                    path:quote.outerPaving[1],
                    cid: 'img3@nodemailer.com'
                }
                objArr[len+4]=
                {
                    filename: 'design.jpg',
                    path:quote.design.image,
                    cid: 'img4@nodemailer.com'
                }
                for(let i=0;i<quote.finish.image.length;i++)
                {
                    let cd=i;
                    cd="a"+cd.toString()
                    let di=len+5+i;
                    objArr[di]=
                    {
                        filename: 'Aggregate'+cd.toString()+".jpg",
                        path:quote.finish.image[i],
                        cid:"img"+cd+"@nodemailer.com"
                    }
                    
                }
                return objArr;
            }
            try
            {
                const info = await transporter.sendMail(
                {
                    from: '"WS-Pools" <tomatoes602@gmail.com>', // sender address
                    to: mail, // list of receivers
                    subject: "Quote",

                    html:"<label>Hello good afternoon<br><br>You have recieved a new quote request from<br><label>"
                    +quote.contact.FullName+
                    "<br>Cell:"
                    +quote.contact.cell+"<br>"
                    +quote.contact.email+
                    "<br><br>Request to:<br>"
                    +quote.option.build+
                    "<br><br>Birds Eye View:<br></label><img src='cid:img1@nodemailer.com' style='width:400px;height:200px'></img>"+
                    "<br><label>Size:<br>"+quote.size.length+"<br>"+quote.size.width+"<br>"+quote.size.depth+
                    "<br><br><label>Finish:</label><br><label>"+quote.finish.type+"<br><br>Info:<br>"+quote.finish.info+"</label><br>"+
                    "<label style='font-size:40px;'><br>Below are the aggregate sample pictures</label><br>"+setImages()+"<br><br>"+
                    "<label>Pool Pavers</label><br>"+quote.poolPavers.image[1]+
                    "<br><img style='width:300px;height:300px' src='cid:img2@nodemailer.com'><br>"+
                    "<label><br>Outer Paving Details:<br>"+quote.outerPaving[0]+"</label><br><img style='width:300px;height:300px;' src='cid:img3@nodemailer.com'></img><br>"+
                    "<br><label>Design:</label><br>"+
                    "<img src='cid:img4@nodemailer.com' style='width:300px;height:300px;'></img><br><label>Info:<br>"
                    +quote.design.info+"</label><br><br>"+
                    "<label>Additional Design info<br>"+quote.addtional.info+"<br><br><a href='https://affiliates.olitt.com/idevaffiliate.php?id=272'>Click Here to build your own website</a>",
                    attachments:attach()
                });
                
                console.log("Email sent");
            }
            catch(err)
            {
                console.log(err);
            }
        }
        if(tiled==true)
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
                    finish://3 cells in agri [aggregate,info,pictures] cell[2]
                    {
                        type:data[2][0],
                        info:data[2][1],
                        image:data[2][2]
                    },
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
                let htmlData="";
                let endL=false
                function setImages(i)
                {
                    //quote.finish.image;
                    if(endL==true)
                    {
                        return htmlData;
                    }
                    else
                    {
                        let cd="a"+i.toString();
                        let html="<img src='cid:img";
                        let html1="@nodemailer.com' style='width:300px;height:300px'></img><br>";
                        htmlData=htmlData+html+cd+html1;
                    }
                }
                function create()
                {
                    let len=quote.finish.image.length;
                    console.log("Length:"+len);
                    for(let i=0;i<len;i++)
                    {
                        setImages(i);
                        
                        if(i==quote.finish.image.length-1)
                        {
                            endL=true;
                        }
                    }
                }create();
                function attach()
                {
                    let obj=new Object();
                    let len=quote.addtional.image.length;
                    let objArr=new Array();
                    let num=5;
                    for(let i=0;i<len;i++)
                    {
                        num=num+i;
                                
                        objArr[i]=
                        {
                            filename:"Addtional"+i.toString(),
                            path:quote.addtional.image[i],
                            cid:"img"+num.toString()+"@nodemailer.com"
                        }
                    }
                    objArr[len+1]=
                    {
                        filename: 'Birds.png',
                        path:quote.option.image,
                        cid: 'img1@nodemailer.com' //same cid value as in the html img src
                    }
                    objArr[len+2]=
                    {
                        filename: 'Pavers.jpg',
                        path:quote.poolPavers.image[0],
                        cid: 'img2@nodemailer.com'
                    }
                    objArr[len+3]=
                    {
                        filename: 'outerPaving.jpg',
                        path:quote.outerPaving[1],
                        cid: 'img3@nodemailer.com'
                    }
                    objArr[len+4]=
                    {
                        filename: 'design.jpg',
                        path:quote.design.image,
                        cid: 'img4@nodemailer.com'
                    }
                    for(let i=0;i<quote.finish.image.length;i++)
                    {
                        let cd=i;
                        cd="a"+cd.toString()
                        let di=len+5+i;
                        objArr[di]=
                        {
                            filename: 'Aggregate'+cd.toString()+".jpg",
                            path:quote.finish.image[i],
                            cid:"img"+cd+"@nodemailer.com"
                        }
                        
                    }
                    return objArr;
                }
                try//
                {
                    const info = await transporter.sendMail(
                    {
                        from: '"WS-Pools" <tomatoes602@gmail.com>', // sender address
                        to: mail, // list of receivers
                        subject: "Quote",
    
                        html:"<label>Hello good afternoon<br><br>You have recieved a new quote request from<br><label>"
                        +quote.contact.FullName+
                        "<br>Cell:"
                        +quote.contact.cell+"<br>"
                        +quote.contact.email+
                        "<br><br>Request to:<br>"
                        +quote.option.build+
                        "<br><br>Birds Eye View:<br></label><img src='cid:img1@nodemailer.com' style='width:400px;height:200px'></img>"+
                        "<br><label>Size:<br>"+quote.size.length+"<br>"+quote.size.width+"<br>"+quote.size.depth+
                        "<br><br><label>Finish:</label><br><label>"+quote.finish.type+"<br><br>Info:<br>"+quote.finish.info+"</label><br>"+
                        "<label style='font-size:40px;'><br>Below are the tiled sample pictures</label><br>"+setImages()+"<br><br>"+
                        "<label>Pool Pavers</label><br>"+quote.poolPavers.image[1]+
                        "<br><img style='width:300px;height:300px' src='cid:img2@nodemailer.com'><br>"+
                        "<label><br>Outer Paving Details:<br>"+quote.outerPaving[0]+"</label><br><img style='width:300px;height:300px;' src='cid:img3@nodemailer.com'></img><br>"+
                        "<br><label>Design:</label><br>"+
                        "<img src='cid:img4@nodemailer.com' style='width:300px;height:300px;'></img><br><label>Info:<br>"
                        +quote.design.info+"</label><br><br>"+
                        "<label>Additional Design info<br>"+quote.addtional.info+"<br><br><a href='https://affiliates.olitt.com/idevaffiliate.php?id=272'>Click Here to build your own website</a>",
                        attachments:attach()
                    });
                    
                    console.log("Email sent");
                }
                catch(err)
                {
                    console.log(err);
                }
            }
        console.log(fiber+" line 521");
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
            let htmlData="";
            let endL=false
            function setImages(i)
            {
                //quote.finish.image;
                if(endL==true)
                {
                    return htmlData;
                }
                else
                {
                    let cd="a"+i.toString();
                    let html="<img src='cid:img";
                    let html1="@nodemailer.com' style='width:300px;height:300px'></img><br>";
                    htmlData=htmlData+html+cd+html1;
                }
            }
            function create()
            {
                let len=quote.finish.image.length;
                console.log("Length:"+len);
                for(let i=0;i<len;i++)
                {
                    setImages(i);
                    
                    if(i==quote.finish.image.length-1)
                    {
                        endL=true;
                    }
                }
            }create();
            function attach()
            {
                let objArr=new Array();
                objArr[0]=
                {
                    filename: 'Birds.png',
                    path:quote.option.image,
                    cid: 'img1@nodemailer.com' //same cid value as in the html img src
                }
                objArr[1]=
                {
                    filename: 'design.jpg',
                    path:quote.design.image,
                    cid: 'img4@nodemailer.com'
                }
                for(let i=0;i<quote.finish.image.length;i++)
                {
                    let cd=i;
                    cd="a"+cd.toString()
                    let di=i+2;
                    objArr[di]=
                    {
                        filename: 'Finish'+cd.toString()+".jpg",
                        path:quote.finish.image[i],
                        cid:"img"+cd+"@nodemailer.com"
                    }
                    
                }
                return objArr;
            }
            try
            {
                const info = await transporter.sendMail(
                {
                    from: '"WS-Pools" <tomatoes602@gmail.com>', // sender address
                    to: mail, // list of receivers
                    subject: "Quote",

                    html:"<label>Hello good afternoon<br><br>You have recieved a new quote request from<br><label>"
                    +quote.contact.FullName+
                    "<br>Cell:"
                    +quote.contact.cell+"<br>"
                    +quote.contact.email+
                    "<br><br>Request to:<br>"
                    +quote.option.build+
                    "<br><br>Birds Eye View:<br></label><img src='cid:img1@nodemailer.com' style='width:400px;height:200px'></img>"+
                    "<br><label>Size:<br>"+quote.size.length+"<br>"+quote.size.width+"<br>"+quote.size.depth+
                    "<br><br><label>Finish:</label><br><label>"+quote.finish.type+"<br><br>"+quote.finish.color+"</label><br>"+
                    "<label style='font-size:40px;'><br>Below are the mold sample designs</label><br>"+setImages()+"<br><br>"+
                    "<label>Description of Mold design:<br>"+quote.finish.description+"<br><br>"+
                    "<label>Design:<br></label><img src='cid:img4@nodemailer.com' style='width:300px;300px;'></img><br><label>Info:<br>"+quote.design.info+"<br><br><br><a href='https://affiliates.olitt.com/idevaffiliate.php?id=272'>Click Here to build your own website</a>",
                    attachments:attach()
                });
                
                console.log("Email sent");
            }
            catch(err)
            {
                console.log(err);
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
                outerPaving:dataSet(),
                design:
                {
                    image:data[6][2],
                    info:data[6][1]
                },
                size:
                {
                    length:data[4][0],
                    width:data[4][1],
                    depth:data[4][2],
                    area:data[4][3]
                },
                additional:
                {
                    info:data[7],
                    image:data[8]
                }
            }
            let htmlData="";
            let endL=false
            function setImages(i)
            {
                //quote.finish.image;
                if(endL==true)
                {
                    return htmlData;
                }
                else
                {
                    let cd="a"+i.toString();
                    let html="<img src='cid:img";
                    let html1="@nodemailer.com' style='width:300px;height:300px'></img><br>";
                    htmlData=htmlData+html+cd+html1;
                }
            }
            function create()
            {
                let len=quote.finish.image.length;
                console.log("Length:"+len);
                for(let i=0;i<len;i++)
                {
                    setImages(i);
                    
                    if(i==quote.finish.image.length-1)
                    {
                        endL=true;
                    }
                }
            }create();
            function attach()
            {
                let objArr=new Array();
                let len=quote.additional.image.length;
                
                objArr[0]=
                {
                    filename: 'Birds.png',
                    path:quote.option.image,
                    cid: 'img1@nodemailer.com' //same cid value as in the html img src
                }
                objArr[1]=
                {
                    filename: 'design.jpg',
                    path:quote.design.image,
                    cid: 'img4@nodemailer.com'
                }
                objArr[2]=
                {
                    filename: 'outerPaving.jpg',
                    path:quote.outerPaving[1],
                    cid: 'img5@nodemailer.com'
                }
                let di=0;
                for(let i=0;i<quote.finish.image.length;i++)
                {
                    let cd=i;
                    cd="a"+cd.toString()
                    di=i+3;
                    objArr[di]=
                    {
                        filename: 'Fiber'+cd.toString()+".jpg",
                        path:quote.finish.image[i],
                        cid:"img"+cd+"@nodemailer.com"
                    }
                    
                }
                
                for(let i=0;i<len;i++)
                {
                    di=di+i+1
                            
                    objArr[di]=
                    {
                        filename:"Addtional"+i.toString(),
                        path:quote.additional.image[i],
                        cid:"img"+di.toString()+"@nodemailer.com"
                    }
                }
                return objArr;
            }
            try
            {
                const info = await transporter.sendMail(
                {
                    from: '"WS-Pools" <tomatoes602@gmail.com>', // sender address
                    to: mail, // list of receivers
                    subject: "Quote",

                    html:"<label>Hello good afternoon<br><br>You have recieved a new quote request from<br><label>"
                    +quote.contact.FullName+
                    "<br>Cell:"
                    +quote.contact.cell+"<br>"
                    +quote.contact.email+
                    "<br><br>Request to:<br>"
                    +quote.option.build+
                    "<br><br>Birds Eye View:<br></label><img src='cid:img1@nodemailer.com' style='width:400px;height:200px'></img>"+
                    "<br><label>Size:<br>"+quote.size.length+"<br>"+quote.size.width+"<br>"+quote.size.depth+
                    "<br><br><label>Finish:</label><br><label>"+quote.finish.type+"<br><br>"+quote.finish.color+"</label><br>"+
                    "<label style='font-size:40px;'><br>Below are the mold sample designs</label><br>"+setImages()+"<br><br>"+
                    "<label>Description of Mold design:<br>"+quote.finish.description+"<br><br>"+
                    "<label>Design:<br></label><img src='cid:img4@nodemailer.com' style='width:300px;300px;'></img><br><label>Info:<br>"+quote.design.info+"<br>"+
                    "<label><br><br>Outer Paving:<br>"+quote.outerPaving[0]+"<label><br><img src='cid:img5@nodemailer.com' style='width:300px;height:300px'></img>"+
                    "<label><br><br>Additional Info:<br>"+quote.additional.info+"</label><br><br><a href='https://affiliates.olitt.com/idevaffiliate.php?id=272'>Click Here to build your own website</a>",
                    attachments:attach()
                });
                
                console.log("Email sent");
            }
            catch(err)
            {
                console.log(err);
            }
    }}
    //console.log(quote);
    res.json(build);
    
});

//Otp generator
function random()
{
    let opt=new Array();
    for(let i=0;i<6;i++)
    {
        opt[i]=Math.floor(Math.random()*10);
    }
    return opt;
}
console.log(random());

app.listen(port, () => {
  console.log(`Alpha testing in progress `+__dirname);
  
  
})
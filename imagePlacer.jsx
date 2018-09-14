app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;     
app.findTextPreferences = NothingEnum.nothing;
app.changeTextPreferences = NothingEnum.nothing;

var myDoc =app.activeDocument;
var errorsFound = false;

app.findGrepPreferences.findWhat =  "(<img)(.+?)(gif”/>)";  

var mySearch = app.activeDocument.findGrep(); 

mathAmount = mySearch.length;

var myFolder = Folder.selectDialog("Select image folder.");

if (myFolder==null) {exit()};

myFolder=myFolder+"/";

for (i = 0; i < mathAmount; i++) 
{
   var fname = myFolder + mySearch[mathAmount-i-1].contents.split("<img href=”")[1];

    fname = fname.split(".gif")[0];
    fname = fname + ".tif";
    
    myImageFile=File(fname);
   
	try 
        {
            myEQN=mySearch[mathAmount-i-1].place(myImageFile);    
		}
        catch(e)
        {
            errorsFound = true;       
            }   
  }


app.findGrepPreferences = NothingEnum.nothing;
app.changeGrepPreferences = NothingEnum.nothing;     
app.findTextPreferences = NothingEnum.nothing;
app.changeTextPreferences = NothingEnum.nothing;

if(errorsFound == false)
    {
        alert("Images placed: "+ mathAmount);    
    }
else{
        alert("ERRORS FOUND PLACING IMAGES! ");    
    }

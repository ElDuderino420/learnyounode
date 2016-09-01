/**
 * Created by David on 24 Aug 2016.
 */
var tot=0;

for(var i in process.argv)
    {if(i != 1 && i != 0)
        {tot+=Number(process.argv[i])}
    };

console.log(tot);





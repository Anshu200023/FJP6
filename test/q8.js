var a= "kite"
var b= "flying"


function reverse(a,b)
{
    var ans="";
    
        ans+=b[0]
        ans1=a[0]
        for(let i=1;i<a.length;i++)
        {
            ans+=a[i]
        }
        for( i=1;i<b.length;i++)
        {
        ans1+=b[i]
        }
        
        
        ans3=ans+" "+ans1
       return ans3
}
console.log(reverse(a,b))
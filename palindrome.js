let str="";
a="aka";
for(i=a.length-1;i>=0;i--){
  str=str+a[i];
}
if(str==a)console.log("palindrome");
else console.log("not a palindrome ");
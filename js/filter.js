function filterSelection(e){var s,t;for(s=document.getElementsByClassName("column"),"all"==e&&(e=""),t=0;t<s.length;t++)w3RemoveClass(s[t],"show"),s[t].className.indexOf(e)>-1&&w3AddClass(s[t],"show")}function w3AddClass(e,s){var t,n,a;for(n=e.className.split(" "),a=s.split(" "),t=0;t<a.length;t++)-1==n.indexOf(a[t])&&(e.className+=" "+a[t])}function w3RemoveClass(e,s){var t,n,a;for(n=e.className.split(" "),a=s.split(" "),t=0;t<a.length;t++)for(;n.indexOf(a[t])>-1;)n.splice(n.indexOf(a[t]),1);e.className=n.join(" ")}filterSelection("all");for(var btnContainer=document.getElementById("myBtnContainer"),btns=btnContainer.getElementsByClassName("btn"),i=0;i<btns.length;i++)btns[i].addEventListener("click",function(){var e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active"});

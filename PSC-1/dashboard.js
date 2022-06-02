function append(){
    let data= JSON.parse(localStorage.getItem('students'))|| [];
let container=document.getElementById("container");
container.innerHTML=null;
    data.forEach(function(el,index){
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.image;
        let p=document.createElement("p");
        p.innerText=el.name;
        let q=document.createElement("p");
        q.innerText=el.course;
        let r=document.createElement("p");
        r.innerText=el.unit;
        let s=document.createElement("p");

        s.innertext=el.batch;

        //remove function
        let btn=document.createElement("button");
        btn.innerText="remove"
        btn.addEventListener("click",function(){
            remove(index);
        });

div.append(img,p,q,r,s,btn)
container.append(div)
        // console.log(el);

    });


}
append();
//remove function
function remove(index){
    //console.log(index)
    let data= JSON.parse(localStorage.getItem('students'))|| [];
    //
    let newData=data.filter(function(el,i){
        if(i===index){
            let trash=JSON.parse(localStorage.getItem('trash'))|| [];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));
        }
        else{
            return i!==index;
        }


    });
    console.log(newData)

} 
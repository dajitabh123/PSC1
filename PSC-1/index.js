//create an object using constructor function

function student(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch=b;
}
//write storeData function
function storeData(){
    event.preventDefault();
    let form=document.getElementById("students_data");
    let name=form.name.value;
    let course = form.course.value;
    let unit= form.unit.value;
    let image=form.image.value;
    let batch=form.batch.value;
    let s1= new student(name,course,unit,image,batch) // make s1 out of object

   // console.log(name,course,unit,image,batch);
   let data= JSON.parse(localStorage.getItem('students'))|| []
   data.push(s1)
   localStorage.setItem('students' ,JSON.stringify(data))
   window.location.reload()
   console.log(s1)
}
let obj={};
function calculate(){
    let data= JSON.parse(localStorage.getItem('students'))|| []// take out the data

    for(let i=0;i<data.length;i++){
    if(!obj[data[i].batch]){ //if this object don't have this add this with a random key
obj[data[i].batch]=0;
    }
    }

        for(let i=0;i<data.length;i++){

    obj[data[i].batch]++;
        }



}

calculate()
for(var i in obj){
    if(i=="Ft-web-18"){
        document.getElementById("batch1").innerText=i+"-"+obj[i]
    }
    else{
        document.getElementById("batch2").innerText="Ft-web-17"+"-"+obj[i]
    }
}
console.log(obj) 
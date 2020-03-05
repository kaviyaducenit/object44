//object creation with braces
// const obj=
// {
//   id:1,
//   fname:'kaviya',
//   lname:'ravi',
//   email:'kaviya47@gmail.com',
//   marks:90,
//   college:'skcet',
//   getid:  function()
//           {
//           return this.id;
//           },
//   setid:  function(id)
//           {
//           this.id=id;
//           },
//   getfname:function()
//           {
//           return this.fname;
//           },
//   setfname:function(fname)
//           {
//             this.fname=fname;
//           },
//   getlname:function()
//           {
//           return this.lname;
//           },
//   setlname:function(lname)
//           {
//             this.lname=lname;
//           },
//   getemail:function()
//           {
//           return this.email;
//           },
//   setemail:function(email)
//           {
//             this.email=email;
//           },
//   getmarks:function()
//           {
//           return this.marks;
//           },
//   setmarks:function(marks)
//           {
//             this.marks=marks;
//           },
//   getcollege:function()
//           {
//           return this.college;
//           },
//   setcollege:function(college)
//           {
//             this.college=college;
//           },
// };
// let id=obj.getid();
// console.log('id:',id);
// obj.setid(2);
// id=obj.getid();
// console.log('Id',id);

// let fname=obj.getfname();
// console.log('fname:',fname);
// obj.setfname('vaishnavi');
// fname=obj.getfname();
// console.log('fname',fname);

// let lname=obj.getlname();
// console.log('lname:',lname);
// obj.setlname('ravii');
// lname=obj.getlname();
// console.log('lname',lname);

// let email=obj.getemail();
// console.log('email:',email);
// obj.setemail('kavi47@gmail.com');
// email=obj.getemail();
// console.log('email',email);

// let marks=obj.getmarks();
// console.log('marks:',marks);
// obj.setmarks(99);
// marks=obj.getmarks();
// console.log('marks',marks);

// let college=obj.getcollege();
// console.log('college:',college);
// obj.setcollege('skct');
// college=obj.getcollege();
// console.log('college',college);
// /*----------------------------------------------------------------*/
// function person(id){
//   let id =id;
//   this.name='hi';
//   this.getid=function()
//   {
//     return _id;
//   }
//   this.setid=function(id)
//   {
//     _id=id;
//   }
// }
// const person=new person('10');
// person.setid(2);
// console.log(person.getid())
// let a=prompt("enter your name");
// let b=prompt("enter mark1");
// let c=prompt("enter mark2");
// let d=prompt("enter mark3");
// function obj(a,b,c,d)
//           {
//     this.a=a,
//    this.b=b,
//    this.c=c,
//    this.d=d
// }
// function objj(a,b,c,d)
// {
// this.a=a,
// this.total=parseInt(d)+parseInt(b)+parseInt(c)
// }
// function objjj()
// {
//   this.avg=object1.total/3;
// }
// function objjjj()
// {
//     this.s=object.a,
//    this.ss=object1.total,
//   this.sss=object2.avg
// }
// // const obj1={
// //     name=this.a,
// //     total=b+c+d
// // }
// // const obj2={
// //     avg=total/3
// // }
// // const obj3={
// //     name=a  

// // }
// const object=new obj(a,b,c,d);
// console.log(object);
// const object1=new objj(a,b,c,d);
// console.log(object1);
// const object2=new objjj();
// console.log(object2)
// const object3=new objjjj();
// console.log(object3)
let name=prompt("Enter the Name:");
let m1=parseInt(prompt("Enter Mark 1:"));
let m2=parseInt(prompt("Enter Mark 2:"));
let m3=parseInt(prompt("Enter Mark 3:"));
// if(isNaN(name)==true && isNaN(m1)==false && isNaN(m2)==false && isNaN(m3)){
if(m1<100 && m2<100 && m3<100){
const obj={
    name1:name,
    mark1:m1,
    mark2:m2,
    mark3:m3
};
let obj_total={
    name2:obj.name1,
    total:obj.mark1+obj.mark2+obj.mark3
};
let obj_avg={
    avg:obj_total.total/3
};
let total_det={
    name2:obj.name1,
    total1:obj_total.total,
    avg1:obj_avg.avg
};
console.log(obj);
console.log(obj_total);
console.log(obj_avg);
console.log(total_det);
 }
// }
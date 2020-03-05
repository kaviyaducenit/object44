//object creation with braces
const obj=
{
  id:1,
  fname:'kaviya',
  lname:'ravi',
  email:'kaviya47@gmail.com',
  marks:90,
  college:'skcet',
  getid:  function()
          {
          return this.id;
          },
  setid:  function(id)
          {
          this.id=id;
          },
  getfname:function()
          {
          return this.fname;
          },
  setfname:function(fname)
          {
            this.fname=fname;
          },
  getlname:function()
          {
          return this.lname;
          },
  setlname:function(lname)
          {
            this.lname=lname;
          },
  getemail:function()
          {
          return this.email;
          },
  setemail:function(email)
          {
            this.email=email;
          },
  getmarks:function()
          {
          return this.marks;
          },
  setmarks:function(marks)
          {
            this.marks=marks;
          },
  getcollege:function()
          {
          return this.college;
          },
  setcollege:function(college)
          {
            this.college=college;
          },
};
let id=obj.getid();
console.log('id:',id);
obj.setid(2);
id=obj.getid();
console.log('Id',id);

let fname=obj.getfname();
console.log('fname:',fname);
obj.setfname('vaishnavi');
fname=obj.getfname();
console.log('fname',fname);

let lname=obj.getlname();
console.log('lname:',lname);
obj.setlname('ravii');
lname=obj.getlname();
console.log('lname',lname);

let email=obj.getemail();
console.log('email:',email);
obj.setemail('kavi47@gmail.com');
email=obj.getemail();
console.log('email',email);

let marks=obj.getmarks();
console.log('marks:',marks);
obj.setmarks(99);
marks=obj.getmarks();
console.log('marks',marks);

let college=obj.getcollege();
console.log('college:',college);
obj.setcollege('skct');
college=obj.getcollege();
console.log('college',college);
/*----------------------------------------------------------------*/
function person(id){
  let id =id;
  this.name='hi';
  this.getid=function()
  {
    return _id;
  }
  this.setid=function(id)
  {
    _id=id;
  }
  

}
const person=new person('10');
person.setid(2);
console.log(person.getid())

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }




  /*javascript for home loan */

   const toCalculate = () => {
   
   let amount = document.getElementById('fname').value;

   let year = document.getElementById('fnamee').value;

   let rate = document.getElementById('fnameee').value;

   let per = rate/100;
    
   /*condition check */

if(amount ==='' || year ==='' || rate ===''){
  alert("please enter value");
  return;
}
/* amount is grater than 99999 and year is grater than 0*/
else if(amount < 99999   ||    year <= 0  ){

alert('amount is grater than 99999 and year is grater than 0');
return;
}

else if(isNaN(amount) || isNaN(year)  || isNaN(rate)) {
alert("not a number");
return;
}

   let total =[ [amount*per*(1+per)**year]/[(1+per)**(year-1)]];

   let payt = total*12 ;
   document.getElementById('roshq').style.display='block';
   document.getElementById('one').innerHTML= `loan amount:-${amount}`;
   document.getElementById('two').innerHTML= `tenure:-${year}`;
   document.getElementById('three').innerHTML= `interest rate:-${rate}`;
   document.getElementById('four').innerHTML= `your monthly home loan emi :-${total}`;
   document.getElementById('five').innerHTML=   `total amount payable:-${payt}`;






   }




    /*javascript for home loan & personal loan */

    const toCalculate1 = () => {
   
      let amount1 = document.getElementById('fname1').value;
   
      let year1 = document.getElementById('fnamee1').value;
   
      let rate1 = document.getElementById('fnameee1').value;
   
      let per1 = rate1/100;
   
     
      /*condition check */
   
   if(amount1 ==='' || year1 ==='' || rate1 ===''){
     alert("please enter value");
     return;
   }
   /* amount is grater than 99999 and year is grater than 0*/
   else if(amount1 < 99999   ||    year1 <= 0  ){
   
   alert('amount is grater than 99999 and year is grater than 0');
   return;
   }
   
   else if(isNaN(amount1) || isNaN(year1)  || isNaN(rate1)) {
   alert("not a number");
   return;
   }
   
      let total1 =[ [amount1*per1*(1+per1)**year1]/[(1+per1)**(year1-1)]];
   
      let payt1 = total1*12 ;
      document.getElementById('dis').style.display='block';
      document.getElementById('one1').innerHTML= `loan amount:-${amount1}`;
      document.getElementById('two2').innerHTML= `tenure:-${year1}`;
      document.getElementById('three3').innerHTML= `interest rate:-${rate1}`;
      document.getElementById('four4').innerHTML= `your monthly home loan emi :-${total1}`;
      document.getElementById('five5').innerHTML=   `total amount payable:-${payt1}`;
   
   
      }

      
      /*lumpsum calculator*/

      
   const toCalculate2 = () => {
   
    let amount2 = document.getElementById('fname2').value;
 
    let year2 = document.getElementById('fnamee2').value;
 
    let rate2 = document.getElementById('fnameee2').value;
 
    let per2 = rate2/100;
     
    /*condition check */
 
 if(amount2 ==='' || year2 ==='' || rate2 ===''){
   alert("please enter value");
   return;
 }
 /* amount is grater than 99999 and year is grater than 0*/
 else if(amount2 < 499   ||    year2 <= 0  ){
 
 alert('amount is grater than 99999 and year is grater than 0');
 return;
 }
 
 else if(isNaN(amount2) || isNaN(year2)  || isNaN(rate2)) {
 alert("not a number");
 return;
 }
 
    let total2 = [amount2*(1+per2)**year2];
 
    let payt2 = (total2-amount2) ;
    document.getElementById('dis').style.display='block';
    document.getElementById('one11').innerHTML= `investment amount:-${amount2}`;
    document.getElementById('two22').innerHTML= `time period(years):-${year2}`;
    document.getElementById('three33').innerHTML= `interest rate:-${rate2}`;
    document.getElementById('four44').innerHTML= ` total wealth:-${total2}`;
    document.getElementById('five55').innerHTML=   `wealth gained:-${payt2}`;
 
 
 
 
 
 
    }

    
  
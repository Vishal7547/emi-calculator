    /*SIP calculator*/

      
    const toCalculate7 = () => {
   
        let amount3 = document.getElementById('fname3').value;
     
        let year3 = document.getElementById('fnamee3').value;
     
        let rate3 = document.getElementById('fnameee3').value;
    
    
        let convert = year3*12 ;
     
        let per3 = rate3/12;
    
        let rates = per3/100;

        const investmentAmount = amount3*(12*year3) ;
         
        /*condition check */
     
     if(amount3 ==='' || year3 ==='' || rate3 ===''){
       alert("please enter value");
       return;
     }
     /* amount is grater than 99999 and year is grater than 0*/
     else if(amount3 < 99   ||    year3 <= 0  ){
     
     alert('amount is grater than 99999 and year is grater than 0');
     return;
     }
     
     else if(isNaN(amount3) || isNaN(year3)  || isNaN(rate3)) {
     alert("not a number");
     return;
     }
     
       

        let total3 = amount3*[ (1+rates)**convert-1 ] * (1+rates)/rates ;
     
        let payt3 = (total3-investmentAmount) ;
        document.getElementById('dis').style.display='block';
        document.getElementById('one111').innerHTML= ` monthly investment amount:-${amount3}`;
        document.getElementById('two222').innerHTML= `time period(years):-${year3}`;
        document.getElementById('three333').innerHTML= `interest rate:-${rate3}`;
        document.getElementById('four444').innerHTML= ` total wealth:-${total3}`;
        document.getElementById('five555').innerHTML=   `wealth gained:-${payt3}`;
    
        }
     


        /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
        function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
         x.className += " responsive";
        } else {
         x.className = "topnav";
        }
  }

<template>
  <div class="container-fluid">
      <div class="row">
    <div class="col-md-12">
      <form action="https://formspree.io/f/mbjnonry" method="post">
        <h2> Client management </h2>
        
        <fieldset>
          
          <legend><span class="number">1</span> Your Basic Info</legend>
        
          <label for="name">FullName/s:</label>
          <input type="text" id="name" name="user_name">
          <label for="name">Phone number/s:</label>
          <input type="text" id="name" name="cell_no">

          <label for="text"> ID number:</label>
          <input type="number" id="text" name="id_number">

          <label for="text">Spouse ID number:</label>
          <input type="number" id="text" name="spouse_id_number">
        
          <label for="email">Email:</label>
          <input type="email" id="mail" name="user_email">
       
          <label for="text">Marital Status:</label>
          <input type="text" id="text" name="text">
          
          <label for="text">Do you have any children? if yes how many?:</label>
          <input type="text" id="text"       name="dependent_s">

          <label for="text"> Do you have an overdraft? which bank and amount?:</label>
          <input type="text" id="text" name="overdraft_bank">
        
          
        </fieldset>
        <fieldset>  
        
          <legend><span class="number">2</span>Financial Information</legend>
          
          <label for="text">Client-Net Income(After tax and deductions):</label>
          <input type="text" id="text" name="C_net_income">
          <label for="text">Spouse-Net Income(After tax and deductions):</label>
          <input type="text" id="text" name="S_net_income">
          <label for="text">Other income(Net):</label>
          <input type="text" id="text" name="other_income">
       
          <legend><span class="number">3</span>Expenses</legend>
          
          <label for="text">Rent:</label>
          <input type="text" id="text" name="Rent">
          <label for="text">Water/Electricity:</label>
          <input type="text" id="text" name="W/E">
          <label for="text">Transport:</label>
          <input type="text" id="text" name="Transport">
          <label for="text">Insurances:</label>
          <input type="text" id="text" name="Insurance">
          <label for="text">Household Expenditure:</label>
          <input type="text" id="text" name="H_expenditure">
          <label for="text">Contract/Accounts:</label>
          <input type="text" id="text" name="Contract/accounts">
          <label for="text">Other:</label>
          <input type="text" id="text" name="other">

          
         </fieldset>
       
        <button type="submit">Submit</button>
        
       </form>
        </div>
      </div>
    </div>
</template>

<style scoped>
*, *:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: 'Nunito', sans-serif;
  color: #384047;
}

form {
  max-width: 300px;
  margin: 10px auto;
  padding: 10px 20px;
  background: #f4f7f8;
  border-radius: 8px;
}

h1 {
  margin: 0 0 30px 0;
  text-align: center;
}

input[type="text"],
input[type="password"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
textarea,
select {
  background: rgba(255,255,255,0.1);
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #e8eeef;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
  margin-bottom: 30px;
}

input[type="radio"],
input[type="checkbox"] {
  margin: 0 4px 8px 0;
}

select {
  padding: 6px;
  height: 32px;
  border-radius: 2px;
}

button {
  padding: 19px 39px 18px 39px;
  color: #FFF;
  background-color: #4bc970;
  font-size: 18px;
  text-align: center;
  font-style: normal;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #3ac162;
  border-width: 1px 1px 3px;
  box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;
  margin-bottom: 10px;
}

fieldset {
  margin-bottom: 30px;
  border: none;
}

legend {
  font-size: 1.4em;
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 8px;
}

label.light {
  font-weight: 300;
  display: inline;
}

.number {
  background-color: #5fcf80;
  color: #fff;
  height: 30px;
  width: 30px;
  display: inline-block;
  font-size: 0.8em;
  margin-right: 4px;
  line-height: 30px;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255,255,255,0.2);
  border-radius: 100%;
}

@media screen and (min-width: 480px) {

  form {
    max-width: 480px;
  }

}

</style>

let obj = {
  formattedNumber: '123456789',
  number: '+7(123)456-789, доп 1234'
}


function showPhoneNumber(obj) {
  let num = obj.number.replace(/\D/g, '');
  let formattedNumber = obj.formattedNumber;
  let result = num.match(formattedNumber);
  const index = result.index;
  return num.substr(index)
}


console.log(showPhoneNumber(obj))

document.getElementById('btn').addEventListener('click', myFunction)
function myFunction () {
  let age = document.getElementById('box1').value
  age = parseInt(age)
  const day = document.getElementById('box2').value
  if ((age < 19) && (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday')) {
    alert('Get to School!')
  } else if ((age > 18) && (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday')) {
    alert('Get to Work!')
  } else {
    alert('Time to Relax')
  }
}

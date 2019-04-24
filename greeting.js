var now = new Date()
var hour = now.getHours()
if(hour >= 6 && hour < 12) {
  alert('Buna dimineata!')
} else if(hour < 17) {
  alert('Buna ziua!')
} else if(hour < 23) {
  alert('Buna seara!')
} else {
  alert('Noapte buna!')
}

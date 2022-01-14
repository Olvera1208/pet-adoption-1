//var type = document.querySelector('#type');
//var size = document.querySelector('#size');
//var gender = document.querySelector('#gender');

fetch('https://api.petfinder.com/v2/animals', {
  method: 'GET', 
  headers: {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJaY0t0VVpNZ0ZGZmxpVEE4V0o0NHJ4dVhOYWVSSUJ4UnVqZ0M2UXIwOTFLUjNjSFFheCIsImp0aSI6ImI3M2ZiY2I1MzUxYTFiY2QxMzIyNGI1ZWRjNjE5YzYyMTZmNWM3NjY0N2UzNTgyMTIxNjY4YTUxYWI4Y2EyZjA3OWQ3ZjI5NTU0Y2ZlNmQ3IiwiaWF0IjoxNjQyMTExOTY3LCJuYmYiOjE2NDIxMTE5NjcsImV4cCI6MTY0MjExNTU2Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.DgOcvncaTKJkMxngyhCZpQt3rygsIS8K887l9t7EfczxTQnnycJ-KFW9tVqkXnl1plbnxbQnaT6Vk2mnYZnA8QifAsQUX2TlxG0TyhaCnKuq_kDt_ySfeIs0Q9OiBLwYgu10sXLDjE9e6wgcnsxuBhZZgAGQ729ITvrO0QzpvhH8AG8K4ZgoP74ulX09Tw4mVxA6zd5OpeYChLzfgslovjgNtg5cjl_D-FCUmA7Et0W6bOaG4sZabUMqLkxiWAjoFtFxVQxKtrb3CIYmqLZNlpuN75S2C7Q_whJ6A3xTLO6Ig_q2QnMv7TjYW0k-KYxXLcedPhd-lwq9NkxYVH0Tyw',
  },
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

// var getUserInput = function (type, size, gender) {
//    var apiUrl = 'https://api.petfinder.com/v2/animals/types/{' + type + '}/size/{' + size + '}/gender/{' + gender + '}';
//  
//    fetch(apiUrl)
//      .then(function (response) {
//        if (response.ok) {
//          response.json().then(function (data) {
//            console.log(data)
//          });
//       } else {
//          console.log('Error: ' + response.statusText);
//        }
//      })
//      .catch(function (error) {
//       console.log('Unable to connect to PetFinder');
//      });
//  };
//
//getUserInput(); 
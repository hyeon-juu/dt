export function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('네트워크 응답 오류');
      }
      return response.json();
    });
}

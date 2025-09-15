export async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('네트워크 응답 오류');
  }
  return await response.json();
}


export async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('네트워크 응답 오류');
  }
  return await response.json();
}


//post(form data, json data <-0)
export async function savePost(name, email) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method : 'post',
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({name, email})
  });
  if (!response.ok) {
    throw new Error('네트워크 응답 오류');
  }
  return await response.json();
}

export async function savePost2(name, email) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method : 'post',
    headers : {
      "Content-Type" : "application/json"
    },
    body : JSON.stringify({name, email})
  });
  if (!response.ok) {
    throw new Error('네트워크 응답 오류');
  }
  return await response.json();
}
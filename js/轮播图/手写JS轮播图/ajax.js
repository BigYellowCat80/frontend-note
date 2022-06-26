
function queryString(data) {
  const queryStringArray = [];
  Object.keys(data).forEach(key => {
    let value = data[key];
    queryStringArray.push(`${key}=${value}`);
  })
  // console.log(queryStringArray.join('&')); // 如果Object.keys长度为0 这里的返回值就是空字符串了 因为forEach对空字符串不执行回调
  return queryStringArray.join('&');
}

function ajax({ url, type = 'get', data = {}, success, error }) {
  const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

  const params = queryString(data);
  if (type == 'get' || type == 'GET') {
    xhr.open(type, `${url}?${params}`, true);
    xhr.send();
  } else if (type == 'post' || type == 'POST') {
    xhr.open(type, url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        success(xhr.responseText);
      } else {
        error(xhr.status);
      }
    }
  }
}
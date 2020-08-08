const fetch = require('node-fetch');
let formID = 'I5TJPyLr';

async function getResponses(){
  const url = "https://api.typeform.com/forms/I5TJPyLr/responses";

  const options = {
    headers: {
      Authorization: "bearer Hx54F2Cs27jM7eia4TBjTQaPq82oT4ZKmF6cgDsqMvKc"
    }
  };

  let response = await fetch(url, options);
  response = await response.json();
  response = JSON.parse(JSON.stringify(response));
  let items = await response.items;
  items = JSON.parse(JSON.stringify(items))
  let answers = await items.answers;
  //answers = JSON.parse(JSON.stringify(answers))
  return await items;
}

getResponses().then((res) => {console.info(res)})

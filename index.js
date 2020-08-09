const fetch = require('node-fetch');
let formID = 'I5TJPyLr';

//variables
const ZipCode = new URLSearchParams(window.location.search)
let answers = [];
let answerNames = [];
let answerContact = [];
let answerFile = [];
let answerDescrip = [];
let answerPrice = [];
let answerCode = [];

//Array with all the responses with that zip code
async function getAnswers(item){
  var ans = await item.answers;
  answers.push(ans);
}
async function getResponses(ZipCode){
  const url = "https://api.typeform.com/forms/I5TJPyLr/responses?query=" +ZipCode;

  const options = {
    headers: {
      Authorization: "bearer Hx54F2Cs27jM7eia4TBjTQaPq82oT4ZKmF6cgDsqMvKc"
    }
  };
  let response = await fetch(url, options);
  response = await response.json();
  response = JSON.parse(JSON.stringify(response));
  answers = [];
  response.items.forEach(getAnswers);
  return await answers;
}

//Array with the names from each response with the zip code
async function getNames(ZipCode){
  let response = await getResponses(ZipCode);
  var i;
  for(i = 0; i<response.length; i++){
    var j = await response[i];
    var name = await j[0].text;
    answerNames.push(name);
  }
  return await answerNames;
}
getNames(12345).then((res) => {console.info(res)})

//Array with the contact information from each response with the zip code
async function getContact(ZipCode){
  let response1 = await getResponses(ZipCode);
  var i;
  for(i = 0; i<response1.length; i++){
    var j = response1[i];
    var contact = j[2].text;
    answerContact.push(contact);
  }
  return await answerContact;
}
getContact(12345).then((res) => {console.info(res)})

//Array with the links to the item picture from each response with the zip code
async function getFile(ZipCode){
  let response2 = await getResponses(ZipCode);
  var i;
  for(i = 0; i<response2.length; i++){
    var j = response2[i];
    var file = j[3].file_url;
    answerFile.push(file);
  }
  return await answerFile;
}
getFile(12345).then((res) => {console.info(res)})

//Array with the item description from each response with the zip code
async function getDescrip(ZipCode){
  let response3 = await getResponses(ZipCode);
  var i;
  for(i = 0; i<response3.length; i++){
    var j = response3[i];
    var descrip = j[4].text;
    answerDescrip.push(descrip);
  }
  return await answerDescrip;
}
getDescrip(12345).then((res) => {console.info(res)})

//Array with the item prices from each response with the zip code
async function getPrice(ZipCode){
  let response4 = await getResponses(ZipCode);
  var i;
  for(i = 0; i<response4.length; i++){
    var j = response4[i];
    var price = j[5].text;
    answerPrice.push(price);
  }
  return await answerPrice;
}
getPrice(12345).then((res) => {console.info(res)})

//Array with the deletion code from each response with the zip code
async function getCode(ZipCode){
  let response5 = await getResponses(ZipCode);
  var i;
  for(i = 0; i<response5.length; i++){
    var j = response5[i];
    var code = j[6].text;
    answerCode.push(code);
  }
  return await answerCode;
}
getCode(12345).then((res) => {console.info(res)})

//checks to see if the deletion code matches
async function deletePost(ZipCode,code){
  let codes = getCode(ZipCode);
  if (codes.indexOf('code') >= 0){
    return true;
  }
  else{
    return false;
  }
}

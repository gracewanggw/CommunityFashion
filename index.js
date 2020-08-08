const fetch = require('node-fetch');
let formID = 'I5TJPyLr';

let answers = [];
let answerNames = [];
let answerContact = [];
let answerFile = [];
let answerDescrip = [];
let answerPrice = [];
let answerCode = [];

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
  response.items.forEach(getAnswers);
  return await answers;
}
getResponses(12345).then((res) => {console.info(res)})

async function NameObj(answer){
  var name = answer[0].text;
  answerNames.push(name);
}
async function getNames(ZipCode){
  answers = await getResponses(ZipCode);
  answers.forEach(NameObj)
  return await answerNames;
}
getNames(12345).then((res) => {console.info(res)})

async function ContactObj(answer){
  var contact = answer[2].text;
  answerContact.push(contact);
}
async function getContact(ZipCode){
  answers = await getResponses(ZipCode);
  answers.forEach(ContactObj)
  return await answerContact;
}
getContact(12345).then((res) => {console.info(res)})

async function FileObj(answer){
  var file = answer[3].file_url;
  answerFile.push(file);
}
async function getFile(ZipCode){
  answers = await getResponses(ZipCode);
  answers.forEach(FileObj)
  return await answerFile;
}
getFile(12345).then((res) => {console.info(res)})

async function DescripObj(answer){
  var descrip = answer[4].text;
  answerDescrip.push(descrip);
}
async function getDescrip(ZipCode){
  answers = await getResponses(ZipCode);
  answers.forEach(DescripObj)
  return await answerDescrip;
}
getDescrip(12345).then((res) => {console.info(res)})

async function PriceObj(answer){
  var price = answer[5].text;
  answerPrice.push(price);
}
async function getPrice(ZipCode){
  answers = await getResponses(ZipCode);
  answers.forEach(PriceObj)
  return await answerPrice;
}
getPrice(12345).then((res) => {console.info(res)})

async function CodeObj(answer){
  var code = answer[6].text;
  answerCode.push(code);
}
async function getCode(ZipCode){
  answers = await getResponses(ZipCode);
  answers.forEach(CodeObj)
  return await answerCode;
}
getCode(12345).then((res) => {console.info(res)})

async function deletePost(ZipCode,code){
  let codes = getCode(ZipCode);
  if (codes.indexOf('code') >= 0){
    return true;
  }
  else{
    return false;
  }
}

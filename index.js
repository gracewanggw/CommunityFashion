const fetch = require('node-fetch');
let formID = 'I5TJPyLr';

let answers = [];
let answerNames = [];
let answerEmails = [];
let answerPhone = [];
let answerImage = [];
let answerPrice = [];

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

async function EmailObj(answer){
  var email = answer[2].email;
  answerEmails.push(email);
}
async function getEmails(ZipCode){
  answers = await getResponses(ZipCode);
  answers.forEach(EmailObj)
  return await answerEmails;
}
getEmails(12345).then((res) => {console.info(res)})

async function PhoneObj(answer){
  var phone = answer[3].phone_number;
  answerPhone.push(phone);
}
async function getPhone(ZipCode){
  answers = await getResponses(ZipCode);
  answers.forEach(PhoneObj)
  return await answerPhone;
}
getPhone(12345).then((res) => {console.info(res)})

async function ImageObj(answer){
  var image = answer[4].url;
  answerImage.push(image);
}
async function getImage(ZipCode){
  answers = await getResponses(ZipCode);
  answers.forEach(ImageObj)
  return await answerImage;
}
getImage(12345).then((res) => {console.info(res)})

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

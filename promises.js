let $ans = $('.result')
let numApi = 'http://numbersapi.com'
let num = 13
let nums = [12, 45, 76, 9867]

async function doTheThing() {
    // had to use ".data.text" because we used axios.get
    // IF we used $getJSON there would be no need for "".data.text"
    let response = await axios.get(`${numApi}/${num}?json`)
    // REWRITE as = $.getJSON(`${numApi}/${num}?json`)
        // so that we can just use "response" and not sepcify key
    console.log(response)
    $ans.text(response.data.text)
}

// doTheThing()
async function promiseList(){
    let response = await $.getJSON(`${numApi}/${nums}?json`);

    console.log(response)
}

// promiseList()



async function part3(){
    let response = await Promise.all([
        $.getJSON(`${numApi}/24?json`),
        $.getJSON(`${numApi}/24?json`),
        $.getJSON(`${numApi}/24?json`),
        $.getJSON(`${numApi}/24?json`)]);
    console.log("response[0] is ", response[0].text)
    $ans.text(response[0].text + response[1].text +
         response[2].text + response[3].text)
}

part3()


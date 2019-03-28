const Mnemonic = require('bitcore-mnemonic');
const sprintf = require('sprintf-js').sprintf
const fs = require("fs");

async  function mnemonic(){
  let code = new Mnemonic(128, Mnemonic.Words.ENGLISH);
  console.log(code.toString());
  let xpriv = code.toHDPrivateKey();
  console.log(xpriv.toString());

  try {
    fs.appendFileSync("secretkey.txt", xpriv.toString());
    fs.appendFileSync("secretkey.txt", "\n");
    fs.appendFileSync("secretword.txt", code.toString());
    fs.appendFileSync("secretword.txt", "\n");
  }catch(e){
    console.log(e);
  }
}


async function runAll(){
  while (true){
    try{
      await mnemonic();
    }catch(err){
      console.log(err)
    }
  }
}

runAll();

import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Dev Mandal");
  console.log(text);
}

doStuff();
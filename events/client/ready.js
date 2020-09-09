module.exports = client => {
  let botStatus = [
    "k.help | www.koyru.cf",
]

    setInterval(function() {
    let status = botStatus[Math.floor(Math.random() * botStatus.length)];
    client.user.setActivity(status, {type: "WATCHING"});

    }, 5000)

    client.user.setUsername('koyru'); // NAME
    client.user.setStatus("dnd"); // STATUS
    
  console.log(`** [NOTE:] koyru loaded without any issues! **`); // LOG bot prendido
   
};

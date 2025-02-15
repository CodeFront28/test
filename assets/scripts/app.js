document
  .getElementById("feedback")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const botToken = "7623973445:AAH3fLYAQs5H3ZO6dEmGLFLqWHgzROCBp7Y";
    const chatId = "-1002440045189";

    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const preferences = document.getElementById("preferences").value;

    const message = `🔔 New Request:\n\n👤 Name: ${name}\n📞 Contact: ${contact}\n💡 Preferences: ${preferences}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          alert("The request was sent successfully!");
          document.getElementById("feedback").reset();
        } else {
          alert("Request sending error");
        }
      })

      .catch((error) => {
        alert("Error: " + error);
      });
  });

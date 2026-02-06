const videoNo = document.getElementById("videoNo");
const noText1 = document.getElementById("noText1");
const noText2 = document.getElementById("noText2");
const noVideo = document.getElementById("noVideo");


const form = document.getElementById("surveyForm");
const surveyPage = document.getElementById("surveyPage");

const videoYes = document.getElementById("videoYes");

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const yesVideo = document.getElementById("yesVideo");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const answer = document.querySelector('input[name="single"]:checked').value;
  surveyPage.classList.add("hidden");

  /* ================= YES / DONTCARE ================= */
  if (answer === "yes" || answer === "dontcare") {
    videoYes.classList.remove("hidden");

    text1.classList.remove("hidden");

    setTimeout(() => {
      text1.classList.add("hidden");
      text2.classList.remove("hidden");
    }, 2000);

    setTimeout(() => {
      text2.classList.add("hidden");

      yesVideo.innerHTML = `
        <blockquote class="tiktok-embed"
          cite="https://www.tiktok.com/@pasiliaonardz/video/7198382532054830362"
          data-video-id="7198382532054830362"
          style="width:100%;height:100%;">
          <section>
            <a target="_blank" href="https://www.tiktok.com/@pasiliaonardz">
              @pasiliaonardz
            </a>
          </section>
        </blockquote>
      `;

      yesVideo.classList.remove("hidden");

      const tiktokScript = document.createElement("script");
      tiktokScript.src = "https://www.tiktok.com/embed.js";
      tiktokScript.async = true;
      document.body.appendChild(tiktokScript);

    }, 4000);
  }

  /* ================= NO ================= */
  else if (answer === "no") {
    videoNo.classList.remove("hidden");

    noText1.classList.remove("hidden");

    setTimeout(() => {
      noText1.classList.add("hidden");
      noText2.classList.remove("hidden");
    }, 2000);

    setTimeout(() => {
      noText2.classList.add("hidden");

      noVideo.innerHTML = `
        <blockquote class="tiktok-embed"
          cite="https://www.tiktok.com/@eternallove9986/video/7358420393184742702"
          data-video-id="7358420393184742702"
          style="width:100%;height:100%;">
          <section>
            <a target="_blank" href="https://www.tiktok.com/@eternallove9986">
              @eternallove9986
            </a>
          </section>
        </blockquote>
      `;

      noVideo.classList.remove("hidden");

      const tiktokScript = document.createElement("script");
      tiktokScript.src = "https://www.tiktok.com/embed.js";
      tiktokScript.async = true;
      document.body.appendChild(tiktokScript);

    }, 4000);
  }
});


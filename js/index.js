const titleNode = document.getElementById("title");
const subtitleNode = document.getElementById("subtitle");
const getIdeaBtnNode = document.getElementById("getIdeaBtn");

const changeBackground = () => {
    document.body.className = "green-gradient-back";
};

const changeTitle = () => {
    titleNode.innerText = "Ура, теперь не скучно 🔥";
};

const setNewActivity = () => {
    fetch("http://www.boredapi.com/api/activity/")
        .then((response) => response.json())
        .then((res) => {
            subtitleNode.innerText = res.activity;
            changeTitle();
            changeBackground();
        });
};

const getIdeaHandler = () => {
    setNewActivity();
};


getIdeaBtnNode.addEventListener("click", getIdeaHandler);

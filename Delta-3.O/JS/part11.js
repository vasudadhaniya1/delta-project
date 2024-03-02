let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    let stateprovince = document.querySelector("input").value;
    console.log(stateprovince);
    let colArr = await getColleges(stateprovince);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}


async function getColleges(stateprovince) {
    try {
        let res = await axios.get(url+stateprovince);
        return res.data;
    } catch (e) {
        console.log ("error : ", e);
        return[];
    }
}
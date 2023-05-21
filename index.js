// API URL
const api_url = "https://raddythebrand.github.io/apex-legends/data.json";
// END API URL

// END FUNCTION GET API FIRST TIME
async function getapi(url) {
  const response = await fetch(url);

  let data = await response.json();

  let arrCount = data;
  let objTemp = {};
  for (var i = 0; i < arrCount.length; i++) {
    if (!objTemp[arrCount[i].home]) {
      objTemp[arrCount[i].home] = 1;
    } else if (objTemp[arrCount[i].home]) {
      objTemp[arrCount[i].home] += 1;
    }
  }
  document.getElementById("catCount").innerText = Object.keys(objTemp).length;
  // console.log(Object.keys(objTemp).length);

  show(data);

  let parentBtn = document.getElementById("btn-parentApex");
  let btnApex = parentBtn.getElementsByClassName("btn-apex");
  for (let i = 0; i < btnApex.length; i++) {
    btnApex[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}
getapi(api_url);
// END FUNCTION GET API FIRST TIME

// FUNCTION SET DATA
function show(data) {
  for (let r = 0; r < data.length; r++) {
    document.getElementById(
      "dataApexLegends"
    ).innerHTML += `<div id="legendsID" class="col-sm-6 col-md-3 legends" onclick="test(
                                                                  '${data[r].nickname}', 
                                                                  '${data[r].name}', 
                                                                  '${data[r].home}',
                                                                  '${data[r].type}',
                                                                  '${data[r].thumbnail.large}',
                                                                  '${data[r].ability[0].type}',
                                                                  '${data[r].ability[0].title}',
                                                                  '${data[r].ability[0].icon}',
                                                                  '${data[r].ability[1].type}',
                                                                  '${data[r].ability[1].title}',
                                                                  '${data[r].ability[1].icon}',
                                                                  '${data[r].ability[2].type}',
                                                                  '${data[r].ability[2].title}',
                                                                  '${data[r].ability[2].icon}',
                                                                  '${data[r].yt_trailer}'
                                                                  )">
                      <div class="card card-apexThumb">
                        <img src=${data[r].thumbnail.default} alt="" srcset="" class="card-apexImg">
                        <h5 class="card-apexText">${data[r].nickname}</h5>
                      </div>
                    </div>`;
  }
}
// END FUNCTION SET DATA

/* FUNCTION SEARCH */
async function searchLegend() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("legends");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "";
    }
  }
}
/* END FUNCTION SEARCH */

/* FUNCTION CATEGORY */
async function categoryData(category) {
  if (category !== "All") {
    const response = await fetch(
      "https://raddythebrand.github.io/apex-legends/data.json"
    );

    let data = await response.json();

    let result = data.filter((obj) => obj.home == category);

    const element = document.getElementById("dataApexLegends");
    element.remove();

    const el = document.createElement("div");
    el.classList.add("row", "py-3");
    el.setAttribute("id", "dataApexLegends");

    const ApexContent = document.getElementById("apex-content");
    ApexContent.appendChild(el);

    for (let l = 0; l < result.length; l++) {
      document.getElementById(
        "dataApexLegends"
      ).innerHTML += `<div id="legendsID" class="col-sm-6 col-md-3 legends" onclick="test(
                                                                            '${result[l].nickname}', 
                                                                            '${result[l].name}', 
                                                                            '${result[l].home}',
                                                                            '${result[l].type}',
                                                                            '${result[l].thumbnail.large}',
                                                                            '${result[l].ability[0].type}',
                                                                            '${result[l].ability[0].title}',
                                                                            '${result[l].ability[0].icon}',
                                                                            '${result[l].ability[1].type}',
                                                                            '${result[l].ability[1].title}',
                                                                            '${result[l].ability[1].icon}',
                                                                            '${result[l].ability[2].type}',
                                                                            '${result[l].ability[2].title}',
                                                                            '${result[l].ability[2].icon}',
                                                                            '${result[l].yt_trailer}'
                                                                            )">
              <div class="card card-apexThumb">
                  <img src=${result[l].thumbnail.default} alt="" srcset="" class="card-apexImg">
                  <h5 class="card-apexText">${result[l].nickname}</h5>
              </div>
          </div>`;
    }

    let parentBtn = document.getElementById("btn-parentApex");
    let btnApex = parentBtn.getElementsByClassName("btn-apex");
    for (let i = 0; i < btnApex.length; i++) {
      btnApex[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  } else {
    const response = await fetch(
      "https://raddythebrand.github.io/apex-legends/data.json"
    );

    let data = await response.json();

    const element = document.getElementById("dataApexLegends");
    element.remove();

    const el = document.createElement("div");
    el.classList.add("row", "py-3");
    el.setAttribute("id", "dataApexLegends");

    const ApexContent = document.getElementById("apex-content");
    ApexContent.appendChild(el);

    for (let l = 0; l < data.length; l++) {
      document.getElementById(
        "dataApexLegends"
      ).innerHTML += `<div id="legendsID" class="col-sm-6 col-md-3 legends" onclick="test(
                                                                            '${data[l].nickname}', 
                                                                            '${data[l].name}', 
                                                                            '${data[l].home}',
                                                                            '${data[l].type}',
                                                                            '${data[l].thumbnail.large}',
                                                                            '${data[l].ability[0].type}',
                                                                            '${data[l].ability[0].title}',
                                                                            '${data[l].ability[0].icon}',
                                                                            '${data[l].ability[1].type}',
                                                                            '${data[l].ability[1].title}',
                                                                            '${data[l].ability[1].icon}',
                                                                            '${data[l].ability[2].type}',
                                                                            '${data[l].ability[2].title}',
                                                                            '${data[l].ability[2].icon}',
                                                                            '${data[l].yt_trailer}'
                                                                            )">
              <div class="card card-apexThumb">
                  <img src=${data[l].thumbnail.default} alt="" srcset="" class="card-apexImg">
                  <h5 class="card-apexText">${data[l].nickname}</h5>
              </div>
          </div>`;
    }
  }
}
/* END FUNCTION CATEGORY */

function test(
  nickname,
  name,
  home,
  type,
  character,
  abilityType1,
  abilityTitle1,
  abilityIcon1,
  abilityType2,
  abilityTitle2,
  abilityIcon2,
  abilityType3,
  abilityTitle3,
  abilityIcon3,
  yt_trailer
) {
  let splitLink = yt_trailer.split("watch?v=");
  let embedName = splitLink.join("embed/");

  const elPopup = document.getElementById("popupCustom");
  elPopup.classList.add("popupCustoms");
  document.getElementById(
    "popupCustom"
  ).innerHTML += `<div id="popupID" class="col-md-3">
        <div class="card card-apexThumb">
          <div class="row mb-3">
            <div class="col-md-12">
              <h2 class="card-apexText">
                The Legends
              </h2>
            </div>
          </div>
          <div class="row justify-content-between">
            <div class="col-md-4">
              <img src="${character}" alt="" class="img-fluid">
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-2 fw-bold">Nickname</div>
                <div class="col-md-8">${nickname}</div>
              </div>
              <div class="row">
                <div class="col-md-2 fw-bold">Name</div>
                <div class="col-md-8">${name}</div>
              </div>
              <div class="row">
                <div class="col-md-2 fw-bold">Home</div>
                <div class="col-md-8">${home}</div>
              </div>
              <div class="row">
                <div class="col-md-2 fw-bold">Type</div>
                <div class="col-md-8">${type}</div>
              </div>
              <div class="row mt-3 mb-4">
                <div class="col-md-4 text-center">
                  <img src="${abilityIcon1}" alt="" class="img-fluid card-ability">
                  <p class="mb-0">${abilityType1}</p>
                  <p class="fw-bold mb-0">${abilityTitle1}</p>
                </div>
                <div class="col-md-4 text-center">
                  <img src="${abilityIcon2}" alt="" class="img-fluid card-ability">
                  <p class="mb-0">${abilityType2}</p>
                  <p class="fw-bold mb-0">${abilityTitle2}</p>
                </div>
                <div class="col-md-4 text-center">
                  <img src="${abilityIcon3}" alt="" class="img-fluid card-ability">
                  <p class="mb-0">${abilityType3}</p>
                  <p class="fw-bold mb-0">${abilityTitle3}</p>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-12">
                  <iframe style="width: 100%;" height="420"
                    src="${embedName}">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-3">
            <div class="col-md-2 mb-1">
              <button class="btn-popup w-100" onclick="closePopup()">CLOSE</button>
            </div>
            <div class="col-md-2 mb-1">
              <button class="btn-popupEdit w-100" onclick="closePopup()">Edit Legend</button>
            </div>
          </div>
        </div>
      </div>`;
  document.body.classList.add("hiddenPopupBody");
}

function closePopup(params) {
  const elPopup = document.getElementById("popupCustom");
  elPopup.classList.remove("popupCustoms");
  const element = document.getElementById("popupID");
  element.remove();
  document.body.classList.remove("hiddenPopupBody");
}

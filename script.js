
const citis = document.getElementById("city");
const districts = document.getElementById("district");
const wards = document.getElementById("ward");
const addressInput = document.getElementById("address");
const resultDiv = document.getElementById("result");

var Parameter = {
  url: "https://bright-biscochitos-306123.netlify.app/data.json", 
  method: "GET", 
  responseType: "application/json", 
};
var promise = axios(Parameter);
promise.then(function (result) {
  renderCity(result.data);
});
  
function renderCity(data) {
  for (const x of data) {
    citis.options[citis.options.length] = new Option(x.Name, x.Id);
  }
  citis.onchange = function () {
    district.length = 1;
    ward.length = 1;
    if(this.value != ""){
      const result = data.filter(n => n.Id === this.value);
      for (const k of result[0].Districts) {
        district.options[district.options.length] = new Option(k.Name, k.Id);
      }
    }
  };
  district.onchange = function () {
    ward.length = 1;
    const dataCity = data.filter((n) => n.Id === citis.value);
    if (this.value != "") {
      const dataWards = dataCity[0].Districts.filter(n => n.Id === this.value)[0].Wards;
      for (const w of dataWards) {
        wards.options[wards.options.length] = new Option(w.Name, w.Id);
      }
    }
  };
}
document.getElementById("submit").addEventListener("click", () => {
const provinceSelect = document.getElementById("city");
const selectedProvinceId = provinceSelect.value;
const provinceText = provinceSelect.options[provinceSelect.selectedIndex].text;
const districtSelect = document.getElementById("district");
const selectedDistrictId = districtSelect.value;
const districtText = districtSelect.options[districtSelect.selectedIndex].text;
const wardSelect = document.getElementById("city");
const selectedWardId = provinceSelect.value;
const wardText = wardSelect.options[wardSelect.selectedIndex].text;
const addressText = document.getElementById("address").value;
const resultString = provinceText + ", " + districtText + ", " + addressText;
document.getElementById("result").innerHTML = resultString;
});

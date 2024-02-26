
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

// Lấy giá trị tỉnh/thành phố được chọn
const selectedProvinceId = provinceSelect.value;

// Lấy thông tin tỉnh/thành phố dựa vào ID
const provinceInfo = provinceSelect.options[provinceSelect.selectedIndex].text;

alert(provinceInfo)

  // Lấy thông tin tỉnh/huyện/thị xã được chọn
  // Lấy thông tin địa chỉ cụ thể được nhập
  // Ghép các thông tin lại thành chuỗi kết quả
  // Hiển thị chuỗi kết quả lên div #result
});

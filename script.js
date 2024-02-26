const tinhSelect = document.getElementById("tinh");
const huyenSelect = document.getElementById("huyen");
const xaSelect = document.getElementById("xa");

// Lấy dữ liệu tỉnh
const getTinh = async () => {
    const response = await fetch("https://api.quanlynhanuoc.vn/api/tinh");
    const data = await response.json();
    data.forEach((tinh) => {
        const option = document.createElement("option");
        option.value = tinh.Ma;
        option.textContent = tinh.Ten;
        tinhSelect.appendChild(option);
    });
};

// Lấy dữ liệu huyện
const getHuyen = async (maTinh) => {
    huyenSelect.innerHTML = ""; // Xóa dữ liệu cũ
    const response = await fetch(`https://api.quanlynhanuoc.vn/api/huyen/${maTinh}`);
    const data = await response.json();
    data.forEach((huyen) => {
        const option = document.createElement("option");
        option.value = huyen.Ma;
        option.textContent = huyen.Ten;
        huyenSelect.appendChild(option);
    });
};

// Lấy dữ liệu xã
const getXa = async (maHuyen) => {
    xaSelect.innerHTML = ""; // Xóa dữ liệu cũ
    const response = await fetch(`https://api.quanlynhanuoc.vn/api/xa/${maHuyen}`);
    const data = await response.json();
    data.forEach((xa) => {
        const option = document.createElement("option");
        option.value = xa.Ma;
        option.textContent = xa.Ten;
        xaSelect.appendChild(option);
    });
};

// Lấy dữ liệu tỉnh khi trang tải
getTinh();

// Lấy dữ liệu huyện khi chọn tỉnh
tinhSelect.addEventListener("change", (e) => {
    getHuyen(e.target.value);
});

// Lấy dữ liệu xã khi chọn huyện
huyenSelect.addEventListener("change", (e) => {
    getXa(e.target.value);
});

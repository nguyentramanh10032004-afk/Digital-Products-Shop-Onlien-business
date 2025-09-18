document.getElementById('downloadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Không reload trang
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Lưu thông tin tạm (local storage, chỉ trên máy người dùng)
    localStorage.setItem('userInfo', JSON.stringify({ name, email }));

    // Hiển thị link tải
    document.getElementById('result').innerHTML = `
        Cảm ơn ${name}! Đây là link tải template: 
        <a href="YOUR_GOOGLE_DRIVE_LINK" target="_blank">Tải ngay</a> 
        (Nếu donate, anh sẽ gửi phiên bản premium qua email).
    `;

    // Reset form
    document.getElementById('downloadForm').reset();
});
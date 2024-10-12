function generateLink() {
    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const fullNumber = countryCode + phoneNumber;

    if (phoneNumber.length > 0) {
        const whatsAppLink = `https://wa.me/${fullNumber}`;
        document.getElementById('whatsAppLink').value = whatsAppLink;
        document.getElementById('openWhatsApp').setAttribute('href', whatsAppLink);
    } else {
        alert("يرجى إدخال رقم هاتف صحيح.");
    }
}

function copyLink() {
    const link = document.getElementById('whatsAppLink');
    link.select();
    link.setSelectionRange(0, 99999); // لتحديد النص على الأجهزة المحمولة
    document.execCommand("copy");
    alert("تم نسخ الرابط!");
}

function openWhatsApp() {
    const link = document.getElementById('whatsAppLink').value;
    if (link) {
        window.open(link, '_blank');
    } else {
        alert("يرجى توليد الرابط أولاً.");
    }
}

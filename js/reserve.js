document.addEventListener('DOMContentLoaded', () => {
    // 全てのdate-pickerに今日の日付を設定
    const datePickers = document.querySelectorAll('.date-picker');
    const today = new Date().toISOString().split('T')[0];
    
    datePickers.forEach(picker => {
        picker.min = today;  // 過去の日付を選択できないように
        picker.value = today;
    });
});

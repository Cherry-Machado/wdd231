export function initializeBuyOptions() {
    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', function() {
            if (this.value) window.open(this.value, '_blank');
        });
    });
}
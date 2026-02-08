/* ----- Nav animáció ----- */
const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink));

/* ----- CV h4 tagre kattintva lenyílik -----*/
document.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll('.box .text > h4');
    headings.forEach(h => {
        const parent = h.parentElement;

        h.setAttribute('role', 'button');
        h.setAttribute('tabindex', '0');

        // csukva kezd
        if (!parent.classList.contains('collapsed')) parent.classList.add('collapsed');
        h.setAttribute('aria-expanded', 'false');

        const toggle = () => {
            parent.classList.toggle('collapsed');
            const expanded = !parent.classList.contains('collapsed');
            h.setAttribute('aria-expanded', String(expanded));
        };

        h.addEventListener('click', toggle);
        h.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
        });
    });
});
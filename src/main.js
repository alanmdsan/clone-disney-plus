document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {
            const target_tab_id = btn.target.dataset.tabButton;
            const target_tab = document.querySelector(`[data-tab-id=${target_tab_id}]`);
            inactivate_all_buttons()
            hide_all_tabs();
            btn.target.classList.add('shows__tabs__button--is-active');
            target_tab.classList.add('shows__list--is-active');
        })
    }
});

function inactivate_all_buttons() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hide_all_tabs() {
    const tabs = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('shows__list--is-active');
    }
}


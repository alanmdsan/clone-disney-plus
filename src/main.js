document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
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

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', open_or_close_answer);
    }
});

function open_or_close_answer(element) {
    const css_class = 'faq__questions__item--is-open';
    const parent_element = element.target.parentNode;

    parent_element.classList.toggle(css_class);
}

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


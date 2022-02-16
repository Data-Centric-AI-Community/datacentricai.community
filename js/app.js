const gRecaptchaKey = "6LdSzmYeAAAAAIIIoMe4Z6IkmyUYEwnL1gJgPvOw";

window.onload = function () {
    const env = 'dev';
    const dom = document;
    const repos = {
        'ydata-synthetic': 'https://api.github.com/repos/ydataai/ydata-synthetic',
        'pandas-profiling': 'https://api.github.com/repos/pandas-profiling/pandas-profiling',
    };

    const $body = dom.querySelector('body');
    const $burguerMenu = dom.querySelector('.burguer-menu');
    const $overlayNav = dom.querySelector('.overlay-nav');
    const $overlayNavLinks = dom.querySelectorAll('.overlay-nav .link');
    const $subscribeInit = dom.getElementById('subscribe-init');
    const $subscribeForm = dom.getElementById('subscribe-form');   
    const $subscribeSubmit = dom.getElementById('subscribe-submit');
    const $newsletterSection = dom.getElementById('newsletter');
    const $formMessage = dom.querySelector('.form-message');
    const $formFeedback = dom.querySelector('.form-feedback');
    const $repos = [...dom.querySelectorAll('[data-star]')];
    const $firstInput = dom.getElementById('subscribe-firstname');
    const $newsletterLinks = dom.querySelectorAll('a[href="#newsletter"]');
    const stateClass = 'open';
    const starRequestsData = $repos.map(($repo) => {
        const name = $repo.getAttribute('data-star');
        return {
            name: name,
            endpoint: repos[name],
            $element: $repo,
        };
    });    

    // methods
    function enableSubscribeForm() {
        $subscribeInit.classList.remove('show');
        $subscribeForm.classList.add('show');

        setTimeout(() => {
            $firstInput.focus();
        });
    }

    function submitSubscribeForm(e={}) {
        e.preventDefault();
        
        $formMessage.classList.remove('show');
        $subscribeForm.classList.remove('show');
        $formFeedback.classList.add('show');
        setTimeout(() => {
            window.scrollTo(0, $newsletterSection.offsetTop-200);
        });
    }

    function mobileLinkAction(e={}) {
        $overlayNav.classList.remove(stateClass);
        $body.classList.remove('unscrollable');
    }

    function toggeMobileMenu(e={}) {
        if ($overlayNav.classList.contains(stateClass)) {
            $overlayNav.classList.remove(stateClass);
            $body.classList.remove('unscrollable');
            $burguerMenu.classList.remove('active');
        } else {
            $overlayNav.classList.add(stateClass);
            $body.classList.add('unscrollable');
            $burguerMenu.classList.add('active');
        }
    }

    if (location.hash === "#newsletter") {
        enableSubscribeForm();
    }

    // events
    $burguerMenu.addEventListener('click', toggeMobileMenu);
    $subscribeInit.addEventListener('click', enableSubscribeForm);
    $subscribeForm.addEventListener('submit', submitSubscribeForm);

    $overlayNavLinks.forEach(($link) => {
        $link.addEventListener('click', mobileLinkAction);
    });

    $newsletterLinks.forEach(($link) => {
        $link.addEventListener('click', enableSubscribeForm);
    });

    // requests
    starRequestsData.forEach((starRequestData) => {
        fetch(starRequestData.endpoint)
            .then((response) => {
                if (!response.ok) throw new Error(response.message);
                return response.json();
            }).then((data) => {    
                starRequestData.$element.innerHTML = data.stargazers_count;
            }).catch((error) => {
                starRequestData.$element.innerHTML = 'n/a';
        });
    });
    
    // recaptcha
    const subscribeVerifyCallback = function(response) {
        $subscribeSubmit.removeAttribute("disabled");
    };
    
    const subscribeExpiredCallback = function() {
        $subscribeSubmit.classList.remove("verified")
        $subscribeSubmit.setAttribute("disabled");
    };

    grecaptcha.render('subscribe-recaptcha', {
        'sitekey': gRecaptchaKey,
        'theme': 'light',
        'callback': subscribeVerifyCallback,
        "expired-callback": subscribeExpiredCallback
    });
}

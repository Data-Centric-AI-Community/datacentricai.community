const gRecaptchaKey = "6LdSzmYeAAAAAIIIoMe4Z6IkmyUYEwnL1gJgPvOw";

window.onload = function () {
    const env = 'dev';
    const dom = document;
    const repos = {
        'ydata-synthetic': 'https://api.github.com/repos/ydataai/ydata-synthetic',
        'pandas-profiling': 'https://api.github.com/repos/pandas-profiling/pandas-profiling',
    };

    const $starCounter = dom.getElementById('star-counter');
    const $subscribeInit = dom.getElementById('subscribe-init');
    const $subscribeCTA = dom.getElementById('subscribe-cta');
    const $subscribeForm = dom.getElementById('subscribe-form');    
    const $repos = [...dom.querySelectorAll('[data-star]')];
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
        $subscribeCTA.style.display = 'none';
        $subscribeForm.style.display = 'block';
    }

    function submitSubscribeForm(e={}) {
        e.preventDefault();
    }

    // events
    $subscribeInit.addEventListener('click', enableSubscribeForm);

    // requests

    console.log(starRequestsData);

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
    })    
}

// recaptcha
const subscribeVerifyCallback = function(response) {
    const $subscribeSubmit = dom.getElementById('subscribe-submit');

    $subscribeSubmit.setAttr("disabled", false);
};
  
const subscribeExpiredCallback = function() {
    const $subscribeSubmit = dom.getElementById('subscribe-submit');
    
    $subscribeSubmit.classList.remove("verified")
    subscribeSubmit.setAttr("disabled", true);
};
  
window.onloadCallback = function () {
    grecaptcha.render('subscribe-recaptcha', {
        'sitekey': gRecaptchaKey,
        'theme': 'light',
        'callback': subscribeVerifyCallback,
        "expired-callback": subscribeExpiredCallback
    })
};

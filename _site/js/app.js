const gRecaptchaKey = "6LdSzmYeAAAAAIIIoMe4Z6IkmyUYEwnL1gJgPvOw";

window.onload = function () {
    const env = 'prod';
    const dom = document;
    const repoStarsEndpoint = 'https://api.github.com/repos/ydataai/ydata-synthetic';
    const $starCounter = dom.getElementById('star-counter');
    const $subscribeInit = dom.getElementById('subscribe-init');
    const $subscribeCTA = dom.getElementById('subscribe-cta');
    const $subscribeForm = dom.getElementById('subscribe-form');    

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
    fetch(repoStarsEndpoint)
        .then((response) => {
            if (!response.ok) throw new Error(response.message);
            return response.json();
        }).then((data) => {    
            $starCounter.innerHTML = data.stargazers_count;
        }).catch((error) => {
            $starCounter.innerHTML = 'n/a';
    });    
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
        'theme': 'dark',
        'callback': subscribeVerifyCallback,
        "expired-callback": subscribeExpiredCallback
    })
};

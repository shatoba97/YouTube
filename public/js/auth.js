function init() {
    gapi.client.init({
        'apiKey': "AIzaSyBTtNgEk-54vL6FOQ0bENBxakO-8SS7ClI",
        'clientId': '850831688218-drrghgski740o3bucvqsediiekbn83aj.apps.googleusercontent.com',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
        'scope': 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner'
    }).then(function() {
        GoogleAuth = gapi.auth2.getAuthInstance();

        // Listen for sign-in state changes.
        //GoogleAuth.isSignedIn.listen(updateSigninStatus);

        // Handle initial sign-in state. (Determine if user is already signed in.)
        //setSigninStatus();

        // Call handleAuthClick function when user clicks on "Authorize" button.
        GoogleAuth.signIn();


    });
}


function loadAPIClientInterfaces() {
    gapi.client.load('youtube', 'v3', function() {
        handleAPILoaded();
    });
}
    // Called automatically when JavaScript client library is loaded.
    function onClientLoad() {
        gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
    }
    
    function onYouTubeApiLoad() {
        gapi.client.setApiKey('AIzaSyBTtNgEk-54vL6FOQ0bENBxakO-8SS7ClI');
        
    }
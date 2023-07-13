document.addEventListener('DOMContentLoaded', function () {
    const videos = {
        0: 1857303447,
        1: 1856605174,
        2: 1857009356,
        3: 1855851402,
    };

    const videoContainer = document.getElementById('video-container');
    if(videoContainer){
        for (let key in videos) {
            if (videos.hasOwnProperty(key)) {
                let videoId = videos[key];
                let newDiv = document.createElement('div');
                let newId = 'video-' + key;
                newDiv.id = newId;
                newDiv.className = 'video-item';
                videoContainer.appendChild(newDiv);
                new Twitch.Player(newId, {
                    video: videoId
                });
            }
        }
    }

    const videos2 = {
        4: 1857393256,
        5: 1857368176,
        6: 1856383255,
        7: 1857309341,
    };
    const videoContainerr = document.getElementById('video-container2');
    if(videoContainerr){
        for (let key2 in videos2) {
            if (videos2.hasOwnProperty(key2)) {
                let videoId2 = videos2[key2];
                let newDiv2 = document.createElement('div');
                let newId2 = 'video-' + key2;
                newDiv2.id = newId2;
                newDiv2.className = 'video-item';
                videoContainerr.appendChild(newDiv2);
                new Twitch.Player(newId2, {
                    video: videoId2
                });
            }
        }
    }

    const videos3 = {
        8: 1864555650,
        9: 1860909408,
        10: 1859897657,
        11: 1863504171,
    };
    const videoContainer3 = document.getElementById('video-container3');
    if(videoContainer3){
        for (let key3 in videos3) {
            if (videos3.hasOwnProperty(key3)) {
                let videoId3 = videos3[key3];
                let newDiv3 = document.createElement('div');
                let newId3 = 'video-' + key3;
                newDiv3.id = newId3;
                newDiv3.className = 'video-item';
                videoContainer3.appendChild(newDiv3);
                new Twitch.Player(newId3, {
                    video: videoId3
                });
            }
        }
    }
    
});

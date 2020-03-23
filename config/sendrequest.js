var socket = io();
var sender = $('#currentuser').val();
var receiverName;

function addFriend(name) {

    $.ajax({
        url: '/search',
        type: 'POST',
        data: {
            receiverName: name
        },
        success: function() {

        }
    })
}

function getPlaylistData() {
    let spotifytoken = $('#user_token1').val()
    $.ajax({
        url: 'https://api.spotify.com/v1/me/playlists',
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + spotifytoken
        },
        success: function(data) {

        }
    }).done(function(data) {
        let htmlstr = '';
        htmlstr += displayPlaylistsString(data);
        $('#result').append(htmlstr);
        addEventListenerToPlaylist();
        return htmlstr;
    });
    // $('#reload').load(location.href + ' #reload');
}

function getSongsForPlaylist(url, id) {
    $(`#song-result .songs`).hide();
    let spotifytoken = $('#user_token1').val()
    $.ajax({
        url: url,
        type: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + spotifytoken
        },
        success: function(data) {
            console.log("checking songs data", data);
            let returnStr = '';
            returnStr += displaySongsString(data);
            console.log("checking returnStr", returnStr);
            $(`#song-result .songs`).replaceWith(returnStr);
            $(`#song-result .songs`).load();
            $(`#song-result .songs`).show();
            initScroll();
        }
    });
}

function addEventListenerToPlaylist() {
    $('.playlist').on('click', function(e) {
        console.log("checking e", e);
        let id = e.target.id;
        let url = e.target.dataset.songsurl;
        console.log("checking url/id", url, id);
        getSongsForPlaylist(url, id);
    });
}

//this function takes the data returned from playlists call,  and makes a row for each playlist
function displayPlaylistsString(data) {
    let returnStr = `<div class="wrapper" >
    <div class="container scroll-list">
    `;

    data.items.forEach(item => {

        returnStr += `
        <div class="  playlist " id="${item.id}" >
            <div class="row ">
                <img class="card-img-top playlist" src="${item.images[0].url}" style="max-width:250px; max-height:250px; padding: 20px;" alt="User Profile" id="${item.id}" data-songsUrl="${item.tracks.href}">
            </div>
            
        </div>
        `

    });

    return returnStr + `</div></div>`;
}

function displaySongsString(data) {
    console.log("checking data in displaysongsstring", data);
    let returnStr = '<ul class="songs">';
    data.items.forEach(item => {
        let imgUrl = item.track.album.images.length > 0 ? item.track.album.images[0].url : "";
        returnStr += `
        <li>
            <div>
                <img class="header-image"  style="height:100px;width:100px"src='${imgUrl}' alt="logo">
                <h5> ${item.track.artists[0].name} - ${item.track.name}</h5>
            </div>
            <div>
                <button 
                    data-uri="${item.track.uri}"
                    type="submit" 
                    class="btn-outline-success change_song">Add Track
                </button>
                <br>
            </div>
        </li>`
    })

    return returnStr + '</ul>';
}



$(document).ready(function() {
    $('.friend-add').on('click', function(e) {
        e.preventDefault();
    });

    $('#accept_friend').on('click', function() {
        var senderId = $('#senderId').val();
        var senderName = $('#senderName').val();

        $.ajax({
            url: '/search/',
            type: 'POST',
            data: {
                senderId: senderId,
                senderName: senderName
            },
            success: function() {
                $(this).parent().eq(1).remove();
            }
        });
        $('#reload').load(location.href + ' #reload');
    });
    $('#cancel_friend').on('click', function() {
        var user_Id = $('#user_Id').val();
        // console.log(user_Id);	
        $.ajax({
            url: '/search',
            type: 'POST',
            data: {
                user_Id: user_Id
            },
            success: function() {
                $(this).parent().eq(1).remove();
            }
        });
        $('#reload').load(location.href + ' #reload');
    });
    $('#song_search').on('click', function() {
        let spotifytoken = $('#user_token1').val()
        let song = $('#song').val()

        $.ajax({
            url: `https://api.spotify.com/v1/search?q=${song}&type=track`,
            type: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + spotifytoken
            },
            success: function(data) {
                console.log('*******************')
                console.log(data.tracks.items[0]);
                let htmlstr = ''
                data.tracks.items.forEach(song => {
                    htmlstr += `
                    <div class="row">
                        <img class="header-image" src='${song.album.images[2].url}' alt="logo">
                        <h5>${song.name}</h>
                        <h6>by:${song.artists[0].name}</h6>
                        <button 
                            data-uri="${song.uri}"
                            type="submit" 
                            class="btn btn-success change_song">Accept</button>
                    </div>`
                });

                el.innerHTML = htmlstr
            }
        });
        $('#reload').load(location.href + ' #reload');
    });
    $('body').on('click', '.change_song', function(e) {
        let spotifytoken = $('#user_token2').val()
        let song = $(this).data('uri')

        console.log(spotifytoken)

        $.ajax({
            url: 'https://api.spotify.com/v1/me/player/queue?uri=' + song,
            type: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + spotifytoken
            },
            success: function(data) {
                console.log(data);
            }
        });
        $('#reload').load(location.href + ' #reload');
    });


    getPlaylistData();



});
function setupVideo() {
  let video = document.querySelector('.gym-video');
  let link = video.querySelector('.video-link');
  let button = video.querySelector('.gym-button');

  video.addEventListener('click', () => {
    let iframe = createIframe();

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function createIframe() {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?rel=0&showinfo=0&autoplay=1');
  iframe.setAttribute('rel', '0&showinfo=0&autoplay=1');
  iframe.setAttribute('frameborder', '0');
  iframe.classList.add('video', '.gym-video-player');

  return iframe;
}

setupVideo();

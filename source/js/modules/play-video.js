function setupVideo() {
  let video = document.querySelector('.gym-video');
  let link = video.querySelector('.gym-video__link');
  let button = video.querySelector('.gym-button');

  video.addEventListener('click', () => {
    let iframe = createIframe();

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('gym-video--enabled');
}

function createIframe() {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?rel=0&showinfo=0&autoplay=1');
  iframe.setAttribute('frameborder', '0');
  iframe.classList.add('gym-video__media');

  return iframe;
}

setupVideo();
